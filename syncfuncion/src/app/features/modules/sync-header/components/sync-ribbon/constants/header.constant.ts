import { IRibbon } from "src/app/shared/interfaces/ribbon.interface";
import {ARROW, GREEKCAPTITAL, GREEKSMALL, OPERATOR} from "src/app/utils/constants";

const fontSize: string[] = ['1pt', '2pt', '3pt', '4pt', '5pt'];
const fontStyle: string[] = [
  'Segoe UI',
  'Times New Roman',
  'Arial',
  'Time New Roman',
  'Tahoma',
  'Helvetica',
];
export const ERibbon: IRibbon = {
  groupButtonIcon: {
    items: [
      {iconCss: 'e-icons e-align-left'},
      {iconCss: 'e-icons e-align-center'},
      {iconCss: 'e-icons e-align-right'},
      {iconCss: 'e-icons e-justify'},
    ]
  },
  pasteSettings: {
    iconCss: 'icon icon-paste',
    content: 'Paste',
    cssClass: 'min-w-70',
  },
  cutButton: {
    iconCss: 'icon icon-cut',
    content: 'Cut',
    cssClass: 'min-w-70',
  },
  deleteButton: {
    iconCss: 'icon icon-delete',
    content: 'Delete',
    cssClass: 'min-w-70',
  },
  exportButton: {
    iconCss: 'icon icon-clipBoard',
    content: 'Export',
    cssClass: 'min-w-70',
  },
  undoButton: {
    iconCss: 'icon icon-undo1',
    content: 'Undo',
    cssClass: 'min-w-70',
  },
  copyButton: {
    iconCss: 'icon icon-copy',
    content: 'Copy',
    cssClass: 'min-w-70',
  },
  formatButton: {
    iconCss: 'e-icons e-format-painter',
    content: 'Format Painter',
  },
  boldButton: {
    iconCss: 'e-icons e-bold',
    content: 'Bold',
    isToggle: true,
  },
  alignLeftButton: {
    iconCss: 'e-icons e-align-left',
    content: '',
  },
  alginCenterButton: {
    iconCss: 'e-icons e-align-center',
    content: '',
  },
  alignRightButton: {
    iconCss: 'e-icons e-align-right',
    content: '',
  },
  italicButton: {
    iconCss: 'e-icons e-italic',
    content: 'Italic',
    isToggle: true,
  },
  underlineButton: {
    iconCss: 'e-icons e-underline',
    content: 'Underline',
    isToggle: true,
  },
  strikethroughButton: {
    iconCss: 'e-icons e-strikethrough',
    content: 'Strikethrough',
    isToggle: true,
  },
  changecaseButton: {
    iconCss: 'e-icons e-change-case',
    content: 'Change Case',
  },
  fillButton: {
    iconCss: 'icon icon-fill-menu',
    content: 'Fill',
  },
  lineButton: {
    iconCss: 'icon icon-lineMenu',
    content: 'Line',
  },
  textButton: {
    iconCss: 'icon icon-text-menu',
    content: 'Text',
  },
  startButton: {
    iconCss: 'icon icon-start-menu',
    content: 'Start',
  },
  endButton: {
    iconCss: 'icon icon-end-menu',
    content: 'End',
  },
  pointerButton: {
    iconCss: 'icon icon-point-menu',
    content: 'Pointer',
  },
  text2Button: {
    iconCss: 'icon icon-text-menu2',
    content: 'Text',
  },
  line2Button: {
    iconCss: 'icon icon-line-menu',
    content: 'Line',
  },
  rectangularButton: {
    iconCss: 'icon-small icon-minus',
    content: '',
  },
  curvedLineButton: {
    iconCss: 'icon-small icon-ease',
    content: '',
  },
  ellipseButton: {
    iconCss: 'icon-small icon-ellipse',
    content: '',
  },
  ascendantButton: {
    iconCss: 'icon-small icon-line-chart',
    content: '',
  },
  autoConnectorButton: {
    iconCss: 'icon icon-autoconnector',
    content: 'Auto Connector',
    cssClass: 'min-w-90',
  },
  nodeSplitButton: {
    iconCss: 'icon icon-node-menu',
    content: 'Node',
    cssClass: 'min-w-70',
    items: [{text: 'Add Note at Node'}, {text: 'List of Note at Node'}],
  },
  chartButton: {
    iconCss: 'e-icons e-chart',
    content: 'Chart',
  },
  printButton: {
    iconCss: 'e-icons e-print-layout',
    content: 'Print Layout',
  },
  webButton: {
    iconCss: 'e-icons e-web-layout',
    content: 'Web Layout',
  },
  fontstyleSettings: {
    dataSource: fontStyle,
    index: 0,
    width: '100px',
    allowFiltering: true,
  },
  fontsizeSettings: {
    dataSource: fontSize,
    index: 0,
    width: '62px',
    allowFiltering: true,
    cssClass: 'border-1',
  },
  colorSettings: {value: '#123456'},
  ruler: {
    label: 'Ruler',
    checked: false,
  },
  grid: {
    label: 'Gridlines',
    checked: false,
  },
  navigation: {
    label: 'Navigation Pane',
    checked: false,
  },
  fileSettings: {
    menuItems: [
      {text: 'New Project', id: 'new'},
      {text: 'Open Project', id: 'open'},
      {text: 'Save Project', id: 'save'},
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
  },
  containerSettings: {
    iconCss: 'icon icon-container-menu-insert',
    content: 'Container ',
    target: '#container-dropdown',
    createPopupOnClick: true
  },
  containerDropdownData: [
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
  ],
  listSettings: {
    iconCss: 'icon icon-list-menu-insert',
    content: 'List',
    target: '#list-dropdown',
    createPopupOnClick: true
  },
  listDropdownData: [
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
  ],
  pictureButton: {
    iconCss: 'icon icon-picture-menu-insert',
    content: 'Picture',
    cssClass: '',
  },
  fromClipboardButton: {
    iconCss: 'icon icon-copy',
    content: 'From Clipboard',
    cssClass: 'min-w-90',
  },
  funcButton: {
    iconCss: 'icon icon-copy',
    content: 'Function',
    cssClass: '',
  },
  applicationSettings: {
    iconCss: 'icon icon-paste',
    content: 'Application',
    cssClass: '',
  },
  resultButton: {
    iconCss: 'icon icon-paste',
    content: 'Result',
    cssClass: '',
  },
  collectionButton: {
    iconCss: 'icon icon-copy',
    content: 'Collection',
    cssClass: '',
  },
  dictionaryButton: {
    iconCss: 'icon icon-paste',
    content: 'Dictionary',
    cssClass: '',
  },
  areaButton: {
    iconCss: 'icon icon-paste',
    content: 'Main Area',
    cssClass: '',
  },
  funcDropdown: {
    iconCss: 'icon icon-Function_Icon1',
    content: 'Function',
    target: '#function-dropdown',
    createPopupOnClick: true
  },
  functionDropdownData: [
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
  ],
  wordDropdown: {
    iconCss: 'icon icon-Word_Icon1',
    content: 'Word',
    target: '#word-dropdown',
    createPopupOnClick: true
  },
  wordDropdownData: [
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
  ],
  applicationDropdown: {
    iconCss: 'icon icon-Application_Icon1',
    content: 'Application',
    target: '#application-dropdown',
    createPopupOnClick: true
  },
  applicationDropdownData: [
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
  ],
  relationshipDropdown: {
    iconCss: 'icon icon-Relationship_Icon1',
    content: 'Relationship',
    target: '#relationship-dropdown',
    createPopupOnClick: true
  },
  relationshipDropdownData: [
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
  ],

// Equations tab
  bracketDropdown: {
    iconCss: 'icon-medium icon-brackets',
    cssClass: 'min-w-70',
    content: 'Bracket',
    target: '#bracket-dropdown',
    createPopupOnClick: true
  },
  bracketDropdownData: [
    {
      id: 'accent_1',
      img: '/assets/images/brackets/AngleBar.png'
    },
    {
      id: 'accent_2',
      img: '/assets/images/brackets/BarAngle.png'
    },
    {
      id: 'accent_3',
      img: '/assets/images/brackets/BottomCurlyBracket.png'
    },
    {
      id: 'accent_4',
      img: '/assets/images/brackets/BottomSquareBracket.png'
    },
    {
      id: 'bracket_5',
      img: '/assets/images/brackets/Ceiling.png'
    },
    {
      id: 'bracket_6',
      img: '/assets/images/brackets/CurlyBracket.png'
    },
    {
      id: 'bracket_7',
      img: '/assets/images/brackets/DoubleArrowBarBracket.png'
    },
    {
      id: 'bracket_8',
      img: '/assets/images/brackets/DoubleBar.png'
    },
    {
      id: 'bracket_9',
      img: '/assets/images/brackets/Floor.png'
    },
    {
      id: 'bracket_10',
      img: '/assets/images/brackets/LeftAngle.png'
    },
    {
      id: 'bracket_11',
      img: '/assets/images/brackets/LeftBar.png'
    },
    {
      id: 'bracket_12',
      img: '/assets/images/brackets/LeftCurlyBracket.png'
    },
    {
      id: 'bracket_13',
      img: '/assets/images/brackets/LeftDoubleBar.png'
    },
    {
      id: 'bracket_14',
      img: '/assets/images/brackets/LeftLeftSquareBracket.png'
    },
    {
      id: 'bracket_15',
      img: '/assets/images/brackets/LeftParenthesis.png'
    },
    {
      id: 'bracket_16',
      img: '/assets/images/brackets/LeftSquareBar.png'
    },
    {
      id: 'bracket_17',
      img: '/assets/images/brackets/LeftSquareBracket.png'
    },
    {
      id: 'bracket_18',
      img: '/assets/images/brackets/Parentheses.png'
    },
    {
      id: 'bracket_19',
      img: '/assets/images/brackets/ParenthesisSquare.png'
    },
    {
      id: 'frac_20',
      img: '/assets/images/brackets/PointingAngles.png'
    },
    {
      id: 'bracket_21',
      img: '/assets/images/brackets/RightAngle.png'
    },
    {
      id: 'bracket_22',
      img: '/assets/images/brackets/RightBar.png'
    },
    {
      id: 'bracket_23',
      img: '/assets/images/brackets/RightCurlyBracket.png'
    },
    {
      id: 'bracket_24',
      img: '/assets/images/brackets/RightDoubleBar.png'
    },
    {
      id: 'bracket_25',
      img: '/assets/images/brackets/RightLeftSquareBracket.png'
    },
    {
      id: 'bracket_26',
      img: '/assets/images/brackets/RightParenthesis.png'
    },
    {
      id: 'bracket_27',
      img: '/assets/images/brackets/RightRightSquareBracket.png'
    },
    {
      id: 'bracket_28',
      img: '/assets/images/brackets/RightSquareBar.png'
    },
    {
      id: 'bracket_29',
      img: '/assets/images/brackets/RightSquareBracket.png'
    },
    {
      id: 'bracket_30',
      img: '/assets/images/brackets/SingleBar.png'
    },
    {
      id: 'bracket_31',
      img: '/assets/images/brackets/SquareBar.png'
    },
    {
      id: 'bracket_32',
      img: '/assets/images/brackets/SquareBracket.png'
    },
    {
      id: 'bracket_33',
      img: '/assets/images/brackets/SquareParenthesesBracket.png'
    },
    {
      id: 'bracket_34',
      img: '/assets/images/brackets/SquareParenthesis.png'
    },
    {
      id: 'bracket_35',
      img: '/assets/images/brackets/TopCurlyBracket.png'
    },
    {
      id: 'bracket_36',
      img: '/assets/images/brackets/TopSquareBracket.png'
    }
  ],
  decoratorDropdown: {
    iconCss: 'icon-medium icon-decoratedEquation',
    content: 'Decorator',
    cssClass: 'min-w-70',
    target: '#decorator-dropdown',
    createPopupOnClick: true
  },
  decoratorDropdownData: [
    {
      id: 'decorator_1',
      img: '/assets/images/equation/bottomBar.png'
    },
    {
      id: 'decorator_2',
      img: '/assets/images/equation/bottomDoubleArrow.png'
    },
    {
      id: 'decorator_3',
      img: '/assets/images/equation/bottomDoubleBar.png'
    },
    {
      id: 'decorator_4',
      img: '/assets/images/equation/bottomLeftArrow.png'
    },
    {
      id: 'decorator_5',
      img: '/assets/images/equation/bottomLeftHalfArrow.png'
    },
    {
      id: 'decorator_6',
      img: '/assets/images/equation/bottomRightArrow.png'
    },
    {
      id: 'decorator_7',
      img: '/assets/images/equation/bottomRightHalfArrow.png'
    },
    {
      id: 'decorator_8',
      img: '/assets/images/equation/cross.png'
    },
    {
      id: 'decorator_9',
      img: '/assets/images/equation/hat.png'
    },
    {
      id: 'decorator_10',
      img: '/assets/images/equation/leftCross.png'
    },
    {
      id: 'decorator_11',
      img: '/assets/images/equation/parenthesis.png'
    },
    {
      id: 'decorator_12',
      img: '/assets/images/equation/rightCross.png'
    },
    {
      id: 'decorator_13',
      img: '/assets/images/equation/strikeThrough.png'
    },
    {
      id: 'decorator_14',
      img: '/assets/images/equation/tilde.png'
    },
    {
      id: 'decorator_15',
      img: '/assets/images/equation/topBar.png'
    },
    {
      id: 'decorator_16',
      img: '/assets/images/equation/topDoubleArrow.png'
    },
    {
      id: 'decorator_17',
      img: '/assets/images/equation/topDoubleBar.png'
    },
    {
      id: 'decorator_18',
      img: '/assets/images/equation/topLeftArrow.png'
    },
    {
      id: 'decorator_19',
      img: '/assets/images/equation/topLeftHalfArrow.png'
    },
    {
      id: 'decorator_20',
      img: '/assets/images/equation/topRightArrow.png'
    },
    {
      id: 'decorator_21',
      img: '/assets/images/equation/topRightHalfArrow.png'
    },
    {
      id: 'decorator_22',
      img: '/assets/images/equation/tortoise.png'
    }
  ],
  sumProductDropdown: {
    iconCss: 'icon-medium icon-sumproduct',
    content: 'Sum & Products',
    cssClass: 'min-w-120',
    target: '#sum-dropdown',
    createPopupOnClick: true
  },
  sumDropdownData: [
    {
      id: 'sum_1',
      img: '/assets/images/sumsProducts/coProduct.png'
    },
    {
      id: 'sum_2',
      img: '/assets/images/sumsProducts/coProductBottom.png'
    },
    {
      id: 'sum_3',
      img: '/assets/images/sumsProducts/coProductBottomTop.png'
    },
    {
      id: 'sum_4',
      img: '/assets/images/sumsProducts/coProductSub.png'
    },
    {
      id: 'sum_5',
      img: '/assets/images/sumsProducts/coProductSubSuper.png'
    },
    {
      id: 'sum_6',
      img: '/assets/images/sumsProducts/intersection.png'
    },
    {
      id: 'sum_7',
      img: '/assets/images/sumsProducts/intersectionBottom.png'
    },
    {
      id: 'sum_8',
      img: '/assets/images/sumsProducts/intersectionBottomTop.png'
    },
    {
      id: 'sum_9',
      img: '/assets/images/sumsProducts/intersectionSub.png'
    },
    {
      id: 'sum_10',
      img: '/assets/images/sumsProducts/intersectionSubSuper.png'
    },
    {
      id: 'sum_11',
      img: '/assets/images/sumsProducts/product.png'
    },
    {
      id: 'sum_12',
      img: '/assets/images/sumsProducts/productBottom.png'
    },
    {
      id: 'sum_13',
      img: '/assets/images/sumsProducts/ProductBottomTop.png'
    },
    {
      id: 'sum_14',
      img: '/assets/images/sumsProducts/productSub.png'
    },
    {
      id: 'sum_15',
      img: '/assets/images/sumsProducts/productSubSuper.png'
    },
    {
      id: 'sum_16',
      img: '/assets/images/sumsProducts/sum.png'
    },
    {
      id: 'sum_17',
      img: '/assets/images/sumsProducts/sumBottom.png'
    },
    {
      id: 'sum_18',
      img: '/assets/images/sumsProducts/sumBottomTop.png'
    },
    {
      id: 'sum_19',
      img: '/assets/images/sumsProducts/sumSub.png'
    },
    {
      id: 'sum_20',
      img: '/assets/images/sumsProducts/sumSubSuper.png'
    },
    {
      id: 'sum_21',
      img: '/assets/images/sumsProducts/union.png'
    },
    {
      id: 'sum_22',
      img: '/assets/images/sumsProducts/unionBottom.png'
    },
    {
      id: 'sum_23',
      img: '/assets/images/sumsProducts/unionBottomTop.png'
    },
    {
      id: 'sum_24',
      img: '/assets/images/sumsProducts/unionSub.png'
    },
    {
      id: 'sum_25',
      img: '/assets/images/sumsProducts/unionSubSuper.png'
    }
  ],
  integralDropdown: {
    iconCss: 'icon-medium icon-integrals',
    content: 'Integral',
    cssClass: 'min-w-70',
    target: '#integral-dropdown',
    createPopupOnClick: true
  },
  integralDropdownData: [
    {
      id: 'integral_1',
      img: '/assets/images/integrals/Single/Bottom.png'
    },
    {
      id: 'integral_2',
      img: '/assets/images/integrals/Single/BottomTop.png'
    },
    {
      id: 'integral_3',
      img: '/assets/images/integrals/Single/Simple.png'
    },
    {
      id: 'integral_4',
      img: '/assets/images/integrals/Single/Sub.png'
    },
    {
      id: 'integral_5',
      img: '/assets/images/integrals/Single/SubSuper.png'
    },
    {
      id: 'integral_6',
      img: '/assets/images/integrals/Double/Bottom.png'
    },
    {
      id: 'integral_7',
      img: '/assets/images/integrals/Double/BottomTop.png'
    },
    {
      id: 'integral_8',
      img: '/assets/images/integrals/Double/Simple.png'
    },
    {
      id: 'integral_9',
      img: '/assets/images/integrals/Double/Sub.png'
    },
    {
      id: 'integral_10',
      img: '/assets/images/integrals/Double/SubSuper.png'
    },
    {
      id: 'integral_11',
      img: '/assets/images/integrals/Triple/Bottom.png'
    },
    {
      id: 'integral_12',
      img: '/assets/images/integrals/Triple/BottomTop.png'
    },
    {
      id: 'integral_13',
      img: '/assets/images/integrals/Triple/Simple.png'
    },
    {
      id: 'integral_14',
      img: '/assets/images/integrals/Triple/Sub.png'
    },
    {
      id: 'integral_15',
      img: '/assets/images/integrals/Triple/SubSuper.png'
    },
    {
      id: 'integral_16',
      img: '/assets/images/integrals/Clock/Bottom.png'
    },
    {
      id: 'integral_17',
      img: '/assets/images/integrals/Clock/BottomTop.png'
    },
    {
      id: 'integral_18',
      img: '/assets/images/integrals/Clock/Simple.png'
    },
    {
      id: 'integral_19',
      img: '/assets/images/integrals/Clock/Sub.png'
    },
    {
      id: 'integral_20',
      img: '/assets/images/integrals/Clock/SubSuper.png'
    },
    {
      id: 'integral_21',
      img: '/assets/images/integrals/Surface/Bottom.png'
    },
    {
      id: 'integral_22',
      img: '/assets/images/integrals/Surface/BottomTop.png'
    },
    {
      id: 'integral_23',
      img: '/assets/images/integrals/Surface/Simple.png'
    },
    {
      id: 'integral_24',
      img: '/assets/images/integrals/Surface/Sub.png'
    },
    {
      id: 'integral_25',
      img: '/assets/images/integrals/Surface/SubSuper.png'
    },
    {
      id: 'integral_26',
      img: '/assets/images/integrals/volume/Bottom.png'
    },
    {
      id: 'integral_27',
      img: '/assets/images/integrals/volume/BottomTop.png'
    },
    {
      id: 'integral_28',
      img: '/assets/images/integrals/volume/Simple.png'
    },
    {
      id: 'integral_29',
      img: '/assets/images/integrals/volume/Sub.png'
    },
    {
      id: 'integral_30',
      img: '/assets/images/integrals/volume/SubSuper.png'
    }
  ],
  scriptDropdown: {
    iconCss: 'icon-medium icon-script',
    content: 'Script',
    cssClass: 'min-w-70',
    target: '#script-dropdown',
    createPopupOnClick: true
  },
  scriptDropdownData: [
    {
      id: 'script_1',
      img: '/assets/images/Sub.png'
    },
    {
      id: 'script2',
      img: '/assets/images/SubLeft.png'
    },
    {
      id: 'script_3',
      img: '/assets/images/SubSuper.png'
    },
    {
      id: 'script_4',
      img: '/assets/images/SubSuperLeft.png'
    },
    {
      id: 'script_5',
      img: '/assets/images/Super.png'
    },
    {
      id: 'script_6',
      img: '/assets/images/SuperLeft.png'
    }
  ],
  factionRadicalDropdown: {
    iconCss: 'icon-medium icon-divroot',
    content: 'Fraction & Radical',
    cssClass: 'min-w-120',
    target: '#frac-dropdown',
    createPopupOnClick: true
  },
  fracDropdownData: [
    {
      id: 'frac_1',
      img: '/assets/images/Div.png'
    },
    {
      id: 'frac_2',
      img: '/assets/images/DivDoubleBar.png'
    },
    {
      id: 'frac_3',
      img: '/assets/images/DivHoriz.png'
    },
    {
      id: 'frac_4',
      img: '/assets/images/DivMath.png'
    },
    {
      id: 'frac_5',
      img: '/assets/images/DivMathInverted.png'
    },
    {
      id: 'frac_6',
      img: '/assets/images/DivMathInvertedWithBottom.png'
    },
    {
      id: 'frac_7',
      img: '/assets/images/DivMathWithTop.png'
    },
    {
      id: 'frac_8',
      img: '/assets/images/DivSlant.png'
    },
    {
      id: 'frac_9',
      img: '/assets/images/DivTriangleExpanding.png'
    },
    {
      id: 'frac_10',
      img: '/assets/images/DivTriangleFixed.png'
    },
    {
      id: 'frac_11',
      img: '/assets/images/DivTripleBar.png'
    },
    {
      id: 'frac_12',
      img: '/assets/images/nRoot.png'
    },
    {
      id: 'frac_13',
      img: '/assets/images/SmallDiv.png'
    },
    {
      id: 'frac_14',
      img: '/assets/images/SmallDivHoriz.png'
    },
    {
      id: 'frac_15',
      img: '/assets/images/SmallDivSlant.png'
    },
    {
      id: 'frac_16',
      img: '/assets/images/SqRoot.png'
    }
  ],
  labeledArrowDropdown: {
    iconCss: 'icon-medium icon-arrowEquation',
    content: 'Labeled Arrow',
    cssClass: 'min-w-100',
    target: '#arrow-dropdown'
  },
  arrowDropdownData: [
    {
      id: 'arrow_1',
      img: '/assets/images/arrow/DoubleBottom.png'
    },
    {
      id: 'arrow_2',
      img: '/assets/images/arrow/DoubleBottomTop.png'
    },
    {
      id: 'arrow_3',
      img: '/assets/images/arrow/DoubleTop.png'
    },
    {
      id: 'arrow_4',
      img: '/assets/images/arrow/LeftBottom.png'
    },
    {
      id: 'arrow_5',
      img: '/assets/images/arrow/LeftBottomTop.png'
    },
    {
      id: 'arrow_6',
      img: '/assets/images/arrow/LeftTop.png'
    },
    {
      id: 'arrow_7',
      img: '/assets/images/arrow/RightBottom.png'
    },
    {
      id: 'arrow_8',
      img: '/assets/images/arrow/RightBottomTop.png'
    },
    {
      id: 'arrow_9',
      img: '/assets/images/arrow/RightLeftBottom.png'
    },
    {
      id: 'arrow_10',
      img: '/assets/images/arrow/RightLeftBottomTop.png'
    },
    {
      id: 'arrow_11',
      img: '/assets/images/arrow/RightLeftHarpBottom.png'
    },
    {
      id: 'arrow_12',
      img: '/assets/images/arrow/RightLeftHarpBottomTop.png'
    },
    {
      id: 'arrow_13',
      img: '/assets/images/arrow/RightLeftHarpTop.png'
    },
    {
      id: 'arrow_14',
      img: '/assets/images/arrow/RightLeftTop.png'
    },
    {
      id: 'arrow_15',
      img: '/assets/images/arrow/RightSmallLeftBottom.png'
    },
    {
      id: 'arrow_16',
      img: '/assets/images/arrow/RightSmallLeftBottomTop.png'
    },
    {
      id: 'arrow_17',
      img: '/assets/images/arrow/RightSmallLeftHarpBottom.png'
    },
    {
      id: 'arrow_18',
      img: '/assets/images/arrow/RightSmallLeftHarpBottomTop.png'
    },
    {
      id: 'arrow_19',
      img: '/assets/images/arrow/RightSmallLeftHarpTop.png'
    },
    {
      id: 'frac_20',
      img: '/assets/images/arrow/RightSmallLeftTop.png'
    },
    {
      id: 'arrow_21',
      img: '/assets/images/arrow/RightTop.png'
    },
    {
      id: 'arrow_22',
      img: '/assets/images/arrow/SmallRightLeftBottom.png'
    },
    {
      id: 'arrow_23',
      img: '/assets/images/arrow/SmallRightLeftHarpBottom.png'
    },
    {
      id: 'arrow_24',
      img: '/assets/images/arrow/SmallRightLeftHarpBottomTop.png'
    },
    {
      id: 'arrow_25',
      img: '/assets/images/arrow/SmallRightLeftHarpTop.png'
    },
    {
      id: 'arrow_26',
      img: '/assets/images/arrow/SmallRightLeftTop.png'
    }
  ],
  underbarOverbarDropdown: {
    iconCss: 'icon-medium icon-underbar',
    content: 'Underbar & Overbar',
    cssClass: 'min-w-120',
    target: '#bar-dropdown',
    createPopupOnClick: true
  },
  barDropdownData: [
    {
      id: 'bar_1',
      img: '/assets/images/BigBottom.png'
    },
    {
      id: 'bar_2',
      img: '/assets/images/BigBottomTop.png'
    },
    {
      id: 'bar_3',
      img: 'assets/images/BigSub.png'
    },
    {
      id: 'bar_4',
      img: '/assets/images/BigSubSuper.png'
    },
    {
      id: 'bar_5',
      img: '/assets/images/BigSuper.png'
    },
    {
      id: 'bar_6',
      img: '/assets/images/BigTop.png'
    },
    {
      id: 'bar_7',
      img: '/assets/images/CompositeBottom.png'
    },
    {
      id: 'bar_8',
      img: '/assets/images/CompositeBottomTop.png'
    },
    {
      id: 'bar_9',
      img: '/assets/images/CompositeTop.png'
    }
  ],
  accentPrimeDropdown: {
    iconCss: 'icon-medium icon-decoratedCharacter',
    content: 'Accent & Prime',
    cssClass: 'min-w-120',
    target: '#accent-dropdown',
    createPopupOnClick: true
  },
  accentDropdownData: [
    {
      id: 'accent_1',
      img: '/assets/images/character/AcuteAccent.png'
    },
    {
      id: 'accent_2',
      img: '/assets/images/character/BottomBar.png'
    },
    {
      id: 'accent_3',
      img: '/assets/images/character/BottomBreve.png'
    },
    {
      id: 'accent_4',
      img: '/assets/images/character/BottomDDot.png'
    },
    {
      id: 'accent_5',
      img: '/assets/images/character/BottomDot.png'
    },
    {
      id: 'accent_6',
      img: '/assets/images/character/BottomDoubleArrow.png'
    },
    {
      id: 'accent_7',
      img: '/assets/images/character/BottomFourDot.png'
    },
    {
      id: 'accent_8',
      img: '/assets/images/character/BottomInvertedBreve.png'
    },
    {
      id: 'accent_9',
      img: '/assets/images/character/BottomLeftArrow.png'
    },
    {
      id: 'accent_10',
      img: '/assets/images/character/BottomLeftHarpoon.png'
    },
    {
      id: 'accent_11',
      img: '/assets/images/character/BottomRightArrow.png'
    },
    {
      id: 'accent_12',
      img: '/assets/images/character/BottomRightHarpoon.png'
    },
    {
      id: 'accent_13',
      img: '/assets/images/character/BottomTDot.png'
    },
    {
      id: 'accent_14',
      img: '/assets/images/character/BottomTilde.png'
    },
    {
      id: 'accent_15',
      img: '/assets/images/character/Cross.png'
    },
    {
      id: 'accent_16',
      img: '/assets/images/character/DoublePrime.png'
    },
    {
      id: 'accent_17',
      img: '/assets/images/character/DoubleStrikeThrough.png'
    },
    {
      id: 'accent_18',
      img: '/assets/images/character/GraveAccent.png'
    },
    {
      id: 'accent_19',
      img: '/assets/images/character/LeftCross.png'
    },
    {
      id: 'accent_20',
      img: '/assets/images/character/LeftUprightCross.png'
    },
    {
      id: 'accent_21',
      img: '/assets/images/character/None.png'
    },
    {
      id: 'accent_22',
      img: '/assets/images/character/Prime.png'
    },
    {
      id: 'accent_23',
      img: '/assets/images/character/ReverseDoublePrime.png'
    },
    {
      id: 'accent_24',
      img: '/assets/images/character/ReversePrime.png'
    },
    {
      id: 'accent_25',
      img: '/assets/images/character/RightCross.png'
    },
    {
      id: 'accent_26',
      img: '/assets/images/character/RightUprightCross.png'
    },
    {
      id: 'accent_27',
      img: '/assets/images/character/StrikeThrough.png'
    },
    {
      id: 'accent_28',
      img: '/assets/images/character/TopBar.png'
    },
    {
      id: 'accent_29',
      img: '/assets/images/character/TopBreve.png'
    },
    {
      id: 'accent_30',
      img: '/assets/images/character/TopCaron.png'
    },
    {
      id: 'accent_31',
      img: '/assets/images/character/TopCircumflex.png'
    },
    {
      id: 'accent_32',
      img: '/assets/images/character/TopDDot.png'
    },
    {
      id: 'accent_33',
      img: '/assets/images/character/TopDot.png'
    },
    {
      id: 'accent_34',
      img: '/assets/images/character/TopDoubleArrow.png'
    },
    {
      id: 'accent_35',
      img: '/assets/images/character/TopFourDot.png'
    },
    {
      id: 'accent_36',
      img: '/assets/images/character/TopInvertedBreve.png'
    },
    {
      id: 'accent_37',
      img: '/assets/images/character/TopLeftArrow.png'
    },
    {
      id: 'accent_38',
      img: '/assets/images/character/TopLeftHarpoon.png'
    },
    {
      id: 'accent_39',
      img: '/assets/images/character/TopRightArrow.png'
    },
    {
      id: 'accent_40',
      img: '/assets/images/character/TopRightHarpoon.png'
    },
    {
      id: 'accent_41',
      img: '/assets/images/character/TopRightRing.png'
    },
    {
      id: 'accent_42',
      img: '/assets/images/character/TopRing.png'
    },
    {
      id: 'accent_43',
      img: '/assets/images/character/TopTDot.png'
    },
    {
      id: 'accent_44',
      img: '/assets/images/character/TopTilde.png'
    },
    {
      id: 'accent_45',
      img: '/assets/images/character/TriplePrime.png'
    },
    {
      id: 'accent_46',
      img: '/assets/images/character/VDoubleStrikeThrough.png'
    },
    {
      id: 'accent_47',
      img: '/assets/images/character/VStrikeThrough.png'
    }
  ],
  matrixDropdown: {
    iconCss: 'icon-medium icon-matrix',
    content: 'Matrix',
    cssClass: 'min-w-100',
    target: '#matrix-dropdown',
    createPopupOnClick: true
  },
  matrixDropdownData: [
    {
      id: 'matrix_1',
      img: '/assets/images/2cellColumn.png'
    },
    {
      id: 'matrix_2',
      img: '/assets/images/2cellRow.png'
    },
    {
      id: 'matrix_3',
      img: 'assets/images/2Square.png'
    },
    {
      id: 'matrix_4',
      img: '/assets/images/3cellColumn.png'
    },
    {
      id: 'matrix_5',
      img: '/assets/images/3cellRow.png'
    },
    {
      id: 'matrix_6',
      img: '/assets/images/3Square.png'
    },
    {
      id: 'matrix_7',
      img: '/assets/images/column.png'
    },
    {
      id: 'matrix_8',
      img: '/assets/images/custom.png'
    },
    {
      id: 'matrix_9',
      img: '/assets/images/row.png'
    }
  ],
  boxesDropdown: {
    iconCss: 'icon-medium icon-boxes',
    content: 'Boxes',
    cssClass: 'min-w-100',
    target: '#boxes-dropdown',
    createPopupOnClick: true
  },
  boxesDropdownData: [
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
  ],
  operatorDropdown: {
    iconCss: 'icon-medium icon-symbols',
    content: 'Operator',
    cssClass: 'min-w-120',
    target: '#operator-dropdown',
    createPopupOnClick: true
  },
  operatorDropdownData: OPERATOR.map((value, index) => ({
    id: `operator_${index}`,
    text: value
  })),
  greekCapitalDropdown: {
    iconCss: 'icon-medium icon-greekcapital',
    content: 'Greek Capital',
    cssClass: 'min-w-120',
    target: '#greek-capital-dropdown',
    createPopupOnClick: true
  },
  greekCapitalDropdownData: GREEKCAPTITAL.map((value, index) => ({
    id: `cap_${index}`,
    text: value
  })),
  greekSmallDropdown: {
    iconCss: 'icon-medium icon-greeksmall',
    content: 'Greek Small',
    cssClass: 'min-w-120',
    target: '#greek-small-dropdown',
    createPopupOnClick: true
  },
  greekSmallDropdownData: GREEKSMALL.map((value, index) => ({
    id: `small_${index}`,
    text: value
  })),
  arrowDropdown: {
    iconCss: 'icon-medium icon-arrows',
    cssClass: 'min-w-120',
    content: 'Arrow',
    target: '#arrow-code-dropdown',
    createPopupOnClick: true
  },
  arrowCodeDropdownData: ARROW.map((value, idx) => ({
    id: `arrowCode_${idx}`,
    text: value
  })),
  selectedEntityButton: {
    iconCss: 'icon icon-selectedentityedit',
    content: 'Selected Entity',
    cssClass: 'min-w-120',
  },
  undoLastActionButton: {
    iconCss: 'icon icon-undolastactionedit',
    content: 'Undo Last Action',
    cssClass: 'min-w-120',
  },

// Domain tab
  communicationButton: {
    iconCss: 'icon icon-communicationdomain',
    content: 'Communication',
    cssClass: 'min-w-120',
    clicked: undefined
  },
  theoryButton: {
    iconCss: 'icon icon-theorydomain',
    content: 'Theory',
    cssClass: 'min-w-90',
    clicked: undefined
  },
  startProjectButton: {
    iconCss: 'icon icon-startproject1',
    content: 'Start Project',
    cssClass: 'min-w-100',
  },
  configureWarningMsgButton: {
    iconCss: 'icon icon-error',
    content: 'Configure Warning Message',
    cssClass: 'min-w-120',
  },
  applicationSettingButton: {
    iconCss: 'icon icon-optionmix1',
    content: 'Application Setting',
    cssClass: 'min-w-100',
  },
  captureImgButton: {
    iconCss: 'icon icon-captureimageproject',
    content: 'Capture Image',
    cssClass: 'min-w-90',
  },
  editImgButton: {
    iconCss: 'icon icon-editimageproject',
    content: 'Edit Image',
    cssClass: 'min-w-90',
  },
  recordVideoButton: {
    iconCss: 'icon icon-reconrdvideoproject1',
    content: 'Record Video',
    cssClass: 'min-w-90',
  },
  editVideoButton: {
    iconCss: 'icon icon-editvideoproject',
    content: 'Edit Video',
    cssClass: 'min-w-90',
  },
  recordAudioButton: {
    iconCss: 'icon icon-recordaudioproject1',
    content: 'Record Audio',
    cssClass: 'min-w-90',
  },
  settingsButton: {
    iconCss: 'icon icon-settingproject1',
    content: 'Settings',
    cssClass: 'min-w-90',
  },
  simulateButton: {
    iconCss: 'icon icon-simulationproject',
    content: 'Simulate',
    cssClass: 'min-w-70',
  },
  debugButton: {
    iconCss: 'icon icon-simulationproject',
    content: 'Debug',
    cssClass: 'min-w-70',
  },
  stepIntoButton: {
    iconCss: 'icon icon-simulationproject',
    content: 'Step Into',
    cssClass: 'min-w-70',
  },
  abortButton: {
    iconCss: 'icon icon-simulationproject',
    content: 'Abort',
    cssClass: 'min-w-70',
  },
  stopButton: {
    iconCss: 'icon icon-simulationproject',
    content: 'Stop',
    cssClass: 'min-w-70',
  },
  simulationSettingButton: {
    iconCss: 'icon icon-settingproject1',
    content: 'Simulation Setting',
    cssClass: 'min-w-70',
  },
  closeProjectButton: {
    iconCss: 'icon icon-closeproject',
    content: 'Close project',
    cssClass: 'min-w-120',
  },
  openProjectButton: {
    iconCss: 'e-icons',
    content: 'Open Project',
    cssClass: 'min-w-120',
  },

// View tab
  subFuncButton: {
    iconCss: 'icon icon-subfunction',
    content: 'Sub Function',
    cssClass: 'min-w-100',
  },
  subApplicationButton: {
    iconCss: 'icon icon-subapplication',
    content: 'Sub Application',
    cssClass: 'min-w-120',
  },
  subResultButton: {
    iconCss: 'icon icon-subresult',
    content: 'Sub Result',
    cssClass: 'min-w-90',
  },
  fitWindowButton: {
    iconCss: '',
    content: 'Fit To Window',
    cssClass: 'min-w-120 justify-left',
  },
  pageWidthButton: {
    iconCss: '',
    content: 'Page width',
    cssClass: 'min-w-120 justify-left',
  },
  showTooltipButton: {
    iconCss: '',
    content: 'Show Tooltip',
    cssClass: 'min-w-120 justify-left',
  },
  allowCrossButton: {
    iconCss: '',
    content: 'Allow Cross',
    cssClass: 'min-w-120 justify-left',
  },
  imgWidthFrameButton: {
    iconCss: '',
    content: 'Image With Frame',
    cssClass: 'min-w-120 justify-left',
  },
  rulerButton: {
    iconCss: '',
    content: 'Ruler',
    cssClass: 'min-w-120 justify-left',
  },
  gridButton: {
    iconCss: '',
    content: 'Grid',
    cssClass: 'min-w-120 justify-left',
  },
  pageBreakButton: {
    iconCss: '',
    content: 'Page Breaks',
    cssClass: 'min-w-120 justify-left',
  },
  entityLibraryButton: {
    iconCss: 'icon icon-entityview',
    content: 'Entity Library',
    cssClass: 'min-w-100',
  },
  panZoomButton: {
    iconCss: 'icon icon-panzoomview',
    content: 'Pan & Zoom',
    cssClass: 'min-w-100',
  },
  modelViewButton: {
    iconCss: 'icon icon-modelview',
    content: 'Model View',
    cssClass: 'min-w-100',
  },
  viewListButton: {
    iconCss: 'icon icon-tasklistview',
    content: 'View List',
    cssClass: 'min-w-100',
  },
  showHideModelButton: {
    iconCss: 'icon icon-showhidemodelsview',
    content: 'Show & Hide Models',
    cssClass: 'min-w-120',
  },
  showHideConnectionPointButton: {
    iconCss: 'icon icon-simulationproject',
    content: 'Show & Hide Connection Points',
    cssClass: 'min-w-200',
  },

// Layout tab
  panToolButton: {
    iconCss: 'icon icon-point',
    content: 'Pan tool',
    cssClass: 'min-w-100',
  },
  arrowLeftButton: {
    iconCss: 'icon-small icon-left-arrow',
    content: '',
    cssClass: 'min-w-40',
  },
  arrowRightButton: {
    iconCss: 'icon-small icon-right-arrow',
    content: '',
    cssClass: 'min-w-40',
  },
  arrowUpButton: {
    iconCss: 'icon-small icon-up-arrow',
    content: '',
    cssClass: 'min-w-40',
  },
  arrowDownButton: {
    iconCss: 'icon-small icon-down-arrow',
    content: '',
    cssClass: 'min-w-40',
  },
  align1Button: {
    iconCss: 'icon-small icon-align-right',
    content: '',
    cssClass: 'min-w-40',
  },
  align2Button: {
    iconCss: 'icon-small icon-sort-down',
    content: '',
    cssClass: 'min-w-40',
  },
  align3Button: {
    iconCss: 'icon-small icon-align-center',
    content: '',
    cssClass: 'min-w-40',
  },
  align4Button: {
    iconCss: 'icon-small icon-align',
    content: '',
    cssClass: 'min-w-40',
  },
  align5Button: {
    iconCss: 'icon-small icon-align-left',
    content: '',
    cssClass: 'min-w-40',
  },
  align6Button: {
    iconCss: 'icon-small icon-top-align',
    content: '',
    cssClass: 'min-w-40',
  },
  equalHorizonButton: {
    iconCss: 'icon-small icon-width',
    content: '',
    cssClass: 'min-w-40',
  },
  equalVerticalButton: {
    iconCss: 'icon-small icon-height',
    content: '',
    cssClass: 'min-w-40',
  },
  increaseHorizonButton: {
    iconCss: 'icon-small icon-width',
    content: '',
    cssClass: 'min-w-40',
  },
  increaseVerticalButton: {
    iconCss: 'icon-small icon-height',
    content: '',
    cssClass: 'min-w-40',
  },
  decreaseHorizonButton: {
    iconCss: 'icon-small icon-width',
    content: '',
    cssClass: 'min-w-40',
  },
  decreaseVerticalButton: {
    iconCss: 'icon-small icon-height',
    content: '',
    cssClass: 'min-w-40',
  },
  sameWidthButton: {
    iconCss: 'icon-small icon-width',
    content: 'Same Width',
    cssClass: 'min-w-100',
  },
  sameHeightButton: {
    iconCss: 'icon-small icon-height',
    content: 'Same Height',
    cssClass: 'min-w-100',
  },
  sameSizeButton: {
    iconCss: 'icon-small icon-size-square',
    content: 'Same Size ',
    cssClass: 'min-w-100 flex-row-center',
  },
  snapGridButton: {
    iconCss: 'icon-small icon-grid',
    content: '',
    cssClass: 'min-w-70',
  },
  snapRulerButton: {
    iconCss: 'icon-small icon-axis',
    content: '',
    cssClass: 'min-w-70',
  },
  snapGuideLineButton: {
    iconCss: 'icon-small icon-length',
    content: '',
    cssClass: 'min-w-70 length-setting',
  },
  modelHorizonButton: {
    iconCss: 'icon icon-left-alignment',
    content: 'Model Horizon',
    cssClass: 'min-w-100',
  },
  modelVerticalButton: {
    iconCss: 'icon icon-top-align',
    content: 'Model Vertical',
    cssClass: 'min-w-100',
  },
  sizeToWindowPointButton: {
    iconCss: 'icon icon-program',
    content: 'Size To Window',
    cssClass: 'min-w-100',
  },

  // Theory insert speak logic
  theory1Dropdown: {
    iconCss: 'icon icon-theory1',
    content: 'Theory',
    target: '#theory1-dropdown',
    createPopupOnClick: true
  },
  theory1DropdownData: [
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
  ],
  theory2Dropdown: {
    iconCss: 'icon icon-theory2',
    content: 'Theory',
    target: '#theory2-dropdown',
    createPopupOnClick: true
  },
  theory2DropdownData: [
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
  ],
  fundamentalDropdown: {
    iconCss: 'icon icon-fundamental1',
    content: 'Fundamental',
    target: '#fundamental1-dropdown',
    createPopupOnClick: true
  },
  fundamentalDropdownData: [
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
  ],
  theoryFunctionDropdown: {
    iconCss: 'icon icon-function2',
    content: 'Function',
    target: '#function2-dropdown',
    createPopupOnClick: true
  },
  theoryFunctionDropdownData: [
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
  ],
  timeDropdown: {
    iconCss: 'icon icon-time',
    content: 'Time',
    target: '#time-dropdown',
    createPopupOnClick: true
  },
  timeDropdownData: [
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
  ],
  derivativeDropdown: {
    iconCss: 'icon icon-derivative',
    content: 'Derivative',
    target: '#derivative-dropdown',
    createPopupOnClick: true
  },
  derivativeDropdownData: [
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
  ],
  instrumentDropdown: {
    iconCss: 'icon icon-instrusment',
    content: 'Instrusment',
    target: '#instrusment-dropdown',
    createPopupOnClick: true
  },
  instrumentDropdownData: [
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
  ],
  stabilityDropdown: {
    iconCss: 'icon icon-stability',
    content: 'Stability',
    target: '#stability-dropdown',
    createPopupOnClick: true
  },
  stabilityDropdownData: [
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
  ],
  theoremDropdown: {
    iconCss: 'icon icon-theorem',
    content: 'Theorem',
    target: '#theorem-dropdown',
    createPopupOnClick: true
  },
  theoremDropdownData: [
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
  ]
}
