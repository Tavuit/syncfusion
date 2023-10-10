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

  // insert tab
  public containerSettings: RibbonDropDownSettingsModel = {
    iconCss: 'e-icons e-table',
    content: 'Container ',
    items: [
      { text: 'Plain' },
      { text: 'Classic' },
      { text: 'Corners' },
      { text: 'Alternating' },
      { text: 'Banner' }
    ]
  };
  public listSettings: RibbonDropDownSettingsModel = {
    iconCss: 'e-icons e-table',
    content: 'List',
    items: [
      { text: 'Plain' },
      { text: 'Classic' },
      { text: 'Corners' },
      { text: 'Alternating' },
      { text: 'Banner' }
    ]
  };
  public pictureButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: 'Picture',
    cssClass: ''
  };
  public fromClipboardButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: 'From Clipboard',
    cssClass: 'min-w-90'
  };
  public funcButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: 'Function',
    cssClass: ''
  };
  public applicationSettings: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: 'Application',
    cssClass: ''
  };
  public resultButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: 'Result',
    cssClass: ''
  };
  public collectionButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: 'Collection',
    cssClass: ''
  };
  public dictionaryButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: 'Dictionary',
    cssClass: ''
  };
  public areaButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: 'Main Area',
    cssClass: ''
  };
  public funcDropdown: RibbonDropDownSettingsModel = {
    iconCss: 'e-icons e-table',
    content: 'Function',
    items: [
      { text: 'Plain' },
      { text: 'Classic' },
      { text: 'Corners' },
      { text: 'Alternating' },
      { text: 'Banner' }
    ]
  };
  public wordDropdown: RibbonDropDownSettingsModel = {
    iconCss: 'e-icons e-table',
    content: 'Word',
    items: [
      { text: 'Plain' },
      { text: 'Classic' },
      { text: 'Corners' },
      { text: 'Alternating' },
      { text: 'Banner' }
    ]
  };
  public applicationDropdown: RibbonDropDownSettingsModel = {
    iconCss: 'e-icons e-table',
    content: 'Application',
    items: [
      { text: 'Plain' },
      { text: 'Classic' },
      { text: 'Corners' },
      { text: 'Alternating' },
      { text: 'Banner' }
    ]
  };
  public relationshipDropdown: RibbonDropDownSettingsModel = {
    iconCss: 'e-icons e-table',
    content: 'Relationship',
    items: [
      { text: 'Plain' },
      { text: 'Classic' },
      { text: 'Corners' },
      { text: 'Alternating' },
      { text: 'Banner' }
    ]
  };

  // Equations tab
  public bracketDropdown: RibbonDropDownSettingsModel = {
    iconCss: 'e-icons e-table',
    content: 'Bracket',
    items: [
      { text: 'Plain' },
      { text: 'Classic' },
      { text: 'Corners' },
      { text: 'Alternating' },
      { text: 'Banner' }
    ]
  };
  public decoratorDropdown: RibbonDropDownSettingsModel = {
    iconCss: 'e-icons e-table',
    content: 'Decorator',
    items: [
      { text: 'Plain' },
      { text: 'Classic' },
      { text: 'Corners' },
      { text: 'Alternating' },
      { text: 'Banner' }
    ]
  };
  public sumProductDropdown: RibbonDropDownSettingsModel = {
    iconCss: 'e-icons e-table',
    content: 'Sum & Products',
    items: [
      { text: 'Plain' },
      { text: 'Classic' },
      { text: 'Corners' },
      { text: 'Alternating' },
      { text: 'Banner' }
    ]
  };
  public integralDropdown: RibbonDropDownSettingsModel = {
    iconCss: 'e-icons e-table',
    content: 'Integral',
    items: [
      { text: 'Plain' },
      { text: 'Classic' },
      { text: 'Corners' },
      { text: 'Alternating' },
      { text: 'Banner' }
    ]
  };
  public scriptDropdown: RibbonDropDownSettingsModel = {
    iconCss: 'e-icons e-table',
    content: 'Script',
    items: [
      { text: 'Plain' },
      { text: 'Classic' },
      { text: 'Corners' },
      { text: 'Alternating' },
      { text: 'Banner' }
    ]
  };
  public factionRadicalDropdown: RibbonDropDownSettingsModel = {
    iconCss: 'e-icons e-table',
    content: 'Fraction & Radical',
    items: [
      { text: 'Plain' },
      { text: 'Classic' },
      { text: 'Corners' },
      { text: 'Alternating' },
      { text: 'Banner' }
    ]
  };
  public labeledArrowDropdown: RibbonDropDownSettingsModel = {
    iconCss: 'e-icons e-table',
    content: 'Labeled Arrow',
    items: [
      { text: 'Plain' },
      { text: 'Classic' },
      { text: 'Corners' },
      { text: 'Alternating' },
      { text: 'Banner' }
    ]
  };
  public underbarOverbarDropdown: RibbonDropDownSettingsModel = {
    iconCss: 'e-icons e-table',
    content: 'Underbar & Overbar',
    items: [
      { text: 'Plain' },
      { text: 'Classic' },
      { text: 'Corners' },
      { text: 'Alternating' },
      { text: 'Banner' }
    ]
  };
  public accentPrimeDropdown: RibbonDropDownSettingsModel = {
    iconCss: 'e-icons e-table',
    content: 'Accent & Prime',
    items: [
      { text: 'Plain' },
      { text: 'Classic' },
      { text: 'Corners' },
      { text: 'Alternating' },
      { text: 'Banner' }
    ]
  };
  public matrixDropdown: RibbonDropDownSettingsModel = {
    iconCss: 'e-icons e-table',
    content: 'Matrix',
    items: [
      { text: 'Plain' },
      { text: 'Classic' },
      { text: 'Corners' },
      { text: 'Alternating' },
      { text: 'Banner' }
    ]
  };
  public boxesDropdown: RibbonDropDownSettingsModel = {
    iconCss: 'e-icons e-table',
    content: 'Boxes',
    items: [
      { text: 'Plain' },
      { text: 'Classic' },
      { text: 'Corners' },
      { text: 'Alternating' },
      { text: 'Banner' }
    ]
  };
  public operatorDropdown: RibbonDropDownSettingsModel = {
    iconCss: 'e-icons e-table',
    content: 'Operator',
    items: [
      { text: 'Plain' },
      { text: 'Classic' },
      { text: 'Corners' },
      { text: 'Alternating' },
      { text: 'Banner' }
    ]
  };
  public greekCapitalDropdown: RibbonDropDownSettingsModel = {
    iconCss: 'e-icons e-table',
    content: 'Greek Capital',
    items: [
      { text: 'Plain' },
      { text: 'Classic' },
      { text: 'Corners' },
      { text: 'Alternating' },
      { text: 'Banner' }
    ]
  };
  public greekSmallDropdown: RibbonDropDownSettingsModel = {
    iconCss: 'e-icons e-table',
    content: 'Greek Small',
    items: [
      { text: 'Plain' },
      { text: 'Classic' },
      { text: 'Corners' },
      { text: 'Alternating' },
      { text: 'Banner' }
    ]
  };
  public arrowDropdown: RibbonDropDownSettingsModel = {
    iconCss: 'e-icons e-table',
    content: 'Arrow',
    items: [
      { text: 'Plain' },
      { text: 'Classic' },
      { text: 'Corners' },
      { text: 'Alternating' },
      { text: 'Banner' }
    ]
  };

  // Edit tab
  public selectedEntityButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: 'Selected Entity',
    cssClass: 'min-w-120'
  };
  public undoLastActionButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: 'Undo Last Action',
    cssClass: 'min-w-120'
  };

  // Domain tab
  public communicationButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: 'Communication',
    cssClass: 'min-w-120'
  };
  public theoryButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: 'Theory',
    cssClass: 'min-w-90'
  };

  public largeSize: RibbonItemSize = RibbonItemSize.Large;
  public smallSize: RibbonItemSize = RibbonItemSize.Small;

  public Simplified: DisplayMode = DisplayMode.Simplified;
  public Overflow: DisplayMode = DisplayMode.Overflow;
}
