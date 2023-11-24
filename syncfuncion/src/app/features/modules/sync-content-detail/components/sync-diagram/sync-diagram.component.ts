import { IAnnotationContent, RibbonService } from './../../../sync-header/components/sync-ribbon/services/ribbon.service';
import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  DiagramAllModule,
  DiagramComponent,
  IDragEnterEventArgs,
  Node,
  SymbolPaletteModule
} from '@syncfusion/ej2-angular-diagrams';
import {DiagramService} from "../../../../../shared/services/diagram.service";
import {CoreService} from 'src/app/shared/services/core.service';
import {Subject, map, switchMap, takeUntil} from "rxjs";
import {contextMenuSettings, rulerSettings, tooltipSettings} from "../../constants/diagram.constant";
import { EQUATIONS_DATA } from 'src/app/utils/constants';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'sync-diagram',
  standalone: true,
  imports: [CommonModule, DiagramAllModule, SymbolPaletteModule],
  templateUrl: './sync-diagram.component.html',
  styleUrls: ['./sync-diagram.component.scss']
})
export class SyncDiagramComponent implements OnInit, OnDestroy {
  @ViewChild("diagram") diagram?: DiagramComponent;
  private _destroyed: Subject<void> = new Subject<void>();
  public contextMenuSettings = contextMenuSettings;
  public rulerSettings = rulerSettings;
  public tooltipSettings = tooltipSettings;
  public selectedNode: Node;
  constructor(
    private diagramService: DiagramService,
    private coreService: CoreService,
    private ribbonService: RibbonService,
    private toastrService: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.ribbonService.getInsertAnnotationContentBS().pipe(
      takeUntil(this._destroyed)
    )
    .subscribe((equation) => {
      if (equation) {
        this.handleInsertEquation(equation);
      }
    })

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

  public dropped(args: any): void {
    // Handle the drop event and update the text of the dropped node.
    // if (args.element && args.element instanceof Node) {
    //   const droppedNode = args.element as Node;
    //   droppedNode.annotations[0].content = 'Updated Text';
    //   this.diagram.addNode(droppedNode);
    //   this.diagram.dataBind();
    // }
  }

  public selectChange(e: any) {
    if (e?.newValue?.length) {
      this.selectedNode = e?.newValue?.[0] as Node;
    } else {
      this.selectedNode = null;
    }
  }

  private handleInsertEquation(equation: IAnnotationContent = null) {
    const SALT = "_html_element";
    let selectedItemDivID;
    if (!this.selectedNode) {
      this.toastrService.error('No node is currently selected');
      return;
    }
    if (equation?.id && this.selectedNode) {
      let operator;
      if (equation.type) {
        operator = equation?.text;
      } else {
        operator = EQUATIONS_DATA[equation?.id];
      }
      selectedItemDivID = this.selectedNode?.id;
      selectedItemDivID = selectedItemDivID + SALT;
      const $wrapper = document.getElementById(selectedItemDivID)
      let mqInput: any = $wrapper.querySelector("#mathquill-mathquill-input-border");
      mqInput.executeCommand(['insert', operator]);
      // const updatedNode = this.selectedNode;
      // updatedNode.annotations[0].content = operator;
      // this.diagram.dataBind();
    }
  }


  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }
}
