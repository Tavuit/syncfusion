import { LabelPropertyComponent } from './../label-property/label-property.component';
import { IAnnotationContent, RibbonService } from './../../../sync-header/components/sync-ribbon/services/ribbon.service';
import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  DiagramAllModule,
  DiagramComponent,
  IDragEnterEventArgs,
  IDropEventArgs,
  Node,
  SymbolPaletteModule
} from '@syncfusion/ej2-angular-diagrams';
import {DiagramService} from "../../../../../shared/services/diagram.service";
import {CoreService} from 'src/app/shared/services/core.service';
import {Subject, map, switchMap, takeUntil} from "rxjs";
import {contextMenuSettings, rulerSettings, tooltipSettings} from "../../constants/diagram.constant";
import { EQUATIONS_DATA } from 'src/app/utils/constants';
import { ToastrService } from 'ngx-toastr';
import { EDialogSize, SyncDialogComponent } from 'src/app/shared/base-components/views/sync-dialog/sync-dialog.component';
import { ContinuitySizeComponent } from 'src/app/features/modules/sync-content-detail/components/continuity-size/continuity-size.component';
import { DragDropFormService } from 'src/app/features/modules/sync-content-detail/services/drag-drop-form.service';
import { NodeTableComponent } from 'src/app/features/modules/sync-content-detail/components/node-table/node-table.component';
import { GroupPropertyComponent } from 'src/app/features/modules/sync-content-detail/components/group-property/group-property.component';
import { MultipleEntitiesComponent } from 'src/app/features/modules/sync-content-detail/components/multiple-entities/multiple-entities.component';
@Component({
  selector: 'sync-diagram',
  standalone: true,
  imports: [CommonModule, DiagramAllModule, SymbolPaletteModule, SyncDialogComponent],
  templateUrl: './sync-diagram.component.html',
  styleUrls: ['./sync-diagram.component.scss']
})
export class SyncDiagramComponent implements OnInit, OnDestroy {
  @ViewChild("diagram") diagram?: DiagramComponent;
  @ViewChild('customComponent', { read: ViewContainerRef }) customComponent: ViewContainerRef;
  private _destroyed: Subject<void> = new Subject<void>();
  private customComponentInstance;
  public contextMenuSettings = contextMenuSettings;
  public rulerSettings = rulerSettings;
  public tooltipSettings = tooltipSettings;
  public selectedNode: Node;
  public droppedNode: Node;
  public showPopup = false;
  public titlePopup = '';
  public readonly EDialogSize = EDialogSize;
  public idElementActive: string;
  constructor(
    private diagramService: DiagramService,
    private coreService: CoreService,
    private ribbonService: RibbonService,
    private toastrService: ToastrService,
    private dragDropFormService: DragDropFormService
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

  public dropped(args: IDropEventArgs): void {
    this.idElementActive = (args.element as Node).id;
    this.dragDropFormService.setActivePopUpId(this.idElementActive);
    this.droppedNode = args.element as Node;
    if (this.idElementActive.startsWith("continuityPerson") || this.idElementActive.startsWith("continuity")) {
      this.titlePopup = 'Continuity Size';
      this.handleInsertComponent(ContinuitySizeComponent);
    } else if (this.idElementActive.startsWith('nodeTableComm')) {
      this.titlePopup = 'Insert Node Table';
      this.handleInsertComponent(NodeTableComponent);
    } else if (this.idElementActive.startsWith('communicationMixtureCommunication') || this.idElementActive.startsWith("groupCommunication") || this.idElementActive.startsWith("group")) {
      this.titlePopup = 'Group Property';
      this.handleInsertComponent(GroupPropertyComponent)
    } else if (this.idElementActive.startsWith('principleLineOthers') || this.idElementActive.startsWith('stabilityLine1') || this.idElementActive.startsWith('entityInclusionLineHorizontal')
      || this.idElementActive.startsWith('entityInclusionLineVertical')) {
      this.titlePopup = 'Entity Has Multiple Entities';
      this.handleInsertComponent(MultipleEntitiesComponent);
    } else if (this.dragDropFormService.onCheckOpenModalLabelText(this.idElementActive)) {
      this.titlePopup = 'Label Property';
      this.handleInsertComponent(LabelPropertyComponent);
    }
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

      // TODO: handle insert operator

      // selectedItemDivID = this.selectedNode?.id;
      // selectedItemDivID = selectedItemDivID + SALT;
      // const $wrapper = document.getElementById(selectedItemDivID)
      // let mqInput: any = $wrapper.querySelector("#mathquill-mathquill-input-border");
      // mqInput.executeCommand(['insert', operator]);
      // const updatedNode = this.selectedNode;
      // updatedNode.annotations[0].content += operator;
      // this.diagram.dataBind();
    }
  }

  public handleVisibleChange(event) {
    this.showPopup = false;
  }

  private handleInsertComponent(component): void {
    this.showPopup = true;
    this.destroyCustomComponent();
    this.customComponentInstance = this.customComponent.createComponent(component);
  }

  private destroyCustomComponent() {
    if (!!this.customComponent) {
      this.customComponent.clear();
      this.customComponentInstance = null;
    }
  }

  public handleClickApply() {
    this.dragDropFormService.handleTransformSelectedNode(this.idElementActive, this.droppedNode, this.diagram);
    this.showPopup = false;
  }

  public handleCancel() {
    this.showPopup = false;
  }

  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }
}
