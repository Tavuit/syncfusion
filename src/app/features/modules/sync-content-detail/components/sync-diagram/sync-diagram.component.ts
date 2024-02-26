import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
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
import { EQUATIONS_DATA, dropGrouped, drawShape, randomId } from 'src/app/utils/constants';
import { DiagramService } from "../../../../../shared/services/diagram.service";
import { contextMenuSettings, rulerSettings, tooltipSettings } from "../../constants/diagram.constant";
import { DiagramContextMenuService } from './../../../../../shared/services/diagram-context-menu.service';
import { IAnnotationContent, RibbonService } from './../../../sync-header/components/sync-ribbon/services/ribbon.service';
import { LabelPropertyComponent } from './../label-property/label-property.component';
import { EDiagramModel } from 'src/app/shared/enums/diagram.enum';
import { MenuEventArgs } from '@syncfusion/ej2-angular-navigations';
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
  @ViewChild('fileImageRef') fileImageRef: ElementRef;
  @ViewChild('fileVideoRef') fileVideoRef: ElementRef;
  @ViewChild('fileAudioRef') fileAudioRef: ElementRef;
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
  public currentDomain: EDomain
  public currentModel: EDiagramModel;
  public selectedContextMenuId = '';
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
    let bpmnShape;
    if (this.diagram.selectedItems.nodes.length) {
      bpmnShape = (
        !this.diagram?.selectedItems?.nodes[0]?.addInfo &&
        this.diagram?.selectedItems?.nodes[0]?.children?.length > 0
          ? this.diagram.getObject(
              this.diagram.selectedItems.nodes[0].children[0]
            )
          : this.diagram.selectedItems.nodes[0]
      ) as Node;
    } else if (this.diagram.selectedItems.connectors.length) {
      bpmnShape = this.diagram.selectedItems.connectors[0];
    }
    
    if (bpmnShape?.addInfo) {
      let menuId = (bpmnShape?.addInfo as any).menuId;
      args.hiddenItems = this.diagramContextMenuService.mappedArrayContext
        .reduce((arr, item) => {
          if (menuId && item.parentId !== menuId) {
            arr.push(item.id);
          }
          return arr;
        }, [])
        .concat("baseCopy", "basePaste", "baseCut", "baseEdit", "baseSelect");
      args.hiddenItems.forEach((a) => {
        // console.log('#${a}.e-menu-item', `#${a}.e-menu-item`);
        // if ($(`#${a}.e-menu-item`).length > 0) {
        //   $(`#${a}.e-menu-item`).addClass("e-menu-hide");
        // }
      });
    } else {
      args.hiddenItems = this.diagramContextMenuService.mappedArrayContext.reduce((arr, item) => {
        return arr.concat(item.id);
      }, []);
    }
  }

  public handleClickContextMenu(args: MenuEventArgs) {
    this.selectedContextMenuId = args.item.id;
    if ([
      "commfunctionreplacefunctionwithsketch",
      "applicationreplaceapplicationwithsketch",
    ].includes(this.selectedContextMenuId.toLowerCase())) {
      return;
    }
    if ((this.selectedContextMenuId.toLowerCase().includes("picture") && (!this.selectedContextMenuId.toLowerCase().includes("pointpicture"))) || this.selectedContextMenuId.toLowerCase().includes("image")) {
      if (this.fileImageRef) {
        this.fileImageRef.nativeElement.click();
      }
    }
    if (this.selectedContextMenuId.toLowerCase().includes("video") && (!this.selectedContextMenuId.toLowerCase().includes("pointvideo"))) {
      if (this.fileVideoRef) {
        this.fileVideoRef.nativeElement.click();
      }
    }
    if (this.selectedContextMenuId.toLowerCase().includes("audio") && (!this.selectedContextMenuId.toLowerCase().includes("pointaudio"))) {
      if (this.fileAudioRef) {
        this.fileAudioRef.nativeElement.click();
      }
    }
    if (this.selectedContextMenuId.toLowerCase().includes("sketch")) {
      const truyNodeId = this.diagram.selectedItems.nodes[0].id;
      this.diagramContextMenuService.sketchContextClick(truyNodeId, this.diagram);
    }
    if (this.selectedContextMenuId.toLowerCase().includes("text")) {
      this.diagramContextMenuService.addTextOnClick(this.selectedContextMenuId.toLowerCase(), this.diagram);
    }
    if (this.selectedContextMenuId.toLowerCase().includes("tocollection") && this.selectedContextMenuId.toLowerCase().includes("point")) {
      // pointNodeToEntity("pointTo", "collection", "Point To");
    }

    if (this.selectedContextMenuId.toLowerCase().includes("toword") && this.selectedContextMenuId.toLowerCase().includes("point")) {
      // pointNodeToEntity("pointTo", "word", "Point To");
    }

    if (this.selectedContextMenuId.toLowerCase().includes("toanswer") && this.selectedContextMenuId.toLowerCase().includes("point")) {
      // pointNodeToEntity("pointTo", "answer", "Point To");
    }

    if (this.selectedContextMenuId.toLowerCase().includes("toentity") && this.selectedContextMenuId.toLowerCase().includes("point") && this.selectedContextMenuId.toLowerCase().includes("word")) {
      // pointNodeToEntity("pointTo", "word", "Point To");
    }

    if (this.selectedContextMenuId.toLowerCase().includes("toentity") && this.selectedContextMenuId.toLowerCase().includes("point") && (!this.selectedContextMenuId.toLowerCase().includes("word"))) {
      // pointNodeToEntity("pointTo", "entity", "Point To");
    }

    if (this.selectedContextMenuId.toLowerCase().includes("byentity") && this.selectedContextMenuId.toLowerCase().includes("define") && this.selectedContextMenuId.toLowerCase().includes("word")) {
      // pointNodeToEntity("define", "word", "Defined by");
    }

    if (this.selectedContextMenuId.toLowerCase().includes("byentity") && this.selectedContextMenuId.toLowerCase().includes("define") && (!this.selectedContextMenuId.toLowerCase().includes("word"))) {
      // pointNodeToEntity("define", "entity", "Defined by");
    }

    if (this.selectedContextMenuId.toLowerCase().includes("identifyentity") && this.selectedContextMenuId.toLowerCase().includes("from") && this.selectedContextMenuId.toLowerCase().includes("word")) {
      // pointNodeToEntity("define", "word", "Identifies");
    }

    if (this.selectedContextMenuId.toLowerCase().includes("identifyentity") && this.selectedContextMenuId.toLowerCase().includes("from") && (!this.selectedContextMenuId.toLowerCase().includes("word"))) {
      // pointNodeToEntity("define", "entity", "Identifies");
    }

    if (this.selectedContextMenuId.toLowerCase().includes("identifywordinsentence")) {
      // let item = drawShape(communicationData.find((a) => a.id === "word"));
      // item.id += randomId();
      // let entity = this.diagram.add(item);
      // let selected = this.diagram.selectedItems.properties.nodes[0];
      // if (selected.id.startsWith("group") && !selected.parentId) {
      //   selected = this.diagram.getObject(
      //     this.diagram.selectedItems.properties.nodes[0].children[0]
      //   );
      // }
      // setTimeout(() => {
      //   dropGrouped(entity, selected, true, this.diagram);
      // });
    }

    if (this.selectedContextMenuId.toLowerCase().includes("identifypartofsentence")) {
      // let item = drawShape(communicationData.find((a) => a.id === "word"));
      // item.id += randomId();
      // item.annotations[0].content = "Part";
      // let entity = this.diagram.add(item);
      // let selected = this.diagram.selectedItems.properties.nodes[0];
      // if (selected.id.startsWith("group") && !selected.parentId) {
      //   selected = this.diagram.getObject(
      //     this.diagram.selectedItems.properties.nodes[0].children[0]
      //   );
      // }
      // setTimeout(() => {
      //   dropGrouped(entity, selected, true, this.diagram);
      // });
    }

    if (this.selectedContextMenuId.toLowerCase().includes("information") && this.selectedContextMenuId.toLowerCase().includes("point")) {
      // pointNodeToEntity("pointTo", "information", "Point To");
    }
    if (this.selectedContextMenuId.toLowerCase().includes("groupofentities") && this.selectedContextMenuId.toLowerCase().includes("point")) {
      // pointNodeToEntity("pointTo", "entities", "Point To");
    }
    if (this.selectedContextMenuId.toLowerCase().includes("entityidentifyentitybyword")) {
      // pointNodeToEntity("pointTo", "word", "Identified by");
    }
    if (this.selectedContextMenuId.toLowerCase().includes("entitydefinewordfromentity")) {
      // pointNodeToEntity("define", "word", "Defined by");
    }
    if (this.selectedContextMenuId.toLowerCase().includes("addcommunicationholder")) {
      this.diagramContextMenuService.onAddCommHolder(this.diagram);
    }
    if (this.selectedContextMenuId.toLowerCase().includes("relate") || this.selectedContextMenuId.toLowerCase().includes("associate")) {
      // relatePersonOperatingPrinciple(this.selectedContextMenuId.toLowerCase());
    }
    //if (
    // this.selectedContextMenuId.toLowerCase().includes("addword")
    // ) {
    //  funAddWordToDictionary(this.selectedContextMenuId.toLowerCase());
    // }
    // if (
    //   this.selectedContextMenuId.toLowerCase().includes("addentity")
    //) {
    //  funAddEntityToCollection(this.selectedContextMenuId.toLowerCase());
    // }

    if (
      // checkIdHanleClickfunAddPartToApplication(this.selectedContextMenuId.toLowerCase()) ||
      this.selectedContextMenuId.toLowerCase().includes("addpart")
    ) {
      // funAddPartToApplication(this.selectedContextMenuId.toLowerCase());
    }

    if (this.selectedContextMenuId.toLowerCase() === "functionxaddsubfunction") {
      // funAddPartToApplication(this.selectedContextMenuId.toLowerCase());
    }
    if (this.selectedContextMenuId.toLowerCase() === "commfunctionaddsubfunction") {
      this.diagramContextMenuService.funCommunicationFunctionSub(this.diagram);
    }
    if (this.selectedContextMenuId.toLowerCase().includes("sendsignalred")) {
      // sendSignal(args.item, "red");
    }
    if (this.selectedContextMenuId.toLowerCase().includes("sendsignalgreen")) {
      // sendSignal(args.item, "green");
    }
    if (this.selectedContextMenuId.toLowerCase().includes("coverperson")) {
      this.diagramContextMenuService.coverPerson(this.diagram);
    }
    if (
      this.selectedContextMenuId.toLowerCase().includes("hidecover") ||
      this.selectedContextMenuId.toLowerCase().includes("showcover") ||
      this.selectedContextMenuId.toLowerCase().includes("showperson")
    ) {
      this.diagramContextMenuService.hideShowCover(this.selectedContextMenuId.toLowerCase(), this.diagram);
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
    // console.log(this.diagram.saveDiagram())
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
      // console.log(selectedItemDivID, $wrapper)
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

  public chooseFile(event) {
    const selectedFile = event.target.files[0];
    this.diagramContextMenuService.replaceFileToDiagrams(selectedFile, this.diagram, this.selectedContextMenuId);
  }

  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }
}
