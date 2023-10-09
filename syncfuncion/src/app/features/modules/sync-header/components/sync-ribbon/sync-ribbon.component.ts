import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FileMenuSettingsModel,
  RibbonButtonSettingsModel,
  RibbonSplitButtonSettingsModel,
  RibbonComboBoxSettingsModel,
  RibbonDropDownSettingsModel,
  RibbonItemSize,
  RibbonCheckBoxSettingsModel,
  RibbonColorPickerSettingsModel,
  DisplayMode,
  RibbonAllModule,
  RibbonGroupButtonSettingsModel,
} from '@syncfusion/ej2-angular-ribbon';

@Component({
  selector: 'sync-ribbon',
  standalone: true,
  imports: [CommonModule, RibbonAllModule],
  templateUrl: './sync-ribbon.component.html',
  styleUrls: ['./sync-ribbon.component.scss']
})
export class SyncRibbonComponent {
  public groupButtonIcon: RibbonGroupButtonSettingsModel = {
    items: [
      {iconCss: 'e-icons e-align-left'},
      {iconCss: 'e-icons e-align-center'},
      {iconCss: 'e-icons e-align-right'},
      {iconCss: 'e-icons e-justify'}
    ]
  }
  public pasteSettings: RibbonSplitButtonSettingsModel = {
    iconCss: 'e-icons e-paste',
    content: 'Paste',
  };
  public tableSettings: RibbonDropDownSettingsModel = {
    iconCss: 'e-icons e-table',
    content: 'Table',
    items: [
      { text: 'Insert Table' },
      { text: 'This device' },
      { text: 'Convert Table' },
      { text: 'Excel SpreadSheet' },
    ],
  };

  public cutButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-cut',
    content: 'Cut',
  };
  public deleteButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-cut',
    content: 'Delete'
  };
  public exportButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-cut',
    content: 'Export'
  };
  public undoButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-cut',
    content: 'Undo'
  };
  public copyButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-copy',
    content: 'Copy',
  };
  public formatButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-format-painter',
    content: 'Format Painter',
  };
  public boldButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-bold',
    content: 'Bold',
    isToggle: true
  };
  public alignLeftButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-align-left',
    content: '',
  };
  public alginCenterButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-align-center',
    content: '',
  };
  public alignRightButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-align-right',
    content: '',
  };
  public italicButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-italic',
    content: 'Italic',
    isToggle: true
  };
  public underlineButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-underline',
    content: 'Underline',
    isToggle: true
  };
  public strikethroughButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-strikethrough',
    content: 'Strikethrough',
    isToggle: true
  };
  public changecaseButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-change-case',
    content: 'Change Case',
  };
  public fillButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-edit',
    content: 'Fill',
  };
  public lineButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-edit',
    content: 'Line',
  };
  public textButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-edit',
    content: 'Text',
  };
  public startButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-edit',
    content: 'Start',
  };
  public endButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-edit',
    content: 'End',
  };
  public pointerButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-edit',
    content: 'Pointer',
  };
  public text2Button: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-edit',
    content: 'Text',
  };
  public line2Button: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-edit',
    content: 'Line',
  };
  public rectangularButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-edit',
    content: '',
  };
  public curvedLineButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-edit',
    content: '',
  };
  public ellipseButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-edit',
    content: '',
  };
  public ascendantButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-edit',
    content: '',
  };
  public autoConnectorButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-edit',
    content: 'Auto Connector',
  };
  public nodeSplitButton: RibbonSplitButtonSettingsModel = {
    iconCss: 'e-icons e-edit',
    content: 'Node',
    items: [
      { text: 'Add Note at Node' },
      { text: 'List of Note at Node' }
    ]
  };
  public chartButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: 'Chart',
  };
  public printButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-print-layout',
    content: 'Print Layout',
  };
  public webButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-web-layout',
    content: 'Web Layout',
  };

  public fontSize: string[] = [
    '1pt',
    '2pt',
    '3pt',
    '4pt',
    '5pt',
  ];
  public fontStyle: string[] = [
    'Segoe UI',
    'Times New Roman',
    'Arial',
    'Time New Roman',
    'Tahoma',
    'Helvetica',
  ];

  public fontstyleSettings: RibbonComboBoxSettingsModel = {
    dataSource: this.fontStyle,
    index: 0,
    width: '100px',
    allowFiltering: true,
  };
  public fontsizeSettings: RibbonComboBoxSettingsModel = {
    dataSource: this.fontSize,
    index: 0,
    width: '62px',
    allowFiltering: true,
  };

  public colorSettings: RibbonColorPickerSettingsModel = { value: '#123456' };

  public ruler: RibbonCheckBoxSettingsModel = {
    label: 'Ruler',
    checked: false,
  };
  public grid: RibbonCheckBoxSettingsModel = {
    label: 'Gridlines',
    checked: false,
  };
  public navigation: RibbonCheckBoxSettingsModel = {
    label: 'Navigation Pane',
    checked: false,
  };

  public fileSettings: FileMenuSettingsModel = {
    menuItems: [
      { text: 'New', iconCss: 'e-icons e-file-new', id: 'new' },
      { text: 'Open', iconCss: 'e-icons e-folder-open', id: 'open' },
      { text: 'Rename', iconCss: 'e-icons e-rename', id: 'rename' },
      { text: 'Save as', iconCss: 'e-icons e-save', id: 'save' },
    ],
    visible: true,
  };

  public largeSize: RibbonItemSize = RibbonItemSize.Large;
  public smallSize: RibbonItemSize = RibbonItemSize.Small;

  public Simplified: DisplayMode = DisplayMode.Simplified;
  public Overflow: DisplayMode = DisplayMode.Overflow;
}
