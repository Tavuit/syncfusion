import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DisplayMode, RibbonAllModule, RibbonItemSize,} from '@syncfusion/ej2-angular-ribbon';
import {ListViewAllModule} from '@syncfusion/ej2-angular-lists';
import {EDomain} from 'src/app/shared/enums/core.enum';
import {CoreService} from 'src/app/shared/services/core.service';
import {filter, map, Observable, Subject, switchMap, takeUntil} from 'rxjs';
import {IRibbon} from 'src/app/shared/interfaces/ribbon.interface';
import {RibbonService} from './services/ribbon.service';
import {DiagramService, TDiagramComponent, TDiagramAction} from 'src/app/shared/services/diagram.service';
import {DiagramActionService} from 'src/app/shared/services/diagram-action.service';

@Component({
  selector: 'sync-ribbon',
  standalone: true,
  imports: [CommonModule, RibbonAllModule, ListViewAllModule],
  templateUrl: './sync-ribbon.component.html',
  styleUrls: ['./sync-ribbon.component.scss'],
})
export class SyncRibbonComponent implements OnInit, OnDestroy {
  private _destroyed: Subject<void> = new Subject<void>();
  public selectedTabIndex = 0;
  public ribbon: IRibbon = this.ribbonService.ribbon;
  public EDomain = EDomain;
  public largeSize: RibbonItemSize = RibbonItemSize.Large;
  public smallSize: RibbonItemSize = RibbonItemSize.Small;

  public Simplified: DisplayMode = DisplayMode.Simplified;
  public Overflow: DisplayMode = DisplayMode.Overflow;

  constructor(
    private coreService: CoreService,
    private ribbonService: RibbonService,
    private diagramService: DiagramService,
    private diagramActionService: DiagramActionService
  ) {
  }

  ngOnInit() {
    this.handleRegister();
  }

  get domain$(): Observable<EDomain> {
    return this.coreService.getDomain();
  }

  private handleRegister(): void {
    this.diagramService.getAction()
      .pipe(
        filter((action: TDiagramAction) => !!action),
        switchMap((action: TDiagramAction) => this.diagramService.getDiagram().pipe(
          filter((diagram: TDiagramComponent) => !!diagram),
          map((diagram: TDiagramComponent) => {
            return {
              action, diagram
            }
          })
        )),
        filter(({action, diagram}) => !!action && !!diagram),
        takeUntil(this._destroyed),
      )
      .subscribe(({action, diagram}) => {
        this.diagramActionService.actionHandler(action, diagram)
      })
  }

  tabSelected(value: any) {
    this.selectedTabIndex = value?.selectedIndex;
  }

  created(value: Event) {
  }

  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }
}
