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

  // Project tab
  public startProjectButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: 'Start Project',
    cssClass: 'min-w-100'
  };
  public configureWarningMsgButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: 'Configure Warning Message',
    cssClass: 'min-w-120'
  };
  public applicationSettingButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: 'Application Setting',
    cssClass: 'min-w-100'
  };
  public captureImgButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: 'Capture Image',
    cssClass: 'min-w-90'
  };
  public editImgButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: 'Edit Image',
    cssClass: 'min-w-90'
  };
  public recordVideoButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: 'Record Video',
    cssClass: 'min-w-90'
  };
  public editVideoButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: 'Edit Video',
    cssClass: 'min-w-90'
  };
  public recordAudioButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: 'Record Audio',
    cssClass: 'min-w-90'
  };
  public settingsButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: 'Settings',
    cssClass: 'min-w-90'
  };
  public simulateButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: 'Simulate',
    cssClass: 'min-w-70'
  };
  public debugButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: 'Debug',
    cssClass: 'min-w-70'
  };
  public stepIntoButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: 'Step Into',
    cssClass: 'min-w-70'
  };
  public abortButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: 'Abort',
    cssClass: 'min-w-70'
  };
  public stopButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: 'Stop',
    cssClass: 'min-w-70'
  };
  public simulationSettingButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: 'Simulation Setting',
    cssClass: 'min-w-70'
  };
  public closeProjectButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: 'Close project',
    cssClass: 'min-w-120'
  };
  public openProjectButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: 'Open Project',
    cssClass: 'min-w-120'
  };

  // View tab
  public subFuncButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: 'Sub Function',
    cssClass: 'min-w-100'
  };
  public subApplicationButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: 'Sub Application',
    cssClass: 'min-w-120'
  };
  public subResultButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: 'Sub Result',
    cssClass: 'min-w-90'
  };
  public fitWindowButton: RibbonButtonSettingsModel = {
    iconCss: '',
    content: 'Fit To Window',
    cssClass: 'min-w-120 justify-left'
  };
  public pageWidthButton: RibbonButtonSettingsModel = {
    iconCss: '',
    content: 'Page width',
    cssClass: 'min-w-120 justify-left'
  };
  public showTooltipButton: RibbonButtonSettingsModel = {
    iconCss: '',
    content: 'Show Tooltip',
    cssClass: 'min-w-120 justify-left'
  };
  public allowCrossButton: RibbonButtonSettingsModel = {
    iconCss: '',
    content: 'Allow Cross',
    cssClass: 'min-w-120 justify-left'
  };
  public imgWidthFrameButton: RibbonButtonSettingsModel = {
    iconCss: '',
    content: 'Image With Frame',
    cssClass: 'min-w-120 justify-left'
  };
  public rulerButton: RibbonButtonSettingsModel = {
    iconCss: '',
    content: 'Ruler',
    cssClass: 'min-w-120 justify-left'
  };
  public gridButton: RibbonButtonSettingsModel = {
    iconCss: '',
    content: 'Grid',
    cssClass: 'min-w-120 justify-left'
  };
  public pageBreakButton: RibbonButtonSettingsModel = {
    iconCss: '',
    content: 'Page Breaks',
    cssClass: 'min-w-120 justify-left'
  };
  public entityLibraryButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: 'Entity Library',
    cssClass: 'min-w-100'
  };
  public panZoomButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: 'Pan & Zoom',
    cssClass: 'min-w-100'
  };
  public modelViewButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: 'Model View',
    cssClass: 'min-w-100'
  };
  public viewListButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: 'View List',
    cssClass: 'min-w-100'
  };
  public showHideModelButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: 'Show & Hide Models',
    cssClass: 'min-w-120'
  };
  public showHideConnectionPointButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: 'Show & Hide Connection Points',
    cssClass: 'min-w-200'
  };

  // Layout tab
  public panToolButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: 'Pan tool',
    cssClass: 'min-w-100'
  };
  public arrowLeftButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: '',
    cssClass: 'min-w-70'
  };
  public arrowRightButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: '',
    cssClass: 'min-w-70'
  };
  public arrowUpButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: '',
    cssClass: 'min-w-70'
  };
  public arrowDownButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: '',
    cssClass: 'min-w-70'
  };
  public align1Button: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: '',
    cssClass: 'min-w-70'
  };
  public align2Button: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: '',
    cssClass: 'min-w-70'
  };
  public align3Button: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: '',
    cssClass: 'min-w-70'
  };
  public align4Button: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: '',
    cssClass: 'min-w-70'
  };
  public align5Button: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: '',
    cssClass: 'min-w-70'
  };
  public align6Button: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: '',
    cssClass: 'min-w-70'
  };
  public equalHorizonButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: '',
    cssClass: 'min-w-70'
  };
  public equalVerticalButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: '',
    cssClass: 'min-w-70'
  };
  public increaseHorizonButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: '',
    cssClass: 'min-w-70'
  };
  public increaseVerticalButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: '',
    cssClass: 'min-w-70'
  };
  public decreaseHorizonButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: '',
    cssClass: 'min-w-70'
  };
  public decreaseVerticalButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: '',
    cssClass: 'min-w-70'
  };
  public sameWidthButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: 'Same Width',
    cssClass: 'min-w-100'
  };
  public sameHeightButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: 'Same Height',
    cssClass: 'min-w-100'
  };
  public sameSizeButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: 'Same Size ',
    cssClass: 'min-w-100'
  };
  public snapGridButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: '',
    cssClass: 'min-w-70'
  };
  public snapRulerButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: '',
    cssClass: 'min-w-70'
  };
  public snapGuideLineButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: '',
    cssClass: 'min-w-70'
  };
  public modelHorizonButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: 'Model Horizon',
    cssClass: 'min-w-100'
  };
  public modelVerticalButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: 'Model Vertical',
    cssClass: 'min-w-100'
  };
  public sizeToWindowPointButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-chart',
    content: 'Size To Window',
    cssClass: 'min-w-100'
  };

  public largeSize: RibbonItemSize = RibbonItemSize.Large;
  public smallSize: RibbonItemSize = RibbonItemSize.Small;

  public Simplified: DisplayMode = DisplayMode.Simplified;
  public Overflow: DisplayMode = DisplayMode.Overflow;
}
