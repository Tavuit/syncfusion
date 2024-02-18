import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {
  ContextMenuSettingsModel,
  DiagramAllModule,
  DiagramBeforeMenuOpenEventArgs,
  DiagramComponent,
  IDropEventArgs,
  IPropertyChangeEventArgs,
  Node,
  SymbolPaletteModule
} from '@syncfusion/ej2-angular-diagrams';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subject, debounceTime, map, switchMap, takeUntil } from "rxjs";
import { ApplicationFunctionTableComponent } from 'src/app/features/modules/sync-content-detail/components/application-function-table/application-function-table.component';
import { CommunicationFunctionGraphComponent } from 'src/app/features/modules/sync-content-detail/components/communication-function-graph/communication-function-graph.component';
import { ContinuitySizeComponent } from 'src/app/features/modules/sync-content-detail/components/continuity-size/continuity-size.component';
import { GroupPeopleComponent } from 'src/app/features/modules/sync-content-detail/components/group-people/group-people.component';
import { GroupPropertyComponent } from 'src/app/features/modules/sync-content-detail/components/group-property/group-property.component';
import { MainAreaComponent } from 'src/app/features/modules/sync-content-detail/components/main-area/main-area.component';
import { MultipleEntitiesComponent } from 'src/app/features/modules/sync-content-detail/components/multiple-entities/multiple-entities.component';
import { NodeTableComponent } from 'src/app/features/modules/sync-content-detail/components/node-table/node-table.component';
import { DragDropFormService } from 'src/app/features/modules/sync-content-detail/services/drag-drop-form.service';
import { EDialogSize, SyncDialogComponent } from 'src/app/shared/base-components/views/sync-dialog/sync-dialog.component';
import { EDomain } from 'src/app/shared/enums/core.enum';
import { CoreService } from 'src/app/shared/services/core.service';
import { EQUATIONS_DATA, dropGrouped } from 'src/app/utils/constants';
import { DiagramService } from "../../../../../shared/services/diagram.service";
import { contextMenuSettings, rulerSettings, tooltipSettings } from "../../constants/diagram.constant";
import { DiagramContextMenuService } from './../../../../../shared/services/diagram-context-menu.service';
import { IAnnotationContent, RibbonService } from './../../../sync-header/components/sync-ribbon/services/ribbon.service';
import { LabelPropertyComponent } from './../label-property/label-property.component';
@Component({
  selector: 'sync-diagram',
  standalone: true,
  imports: [CommonModule, DiagramAllModule, SymbolPaletteModule, SyncDialogComponent],
  templateUrl: './sync-diagram.component.html',
  styleUrls: ['./sync-diagram.component.scss']
})
export class SyncDiagramComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild("diagram") diagram?: DiagramComponent;
  @ViewChild('customComponent', { read: ViewContainerRef }) customComponent: ViewContainerRef;
  private _destroyed: Subject<void> = new Subject<void>();
  private customComponentInstance;
  public contextMenuSettings: ContextMenuSettingsModel = {
    ...contextMenuSettings,
    items: this.diagramContextMenuService.mappedArrayContext
  };
  public rulerSettings = rulerSettings;
  public tooltipSettings = tooltipSettings;
  public selectedNode: Node;
  public droppedNode: Node;
  public showPopup = false;
  public titlePopup = '';
  public readonly EDialogSize = EDialogSize;
  public idElementActive: string;
  public data: Object = {

  }
  currentDomain: EDomain
  currentModel: import("e:/code/syncfusion/src/app/shared/enums/diagram.enum").EDiagramModel;
  constructor(
    private diagramService: DiagramService,
    private coreService: CoreService,
    private ribbonService: RibbonService,
    private toastrService: ToastrService,
    private dragDropFormService: DragDropFormService,
    private diagramContextMenuService: DiagramContextMenuService,
  ) {
  }
  ngAfterViewInit(): void {
    (this.diagram.propertyChange as Observable<IPropertyChangeEventArgs>).pipe(debounceTime(300)).subscribe(rs => {
      this.coreService.saveDiagramModel(this.currentModel, JSON.parse(this.diagram.saveDiagram()))
    })
  }

  ngOnInit(): void {
    this.ribbonService.getInsertAnnotationContentBS().pipe(
      takeUntil(this._destroyed)
    )
      .subscribe((equation) => {
        if (equation) {
          this.handleInsertEquation(equation);
        }
      });

    this.diagramService.getDiagram().pipe(takeUntil(this._destroyed)).subscribe(rs => {
      if(rs) {
        this.renderComponent(rs)
      }
    })

    this.coreService.getCurrentModel().pipe(takeUntil(this._destroyed)).subscribe(rs => {
      this.currentModel = rs;
    })
  }


  renderComponent(componentRef: any) {
    this.diagram?.loadDiagram(componentRef);
  }

  destroyComponent(componentRef: any) {

  }

  public handleContextMenuOpen(args: DiagramBeforeMenuOpenEventArgs) {
    let bpmnShape =
      (!this.diagram?.selectedItems?.nodes[0]?.addInfo &&
        this.diagram?.selectedItems?.nodes[0]?.children?.length > 0
        ? this.diagram.getObject(this.diagram.selectedItems.nodes[0].children[0])
        : this.diagram.selectedItems.nodes[0]) as Node;
    if (this.diagram?.selectedItems?.nodes[0] && bpmnShape?.addInfo) {
      let menuId = (bpmnShape?.addInfo as any).menuId;
      args.hiddenItems = this.diagramContextMenuService.mappedArrayContext
        .reduce((arr, item) => {
          if (menuId && item.parentId !== menuId) {
            arr.push(item.id);
          }
          return arr;
        }, [])
        .concat("baseCopy", "basePaste", "baseCut", "baseEdit", "baseSelect");
    } else {
      args.hiddenItems = this.diagramContextMenuService.mappedArrayContext.reduce((arr, item) => {
        return arr.concat(item.id);
      }, []);
    }
  }

  public dropped(args: IDropEventArgs): void {
    this.idElementActive = (args.element as Node).id;
    this.dragDropFormService.setActivePopUpId(this.idElementActive);
    this.droppedNode = args.element as Node;
    const groupList = ['group4', 'group1', 'groupCommunication', 'groupSystem', 'groupTheoryVertical', 'groupFunctionTheory', 'groupFundamental'];
    if (this.idElementActive.startsWith("continuityPerson") || this.idElementActive.startsWith("continuity")) {
      this.titlePopup = 'Continuity Size';
      this.handleInsertComponent(ContinuitySizeComponent);
    } else if (this.idElementActive.startsWith('nodeTableComm')) {
      this.titlePopup = 'Insert Node Table';
      this.handleInsertComponent(NodeTableComponent);
    } else if (this.idElementActive.startsWith('communicationMixtureCommunication') || this.idElementActive.startsWith("groupCommunication")) {
      this.titlePopup = 'Group Property';
      this.handleInsertComponent(GroupPropertyComponent)
    } else if (this.idElementActive.startsWith('principleLineOthers') || this.idElementActive.startsWith('stabilityLine1') || this.idElementActive.startsWith('entityInclusionLineHorizontal')
      || this.idElementActive.startsWith('entityInclusionLineVertical')) {
      this.titlePopup = 'Entity Has Multiple Entities';
      this.handleInsertComponent(MultipleEntitiesComponent);
    } else if (this.dragDropFormService.onCheckOpenModalLabelText(this.idElementActive)) {
      this.titlePopup = 'Label Property';
      this.handleInsertComponent(LabelPropertyComponent);
    } else if (this.idElementActive.startsWith('groupOfPeople')) {
      this.titlePopup = 'Group Of People';
      this.handleInsertComponent(GroupPeopleComponent);
    } else if (this.idElementActive.startsWith('mainArea')) {
      this.titlePopup = 'Main Area';
      this.handleInsertComponent(MainAreaComponent);
    } else if (this.idElementActive.startsWith('changeofApplication1')) {
      this.titlePopup = 'Change of Communication Function Graph';
      this.handleInsertComponent(CommunicationFunctionGraphComponent);
    } else if (!this.idElementActive.startsWith("changeofApplication1") && this.idElementActive.startsWith("changeofApplication")) {
      this.titlePopup = 'Change of Application Function Table';
      this.handleInsertComponent(ApplicationFunctionTableComponent);
    } else if (groupList.some(prefix => this.idElementActive.startsWith(prefix))) {
      this.titlePopup = 'Group Property';
      this.handleInsertComponent(GroupPropertyComponent);
    }
    dropGrouped(args.element, args.target, false, this.diagram);
    console.log(this.diagram.saveDiagram())
  }

  propertyChange(data) {

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
      selectedItemDivID = this.selectedNode?.id;
      selectedItemDivID = selectedItemDivID + SALT;
      const $wrapper = document.getElementById(selectedItemDivID)
      console.log(selectedItemDivID, $wrapper)
      let mqInput: any = $wrapper.querySelector("math-field");
      mqInput.executeCommand(['insert', operator]);
      // const updatedNode = this.selectedNode;
      // updatedNode.annotations[0].content += operator;
      this.diagram.dataBind();
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
