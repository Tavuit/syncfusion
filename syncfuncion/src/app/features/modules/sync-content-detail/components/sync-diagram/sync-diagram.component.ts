import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  DiagramAllModule,
  SymbolPaletteModule
} from '@syncfusion/ej2-angular-diagrams';
import {DiagramService} from "../../../../../shared/services/diagram.service";
import {CoreService} from 'src/app/shared/services/core.service';
import {Subject, map, switchMap, takeUntil} from "rxjs";
import {contextMenuSettings, rulerSettings, tooltipSettings} from "../../constants/diagram.constant";

@Component({
  selector: 'sync-diagram',
  standalone: true,
  imports: [CommonModule, DiagramAllModule, SymbolPaletteModule],
  templateUrl: './sync-diagram.component.html',
  styleUrls: ['./sync-diagram.component.scss']
})
export class SyncDiagramComponent implements OnInit, OnDestroy {
  private _destroyed: Subject<void> = new Subject<void>();
  public contextMenuSettings = contextMenuSettings;
  public rulerSettings = rulerSettings;
  public tooltipSettings = tooltipSettings;
  constructor(
    private diagramService: DiagramService,
    private coreService: CoreService
  ) {
  }

  ngOnInit(): void {
    this.coreService.getDomain()
      .pipe(
        switchMap((domain) => this.diagramService.getModel()
          .pipe(
            switchMap((diagramModel) => this.coreService.getCurrentModel()
              .pipe(
                map((currentModel) => {
                  return diagramModel[domain]?.find(model => model.LABEL === currentModel)
                })
              )
            )
          )
        ),
        takeUntil(this._destroyed),
      )
      .subscribe((diagramModel) => {
        this.renderComponent(diagramModel?.['DATA']);
      })
  }

  renderComponent(componentRef: any) {

  }

  destroyComponent(componentRef: any) {

  }

  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }
}
