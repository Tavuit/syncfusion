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
import { ListViewAllModule } from '@syncfusion/ej2-angular-lists';

@Component({
  selector: 'sync-ribbon',
  standalone: true,
  imports: [CommonModule, RibbonAllModule, ListViewAllModule],
  templateUrl: './sync-ribbon.component.html',
  styleUrls: ['./sync-ribbon.component.scss'],
})
export class SyncRibbonComponent {
  public groupButtonIcon: RibbonGroupButtonSettingsModel = {
    items: [
      { iconCss: 'e-icons e-align-left' },
      { iconCss: 'e-icons e-align-center' },
      { iconCss: 'e-icons e-align-right' },
      { iconCss: 'e-icons e-justify' },
    ],
  };
  public pasteSettings: RibbonSplitButtonSettingsModel = {
    iconCss: 'icon icon-paste',
    content: 'Paste',
    cssClass: 'min-w-70',
  };

  public cutButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-cut',
    content: 'Cut',
    cssClass: 'min-w-70',
  };
  public deleteButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-delete',
    content: 'Delete',
    cssClass: 'min-w-70',
  };
  public exportButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-clipBoard',
    content: 'Export',
    cssClass: 'min-w-70',
  };
  public undoButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-undo1',
    content: 'Undo',
    cssClass: 'min-w-70',
  };
  public copyButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-copy',
    content: 'Copy',
    cssClass: 'min-w-70',
  };
  public formatButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-format-painter',
    content: 'Format Painter',
  };
  public boldButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-bold',
    content: 'Bold',
    isToggle: true,
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
    isToggle: true,
  };
  public underlineButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-underline',
    content: 'Underline',
    isToggle: true,
  };
  public strikethroughButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons e-strikethrough',
    content: 'Strikethrough',
    isToggle: true,
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
    iconCss: 'icon-small icon-minus',
    content: '',
  };
  public curvedLineButton: RibbonButtonSettingsModel = {
    iconCss: 'icon-small icon-ease',
    content: '',
  };
  public ellipseButton: RibbonButtonSettingsModel = {
    iconCss: 'icon-small icon-ellipse',
    content: '',
  };
  public ascendantButton: RibbonButtonSettingsModel = {
    iconCss: 'icon-small icon-line-chart',
    content: '',
  };
  public autoConnectorButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-autoconnector',
    content: 'Auto Connector',
    cssClass: 'min-w-90',
  };
  public nodeSplitButton: RibbonSplitButtonSettingsModel = {
    iconCss: 'icon icon-node-menu',
    content: 'Node',
    cssClass: 'min-w-70',
    items: [{ text: 'Add Note at Node' }, { text: 'List of Note at Node' }],
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

  public fontSize: string[] = ['1pt', '2pt', '3pt', '4pt', '5pt'];
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
    cssClass: 'border-1',
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
      { text: 'New Project', id: 'new' },
      { text: 'Open Project', id: 'open' },
      { text: 'Save Project', id: 'save' },
      {
        text: 'Export Project Model',
        id: 'export',
        items: [
          {
            text: 'Portable Network Graphics (PNG)',
            id: 'network',
          },
          {
            text: 'File Interchange Format (JPG)',
            id: 'file',
          },
          {
            text: 'Windows Bitmap (BMP)',
            id: 'window',
          },
          {
            text: 'Scalable Vector Graphics (SVG)',
            id: 'scalable',
          },
          {
            text: 'Portable Document Format (PDF)',
            id: 'document',
          },
        ],
      },
    ],
    visible: true,
  };

  // insert tab
  public containerSettings: RibbonDropDownSettingsModel = {
    iconCss: 'icon icon-container-menu-insert',
    content: 'Container ',
    target: '#container-dropdown'
  };
  public containerDropdownData = [
    {
      id: '1',
      text: 'Plain',
      img: '/assets/images/plainsubmenucontainerinsert.png'
    },
    {
      id: '2',
      text: 'Classic',
      img: '/assets/images/classicsubmenucontainerinsert.png'
    },
    {
      id: '3',
      text: 'Corners',
      img: '/assets/images/cornerssubmenucontainerinsert.png'
    },
    {
      id: '4',
      text: 'Alternating',
      img: '/assets/images/alternatingsubmenucontainerinsert.png'
    },
    {
      id: '5',
      text: 'Banner',
      img: '/assets/images/bannersubmenucontainerinsert.png'
    }
  ]
  public listSettings: RibbonDropDownSettingsModel = {
    iconCss: 'icon icon-list-menu-insert',
    content: 'List',
    target: '#list-dropdown'
  };
  public listDropdownData = [
    {
      group: 'Vertical',
      items: [
        {
          id: 'list1',
          text: 'Plain',
          img: '/assets/images/plainsubmenucontainerinsert.png',
          group: 'Vertical'
        },
        {
          id: 'list2',
          text: 'Classic',
          img: '/assets/images/classicsubmenucontainerinsert.png',
          group: 'Vertical'
        },
        {
          id: 'list3',
          text: 'Corners',
          img: '/assets/images/cornerssubmenucontainerinsert.png',
          group: 'Vertical'
        },
        {
          id: 'list4',
          text: 'Alternating',
          img: '/assets/images/alternatingsubmenucontainerinsert.png',
          group: 'Vertical'
        },
        {
          id: 'list5',
          text: 'Banner',
          img: '/assets/images/bannersubmenucontainerinsert.png',
          group: 'Vertical'
        }
      ]
    },
    {
      group: 'Horizontal',
      items: [
        {
          id: 'list6',
          text: 'Plain',
          img: '/assets/images/plainsubmenucontainerinsert.png',
          group: 'Horizontal'
        },
        {
          id: 'list7',
          text: 'Classic',
          img: '/assets/images/classicsubmenucontainerinsert.png',
          group: 'VertHorizontalical'
        },
        {
          id: 'list8',
          text: 'Corners',
          img: '/assets/images/cornerssubmenucontainerinsert.png',
          group: 'Horizontal'
        },
        {
          id: 'list0',
          text: 'Alternating',
          img: '/assets/images/alternatingsubmenucontainerinsert.png',
          group: 'Horizontal'
        },
        {
          id: 'list10',
          text: 'Banner',
          img: '/assets/images/bannersubmenucontainerinsert.png',
          group: 'Horizontal'
        }
      ]
    }
  ];
  public pictureButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-picture-menu-insert',
    content: 'Picture',
    cssClass: '',
  };
  public fromClipboardButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-copy',
    content: 'From Clipboard',
    cssClass: 'min-w-90',
  };
  public funcButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-copy',
    content: 'Function',
    cssClass: '',
  };
  public applicationSettings: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-paste',
    content: 'Application',
    cssClass: '',
  };
  public resultButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-paste',
    content: 'Result',
    cssClass: '',
  };
  public collectionButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-copy',
    content: 'Collection',
    cssClass: '',
  };
  public dictionaryButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-paste',
    content: 'Dictionary',
    cssClass: '',
  };
  public areaButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-paste',
    content: 'Main Area',
    cssClass: '',
  };
  public funcDropdown: RibbonDropDownSettingsModel = {
    iconCss: 'icon icon-Function_Icon1',
    content: 'Function',
    target: '#function-dropdown'
  };
  public functionDropdownData = [
    {
      id: 'func1',
      img: '/assets/images/function_1.png'
    },
    {
      id: 'func2',
      img: '/assets/images/function_2.png'
    },
    {
      id: 'func3',
      img: '/assets/images/function_3.png'
    },
    {
      id: 'func4',
      img: '/assets/images/function_4.png'
    },
    {
      id: 'func5',
      img: '/assets/images/function_5.png'
    },
    {
      id: 'func6',
      img: '/assets/images/function_6.png'
    },
    {
      id: 'func7',
      img: '/assets/images/function_7.png'
    },
    {
      id: 'func8',
      img: '/assets/images/function_8.png'
    },
    {
      id: 'func9',
      img: '/assets/images/function_9.png'
    },
    {
      id: 'func10',
      img: '/assets/images/function_10.png'
    },
    {
      id: 'func11',
      img: '/assets/images/function_11.png'
    },
    {
      id: 'func12',
      img: '/assets/images/function_12.png'
    },
    {
      id: 'func13',
      img: '/assets/images/function_13.png'
    },
    {
      id: 'func14',
      img: '/assets/images/function_14.png'
    }
  ];
  public wordDropdown: RibbonDropDownSettingsModel = {
    iconCss: 'icon icon-Word_Icon1',
    content: 'Word',
    target: '#word-dropdown'
  };
  public wordDropdownData = [
    {
      id: 'word1',
      img: '/assets/images/word_1.png'
    },
    {
      id: 'word2',
      img: '/assets/images/word_2.png'
    },
    {
      id: 'word3',
      img: '/assets/images/word_3.png'
    },
    {
      id: 'word4',
      img: '/assets/images/word_4.png'
    },
    {
      id: 'word5',
      img: '/assets/images/word_5.png'
    },
    {
      id: 'word6',
      img: '/assets/images/word_6.png'
    },
    {
      id: 'word7',
      img: '/assets/images/word_7.png'
    },
    {
      id: 'word8',
      img: '/assets/images/word_8.png'
    },
    {
      id: 'word9',
      img: '/assets/images/word_9.png'
    },
    {
      id: 'word',
      img: '/assets/images/word_10.png'
    },
    {
      id: 'word11',
      img: '/assets/images/word_11.png'
    },
    {
      id: 'word12',
      img: '/assets/images/word_12.png'
    },
    {
      id: 'word13',
      img: '/assets/images/word_13.png'
    }
  ];
  public applicationDropdown: RibbonDropDownSettingsModel = {
    iconCss: 'icon icon-Application_Icon1',
    content: 'Application',
    target: '#application-dropdown'
  };
  public applicationDropdownData = [
    {
      id: 'appl1',
      img: '/assets/images/Application_1.png'
    },
    {
      id: 'appl2',
      img: '/assets/images/Application_2.png'
    },
    {
      id: 'appl3',
      img: '/assets/images/Application_3.png'
    },
    {
      id: 'appl4',
      img: '/assets/images/Application_4.png'
    },
    {
      id: 'appl5',
      img: '/assets/images/Application_5.png'
    },
    {
      id: 'appl6',
      img: '/assets/images/Application_6.png'
    }
  ];
  public relationshipDropdown: RibbonDropDownSettingsModel = {
    iconCss: 'icon icon-Relationship_Icon1',
    content: 'Relationship',
    target: '#relationship-dropdown'
  };
  public relationshipDropdownData = [
    {
      id: 'rela1',
      img: '/assets/images/Relationship_1.png'
    },
    {
      id: 'rela2',
      img: '/assets/images/Relationship_2.png'
    },
    {
      id: 'rela3',
      img: '/assets/images/Relationship_3.png'
    },
    {
      id: 'rela4',
      img: '/assets/images/Relationship_4.png'
    },
    {
      id: 'rela5',
      img: '/assets/images/Relationship_5.png'
    },
    {
      id: 'rela6',
      img: '/assets/images/Relationship_6.png'
    },
    {
      id: 'rela7',
      img: '/assets/images/Relationship_7.png'
    },
    {
      id: 'rela8',
      img: '/assets/images/Relationship_8.png'
    },
    {
      id: 'rela9',
      img: '/assets/images/Relationship_9.png'
    },
    {
      id: 'rela10',
      img: '/assets/images/Relationship_10.png'
    }
  ];

  // Equations tab
  public bracketDropdown: RibbonDropDownSettingsModel = {
    iconCss: 'icon-medium icon-brackets',
    cssClass: 'min-w-70',
    content: 'Bracket',
    items: [
      { text: 'Plain' },
      { text: 'Classic' },
      { text: 'Corners' },
      { text: 'Alternating' },
      { text: 'Banner' },
    ],
  };
  public decoratorDropdown: RibbonDropDownSettingsModel = {
    iconCss: 'icon-medium icon-decoratedEquation',
    content: 'Decorator',
    cssClass: 'min-w-70',
    items: [
      { text: 'Plain' },
      { text: 'Classic' },
      { text: 'Corners' },
      { text: 'Alternating' },
      { text: 'Banner' },
    ],
  };
  public sumProductDropdown: RibbonDropDownSettingsModel = {
    iconCss: 'icon-medium icon-sumproduct',
    content: 'Sum & Products',
    cssClass: 'min-w-120',
    items: [
      { text: 'Plain' },
      { text: 'Classic' },
      { text: 'Corners' },
      { text: 'Alternating' },
      { text: 'Banner' },
    ],
  };
  public integralDropdown: RibbonDropDownSettingsModel = {
    iconCss: 'icon-medium icon-integrals',
    content: 'Integral',
    cssClass: 'min-w-70',
    items: [
      { text: 'Plain' },
      { text: 'Classic' },
      { text: 'Corners' },
      { text: 'Alternating' },
      { text: 'Banner' },
    ],
  };
  public scriptDropdown: RibbonDropDownSettingsModel = {
    iconCss: 'icon-medium icon-script',
    content: 'Script',
    cssClass: 'min-w-70',
    items: [
      { text: 'Plain' },
      { text: 'Classic' },
      { text: 'Corners' },
      { text: 'Alternating' },
      { text: 'Banner' },
    ],
  };
  public factionRadicalDropdown: RibbonDropDownSettingsModel = {
    iconCss: 'icon-medium icon-divroot',
    content: 'Fraction & Radical',
    cssClass: 'min-w-120',
    items: [
      { text: 'Plain' },
      { text: 'Classic' },
      { text: 'Corners' },
      { text: 'Alternating' },
      { text: 'Banner' },
    ],
  };
  public labeledArrowDropdown: RibbonDropDownSettingsModel = {
    iconCss: 'icon-medium icon-arrowEquation',
    content: 'Labeled Arrow',
    cssClass: 'min-w-100',
    items: [
      { text: 'Plain' },
      { text: 'Classic' },
      { text: 'Corners' },
      { text: 'Alternating' },
      { text: 'Banner' },
    ],
  };
  public underbarOverbarDropdown: RibbonDropDownSettingsModel = {
    iconCss: 'icon-medium icon-underbar',
    content: 'Underbar & Overbar',
    cssClass: 'min-w-120',
    items: [
      { text: 'Plain' },
      { text: 'Classic' },
      { text: 'Corners' },
      { text: 'Alternating' },
      { text: 'Banner' },
    ],
  };
  public accentPrimeDropdown: RibbonDropDownSettingsModel = {
    iconCss: 'icon-medium icon-decoratedCharacter',
    content: 'Accent & Prime',
    cssClass: 'min-w-120',
    items: [
      { text: 'Plain' },
      { text: 'Classic' },
      { text: 'Corners' },
      { text: 'Alternating' },
      { text: 'Banner' },
    ],
  };
  public matrixDropdown: RibbonDropDownSettingsModel = {
    iconCss: 'icon-medium icon-matrix',
    content: 'Matrix',
    cssClass: 'min-w-100',
    items: [
      { text: 'Plain' },
      { text: 'Classic' },
      { text: 'Corners' },
      { text: 'Alternating' },
      { text: 'Banner' },
    ],
  };
  public boxesDropdown: RibbonDropDownSettingsModel = {
    iconCss: 'icon-medium icon-boxes',
    content: 'Boxes',
    cssClass: 'min-w-100',
    target: '#boxes-dropdown'
  };
  public boxesDropdownData = [
    {
      id: 'boxes_1',
      img: '/assets/images/all.png'
    },
    {
      id: 'boxes_2',
      img: '/assets/images/leftBottom.png'
    },
    {
      id: 'boxes_3',
      img: 'assets/images/leftTop.png'
    },
    {
      id: 'boxes_4',
      img: '/assets/images/rightBottom.png'
    },
    {
      id: 'boxes_5',
      img: '/assets/images/rightTop.png'
    }
  ]
  public operatorDropdown: RibbonDropDownSettingsModel = {
    iconCss: 'icon-medium icon-symbols',
    content: 'Operator',
    cssClass: 'min-w-120',
    items: [
      { text: 'Plain' },
      { text: 'Classic' },
      { text: 'Corners' },
      { text: 'Alternating' },
      { text: 'Banner' },
    ],
  };
  public greekCapitalDropdown: RibbonDropDownSettingsModel = {
    iconCss: 'icon-medium icon-greekcapital',
    content: 'Greek Capital',
    cssClass: 'min-w-120',
    items: [
      { text: 'Plain' },
      { text: 'Classic' },
      { text: 'Corners' },
      { text: 'Alternating' },
      { text: 'Banner' },
    ],
  };
  public greekSmallDropdown: RibbonDropDownSettingsModel = {
    iconCss: 'icon-medium icon-greeksmall',
    content: 'Greek Small',
    cssClass: 'min-w-120',
    items: [
      { text: 'Plain' },
      { text: 'Classic' },
      { text: 'Corners' },
      { text: 'Alternating' },
      { text: 'Banner' },
    ],
  };
  public arrowDropdown: RibbonDropDownSettingsModel = {
    iconCss: 'icon-medium icon-arrows',
    cssClass: 'min-w-120',
    content: 'Arrow',
    items: [
      { text: 'Plain' },
      { text: 'Classic' },
      { text: 'Corners' },
      { text: 'Alternating' },
      { text: 'Banner' },
    ],
  };

  // Edit tab
  public selectedEntityButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-selectedentityedit',
    content: 'Selected Entity',
    cssClass: 'min-w-120',
  };
  public undoLastActionButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-undolastactionedit',
    content: 'Undo Last Action',
    cssClass: 'min-w-120',
  };

  // Domain tab
  public communicationButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-communicationdomain',
    content: 'Communication',
    cssClass: 'min-w-120',
  };
  public theoryButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-theorydomain',
    content: 'Theory',
    cssClass: 'min-w-90',
  };

  // Project tab
  public startProjectButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-startproject1',
    content: 'Start Project',
    cssClass: 'min-w-100',
  };
  public configureWarningMsgButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-error',
    content: 'Configure Warning Message',
    cssClass: 'min-w-120',
  };
  public applicationSettingButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-optionmix1',
    content: 'Application Setting',
    cssClass: 'min-w-100',
  };
  public captureImgButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-captureimageproject',
    content: 'Capture Image',
    cssClass: 'min-w-90',
  };
  public editImgButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-editimageproject',
    content: 'Edit Image',
    cssClass: 'min-w-90',
  };
  public recordVideoButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-reconrdvideoproject1',
    content: 'Record Video',
    cssClass: 'min-w-90',
  };
  public editVideoButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-editvideoproject',
    content: 'Edit Video',
    cssClass: 'min-w-90',
  };
  public recordAudioButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-recordaudioproject1',
    content: 'Record Audio',
    cssClass: 'min-w-90',
  };
  public settingsButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-settingproject1',
    content: 'Settings',
    cssClass: 'min-w-90',
  };
  public simulateButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-simulationproject',
    content: 'Simulate',
    cssClass: 'min-w-70',
  };
  public debugButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-simulationproject',
    content: 'Debug',
    cssClass: 'min-w-70',
  };
  public stepIntoButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-simulationproject',
    content: 'Step Into',
    cssClass: 'min-w-70',
  };
  public abortButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-simulationproject',
    content: 'Abort',
    cssClass: 'min-w-70',
  };
  public stopButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-simulationproject',
    content: 'Stop',
    cssClass: 'min-w-70',
  };
  public simulationSettingButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-settingproject1',
    content: 'Simulation Setting',
    cssClass: 'min-w-70',
  };
  public closeProjectButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-closeproject',
    content: 'Close project',
    cssClass: 'min-w-120',
  };
  public openProjectButton: RibbonButtonSettingsModel = {
    iconCss: 'e-icons',
    content: 'Open Project',
    cssClass: 'min-w-120',
  };

  // View tab
  public subFuncButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-subfunction',
    content: 'Sub Function',
    cssClass: 'min-w-100',
  };
  public subApplicationButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-subapplication',
    content: 'Sub Application',
    cssClass: 'min-w-120',
  };
  public subResultButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-subresult',
    content: 'Sub Result',
    cssClass: 'min-w-90',
  };
  public fitWindowButton: RibbonButtonSettingsModel = {
    iconCss: '',
    content: 'Fit To Window',
    cssClass: 'min-w-120 justify-left',
  };
  public pageWidthButton: RibbonButtonSettingsModel = {
    iconCss: '',
    content: 'Page width',
    cssClass: 'min-w-120 justify-left',
  };
  public showTooltipButton: RibbonButtonSettingsModel = {
    iconCss: '',
    content: 'Show Tooltip',
    cssClass: 'min-w-120 justify-left',
  };
  public allowCrossButton: RibbonButtonSettingsModel = {
    iconCss: '',
    content: 'Allow Cross',
    cssClass: 'min-w-120 justify-left',
  };
  public imgWidthFrameButton: RibbonButtonSettingsModel = {
    iconCss: '',
    content: 'Image With Frame',
    cssClass: 'min-w-120 justify-left',
  };
  public rulerButton: RibbonButtonSettingsModel = {
    iconCss: '',
    content: 'Ruler',
    cssClass: 'min-w-120 justify-left',
  };
  public gridButton: RibbonButtonSettingsModel = {
    iconCss: '',
    content: 'Grid',
    cssClass: 'min-w-120 justify-left',
  };
  public pageBreakButton: RibbonButtonSettingsModel = {
    iconCss: '',
    content: 'Page Breaks',
    cssClass: 'min-w-120 justify-left',
  };
  public entityLibraryButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-entityview',
    content: 'Entity Library',
    cssClass: 'min-w-100',
  };
  public panZoomButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-panzoomview',
    content: 'Pan & Zoom',
    cssClass: 'min-w-100',
  };
  public modelViewButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-modelview',
    content: 'Model View',
    cssClass: 'min-w-100',
  };
  public viewListButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-tasklistview',
    content: 'View List',
    cssClass: 'min-w-100',
  };
  public showHideModelButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-showhidemodelsview',
    content: 'Show & Hide Models',
    cssClass: 'min-w-120',
  };
  public showHideConnectionPointButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-simulationproject',
    content: 'Show & Hide Connection Points',
    cssClass: 'min-w-200',
  };

  // Layout tab
  public panToolButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-point',
    content: 'Pan tool',
    cssClass: 'min-w-100',
  };
  public arrowLeftButton: RibbonButtonSettingsModel = {
    iconCss: 'icon-small icon-left-arrow',
    content: '',
    cssClass: 'min-w-40',
  };
  public arrowRightButton: RibbonButtonSettingsModel = {
    iconCss: 'icon-small icon-right-arrow',
    content: '',
    cssClass: 'min-w-40',
  };
  public arrowUpButton: RibbonButtonSettingsModel = {
    iconCss: 'icon-small icon-up-arrow',
    content: '',
    cssClass: 'min-w-40',
  };
  public arrowDownButton: RibbonButtonSettingsModel = {
    iconCss: 'icon-small icon-down-arrow',
    content: '',
    cssClass: 'min-w-40',
  };
  public align1Button: RibbonButtonSettingsModel = {
    iconCss: 'icon-small icon-align-right',
    content: '',
    cssClass: 'min-w-40',
  };
  public align2Button: RibbonButtonSettingsModel = {
    iconCss: 'icon-small icon-sort-down',
    content: '',
    cssClass: 'min-w-40',
  };
  public align3Button: RibbonButtonSettingsModel = {
    iconCss: 'icon-small icon-align-center',
    content: '',
    cssClass: 'min-w-40',
  };
  public align4Button: RibbonButtonSettingsModel = {
    iconCss: 'icon-small icon-align',
    content: '',
    cssClass: 'min-w-40',
  };
  public align5Button: RibbonButtonSettingsModel = {
    iconCss: 'icon-small icon-align-left',
    content: '',
    cssClass: 'min-w-40',
  };
  public align6Button: RibbonButtonSettingsModel = {
    iconCss: 'icon-small icon-top-align',
    content: '',
    cssClass: 'min-w-40',
  };
  public equalHorizonButton: RibbonButtonSettingsModel = {
    iconCss: 'icon-small icon-width',
    content: '',
    cssClass: 'min-w-40',
  };
  public equalVerticalButton: RibbonButtonSettingsModel = {
    iconCss: 'icon-small icon-height',
    content: '',
    cssClass: 'min-w-40',
  };
  public increaseHorizonButton: RibbonButtonSettingsModel = {
    iconCss: 'icon-small icon-width',
    content: '',
    cssClass: 'min-w-40',
  };
  public increaseVerticalButton: RibbonButtonSettingsModel = {
    iconCss: 'icon-small icon-height',
    content: '',
    cssClass: 'min-w-40',
  };
  public decreaseHorizonButton: RibbonButtonSettingsModel = {
    iconCss: 'icon-small icon-width',
    content: '',
    cssClass: 'min-w-40',
  };
  public decreaseVerticalButton: RibbonButtonSettingsModel = {
    iconCss: 'icon-small icon-height',
    content: '',
    cssClass: 'min-w-40',
  };
  public sameWidthButton: RibbonButtonSettingsModel = {
    iconCss: 'icon-small icon-width',
    content: 'Same Width',
    cssClass: 'min-w-100',
  };
  public sameHeightButton: RibbonButtonSettingsModel = {
    iconCss: 'icon-small icon-height',
    content: 'Same Height',
    cssClass: 'min-w-100',
  };
  public sameSizeButton: RibbonButtonSettingsModel = {
    iconCss: 'icon-small icon-size-square',
    content: 'Same Size ',
    cssClass: 'min-w-100 flex-row-center',
  };
  public snapGridButton: RibbonButtonSettingsModel = {
    iconCss: 'icon-small icon-grid',
    content: '',
    cssClass: 'min-w-70',
  };
  public snapRulerButton: RibbonButtonSettingsModel = {
    iconCss: 'icon-small icon-axis',
    content: '',
    cssClass: 'min-w-70',
  };
  public snapGuideLineButton: RibbonButtonSettingsModel = {
    iconCss: 'icon-small icon-length',
    content: '',
    cssClass: 'min-w-70 length-setting',
  };
  public modelHorizonButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-left-alignment',
    content: 'Model Horizon',
    cssClass: 'min-w-100',
  };
  public modelVerticalButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-top-align',
    content: 'Model Vertical',
    cssClass: 'min-w-100',
  };
  public sizeToWindowPointButton: RibbonButtonSettingsModel = {
    iconCss: 'icon icon-program',
    content: 'Size To Window',
    cssClass: 'min-w-100',
  };

  public largeSize: RibbonItemSize = RibbonItemSize.Large;
  public smallSize: RibbonItemSize = RibbonItemSize.Small;

  public Simplified: DisplayMode = DisplayMode.Simplified;
  public Overflow: DisplayMode = DisplayMode.Overflow;
}
