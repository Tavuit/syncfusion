import {ContextMenuSettingsModel, DiagramTooltipModel, RulerSettingsModel} from "@syncfusion/ej2-angular-diagrams";

export const contextMenuSettings: ContextMenuSettingsModel = {
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

export const rulerSettings: RulerSettingsModel = {
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

export const tooltipSettings: DiagramTooltipModel = {
  content: 'Nodes',
  position: 'TopLeft'
};
