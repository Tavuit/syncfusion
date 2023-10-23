import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ContextMenuSettingsModel,
  DiagramAllModule, DiagramConstraints, DiagramTooltipModel, NodeConstraints,
  NodeModel,
  RulerSettingsModel,
  ShapeStyleModel,
  SymbolPaletteModule
} from '@syncfusion/ej2-angular-diagrams';

@Component({
  selector: 'sync-diagram',
  standalone: true,
  imports: [CommonModule, DiagramAllModule, SymbolPaletteModule],
  templateUrl: './sync-diagram.component.html',
  styleUrls: ['./sync-diagram.component.scss']
})
export class SyncDiagramComponent {
  public contextMenuSettings: ContextMenuSettingsModel;
  public tooltip?: DiagramTooltipModel = {
    content: 'Nodes',
    position: 'TopLeft'
  };
  public rulerSettings: RulerSettingsModel = {
    showRulers: true,
    horizontalRuler: {
      interval: 8,
      segmentWidth: 100,
      thickness: 25,
      tickAlignment: 'LeftOrTop',
    },
    verticalRuler: {
      interval: 10,
      segmentWidth: 150,
      thickness: 35,
      tickAlignment: 'RightOrBottom',
    },
  };
  ngOnInit(): void {
    this.contextMenuSettings = {
      show: true,
      items: [
        {
          text: 'Save',
          id: 'save',
          target: '.e-elementcontent',
        },
        {
          text: 'Copy',
          id: 'copy',
          target: '.e-elementcontent',
        },
        {
          text: 'Paste',
          id: 'paste',
          target: '.e-elementcontent',
        },
        {
          text: 'Cut',
          id: 'cut',
          target: '.e-elementcontent',
        },
        {
          text: 'Edit text',
          id: 'edit',
          target: '.e-elementcontent',
        },
        {
          text: 'Select all',
          id: 'select',
          target: '.e-elementcontent',
        },
      ],
      showCustomMenuOnly: true,
    };
  }
}
