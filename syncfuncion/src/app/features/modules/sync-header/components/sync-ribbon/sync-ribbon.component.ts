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
    iconCss: 'icon icon-paste',
    content: 'Paste',
  };

  public cutButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-cut',
    content: 'Cut',
  };
  public deleteButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-delete',
    content: 'Delete'
  };
  public exportButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-clipBoard',
    content: 'Export'
  };
  public undoButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-undo1',
    content: 'Undo',
    cssClass: 'min-w-70'
  };
  public copyButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-copy',
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
    iconCss: 'icon icon-fill-menu',
    content: 'Fill',
  };
  public lineButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-lineMenu',
    content: 'Line',
  };
  public textButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-text-menu',
    content: 'Text',
  };
  public startButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-start-menu',
    content: 'Start',
  };
  public endButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-end-menu',
    content: 'End',
  };
  public pointerButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-point-menu',
    content: 'Pointer',
  };
  public text2Button: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-text-menu2',
    content: 'Text',
  };
  public line2Button: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-line-menu',
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
    iconCss: 'icon icon-autoconnector',
    content: 'Auto Connector',
    cssClass: 'min-w-90'
  };
  public nodeSplitButton: RibbonSplitButtonSettingsModel = {
    iconCss: 'icon icon-node-menu',
    content: 'Node',
    cssClass: 'min-w-70',
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
    cssClass: 'border-1'
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
    iconCss: 'icon icon-container-menu-insert',
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
    iconCss: 'icon icon-list-menu-insert',
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
    iconCss: 'icon icon-picture-menu-insert',
    content: 'Picture',
    cssClass: ''
  };
  public fromClipboardButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-copy',
    content: 'From Clipboard',
    cssClass: 'min-w-90'
  };
  public funcButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-copy',
    content: 'Function',
    cssClass: ''
  };
  public applicationSettings: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-paste',
    content: 'Application',
    cssClass: ''
  };
  public resultButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-paste',
    content: 'Result',
    cssClass: ''
  };
  public collectionButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-copy',
    content: 'Collection',
    cssClass: ''
  };
  public dictionaryButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-paste',
    content: 'Dictionary',
    cssClass: ''
  };
  public areaButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-paste',
    content: 'Main Area',
    cssClass: ''
  };
  public funcDropdown: RibbonDropDownSettingsModel = {
    iconCss: 'icon icon-Function_Icon1',
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
    iconCss: 'icon icon-Word_Icon1',
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
    iconCss: 'icon icon-Application_Icon1',
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
    iconCss: 'icon icon-Relationship_Icon1',
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
    iconCss: 'icon icon-brackets',
    cssClass: 'min-w-70',
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
    iconCss: 'icon icon-decoratedEquation',
    content: 'Decorator',
    cssClass: 'min-w-70',
    items: [
      { text: 'Plain' },
      { text: 'Classic' },
      { text: 'Corners' },
      { text: 'Alternating' },
      { text: 'Banner' }
    ]
  };
  public sumProductDropdown: RibbonDropDownSettingsModel = {
    iconCss: 'icon icon-sumproduct',
    content: 'Sum & Products',
    cssClass: 'min-w-70',
    items: [
      { text: 'Plain' },
      { text: 'Classic' },
      { text: 'Corners' },
      { text: 'Alternating' },
      { text: 'Banner' }
    ]
  };
  public integralDropdown: RibbonDropDownSettingsModel = {
    iconCss: 'icon icon-integrals',
    content: 'Integral',
    cssClass: 'min-w-70',
    items: [
      { text: 'Plain' },
      { text: 'Classic' },
      { text: 'Corners' },
      { text: 'Alternating' },
      { text: 'Banner' }
    ]
  };
  public scriptDropdown: RibbonDropDownSettingsModel = {
    iconCss: 'icon icon-script',
    content: 'Script',
    cssClass: 'min-w-70',
    items: [
      { text: 'Plain' },
      { text: 'Classic' },
      { text: 'Corners' },
      { text: 'Alternating' },
      { text: 'Banner' }
    ]
  };
  public factionRadicalDropdown: RibbonDropDownSettingsModel = {
    iconCss: 'icon icon-divroot',
    content: 'Fraction & Radical',
    cssClass: 'min-w-100',
    items: [
      { text: 'Plain' },
      { text: 'Classic' },
      { text: 'Corners' },
      { text: 'Alternating' },
      { text: 'Banner' }
    ]
  };
  public labeledArrowDropdown: RibbonDropDownSettingsModel = {
    iconCss: 'icon icon-arrowEquation',
    content: 'Labeled Arrow',
    cssClass: 'min-w-90',
    items: [
      { text: 'Plain' },
      { text: 'Classic' },
      { text: 'Corners' },
      { text: 'Alternating' },
      { text: 'Banner' }
    ]
  };
  public underbarOverbarDropdown: RibbonDropDownSettingsModel = {
    iconCss: 'icon icon-underbar',
    content: 'Underbar & Overbar',
    cssClass: 'min-w-120',
    items: [
      { text: 'Plain' },
      { text: 'Classic' },
      { text: 'Corners' },
      { text: 'Alternating' },
      { text: 'Banner' }
    ]
  };
  public accentPrimeDropdown: RibbonDropDownSettingsModel = {
    iconCss: 'icon icon-decoratedCharacter',
    content: 'Accent & Prime',
    cssClass: 'min-w-90',
    items: [
      { text: 'Plain' },
      { text: 'Classic' },
      { text: 'Corners' },
      { text: 'Alternating' },
      { text: 'Banner' }
    ]
  };
  public matrixDropdown: RibbonDropDownSettingsModel = {
    iconCss: 'icon icon-matrix',
    content: 'Matrix',
    cssClass: 'min-w-90',
    items: [
      { text: 'Plain' },
      { text: 'Classic' },
      { text: 'Corners' },
      { text: 'Alternating' },
      { text: 'Banner' }
    ]
  };
  public boxesDropdown: RibbonDropDownSettingsModel = {
    iconCss: 'icon icon-boxes',
    content: 'Boxes',
    cssClass: 'min-w-70',
    items: [
      { text: 'Plain' },
      { text: 'Classic' },
      { text: 'Corners' },
      { text: 'Alternating' },
      { text: 'Banner' }
    ]
  };
  public operatorDropdown: RibbonDropDownSettingsModel = {
    iconCss: 'icon icon-symbols',
    content: 'Operator',
    cssClass: 'min-w-70',
    items: [
      { text: 'Plain' },
      { text: 'Classic' },
      { text: 'Corners' },
      { text: 'Alternating' },
      { text: 'Banner' }
    ]
  };
  public greekCapitalDropdown: RibbonDropDownSettingsModel = {
    iconCss: 'icon icon-greekcapital',
    content: 'Greek Capital',
    cssClass: 'min-w-70',
    items: [
      { text: 'Plain' },
      { text: 'Classic' },
      { text: 'Corners' },
      { text: 'Alternating' },
      { text: 'Banner' }
    ]
  };
  public greekSmallDropdown: RibbonDropDownSettingsModel = {
    iconCss: 'icon icon-greeksmall',
    content: 'Greek Small',
    cssClass: 'min-w-70',
    items: [
      { text: 'Plain' },
      { text: 'Classic' },
      { text: 'Corners' },
      { text: 'Alternating' },
      { text: 'Banner' }
    ]
  };
  public arrowDropdown: RibbonDropDownSettingsModel = {
    iconCss: 'icon icon-arrows',
    cssClass: 'min-w-70',
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
    iconCss: 'icon icon-selectedentityedit',
    content: 'Selected Entity',
    cssClass: 'min-w-120'
  };
  public undoLastActionButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-undolastactionedit',
    content: 'Undo Last Action',
    cssClass: 'min-w-120'
  };

  // Domain tab
  public communicationButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-communicationdomain',
    content: 'Communication',
    cssClass: 'min-w-120'
  };
  public theoryButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-theorydomain',
    content: 'Theory',
    cssClass: 'min-w-90'
  };

  // Project tab
  public startProjectButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-startproject1',
    content: 'Start Project',
    cssClass: 'min-w-100'
  };
  public configureWarningMsgButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-error',
    content: 'Configure Warning Message',
    cssClass: 'min-w-120'
  };
  public applicationSettingButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-optionmix1',
    content: 'Application Setting',
    cssClass: 'min-w-100'
  };
  public captureImgButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-captureimageproject',
    content: 'Capture Image',
    cssClass: 'min-w-90'
  };
  public editImgButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-editimageproject',
    content: 'Edit Image',
    cssClass: 'min-w-90'
  };
  public recordVideoButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-reconrdvideoproject1',
    content: 'Record Video',
    cssClass: 'min-w-90'
  };
  public editVideoButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-editvideoproject',
    content: 'Edit Video',
    cssClass: 'min-w-90'
  };
  public recordAudioButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-recordaudioproject1',
    content: 'Record Audio',
    cssClass: 'min-w-90'
  };
  public settingsButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-settingproject1',
    content: 'Settings',
    cssClass: 'min-w-90'
  };
  public simulateButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-simulationproject',
    content: 'Simulate',
    cssClass: 'min-w-70'
  };
  public debugButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-simulationproject',
    content: 'Debug',
    cssClass: 'min-w-70'
  };
  public stepIntoButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-simulationproject',
    content: 'Step Into',
    cssClass: 'min-w-70'
  };
  public abortButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-simulationproject',
    content: 'Abort',
    cssClass: 'min-w-70'
  };
  public stopButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-simulationproject',
    content: 'Stop',
    cssClass: 'min-w-70'
  };
  public simulationSettingButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-settingproject1',
    content: 'Simulation Setting',
    cssClass: 'min-w-70'
  };
  public closeProjectButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-closeproject',
    content: 'Close project',
    cssClass: 'min-w-120'
  };
  public openProjectButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons',
    content: 'Open Project',
    cssClass: 'min-w-120'
  };

  // View tab
  public subFuncButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-subfunction',
    content: 'Sub Function',
    cssClass: 'min-w-100'
  };
  public subApplicationButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-subapplication',
    content: 'Sub Application',
    cssClass: 'min-w-120'
  };
  public subResultButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-subresult',
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
    iconCss: 'icon icon-entityview',
    content: 'Entity Library',
    cssClass: 'min-w-100'
  };
  public panZoomButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-panzoomview',
    content: 'Pan & Zoom',
    cssClass: 'min-w-100'
  };
  public modelViewButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-modelview',
    content: 'Model View',
    cssClass: 'min-w-100'
  };
  public viewListButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-tasklistview',
    content: 'View List',
    cssClass: 'min-w-100'
  };
  public showHideModelButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-showhidemodelsview',
    content: 'Show & Hide Models',
    cssClass: 'min-w-120'
  };
  public showHideConnectionPointButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-simulationproject',
    content: 'Show & Hide Connection Points',
    cssClass: 'min-w-200'
  };

  // Layout tab
  public panToolButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-point',
    content: 'Pan tool',
    cssClass: 'min-w-100'
  };
  public arrowLeftButton: RibbonButtonSettingsModel = {
    iconCss: 'icon-small icon-left-arrow',
    content: '',
    cssClass: 'min-w-40'
  };
  public arrowRightButton: RibbonButtonSettingsModel = {
    iconCss: 'icon-small icon-right-arrow',
    content: '',
    cssClass: 'min-w-40'
  };
  public arrowUpButton: RibbonButtonSettingsModel = {
    iconCss: 'icon-small icon-up-arrow',
    content: '',
    cssClass: 'min-w-40'
  };
  public arrowDownButton: RibbonButtonSettingsModel = {
    iconCss: 'icon-small icon-down-arrow',
    content: '',
    cssClass: 'min-w-40'
  };
  public align1Button: RibbonButtonSettingsModel = {
    iconCss: 'icon-small icon-align-right',
    content: '',
    cssClass: 'min-w-40'
  };
  public align2Button: RibbonButtonSettingsModel = {
    iconCss: 'icon-small icon-sort-down',
    content: '',
    cssClass: 'min-w-40'
  };
  public align3Button: RibbonButtonSettingsModel = {
    iconCss: 'icon-small icon-align-center',
    content: '',
    cssClass: 'min-w-40'
  };
  public align4Button: RibbonButtonSettingsModel = {
    iconCss: 'icon-small icon-align',
    content: '',
    cssClass: 'min-w-40'
  };
  public align5Button: RibbonButtonSettingsModel = {
    iconCss: 'icon-small icon-align-left',
    content: '',
    cssClass: 'min-w-40'
  };
  public align6Button: RibbonButtonSettingsModel = {
    iconCss: 'icon-small icon-top-align',
    content: '',
    cssClass: 'min-w-40'
  };
  public equalHorizonButton: RibbonButtonSettingsModel = {
    iconCss: 'icon-small icon-width',
    content: '',
    cssClass: 'min-w-40'
  };
  public equalVerticalButton: RibbonButtonSettingsModel = {
    iconCss: 'icon-small icon-height',
    content: '',
    cssClass: 'min-w-40'
  };
  public increaseHorizonButton: RibbonButtonSettingsModel = {
    iconCss: 'icon-small icon-width',
    content: '',
    cssClass: 'min-w-40'
  };
  public increaseVerticalButton: RibbonButtonSettingsModel = {
    iconCss: 'icon-small icon-height',
    content: '',
    cssClass: 'min-w-40'
  };
  public decreaseHorizonButton: RibbonButtonSettingsModel = {
    iconCss: 'icon-small icon-width',
    content: '',
    cssClass: 'min-w-40'
  };
  public decreaseVerticalButton: RibbonButtonSettingsModel = {
    iconCss: 'icon-small icon-height',
    content: '',
    cssClass: 'min-w-40'
  };
  public sameWidthButton: RibbonButtonSettingsModel = {
    iconCss: 'icon-small icon-width',
    content: 'Same Width',
    cssClass: 'min-w-100'
  };
  public sameHeightButton: RibbonButtonSettingsModel = {
    iconCss: 'icon-small icon-height',
    content: 'Same Height',
    cssClass: 'min-w-100'
  };
  public sameSizeButton: RibbonButtonSettingsModel = {
    iconCss: 'icon-small icon-size-square',
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
