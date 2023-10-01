import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SyncMainComponent } from 'src/app/features/modules/sync-main/sync-main.component';
import { GridAllModule } from '@syncfusion/ej2-angular-grids';
import { RibbonModule, RibbonAllModule } from '@syncfusion/ej2-angular-ribbon';
import { AccordionModule } from '@syncfusion/ej2-angular-navigations';
import { DiagramModule } from '@syncfusion/ej2-angular-diagrams';
import { SyncAccordionComponent } from 'src/app/shared/base-components/views/sync-accordion/sync-accordion.component';
import { SyncDialogComponent } from 'src/app/shared/base-components/views/sync-dialog/sync-dialog.component';


import {
  HierarchicalTreeService,
  MindMapService,
  RadialTreeService,
  ComplexHierarchicalTreeService,
} from '@syncfusion/ej2-angular-diagrams';
import {
  DataBindingService,
  SnappingService,
  PrintAndExportService,
  BpmnDiagramsService,
} from '@syncfusion/ej2-angular-diagrams';
import {
  SymmetricLayoutService,
  ConnectorBridgingService,
  UndoRedoService,
  LayoutAnimationService,
} from '@syncfusion/ej2-angular-diagrams';
import {
  DiagramContextMenuService,
  ConnectorEditingService,
} from '@syncfusion/ej2-angular-diagrams';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GridAllModule,
    RibbonModule,
    RibbonAllModule,
    AccordionModule,
    DiagramModule,
    DialogModule,
    ButtonModule,

    SyncMainComponent,
    SyncDialogComponent,
    SyncAccordionComponent,
  ],
  providers: [
    HierarchicalTreeService,
    MindMapService,
    RadialTreeService,
    ComplexHierarchicalTreeService,
    DataBindingService,
    SnappingService,
    PrintAndExportService,
    BpmnDiagramsService,
    SymmetricLayoutService,
    ConnectorBridgingService,
    UndoRedoService,
    LayoutAnimationService,
    DiagramContextMenuService,
    ConnectorEditingService,
  ],
})
export class SyncMainModule { }
