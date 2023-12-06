import { IRibbon } from "src/app/shared/interfaces/ribbon.interface";
import {ARROW, GREEKCAPTITAL, GREEKSMALL, OPERATOR} from "src/app/utils/constants";
import FileSaver from "file-saver";

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
      id: 'containerPlain',
      text: 'Plain',
      img: '/assets/images/plainsubmenucontainerinsert.png'
    },
    {
      id: 'containerClassic',
      text: 'Classic',
      img: '/assets/images/classicsubmenucontainerinsert.png'
    },
    {
      id: 'containerCorners',
      text: 'Corners',
      img: '/assets/images/cornerssubmenucontainerinsert.png'
    },
    {
      id: 'containerAlternating',
      text: 'Alternating',
      img: '/assets/images/alternatingsubmenucontainerinsert.png'
    },
    {
      id: 'containerBanner',
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
          id: 'listVerticalPlan',
          text: 'Plain',
          img: '/assets/images/plainsubmenucontainerinsert.png',
          group: 'Vertical'
        },
        {
          id: 'listVerticalClassic',
          text: 'Classic',
          img: '/assets/images/classicsubmenucontainerinsert.png',
          group: 'Vertical'
        },
        {
          id: 'listVerticalCorners',
          text: 'Corners',
          img: '/assets/images/cornerssubmenucontainerinsert.png',
          group: 'Vertical'
        },
        {
          id: 'listVerticalAlternating',
          text: 'Alternating',
          img: '/assets/images/alternatingsubmenucontainerinsert.png',
          group: 'Vertical'
        },
        {
          id: 'listVerticalBanner',
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
          id: 'listHorizontalPlan',
          text: 'Plain',
          img: '/assets/images/plainsubmenucontainerinsert.png',
          group: 'Horizontal'
        },
        {
          id: 'listHorizontalClassic',
          text: 'Classic',
          img: '/assets/images/classicsubmenucontainerinsert.png',
          group: 'VertHorizontalical'
        },
        {
          id: 'listHorizontalCorners',
          text: 'Corners',
          img: '/assets/images/cornerssubmenucontainerinsert.png',
          group: 'Horizontal'
        },
        {
          id: 'listHorizontalAlternating',
          text: 'Alternating',
          img: '/assets/images/alternatingsubmenucontainerinsert.png',
          group: 'Horizontal'
        },
        {
          id: 'listHorizontalBanner',
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
      id: 'function_1',
      img: '/assets/images/function_1.png'
    },
    {
      id: 'function_2',
      img: '/assets/images/function_2.png'
    },
    {
      id: 'function_3',
      img: '/assets/images/function_3.png'
    },
    {
      id: 'function_4',
      img: '/assets/images/function_4.png'
    },
    {
      id: 'function_5',
      img: '/assets/images/function_5.png'
    },
    {
      id: 'function_6',
      img: '/assets/images/function_6.png'
    },
    {
      id: 'function_7',
      img: '/assets/images/function_7.png'
    },
    {
      id: 'function_8',
      img: '/assets/images/function_8.png'
    },
    {
      id: 'function_9',
      img: '/assets/images/function_9.png'
    },
    {
      id: 'function_10',
      img: '/assets/images/function_10.png'
    },
    {
      id: 'function_11',
      img: '/assets/images/function_11.png'
    },
    {
      id: 'function_12',
      img: '/assets/images/function_12.png'
    },
    {
      id: 'function_13',
      img: '/assets/images/function_13.png'
    },
    {
      id: 'function_14',
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
      id: 'word_1',
      img: '/assets/images/word_1.png'
    },
    {
      id: 'word_2',
      img: '/assets/images/word_2.png'
    },
    {
      id: 'word_3',
      img: '/assets/images/word_3.png'
    },
    {
      id: 'word_4',
      img: '/assets/images/word_4.png'
    },
    {
      id: 'word_5',
      img: '/assets/images/word_5.png'
    },
    {
      id: 'word_6',
      img: '/assets/images/word_6.png'
    },
    {
      id: 'word_7',
      img: '/assets/images/word_7.png'
    },
    {
      id: 'word_8',
      img: '/assets/images/word_8.png'
    },
    {
      id: 'word_9',
      img: '/assets/images/word_9.png'
    },
    {
      id: 'word_10',
      img: '/assets/images/word_10.png'
    },
    {
      id: 'word_11',
      img: '/assets/images/word_11.png'
    },
    {
      id: 'word_12',
      img: '/assets/images/word_12.png'
    },
    {
      id: 'word_13',
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
      id: 'Application_1',
      img: '/assets/images/Application_1.png'
    },
    {
      id: 'Application_2',
      img: '/assets/images/Application_2.png'
    },
    {
      id: 'Application_3',
      img: '/assets/images/Application_3.png'
    },
    {
      id: 'Application_4',
      img: '/assets/images/Application_4.png'
    },
    {
      id: 'Application_5',
      img: '/assets/images/Application_5.png'
    },
    {
      id: 'Application_6',
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
      id: 'Relationship_1',
      img: '/assets/images/Relationship_1.png'
    },
    {
      id: 'Relationship_2',
      img: '/assets/images/Relationship_2.png'
    },
    {
      id: 'Relationship_3',
      img: '/assets/images/Relationship_3.png'
    },
    {
      id: 'Relationship_4',
      img: '/assets/images/Relationship_4.png'
    },
    {
      id: 'Relationship_5',
      img: '/assets/images/Relationship_5.png'
    },
    {
      id: 'Relationship_6',
      img: '/assets/images/Relationship_6.png'
    },
    {
      id: 'Relationship_7',
      img: '/assets/images/Relationship_7.png'
    },
    {
      id: 'Relationship_8',
      img: '/assets/images/Relationship_8.png'
    },
    {
      id: 'Relationship_9',
      img: '/assets/images/Relationship_9.png'
    },
    {
      id: 'Relationship_10',
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
      id: 'AngleBar',
      img: '/assets/images/brackets/AngleBar.png'
    },
    {
      id: 'BarAngle',
      img: '/assets/images/brackets/BarAngle.png'
    },
    {
      id: 'BottomCurlyBracket',
      img: '/assets/images/brackets/BottomCurlyBracket.png'
    },
    {
      id: 'BottomSquareBracket',
      img: '/assets/images/brackets/BottomSquareBracket.png'
    },
    {
      id: 'Ceiling',
      img: '/assets/images/brackets/Ceiling.png'
    },
    {
      id: 'CurlyBracket',
      img: '/assets/images/brackets/CurlyBracket.png'
    },
    {
      id: 'DoubleArrowBarBracket',
      img: '/assets/images/brackets/DoubleArrowBarBracket.png'
    },
    {
      id: 'DoubleBar',
      img: '/assets/images/brackets/DoubleBar.png'
    },
    {
      id: 'Floor',
      img: '/assets/images/brackets/Floor.png'
    },
    {
      id: 'LeftAngle',
      img: '/assets/images/brackets/LeftAngle.png'
    },
    {
      id: 'LeftBar',
      img: '/assets/images/brackets/LeftBar.png'
    },
    {
      id: 'LeftCurlyBracket',
      img: '/assets/images/brackets/LeftCurlyBracket.png'
    },
    {
      id: 'LeftDoubleBar',
      img: '/assets/images/brackets/LeftDoubleBar.png'
    },
    {
      id: 'LeftLeftSquareBracket',
      img: '/assets/images/brackets/LeftLeftSquareBracket.png'
    },
    {
      id: 'LeftParenthesis',
      img: '/assets/images/brackets/LeftParenthesis.png'
    },
    {
      id: 'LeftSquareBar',
      img: '/assets/images/brackets/LeftSquareBar.png'
    },
    {
      id: 'LeftSquareBracket',
      img: '/assets/images/brackets/LeftSquareBracket.png'
    },
    {
      id: 'Parentheses',
      img: '/assets/images/brackets/Parentheses.png'
    },
    {
      id: 'ParenthesisSquare',
      img: '/assets/images/brackets/ParenthesisSquare.png'
    },
    {
      id: 'PointingAngles',
      img: '/assets/images/brackets/PointingAngles.png'
    },
    {
      id: 'RightAngle',
      img: '/assets/images/brackets/RightAngle.png'
    },
    {
      id: 'RightBar',
      img: '/assets/images/brackets/RightBar.png'
    },
    {
      id: 'RightCurlyBracket',
      img: '/assets/images/brackets/RightCurlyBracket.png'
    },
    {
      id: 'RightDoubleBar',
      img: '/assets/images/brackets/RightDoubleBar.png'
    },
    {
      id: 'RightLeftSquareBracket',
      img: '/assets/images/brackets/RightLeftSquareBracket.png'
    },
    {
      id: 'RightParenthesis',
      img: '/assets/images/brackets/RightParenthesis.png'
    },
    {
      id: 'RightRightSquareBracket',
      img: '/assets/images/brackets/RightRightSquareBracket.png'
    },
    {
      id: 'RightSquareBar',
      img: '/assets/images/brackets/RightSquareBar.png'
    },
    {
      id: 'RightSquareBracket',
      img: '/assets/images/brackets/RightSquareBracket.png'
    },
    {
      id: 'SingleBar',
      img: '/assets/images/brackets/SingleBar.png'
    },
    {
      id: 'SquareBar',
      img: '/assets/images/brackets/SquareBar.png'
    },
    {
      id: 'SquareBracket',
      img: '/assets/images/brackets/SquareBracket.png'
    },
    {
      id: 'SquareParenthesesBracket',
      img: '/assets/images/brackets/SquareParenthesesBracket.png'
    },
    {
      id: 'SquareParenthesis',
      img: '/assets/images/brackets/SquareParenthesis.png'
    },
    {
      id: 'TopCurlyBracket',
      img: '/assets/images/brackets/TopCurlyBracket.png'
    },
    {
      id: 'TopSquareBracket',
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
      id: 'bottomBar',
      img: '/assets/images/equation/bottomBar.png'
    },
    {
      id: 'bottomDoubleArrow',
      img: '/assets/images/equation/bottomDoubleArrow.png'
    },
    {
      id: 'bottomDoubleBar',
      img: '/assets/images/equation/bottomDoubleBar.png'
    },
    {
      id: 'bottomLeftArrow',
      img: '/assets/images/equation/bottomLeftArrow.png'
    },
    {
      id: 'bottomLeftHalfArrow',
      img: '/assets/images/equation/bottomLeftHalfArrow.png'
    },
    {
      id: 'bottomRightArrow',
      img: '/assets/images/equation/bottomRightArrow.png'
    },
    {
      id: 'bottomRightHalfArrow',
      img: '/assets/images/equation/bottomRightHalfArrow.png'
    },
    {
      id: 'cross',
      img: '/assets/images/equation/cross.png'
    },
    {
      id: 'hat',
      img: '/assets/images/equation/hat.png'
    },
    {
      id: 'leftCross',
      img: '/assets/images/equation/leftCross.png'
    },
    {
      id: 'parenthesis',
      img: '/assets/images/equation/parenthesis.png'
    },
    {
      id: 'rightCross',
      img: '/assets/images/equation/rightCross.png'
    },
    {
      id: 'strikeThrough',
      img: '/assets/images/equation/strikeThrough.png'
    },
    {
      id: 'tilde',
      img: '/assets/images/equation/tilde.png'
    },
    {
      id: 'topBar',
      img: '/assets/images/equation/topBar.png'
    },
    {
      id: 'topDoubleArrow',
      img: '/assets/images/equation/topDoubleArrow.png'
    },
    {
      id: 'topDoubleBar',
      img: '/assets/images/equation/topDoubleBar.png'
    },
    {
      id: 'topLeftArrow',
      img: '/assets/images/equation/topLeftArrow.png'
    },
    {
      id: 'topLeftHalfArrow',
      img: '/assets/images/equation/topLeftHalfArrow.png'
    },
    {
      id: 'topRightArrow',
      img: '/assets/images/equation/topRightArrow.png'
    },
    {
      id: 'topRightHalfArrow',
      img: '/assets/images/equation/topRightHalfArrow.png'
    },
    {
      id: 'tortoise',
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
      id: 'coProduct',
      img: '/assets/images/sumsProducts/coProduct.png'
    },
    {
      id: 'coProductBottom',
      img: '/assets/images/sumsProducts/coProductBottom.png'
    },
    {
      id: 'coProductBottomTop',
      img: '/assets/images/sumsProducts/coProductBottomTop.png'
    },
    {
      id: 'coProductSub',
      img: '/assets/images/sumsProducts/coProductSub.png'
    },
    {
      id: 'coProductSubSuper',
      img: '/assets/images/sumsProducts/coProductSubSuper.png'
    },
    {
      id: 'intersection',
      img: '/assets/images/sumsProducts/intersection.png'
    },
    {
      id: 'intersectionBottom',
      img: '/assets/images/sumsProducts/intersectionBottom.png'
    },
    {
      id: 'intersectionBottomTop',
      img: '/assets/images/sumsProducts/intersectionBottomTop.png'
    },
    {
      id: 'intersectionSub',
      img: '/assets/images/sumsProducts/intersectionSub.png'
    },
    {
      id: 'intersectionSubSuper',
      img: '/assets/images/sumsProducts/intersectionSubSuper.png'
    },
    {
      id: 'product',
      img: '/assets/images/sumsProducts/product.png'
    },
    {
      id: 'productBottom',
      img: '/assets/images/sumsProducts/productBottom.png'
    },
    {
      id: 'ProductBottomTop',
      img: '/assets/images/sumsProducts/ProductBottomTop.png'
    },
    {
      id: 'productSub',
      img: '/assets/images/sumsProducts/productSub.png'
    },
    {
      id: 'productSubSuper',
      img: '/assets/images/sumsProducts/productSubSuper.png'
    },
    {
      id: 'sum',
      img: '/assets/images/sumsProducts/sum.png'
    },
    {
      id: 'sumBottom',
      img: '/assets/images/sumsProducts/sumBottom.png'
    },
    {
      id: 'sumBottomTop',
      img: '/assets/images/sumsProducts/sumBottomTop.png'
    },
    {
      id: 'sumSub',
      img: '/assets/images/sumsProducts/sumSub.png'
    },
    {
      id: 'sumSubSuper',
      img: '/assets/images/sumsProducts/sumSubSuper.png'
    },
    {
      id: 'union',
      img: '/assets/images/sumsProducts/union.png'
    },
    {
      id: 'unionBottom',
      img: '/assets/images/sumsProducts/unionBottom.png'
    },
    {
      id: 'unionBottomTop',
      img: '/assets/images/sumsProducts/unionBottomTop.png'
    },
    {
      id: 'unionSub',
      img: '/assets/images/sumsProducts/unionSub.png'
    },
    {
      id: 'unionSubSuper',
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
      id: 'SingleBottom',
      img: '/assets/images/integrals/Single/Bottom.png'
    },
    {
      id: 'SingleBottomTop',
      img: '/assets/images/integrals/Single/BottomTop.png'
    },
    {
      id: 'SingleSimple',
      img: '/assets/images/integrals/Single/Simple.png'
    },
    {
      id: 'SingleSub',
      img: '/assets/images/integrals/Single/Sub.png'
    },
    {
      id: 'SingleSubSuper',
      img: '/assets/images/integrals/Single/SubSuper.png'
    },
    {
      id: 'DoubleBottom',
      img: '/assets/images/integrals/Double/Bottom.png'
    },
    {
      id: 'DoubleBottomTop',
      img: '/assets/images/integrals/Double/BottomTop.png'
    },
    {
      id: 'DoubleSimple',
      img: '/assets/images/integrals/Double/Simple.png'
    },
    {
      id: 'DoubleSub',
      img: '/assets/images/integrals/Double/Sub.png'
    },
    {
      id: 'DoubleSubSuper',
      img: '/assets/images/integrals/Double/SubSuper.png'
    },
    {
      id: 'TripleBottom',
      img: '/assets/images/integrals/Triple/Bottom.png'
    },
    {
      id: 'TripleBottomTop',
      img: '/assets/images/integrals/Triple/BottomTop.png'
    },
    {
      id: 'TripleSimple',
      img: '/assets/images/integrals/Triple/Simple.png'
    },
    {
      id: 'TripleSub',
      img: '/assets/images/integrals/Triple/Sub.png'
    },
    {
      id: 'TripleSubSuper',
      img: '/assets/images/integrals/Triple/SubSuper.png'
    },
    {
      id: 'ClockBottom',
      img: '/assets/images/integrals/Clock/Bottom.png'
    },
    {
      id: 'ClockBottomTop',
      img: '/assets/images/integrals/Clock/BottomTop.png'
    },
    {
      id: 'ClockSimple',
      img: '/assets/images/integrals/Clock/Simple.png'
    },
    {
      id: 'ClockSub',
      img: '/assets/images/integrals/Clock/Sub.png'
    },
    {
      id: 'ClockSubSuper',
      img: '/assets/images/integrals/Clock/SubSuper.png'
    },
    {
      id: 'SurfaceBottom',
      img: '/assets/images/integrals/Surface/Bottom.png'
    },
    {
      id: 'SurfaceBottomTop',
      img: '/assets/images/integrals/Surface/BottomTop.png'
    },
    {
      id: 'SurfaceSimple',
      img: '/assets/images/integrals/Surface/Simple.png'
    },
    {
      id: 'SurfaceSub',
      img: '/assets/images/integrals/Surface/Sub.png'
    },
    {
      id: 'SurfaceSubSuper',
      img: '/assets/images/integrals/Surface/SubSuper.png'
    },
    {
      id: 'VolumeBottom',
      img: '/assets/images/integrals/volume/Bottom.png'
    },
    {
      id: 'VolumeBottomTop',
      img: '/assets/images/integrals/volume/BottomTop.png'
    },
    {
      id: 'VolumeSimple',
      img: '/assets/images/integrals/volume/Simple.png'
    },
    {
      id: 'VolumeSub',
      img: '/assets/images/integrals/volume/Sub.png'
    },
    {
      id: 'VolumeSubSuper',
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
      id: 'Sub',
      img: '/assets/images/Sub.png'
    },
    {
      id: 'SubLeft',
      img: '/assets/images/SubLeft.png'
    },
    {
      id: 'SubSuper',
      img: '/assets/images/SubSuper.png'
    },
    {
      id: 'SubSuperLeft',
      img: '/assets/images/SubSuperLeft.png'
    },
    {
      id: 'Super',
      img: '/assets/images/Super.png'
    },
    {
      id: 'SuperLeft',
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
      id: 'Div',
      img: '/assets/images/Div.png'
    },
    {
      id: 'DivDoubleBar',
      img: '/assets/images/DivDoubleBar.png'
    },
    {
      id: 'DivHoriz',
      img: '/assets/images/DivHoriz.png'
    },
    {
      id: 'DivMath',
      img: '/assets/images/DivMath.png'
    },
    {
      id: 'DivMathInverted',
      img: '/assets/images/DivMathInverted.png'
    },
    {
      id: 'DivMathInvertedWithBottom',
      img: '/assets/images/DivMathInvertedWithBottom.png'
    },
    {
      id: 'DivMathWithTop',
      img: '/assets/images/DivMathWithTop.png'
    },
    {
      id: 'DivSlant',
      img: '/assets/images/DivSlant.png'
    },
    {
      id: 'DivTriangleExpanding',
      img: '/assets/images/DivTriangleExpanding.png'
    },
    {
      id: 'DivTriangleFixed',
      img: '/assets/images/DivTriangleFixed.png'
    },
    {
      id: 'DivTripleBar',
      img: '/assets/images/DivTripleBar.png'
    },
    {
      id: 'nRoot',
      img: '/assets/images/nRoot.png'
    },
    {
      id: 'SmallDiv',
      img: '/assets/images/SmallDiv.png'
    },
    {
      id: 'SmallDivHoriz',
      img: '/assets/images/SmallDivHoriz.png'
    },
    {
      id: 'SmallDivSlant',
      img: '/assets/images/SmallDivSlant.png'
    },
    {
      id: 'SqRoot',
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
      id: 'ArrowDoubleBottom',
      img: '/assets/images/arrow/DoubleBottom.png'
    },
    {
      id: 'ArrowDoubleBottomTop',
      img: '/assets/images/arrow/DoubleBottomTop.png'
    },
    {
      id: 'ArrowDoubleTop',
      img: '/assets/images/arrow/DoubleTop.png'
    },
    {
      id: 'LeftBottom',
      img: '/assets/images/arrow/LeftBottom.png'
    },
    {
      id: 'LeftBottomTop',
      img: '/assets/images/arrow/LeftBottomTop.png'
    },
    {
      id: 'LeftTop',
      img: '/assets/images/arrow/LeftTop.png'
    },
    {
      id: 'RightBottom',
      img: '/assets/images/arrow/RightBottom.png'
    },
    {
      id: 'RightBottomTop',
      img: '/assets/images/arrow/RightBottomTop.png'
    },
    {
      id: 'RightLeftBottom',
      img: '/assets/images/arrow/RightLeftBottom.png'
    },
    {
      id: 'RightLeftBottomTop',
      img: '/assets/images/arrow/RightLeftBottomTop.png'
    },
    {
      id: 'RightLeftHarpBottom',
      img: '/assets/images/arrow/RightLeftHarpBottom.png'
    },
    {
      id: 'RightLeftHarpBottomTop',
      img: '/assets/images/arrow/RightLeftHarpBottomTop.png'
    },
    {
      id: 'RightLeftHarpTop',
      img: '/assets/images/arrow/RightLeftHarpTop.png'
    },
    {
      id: 'RightLeftTop',
      img: '/assets/images/arrow/RightLeftTop.png'
    },
    {
      id: 'RightSmallLeftBottom',
      img: '/assets/images/arrow/RightSmallLeftBottom.png'
    },
    {
      id: 'RightSmallLeftBottomTop',
      img: '/assets/images/arrow/RightSmallLeftBottomTop.png'
    },
    {
      id: 'RightSmallLeftHarpBottom',
      img: '/assets/images/arrow/RightSmallLeftHarpBottom.png'
    },
    {
      id: 'RightSmallLeftHarpBottomTop',
      img: '/assets/images/arrow/RightSmallLeftHarpBottomTop.png'
    },
    {
      id: 'RightSmallLeftHarpTop',
      img: '/assets/images/arrow/RightSmallLeftHarpTop.png'
    },
    {
      id: 'RightSmallLeftTop',
      img: '/assets/images/arrow/RightSmallLeftTop.png'
    },
    {
      id: 'RightTop',
      img: '/assets/images/arrow/RightTop.png'
    },
    {
      id: 'SmallRightLeftBottom',
      img: '/assets/images/arrow/SmallRightLeftBottom.png'
    },
    {
      id: 'SmallRightLeftHarpBottom',
      img: '/assets/images/arrow/SmallRightLeftHarpBottom.png'
    },
    {
      id: 'SmallRightLeftHarpBottomTop',
      img: '/assets/images/arrow/SmallRightLeftHarpBottomTop.png'
    },
    {
      id: 'SmallRightLeftHarpTop',
      img: '/assets/images/arrow/SmallRightLeftHarpTop.png'
    },
    {
      id: 'SmallRightLeftTop',
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
      id: 'BigBottom',
      img: '/assets/images/BigBottom.png'
    },
    {
      id: 'BigBottomTop',
      img: '/assets/images/BigBottomTop.png'
    },
    {
      id: 'BigSub',
      img: 'assets/images/BigSub.png'
    },
    {
      id: 'BigSubSuper',
      img: '/assets/images/BigSubSuper.png'
    },
    {
      id: 'BigSuper',
      img: '/assets/images/BigSuper.png'
    },
    {
      id: 'BigTop',
      img: '/assets/images/BigTop.png'
    },
    {
      id: 'CompositeBottom',
      img: '/assets/images/CompositeBottom.png'
    },
    {
      id: 'CompositeBottomTop',
      img: '/assets/images/CompositeBottomTop.png'
    },
    {
      id: 'CompositeTop',
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
      id: 'CharacterAcuteAccent',
      img: '/assets/images/character/AcuteAccent.png'
    },
    {
      id: 'CharacterBottomBar',
      img: '/assets/images/character/BottomBar.png'
    },
    {
      id: 'CharacterBottomBreve',
      img: '/assets/images/character/BottomBreve.png'
    },
    {
      id: 'CharacterBottomDDot',
      img: '/assets/images/character/BottomDDot.png'
    },
    {
      id: 'CharacterBottomDot',
      img: '/assets/images/character/BottomDot.png'
    },
    {
      id: 'CharacterBottomDoubleArrow',
      img: '/assets/images/character/BottomDoubleArrow.png'
    },
    {
      id: 'CharacterBottomFourDot',
      img: '/assets/images/character/BottomFourDot.png'
    },
    {
      id: 'CharacterBottomInvertedBreve',
      img: '/assets/images/character/BottomInvertedBreve.png'
    },
    {
      id: 'CharacterBottomLeftArrow',
      img: '/assets/images/character/BottomLeftArrow.png'
    },
    {
      id: 'CharacterBottomLeftHarpoon',
      img: '/assets/images/character/BottomLeftHarpoon.png'
    },
    {
      id: 'CharacterBottomRightArrow',
      img: '/assets/images/character/BottomRightArrow.png'
    },
    {
      id: 'CharacterBottomRightHarpoon',
      img: '/assets/images/character/BottomRightHarpoon.png'
    },
    {
      id: 'CharacterBottomTilde',
      img: '/assets/images/character/BottomTDot.png'
    },
    {
      id: 'CharacterBottomTilde',
      img: '/assets/images/character/BottomTilde.png'
    },
    {
      id: 'CharacterCross',
      img: '/assets/images/character/Cross.png'
    },
    {
      id: 'CharacterDoublePrime',
      img: '/assets/images/character/DoublePrime.png'
    },
    {
      id: 'CharacterDoubleStrikeThrough',
      img: '/assets/images/character/DoubleStrikeThrough.png'
    },
    {
      id: 'CharacterGraveAccent',
      img: '/assets/images/character/GraveAccent.png'
    },
    {
      id: 'CharacterLeftCross',
      img: '/assets/images/character/LeftCross.png'
    },
    {
      id: 'CharacterLeftUprightCross',
      img: '/assets/images/character/LeftUprightCross.png'
    },
    {
      id: 'CharacterNone',
      img: '/assets/images/character/None.png'
    },
    {
      id: 'CharacterPrime',
      img: '/assets/images/character/Prime.png'
    },
    {
      id: 'CharacterReverseDoublePrime',
      img: '/assets/images/character/ReverseDoublePrime.png'
    },
    {
      id: 'CharacterReversePrime',
      img: '/assets/images/character/ReversePrime.png'
    },
    {
      id: 'CharacterRightCross',
      img: '/assets/images/character/RightCross.png'
    },
    {
      id: 'CharacterRightUprightCross',
      img: '/assets/images/character/RightUprightCross.png'
    },
    {
      id: 'CharacterStrikeThrough',
      img: '/assets/images/character/StrikeThrough.png'
    },
    {
      id: 'CharacterTopBar',
      img: '/assets/images/character/TopBar.png'
    },
    {
      id: 'CharacterTopBreve',
      img: '/assets/images/character/TopBreve.png'
    },
    {
      id: 'CharacterTopCaron',
      img: '/assets/images/character/TopCaron.png'
    },
    {
      id: 'CharacterTopCircumflex',
      img: '/assets/images/character/TopCircumflex.png'
    },
    {
      id: 'CharacterTopDDot',
      img: '/assets/images/character/TopDDot.png'
    },
    {
      id: 'CharacterTopDot',
      img: '/assets/images/character/TopDot.png'
    },
    {
      id: 'CharacterTopDoubleArrow',
      img: '/assets/images/character/TopDoubleArrow.png'
    },
    {
      id: 'CharacterTopFourDot',
      img: '/assets/images/character/TopFourDot.png'
    },
    {
      id: 'CharacterTopInvertedBreve',
      img: '/assets/images/character/TopInvertedBreve.png'
    },
    {
      id: 'CharacterTopLeftArrow',
      img: '/assets/images/character/TopLeftArrow.png'
    },
    {
      id: 'CharacterTopLeftHarpoon',
      img: '/assets/images/character/TopLeftHarpoon.png'
    },
    {
      id: 'CharacterTopRightArrow',
      img: '/assets/images/character/TopRightArrow.png'
    },
    {
      id: 'CharacterTopRightHarpoon',
      img: '/assets/images/character/TopRightHarpoon.png'
    },
    {
      id: 'CharacterTopRightRing',
      img: '/assets/images/character/TopRightRing.png'
    },
    {
      id: 'CharacterTopRing',
      img: '/assets/images/character/TopRing.png'
    },
    {
      id: 'CharacterTopTDot',
      img: '/assets/images/character/TopTDot.png'
    },
    {
      id: 'CharacterTopTilde',
      img: '/assets/images/character/TopTilde.png'
    },
    {
      id: 'CharacterTriplePrime',
      img: '/assets/images/character/TriplePrime.png'
    },
    {
      id: 'CharacterVDoubleStrikeThrough',
      img: '/assets/images/character/VDoubleStrikeThrough.png'
    },
    {
      id: 'CharacterVStrikeThrough',
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
      id: '2cellColumn',
      img: '/assets/images/2cellColumn.png'
    },
    {
      id: '2cellRow',
      img: '/assets/images/2cellRow.png'
    },
    {
      id: '2Square',
      img: 'assets/images/2Square.png'
    },
    {
      id: '3cellColumn',
      img: '/assets/images/3cellColumn.png'
    },
    {
      id: '3cellRow',
      img: '/assets/images/3cellRow.png'
    },
    {
      id: '3Square',
      img: '/assets/images/3Square.png'
    },
    {
      id: 'column',
      img: '/assets/images/column.png'
    },
    {
      id: 'custom',
      img: '/assets/images/custom.png'
    },
    {
      id: 'row',
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
      id: 'BoxAll',
      img: '/assets/images/all.png'
    },
    {
      id: 'BoxLeftBottom',
      img: '/assets/images/leftBottom.png'
    },
    {
      id: 'BoxLeftTop',
      img: 'assets/images/leftTop.png'
    },
    {
      id: 'BoxRightBottom',
      img: '/assets/images/rightBottom.png'
    },
    {
      id: 'BoxRightTop',
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
    id: value.toString(),
    text: value,
    type: 'normal'
  })),
  greekCapitalDropdown: {
    iconCss: 'icon-medium icon-greekcapital',
    content: 'Greek Capital',
    cssClass: 'min-w-120',
    target: '#greek-capital-dropdown',
    createPopupOnClick: true
  },
  greekCapitalDropdownData: GREEKCAPTITAL.map((value, index) => ({
    id: value.toString(),
    text: value,
    type: 'large'
  })),
  greekSmallDropdown: {
    iconCss: 'icon-medium icon-greeksmall',
    content: 'Greek Small',
    cssClass: 'min-w-120',
    target: '#greek-small-dropdown',
    createPopupOnClick: true
  },
  greekSmallDropdownData: GREEKSMALL.map((value, index) => ({
    id: value.toString(),
    text: value,
    type: 'large'
  })),
  arrowDropdown: {
    iconCss: 'icon-medium icon-arrows',
    cssClass: 'min-w-120',
    content: 'Arrow',
    target: '#arrow-code-dropdown',
    createPopupOnClick: true
  },
  arrowCodeDropdownData: ARROW.map((value, idx) => ({
    id: value.toString(),
    text: value,
    type: 'large'
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
      id: 'Theory_1',
      img: '/assets/images/speaklogic/Theory/Theory_1.png'
    },
    {
      id: 'Theory_2',
      img: '/assets/images/speaklogic/Theory/Theory_2.png'
    },
    {
      id: 'Theory_3',
      img: '/assets/images/speaklogic/Theory/Theory_3.png'
    },
    {
      id: 'Theory_4',
      img: '/assets/images/speaklogic/Theory/Theory_4.png'
    },
    {
      id: 'Theory_5',
      img: '/assets/images/speaklogic/Theory/Theory_5.png'
    },
    {
      id: 'Theory_6',
      img: '/assets/images/speaklogic/Theory/Theory_6.png'
    },
    {
      id: 'Theory_7',
      img: '/assets/images/speaklogic/Theory/Theory_7.png'
    },
    {
      id: 'Theory_8',
      img: '/assets/images/speaklogic/Theory/Theory_8.png'
    },
    {
      id: 'Theory_9',
      img: '/assets/images/speaklogic/Theory/Theory_9.png'
    },
    {
      id: 'Theory_10',
      img: '/assets/images/speaklogic/Theory/Theory_10.png'
    },
    {
      id: 'Theory_11',
      img: '/assets/images/speaklogic/Theory/Theory_11.png'
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
      id: 'Theory_Dropdown_1',
      img: '/assets/images/speaklogic/Theory2/Theory_Dropdown_1.png'
    },
    {
      id: 'Theory_Dropdown_2',
      img: '/assets/images/speaklogic/Theory2/Theory_Dropdown_2.png'
    },
    {
      id: 'Theory_Dropdown_3',
      img: '/assets/images/speaklogic/Theory2/Theory_Dropdown_3.png'
    },
    {
      id: 'Theory_Dropdown_4',
      img: '/assets/images/speaklogic/Theory2/Theory_Dropdown_4.png'
    },
    {
      id: 'Theory_Dropdown_5',
      img: '/assets/images/speaklogic/Theory2/Theory_Dropdown_5.png'
    },
    {
      id: 'Theory_Dropdown_6',
      img: '/assets/images/speaklogic/Theory2/Theory_Dropdown_6.png'
    },
    {
      id: 'Theory_Dropdown_7',
      img: '/assets/images/speaklogic/Theory2/Theory_Dropdown_7.png'
    },
    {
      id: 'Theory_Dropdown_8',
      img: '/assets/images/speaklogic/Theory2/Theory_Dropdown_8.png'
    },
    {
      id: 'Theory_Dropdown_9',
      img: '/assets/images/speaklogic/Theory2/Theory_Dropdown_9.png'
    },
    {
      id: 'Theory_Dropdown_10',
      img: '/assets/images/speaklogic/Theory2/Theory_Dropdown_10.png'
    },
    {
      id: 'Theory_Dropdown_11',
      img: '/assets/images/speaklogic/Theory2/Theory_Dropdown_11.png'
    },
    {
      id: 'Theory_Dropdown_12',
      img: '/assets/images/speaklogic/Theory2/Theory_Dropdown_12.png'
    },
    {
      id: 'Theory_Dropdown_13',
      img: '/assets/images/speaklogic/Theory2/Theory_Dropdown_13.png'
    },
    {
      id: 'Theory_Dropdown_14',
      img: '/assets/images/speaklogic/Theory2/Theory_Dropdown_14.png'
    },
    {
      id: 'Theory_Dropdown_15',
      img: '/assets/images/speaklogic/Theory2/Theory_Dropdown_15.png'
    },
    {
      id: 'Theory_Dropdown_16',
      img: '/assets/images/speaklogic/Theory2/Theory_Dropdown_16.png'
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
      id: 'Fundamental_1',
      img: '/assets/images/speaklogic/Fundamental/Fundamental_1.png'
    },
    {
      id: 'Fundamental_2',
      img: '/assets/images/speaklogic/Fundamental/Fundamental_2.png'
    },
    {
      id: 'Fundamental_3',
      img: '/assets/images/speaklogic/Fundamental/Fundamental_3.png'
    },
    {
      id: 'Fundamental_4',
      img: '/assets/images/speaklogic/Fundamental/Fundamental_4.png'
    },
    {
      id: 'Fundamental_5',
      img: '/assets/images/speaklogic/Fundamental/Fundamental_5.png'
    },
    {
      id: 'Fundamental_6',
      img: '/assets/images/speaklogic/Fundamental/Fundamental_6.png'
    },
    {
      id: 'Fundamental_7',
      img: '/assets/images/speaklogic/Fundamental/Fundamental_7.png'
    },
    {
      id: 'Fundamental_8',
      img: '/assets/images/speaklogic/Fundamental/Fundamental_8.png'
    },
    {
      id: 'Fundamental_9',
      img: '/assets/images/speaklogic/Fundamental/Fundamental_9.png'
    },
    {
      id: 'Fundamental_10',
      img: '/assets/images/speaklogic/Fundamental/Fundamental_10.png'
    },
    {
      id: 'Fundamental_11',
      img: '/assets/images/speaklogic/Fundamental/Fundamental_11.png'
    }
  ],
  fundamental2Dropdown: {
    iconCss: 'icon icon-fundamental2',
    content: 'Fundamental',
    target: '#fundamental2-dropdown',
    createPopupOnClick: true
  },
  fundamental2DropdownData: [
    {
      id: 'Fundamental_Dropdown_1',
      img: '/assets/images/speaklogic/DropdownFundamental/Fundamental_Dropdown_1.png'
    },
    {
      id: 'Fundamental_Dropdown_2',
      img: '/assets/images/speaklogic/DropdownFundamental/Fundamental_Dropdown_2.png'
    },
    {
      id: 'Fundamental_Dropdown_3',
      img: '/assets/images/speaklogic/DropdownFundamental/Fundamental_Dropdown_3.png'
    },
    {
      id: 'Fundamental_Dropdown_4',
      img: '/assets/images/speaklogic/DropdownFundamental/Fundamental_Dropdown_4.png'
    },
    {
      id: 'Fundamental_Dropdown_5',
      img: '/assets/images/speaklogic/DropdownFundamental/Fundamental_Dropdown_5.png'
    },
    {
      id: 'Fundamental_Dropdown_6',
      img: '/assets/images/speaklogic/DropdownFundamental/Fundamental_Dropdown_6.png'
    },
    {
      id: 'Fundamental_Dropdown_7',
      img: '/assets/images/speaklogic/DropdownFundamental/Fundamental_Dropdown_7.png'
    },
    {
      id: 'Fundamental_Dropdown_8',
      img: '/assets/images/speaklogic/DropdownFundamental/Fundamental_Dropdown_8.png'
    },
    {
      id: 'Fundamental_Dropdown_9',
      img: '/assets/images/speaklogic/DropdownFundamental/Fundamental_Dropdown_9.png'
    },
    {
      id: 'Fundamental_Dropdown_10',
      img: '/assets/images/speaklogic/DropdownFundamental/Fundamental_Dropdown_10.png'
    },
    {
      id: 'Fundamental_Dropdown_11',
      img: '/assets/images/speaklogic/DropdownFundamental/Fundamental_Dropdown_11.png'
    },
    {
      id: 'Fundamental_Dropdown_12',
      img: '/assets/images/speaklogic/DropdownFundamental/Fundamental_Dropdown_12.png'
    },
    {
      id: 'Fundamental_Dropdown_13',
      img: '/assets/images/speaklogic/DropdownFundamental/Fundamental_Dropdown_13.png'
    },
    {
      id: 'Fundamental_Dropdown_14',
      img: '/assets/images/speaklogic/DropdownFundamental/Fundamental_Dropdown_14.png'
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
      id: 'Dropdown_Function_1',
      img: '/assets/images/speaklogic/DropdownFunctions/Dropdown_Function_1.png'
    },
    {
      id: 'Dropdown_Function_2',
      img: '/assets/images/speaklogic/DropdownFunctions/Dropdown_Function_2.png'
    },
    {
      id: 'Dropdown_Function_3',
      img: '/assets/images/speaklogic/DropdownFunctions/Dropdown_Function_3.png'
    },
    {
      id: 'Dropdown_Function_4',
      img: '/assets/images/speaklogic/DropdownFunctions/Dropdown_Function_4.png'
    },
    {
      id: 'Dropdown_Function_5',
      img: '/assets/images/speaklogic/DropdownFunctions/Dropdown_Function_5.png'
    },
    {
      id: 'Dropdown_Function_6',
      img: '/assets/images/speaklogic/DropdownFunctions/Dropdown_Function_6.png'
    },
    {
      id: 'Dropdown_Function_7',
      img: '/assets/images/speaklogic/DropdownFunctions/Dropdown_Function_7.png'
    },
    {
      id: 'Dropdown_Function_8',
      img: '/assets/images/speaklogic/DropdownFunctions/Dropdown_Function_8.png'
    },
    {
      id: 'Dropdown_Function_9',
      img: '/assets/images/speaklogic/DropdownFunctions/Dropdown_Function_9.png'
    },
    {
      id: 'Dropdown_Function_10',
      img: '/assets/images/speaklogic/DropdownFunctions/Dropdown_Function_10.png'
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
      id: 'Dropdown_Time_1',
      img: '/assets/images/speaklogic/DropdownTimes/Dropdown_Time_1.png'
    },
    {
      id: 'Dropdown_Time_2',
      img: '/assets/images/speaklogic/DropdownTimes/Dropdown_Time_2.png'
    },
    {
      id: 'Dropdown_Time_3',
      img: '/assets/images/speaklogic/DropdownTimes/Dropdown_Time_3.png'
    },
    {
      id: 'Dropdown_Time_4',
      img: '/assets/images/speaklogic/DropdownTimes/Dropdown_Time_4.png'
    },
    {
      id: 'Dropdown_Time_5',
      img: '/assets/images/speaklogic/DropdownTimes/Dropdown_Time_5.png'
    },
    {
      id: 'Dropdown_Time_6',
      img: '/assets/images/speaklogic/DropdownTimes/Dropdown_Time_6.png'
    },
    {
      id: 'Dropdown_Time_7',
      img: '/assets/images/speaklogic/DropdownTimes/Dropdown_Time_7.png'
    },
    {
      id: 'Dropdown_Time_8',
      img: '/assets/images/speaklogic/DropdownTimes/Dropdown_Time_8.png'
    },
    {
      id: 'Dropdown_Time_9',
      img: '/assets/images/speaklogic/DropdownTimes/Dropdown_Time_9.png'
    },
    {
      id: 'Dropdown_Time_10',
      img: '/assets/images/speaklogic/DropdownTimes/Dropdown_Time_10.png'
    },
    {
      id: 'Dropdown_Time_11',
      img: '/assets/images/speaklogic/DropdownTimes/Dropdown_Time_11.png'
    },
    {
      id: 'Dropdown_Time_12',
      img: '/assets/images/speaklogic/DropdownTimes/Dropdown_Time_12.png'
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
      id: 'Derivative_1',
      img: '/assets/images/speaklogic/Derivatives/Derivative_1.png'
    },
    {
      id: 'Derivative_2',
      img: '/assets/images/speaklogic/Derivatives/Derivative_2.png'
    },
    {
      id: 'Derivative_3',
      img: '/assets/images/speaklogic/Derivatives/Derivative_3.png'
    },
    {
      id: 'Derivative_4',
      img: '/assets/images/speaklogic/Derivatives/Derivative_4.png'
    },
    {
      id: 'Derivative_5',
      img: '/assets/images/speaklogic/Derivatives/Derivative_5.png'
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
      id: 'Instrument_1',
      img: '/assets/images/speaklogic/Instruments/Instrument_1.png'
    },
    {
      id: 'Instrument_2',
      img: '/assets/images/speaklogic/Instruments/Instrument_2.png'
    },
    {
      id: 'Instrument_3',
      img: '/assets/images/speaklogic/Instruments/Instrument_3.png'
    },
    {
      id: 'Instrument_4',
      img: '/assets/images/speaklogic/Instruments/Instrument_4.png'
    },
    {
      id: 'Instrument_5',
      img: '/assets/images/speaklogic/Instruments/Instrument_5.png'
    },
    {
      id: 'Instrument_6',
      img: '/assets/images/speaklogic/Instruments/Instrument_6.png'
    },
    {
      id: 'Instrument_7',
      img: '/assets/images/speaklogic/Instruments/Instrument_7.png'
    },
    {
      id: 'Instrument_8',
      img: '/assets/images/speaklogic/Instruments/Instrument_8.png'
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
      id: 'Stability_1',
      img: '/assets/images/speaklogic/Stability/Stability_1.png'
    },
    {
      id: 'Stability_2',
      img: '/assets/images/speaklogic/Stability/Stability_2.png'
    },
    {
      id: 'Stability_3',
      img: '/assets/images/speaklogic/Stability/Stability_3.png'
    },
    {
      id: 'Stability_4',
      img: '/assets/images/speaklogic/Stability/Stability_4.png'
    },
    {
      id: 'Stability_5',
      img: '/assets/images/speaklogic/Stability/Stability_5.png'
    },
    {
      id: 'Stability_6',
      img: '/assets/images/speaklogic/Stability/Stability_6.png'
    },
    {
      id: 'Stability_7',
      img: '/assets/images/speaklogic/Stability/Stability_7.png'
    },
    {
      id: 'Stability_8',
      img: '/assets/images/speaklogic/Stability/Stability_8.png'
    },
    {
      id: 'Stability_9',
      img: '/assets/images/speaklogic/Stability/Stability_9.png'
    },
    {
      id: 'Stability_10',
      img: '/assets/images/speaklogic/Stability/Stability_10.png'
    },
    {
      id: 'Stability_11',
      img: '/assets/images/speaklogic/Stability/Stability_11.png'
    },
    {
      id: 'Stability_12',
      img: '/assets/images/speaklogic/Stability/Stability_12.png'
    },
    {
      id: 'Stability_13',
      img: '/assets/images/speaklogic/Stability/Stability_13.png'
    },
    {
      id: 'Stability_14',
      img: '/assets/images/speaklogic/Stability/Stability_14.png'
    },
    {
      id: 'Stability_15',
      img: '/assets/images/speaklogic/Stability/Stability_15.png'
    },
    {
      id: 'Stability_16',
      img: '/assets/images/speaklogic/Stability/Stability_16.png'
    },
    {
      id: 'Stability_17',
      img: '/assets/images/speaklogic/Stability/Stability_17.png'
    },
    {
      id: 'Stability_18',
      img: '/assets/images/speaklogic/Stability/Stability_18.png'
    },
    {
      id: 'Stability_19',
      img: '/assets/images/speaklogic/Stability/Stability_19.png'
    },
    {
      id: 'Stability_21',
      img: '/assets/images/speaklogic/Stability/Stability_21.png'
    },
    {
      id: 'Stability_22',
      img: '/assets/images/speaklogic/Stability/Stability_22.png'
    },
    {
      id: 'Stability_23',
      img: '/assets/images/speaklogic/Stability/Stability_23.png'
    },
    {
      id: 'Stability_24',
      img: '/assets/images/speaklogic/Stability/Stability_24.png'
    },
    {
      id: 'Stability_25',
      img: '/assets/images/speaklogic/Stability/Stability_25.png'
    },
    {
      id: 'Stability_26',
      img: '/assets/images/speaklogic/Stability/Stability_26.png'
    },
    {
      id: 'Stability_26',
      img: '/assets/images/speaklogic/Stability/Stability_26.png'
    },
    {
      id: 'Stability_27',
      img: '/assets/images/speaklogic/Stability/Stability_27.png'
    },
    {
      id: 'Stability_28',
      img: '/assets/images/speaklogic/Stability/Stability_28.png'
    },
    {
      id: 'Stability_29',
      img: '/assets/images/speaklogic/Stability/Stability_29.png'
    },
    {
      id: 'Stability_30',
      img: '/assets/images/speaklogic/Stability/Stability_30.png'
    },
    {
      id: 'Stability_31',
      img: '/assets/images/speaklogic/Stability/Stability_31.png'
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
      id: 'Theorem_Dropdown_1',
      img: '/assets/images/speaklogic/Theorems/Theorem_Dropdown_1.png'
    },
    {
      id: 'Theorem_Dropdown_2',
      img: '/assets/images/speaklogic/Theorems/Theorem_Dropdown_2.png'
    },
    {
      id: 'Theorem_Dropdown_3',
      img: '/assets/images/speaklogic/Theorems/Theorem_Dropdown_3.png'
    },
    {
      id: 'Theorem_Dropdown_4',
      img: '/assets/images/speaklogic/Theorems/Theorem_Dropdown_4.png'
    },
    {
      id: 'Theorem_Dropdown_5',
      img: '/assets/images/speaklogic/Theorems/Theorem_Dropdown_5.png'
    },
    {
      id: 'Theorem_Dropdown_6',
      img: '/assets/images/speaklogic/Theorems/Theorem_Dropdown_6.png'
    },
    {
      id: 'Theorem_Dropdown_7',
      img: '/assets/images/speaklogic/Theorems/Theorem_Dropdown_7.png'
    },
    {
      id: 'Theorem_Dropdown_8',
      img: '/assets/images/speaklogic/Theorems/Theorem_Dropdown_8.png'
    },
    {
      id: 'Theorem_Dropdown_9',
      img: '/assets/images/speaklogic/Theorems/Theorem_Dropdown_9.png'
    },
    {
      id: 'Theorem_Dropdown_10',
      img: '/assets/images/speaklogic/Theorems/Theorem_Dropdown_10.png'
    },
    {
      id: 'Theorem_Dropdown_11',
      img: '/assets/images/speaklogic/Theorems/Theorem_Dropdown_11.png'
    },
    {
      id: 'Theorem_Dropdown_12',
      img: '/assets/images/speaklogic/Theorems/Theorem_Dropdown_12.png'
    },
    {
      id: 'Theorem_Dropdown_13',
      img: '/assets/images/speaklogic/Theorems/Theorem_Dropdown_13.png'
    },
    {
      id: 'Theorem_Dropdown_14',
      img: '/assets/images/speaklogic/Theorems/Theorem_Dropdown_14.png'
    },
    {
      id: 'Theorem_Dropdown_15',
      img: '/assets/images/speaklogic/Theorems/Theorem_Dropdown_15.png'
    },
    {
      id: 'Theorem_Dropdown_16',
      img: '/assets/images/speaklogic/Theorems/Theorem_Dropdown_16.png'
    },
    {
      id: 'Theorem_Dropdown_17',
      img: '/assets/images/speaklogic/Theorems/Theorem_Dropdown_17.png'
    },
    {
      id: 'Theorem_Dropdown_18',
      img: '/assets/images/speaklogic/Theorems/Theorem_Dropdown_18.png'
    },
    {
      id: 'Theorem_Dropdown_19',
      img: '/assets/images/speaklogic/Theorems/Theorem_Dropdown_19.png'
    },
    {
      id: 'Theorem_Dropdown_20',
      img: '/assets/images/speaklogic/Theorems/Theorem_Dropdown_20.png'
    },
    {
      id: 'Theorem_Dropdown_21',
      img: '/assets/images/speaklogic/Theorems/Theorem_Dropdown_21.png'
    }
  ]
};

export async function recordScreen(audio = true, video = true) {
  const constaints = {};
  if (!!audio) {
    constaints['audio'] = audio;
  }
  if (!!video) {
    constaints['video'] = {mediaSource: "screen"}
  }
  if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
    return await navigator.mediaDevices.getDisplayMedia(constaints);
  }
  return null
}

export async function createCapture(stream) {
  const videoTrack = stream.getVideoTracks()[0];
  const imageCapture = new (window as any).ImageCapture(videoTrack);
  const imageBitmap = await imageCapture.grabFrame();
  const canvas = document.createElement('canvas');
  canvas.width = imageBitmap.width;
  canvas.height = imageBitmap.height;
  canvas.getContext('2d').drawImage(imageBitmap, 0, 0);
  const dataURL = canvas.toDataURL('image/png');
  stream.getTracks().forEach(item=>item.stop());
  saveFileCapture(dataURL)
}

export function saveFileCapture(base64Image) {
  var blobImage = dataURItoBlob(base64Image);
  FileSaver.saveAs(blobImage, "screen-capture.png");
}

export function dataURItoBlob(dataURI) {
  var byteString = atob(dataURI.split(',')[1]);
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  var blob = new Blob([ab], {type: mimeString});
  return blob;
}

export function createRecorder(stream) {
  let mimeType = 'video/webm';
  let recordedChunks = [];
  const mediaRecorder = new MediaRecorder(stream);
  mediaRecorder.ondataavailable = function (e) {
    if (e.data.size > 0) {
      recordedChunks.push(e.data);
    }
  };
  mediaRecorder.onstop = function () {
    saveFileVideo(recordedChunks);
    recordedChunks = [];
    stream.getTracks().forEach(item=>item.stop());
  };
  mediaRecorder.start(200);
  return mediaRecorder
}

export function saveFileVideo(recordedChunks) {
  const blob = new Blob(recordedChunks, {
    type: 'video/webm'
  });
  FileSaver.saveAs(blob, 'screen-record.webm')
}
