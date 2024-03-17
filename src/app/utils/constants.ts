import {
  ConnectorConstraints,
  NodeConstraints,
  PortVisibility,
} from '@syncfusion/ej2-angular-diagrams';
import {
  personPort1,
  personPort2,
  rectPorts,
} from 'src/app/features/modules/sync-content-left/components/constants/communication/common';

export const OPERATOR = [
  '\u00d7',
  '\u002D',
  '\u2013',
  '\u2012',
  '\u2014',
  '\u00b7',
  '\u00f7',
  '\u00b1',
  '\u00bd',
  '\u00bc',
  '\u00be',
  '\u2200',
  '\u2202',
  '\u2203',
  '\u2204',
  '\u2205',
  '\u2208',
  '\u2209',
  '\u220B',
  '\u220C',
  '\u220F',
  '\u2210',
  '\u2211',
  '\u2217',
  '\u221A',
  '\u221D',
  '\u221E',
  '\u2227',
  '\u2228',
  '\u2229',
  '\u222A',
  '\u2234',
  '\u2235',
  '\u2237',
  '\u2238',
  '\u2264',
  '\u2265',
  '\u226e',
  '\u226f',
  '\u25B3',
  '\u25B7',
  '\u25BD',
  '\u25c8',
  '\u25C9',
  '\u25CE',
  '\u25E0',
  '\u25E1',
  '\u25EC',
  '\u211d',
  '\u2124',
  '\u2102',
  '\ud835\udd46',
  '\u2115',
];

export const GREEKCAPTITAL = [
  '\u0391',
  '\u0392',
  '\u0393',
  '\u0394',
  '\u0395',
  '\u0396',
  '\u0397',
  '\u0398',
  '\u0399',
  '\u039A',
  '\u039B',
  '\u039C',
  '\u039D',
  '\u039E',
  '\u039F',
  '\u03A0',
  '\u03A1',
  '\u03A3',
  '\u03A4',
  '\u03A5',
  '\u03A6',
  '\u03A7',
  '\u03A8',
  '\u03A9',
];

export const GREEKSMALL = [
  '\u03B1',
  '\u03B2',
  '\u03B3',
  '\u03B4',
  '\u03B5',
  '\u03B6',
  '\u03B7',
  '\u03B8',
  '\u03B9',
  '\u03BA',
  '\u03BB',
  '\u03BC',
  '\u03BD',
  '\u03BE',
  '\u03BF',
  '\u03C0',
  '\u03C1',
  '\u03C2',
  '\u03C3',
  '\u03C4',
  '\u03C5',
  '\u03C6',
  '\u03C7',
  '\u03C8',
  '\u03C9',
];

export const ARROW = [
  '\u2190',
  '\u2191',
  '\u2192',
  '\u2193',
  '\u2194',
  '\u2195',
  '\u2196',
  '\u2197',
  '\u2198',
  '\u2199',
  '\u219A',
  '\u219B',
  '\u219C',
  '\u219D',
  '\u219E',
  '\u219F',
  '\u21A0',
  '\u21A1',
  '\u21A2',
  '\u21A3',
  '\u21A4',
  '\u21A5',
  '\u21A6',
  '\u21A7',
  '\u21A8',
  '\u21A9',
  '\u21AA',
  '\u21AB',
  '\u21AC',
  '\u21AD',
  '\u21AE',
  '\u21AF',
  '\u21B0',
  '\u21B1',
  '\u21B2',
  '\u21B3',
  '\u21B4',
  '\u21B5',
  '\u21B6',
  '\u21B7',
  '\u21B8',
  '\u21B9',
  '\u21BA',
  '\u21BB',
  '\u21BC',
  '\u21BD',
  '\u21BE',
  '\u21BF',
  '\u21C0',
  '\u21C1',
  '\u21C2',
  '\u21C3',
  '\u21C4',
  '\u21C5',
  '\u21C6',
  '\u21C7',
  '\u21C8',
  '\u21C9',
  '\u21CA',
  '\u21CB',
  '\u21CC',
  '\u21CD',
  '\u21CE',
  '\u21CF',
  '\u21D0',
  '\u21D1',
  '\u21D2',
  '\u21D3',
  '\u21D4',
  '\u21D5',
  '\u21D6',
  '\u21D7',
  '\u21D8',
  '\u21D8',
  '\u21D9',
  '\u21DA',
  '\u21DB',
  '\u21DC',
];

export const EQUATIONS_DATA = {
  AngleBar: '\\left\\langle\\large{x}}\\right\\vert',
  BarAngle: '\\left\\vert\\large{x}}\\right\\rangle',
  BottomCurlyBracket: '\\underbrace{\\large{x}}_{\\large{y}}',
  BottomSquareBracket: '',
  Ceiling: '\\left\\lceil\\large{x}\\right\\rceil',
  CurlyBracket: '\\left\\{\\large{x}\\right\\}',
  DoubleArrowBarBracket: '\\left\\langle\\large{x}|\\large{y}}\\right\\rangle',
  DoubleBar: '\\left\\|\\large{x}\\right\\|',
  Floor: '\\left\\lfloor\\large{x}\\right\\rfloor ',
  LeftAngle: '\\langle\\large{x}',
  LeftBar: '\\left|\\large{x}',
  LeftCurlyBracket: '\\left\\{\\large{x}',
  LeftDoubleBar: '||\\large{x}',
  LeftLeftSquareBracket: '[\\large{x}[',
  LeftParenthesis: '(\\large{x}',
  LeftSquareBar: '⟦\\large{x}',
  LeftSquareBracket: '[\\large{x}',
  Parentheses: '(\\large{x})',
  ParenthesisSquare: '(\\large{x}]',
  PointingAngles: '\\left\\langle\\large{x}\\right\\rangle',
  RightAngle: '\\large{x}\\rangle',
  RightBar: '\\large{x}|',
  RightCurlyBracket: '\\large{x}}',
  RightDoubleBar: '\\large{x}||',
  RightLeftSquareBracket: ']\\large{x}[',
  RightParenthesis: '\\large{x})',
  RightRightSquareBracket: ']\\large{x}]',
  RightSquareBar: '\\large{x}⟧',
  RightSquareBracket: '\\large{x}]',
  SingleBar: '\\left|\\large{x}\\right|',
  SquareBar: '⟦\\large{x}⟧',
  SquareBracket: '[\\large{x}]',
  SquareParenthesesBracket: '[(\\large{x}])',
  SquareParenthesis: '[\\large{x})',
  TopCurlyBracket: '\\overbrace{\\large{x}}^{\\large{y}}',
  // "TopSquareBracket": "", \overbracket{abc}
  TopSquareBracket: '',
  ArrowDoubleBottom: '\\overleftrightarrow{\\large{x}}',
  ArrowDoubleBottomTop: '\\xleftrightarrow[\\large{y}]{\\large{x}}',
  ArrowDoubleTop: '\\underleftrightarrow{\\large{x}}',
  LeftBottom: '\\overleftarrow{\\large{x}}',
  LeftBottomTop: '\\xleftarrow[\\large{x}]{\\large{y}}',
  LeftTop: '\\underleftarrow{\\large{x}}',
  RightBottom: '\\overrightarrow{\\large{x}}',
  RightBottomTop: '\\xrightarrow[\\large{x}]{\\large{y}}',
  RightLeftBottom: '\\xtofrom[\\large{x}]{}',
  RightLeftBottomTop: '\\xtofrom[\\large{x}]{\\large{y}}',
  RightLeftHarpBottom: '\\xrightleftharpoons[\\large{x}]{}',
  RightLeftHarpBottomTop: '\\xrightleftharpoons[\\large{x}]{\\large{y}}',
  RightLeftHarpTop: '\\xrightleftharpoons[]{\\large{y}}',
  RightLeftTop: '\\xtofrom[]{\\large{y}}',
  RightSmallLeftBottom: '',
  RightSmallLeftBottomTop: '',
  RightSmallLeftHarpBottom: '\\xrightequilibrium[\\large{x}]{}',
  RightSmallLeftHarpBottomTop: '\\xrightequilibrium[\\large{x}]{\\large{y}}',
  RightSmallLeftHarpTop: '\\xrightequilibrium[]{\\large{x}}',
  RightSmallLeftTop: '',
  RightTop: '',
  SmallRightLeftBottomTop: '',
  SmallRightLeftHarpBottom: '\\xleftequilibrium[\\large{x}]{}',
  SmallRightLeftHarpBottomTop: '\\xleftequilibrium[\\large{x}]{\\large{y}}',
  SmallRightLeftHarpTop: '\\xleftequilibrium[]{\\large{y}}',
  SmallRightLeftTop: '',
  coProduct: '\\coprod{\\large{x}}',
  coProductBottom: '\\coprod_{\\large{x}}{\\large{y}}',
  coProductBottomTop: '\\coprod_{\\large{x}}^{\\large{y}}{\\large{z}}',
  coProductSub: '\\coprod\\limits_{\\large{x}}{\\large{y}}',
  coProductSubSuper: '\\coprod\\limits_{\\large{x}}^{\\large{y}}{\\large{z}}',
  intersection: '\\bigcap{\\large{x}}',
  intersectionBottom: '\\bigcap_{\\large{x}}{\\large{y}}',
  intersectionBottomTop: '\\bigcap_{\\large{x}}^{\\large{y}}{\\large{z}}',
  intersectionSub: '\\bigcap\\limits_{\\large{x}}{\\large{y}}',
  intersectionSubSuper:
    '\\bigcap\\limits_{\\large{x}}^{\\large{y}}{\\large{z}}',
  product: '\\prod{\\large{x}}',
  productBottom: '\\prod_{\\large{x}}{\\large{y}}',
  productBottomTop: '\\prod_{\\large{x}}^{\\large{y}}{\\large{z}}',
  productSub: '\\prod\\limits_{\\large{x}}{\\large{y}}',
  productSubSuper: '\\prod\\limits_{\\large{x}}^{\\large{y}}{\\large{z}}',
  sum: '\\sum{\\large{x}}',
  sumBottom: '\\sum_{\\large{x}}{\\large{y}}',
  sumBottomTop: '\\sum_{\\large{x}}^{\\large{y}}{\\large{z}}',
  sumSub: '\\sum\\limits_{\\large{x}}{\\large{y}}',
  sumSubSuper: '\\sum\\limits_{\\large{x}}^{\\large{y}}{\\large{z}}',
  union: '\\bigcup{\\large{x}}',
  unionBottom: '\\bigcup_{\\large{x}}{\\large{y}}',
  unionBottomTop: '\\bigcup_{\\large{x}}^{\\large{y}}{\\large{z}}',
  unionSub: '\\bigcup\\limits_{\\large{x}}{\\large{y}}',
  unionSubSuper: '\\bigcup\\limits_{\\large{x}}^{\\large{y}}{\\large{z}}',
  SingleBottom: '\\int\\limits_{\\large{x}}{\\large{z}}',
  SingleBottomTop: '\\int\\limits_{\\large{x}}^{\\large{y}}{\\large{z}}',
  SingleSimple: '\\int{\\large{z}}',
  SingleSub: '\\int_{\\large{x}}{\\large{z}}',
  SingleSubSuper: '\\int_{\\large{x}}^{\\large{y}}{\\large{z}}',
  DoubleBottom: '\\iint\\limits_{\\large{x}}{\\large{z}}',
  DoubleBottomTop: '\\iint\\limits_{\\large{x}}^{\\large{y}}{\\large{z}}',
  DoubleSimple: '\\iint{\\large{z}}',
  DoubleSub: '\\iint_{\\large{x}}{\\large{z}}',
  DoubleSubSuper: '\\iint_{\\large{x}}^{\\large{y}}{\\large{z}}',
  TripleBottom: '\\iiint\\limits_{\\large{x}}{\\large{z}}',
  TripleBottomTop: '\\iiint\\limits_{\\large{x}}^{\\large{y}}{\\large{z}}',
  TripleSimple: '\\iiint{\\large{z}}',
  TripleSub: '\\iiint_{\\large{x}}{\\large{z}}',
  TripleSubSuper: '\\iiint_{\\large{x}}^{\\large{y}}{\\large{z}}',
  ClockBottom: '\\oint\\limits_{\\large{x}}{\\large{z}}',
  ClockBottomTop: '\\oint\\limits_{\\large{x}}^{\\large{y}}{\\large{z}}',
  ClockSimple: '\\oint{\\large{z}}',
  ClockSub: '\\oint_{\\large{x}}{\\large{z}}',
  ClockSubSuper: '\\oint_{\\large{x}}^{\\large{y}}{\\large{z}}',
  SurfaceBottom: '\\oiint\\limits_{\\large{x}}{\\large{z}}',
  SurfaceBottomTop: '\\oiint\\limits_{\\large{x}}^{\\large{y}}{\\large{z}}',
  SurfaceSimple: '\\oiint{\\large{z}}',
  SurfaceSub: '\\oiint_{\\large{x}}{\\large{z}}',
  SurfaceSubSuper: '\\oiint_{\\large{x}}^{\\large{y}}{\\large{z}}',
  VolumeBottom: '\\oiiint\\limits_{\\large{x}}{\\large{z}}',
  VolumeBottomTop: '\\oiiint\\limits_{\\large{x}}^{\\large{y}}{\\large{z}}',
  VolumeSimple: '\\oiiint{\\large{z}}',
  VolumeSub: '\\oiiint_{\\large{x}}{\\large{z}}',
  VolumeSubSuper: '\\oiiint_{\\large{x}}^{\\large{y}}{\\large{z}}',
  Sub: '{\\large{y}}_{\\large{x}}',
  SubLeft: '',
  SubSuper: '{\\large{x}}_{\\large{y}}^{\\large{z}}',
  SubSuperLeft: '',
  Super: '{\\large{x}}^{\\large{y}}',
  SuperLeft: '',
  BigBottom: '\\underset{\\large{x}}{\\large{y}}',
  BigBottomTop: '\\overset{\\large{x}}{\\underset{\\large{y}}{\\large{z}}}',
  BigSub: '\\large{x}_{\\large{y}}',
  BigSubSuper: '\\large{x}^\\large{y}_{\\large{z}}',
  BigSuper: '\\large{x}^{\\large{y}}',
  BigTop: '\\overset{\\large{x}}{\\large{y}}',
  CompositeBottom: '\\underset{\\large{x}}{\\large{y}}',
  CompositeBottomTop:
    '\\overset{\\large{x}}{\\underset{\\large{y}}{\\large{z}}}',
  CompositeTop: '\\overset{\\large{x}}{\\large{y}}',
  Div: '\\frac{\\large{x}}{\\large{y}}',
  DivDoubleBar: '\\xlongequal[\\large{x}]{\\large{y}}',
  DivHoriz: '{\\large{x}}/{\\large{y}}',
  DivMath: '',
  DivMathInverted: '',
  DivMathInvertedWithBottom: '',
  DivMathWithTop: '',
  DivSlant: '',
  DivTriangleExpanding: '',
  DivTriangleFixed: '',
  DivTripleBar: '',
  nRoot: '\\sqrt[\\large{x}]{\\large{y}}',
  SmallDiv: '',
  SmallDivHoriz: '',
  SmallDivSlant: '',
  SqRoot: '\\sqrt{\\large{x}}',
  '2cellColumn':
    '\\begin{matrix} \\large{a}_{11} \\\\ \\large{a}_{21} \\end{matrix}',
  '2cellRow': '\\begin{matrix} \\large{a}_{11} & \\large{a}_{12} \\end{matrix}',
  '2Square':
    '\\begin{matrix} \\large{a}_{11} & \\large{a}_{12} \\\\ \\large{a}_{21} & \\large{a}_{22} \\end{matrix}',
  '3cellColumn':
    '\\begin{matrix} \\large{a}_{11} \\\\ \\large{a}_{21} \\\\ \\large{a}_{31} \\end{matrix} ',
  '3cellRow':
    '\\begin{matrix} \\large{a}_{11} & \\large{a}_{12} & \\large{a}_{13}\\end{matrix}',
  '3Square':
    '\\begin{matrix} \\large{a}_{11} & \\large{a}_{12} & \\large{a}_{13} \\\\ \\large{a}_{21} & \\large{a}_{22} & \\large{a}_{23} \\\\ \\large{a}_{31} & \\large{a}_{32} & \\large{a}_{33} \\end{matrix}',
  column:
    '\\begin{pmatrix} \\large{a}_1 \\\\ \\vdots \\\\ \\large{a}_n \\end{pmatrix}',
  custom:
    '\\begin{pmatrix} \\large{a}_{11} & \\ldots & \\large{a}_{1c} \\\\ \\vdots & \\ddots & \\vdots \\\\ \\large{a}_{r1} & \\ldots & \\large{a}_{rc} \\end{pmatrix}',
  row: '\\begin{pmatrix} \\large{a}_1 & \\ldots & \\large{a}_n \\end{pmatrix}',
  BoxAll: '\\boxed{\\large{x}}',
  BoxLeftBottom: '',
  BoxLeftTop: '',
  BoxRightBottom: '',
  BoxRightTop: '',
  bottomBar: '\\underset{-}{\\large{x}}',
  bottomDoubleArrow: '\\underleftrightarrow{\\large{x}}',
  bottomDoubleBar: '\\underset{\\large{=}}{\\large{x}}',
  bottomLeftArrow: '\\underleftarrow{\\large{x}}',
  bottomLeftHalfArrow: '\\underset{\\large{\\leftharpoondown}}{\\large{x}}',
  bottomRightArrow: '\\underrightarrow{\\large{x}}',
  bottomRightHalfArrow: '\\underset{\\large{\\rightharpoondown}}{\\large{x}}',
  cross: '\\xcancel{\\large{x}}',
  hat: '\\hat{\\large{x}}',
  leftCross: '\\bcancel{\\large{x}}',
  parenthesis: '\\overset{\\frown}{\\large{x}}',
  rightCross: '\\cancel{\\large{x}}',
  strikeThrough: '',
  tilde: '\\tilde{\\large{x}}',
  topBar: '\\overset{-}{\\large{x}}',
  topDoubleArrow: '\\overleftrightarrow{\\large{x}}',
  topDoubleBar: '\\overset{\\large{=}}{\\large{x}}',
  topLeftArrow: '\\overleftarrow{\\large{x}}',
  topLeftHalfArrow: '\\overset{\\large{\\leftharpoondown}}{\\large{x}}',
  topRightArrow: '\\overrightarrow{\\large{x}}',
  topRightHalfArrow: '\\overset{\\large{\\rightharpoondown}}{\\large{x}}',
  tortoise: '\\overgroup{\\large{x}}',
  CharacterAcuteAccent: "\\large{x}'",
  CharacterBottomBar: '\\underset{-}{\\large{x}}',
  CharacterBottomBreve: '\\underset{\\smile}{\\large{x}}',
  CharacterBottomDDot: '\\underset{\\Large{..}}{\\large{x}}',
  CharacterBottomDot: '\\underset{\\Large{.}}{\\large{x}} ',
  CharacterBottomDoubleArrow: '\\underleftrightarrow{\\large{x}} ',
  CharacterBottomFourDot: '\\underset{\\Large{....}}{\\large{x}}',
  CharacterBottomInvertedBreve: '\\underset{\\frown}{\\large{x}}',
  CharacterBottomLeftArrow: '\\underset{\\leftarrow}{\\large{x}}',
  CharacterBottomLeftHarpoon: '\\underset{\\leftharpoondown}{\\large{x}}',
  CharacterBottomRightArrow: '\\underset{\\rightarrow}{\\large{x}}',
  CharacterBottomRightHarpoon: '\\underset{\\rightharpoondown}{\\large{x}}',
  CharacterBottomTDot: '\\underset{\\large{...}}{\\large{x}}',
  CharacterBottomTilde: '\\underset{\\sim }{\\large{x}} ',
  CharacterCross: '\\xcancel{\\large{x}}',
  CharacterDoublePrime: "\\large{x}''",
  CharacterDoubleStrikeThrough: '',
  CharacterGraveAccent: '\\large{x}`',
  CharacterLeftCross: '\\bcancel{\\large{x}}',
  CharacterLeftUprightCross: '\\bcancel{\\large{x}}',
  CharacterNone: '\\large{x}',
  CharacterPrime: "\\large{x}'",
  CharacterReverseDoublePrime: '\\large{x}``',
  CharacterReversePrime: '\\large{x}`',
  CharacterRightCross: '\\cancel{\\large{x}}',
  CharacterRightUprightCross: '\\cancel{\\large{x}}',
  CharacterStrikeThrough: '',
  CharacterTopBar: '\\overset{-}{\\large{x}}',
  CharacterTopBreve: '\\overset{\\smile}{\\large{x}}',
  CharacterTopCaron: '\\check{\\large{x}}',
  CharacterTopCircumflex: '\\hat{\\large{x}}',
  CharacterTopDDot: '\\ddot{\\large{x}} ',
  CharacterTopDot: '\\dot{\\large{x}} ',
  CharacterTopDoubleArrow: '\\overleftrightarrow{\\large{x}}',
  CharacterTopFourDot: '\\overset{\\Large{....}}{\\large{x}}',
  CharacterTopInvertedBreve: '\\overset{\\frown}{\\large{x}}',
  CharacterTopLeftArrow: '\\overset{\\leftarrow}{\\large{x}}',
  CharacterTopLeftHarpoon: '\\overset{\\leftharpoondown}{\\large{x}}',
  CharacterTopRightArrow: '\\overset{\\rightarrow}{\\large{x}}',
  CharacterTopRightHarpoon: '\\overset{\\rightharpoondown}{\\large{x}}',
  CharacterTopRightRing: '\\large{x}^{\\circ}',
  CharacterTopRing: '\\overset{\\circ}{\\large{x}}',
  CharacterTopTDot: '\\overset{\\Large{...}}{\\large{x}}',
  CharacterTopTilde: '\\tilde{\\large{x}} ',
  CharacterTriplePrime: "\\large{x}'''",
  CharacterVDoubleStrikeThrough: '',
  CharacterVStrikeThrough: '',
  Application_1: 'A',
  Application_2: 'A_{\\large{x}}',
  Application_3: '\\hat{A}',
  Application_4: '\\bar{A}',
  Application_5: '\\hat{A}_{\\large{x}}',
  Application_6: '\\bar{A}_{\\large{x}}',
  function_1: '\\large{x}',
  function_2: 'f({\\large{x}}})',
  function_3: '\\bar{\\large{x}}',
  function_4: 'f(\\bar{\\large{x}})',
  function_5: 'f_{\\large{x}}(\\bar{\\large{y}})',
  function_6: 'P_{\\large{x}}',
  function_7: 'G_{\\large{x}}',
  function_8: 'G_{\\large{x}}(\\large{x})',
  function_9: 'f(\\large{x})',
  function_10: 'ECF(\\large{x})',
  function_11: 'ECF({\\large{x})',
  function_12: 'f_{\\large{x}}(\\bar{\\large{y}}_{z})',
  function_13: '\\large{x}_{z}',
  function_14: 'f_{\\large{x}}(y)',
  Relationship_1: '\\sim',
  Relationship_2: '\\alpha',
  Relationship_3: '\\Rightarrow',
  Relationship_4: '\\Leftarrow',
  Relationship_5: '\\Leftrightarrow',
  Relationship_6: '\\geq',
  Relationship_7: '\\gt',
  Relationship_8: '\\lt',
  Relationship_9: '=',
  Relationship_10: '\\leq',
  word_1: '\\large{W}',
  word_2: '\\large{W}_{\\large{x}}',
  word_3: '\\hat{\\large{W}}',
  word_4: '\\hat{\\large{W}}_{\\large{x}}',
  word_5: '\\bar{\\large{W}}',
  word_6: '\\large{S}(\\large{w})',
  word_7: '\\large{S}_{\\large{x}}(\\large{w})',
  word_8: '\\large{G}(\\large{w})',
  word_9: '\\large{D}(\\large{w})',
  word_10: '\\large{D}(\\hat{\\large{w}})',
  word_11: '\\large{G}_{\\large{x}}(\\large{w})',
  word_12: '\\large{S}(\\bar{\\large{w}})',
  word_13: '\\large{G}(\\bar{\\large{w}})',
  Theory_1: '\\large{K}_{\\large{T}}',
  Theory_2: '\\large{i}_{\\large{T}}',
  Theory_3: '\\large{I_T}',
  Theory_4: '\\large{E_T}',
  Theory_5: '\\large{P_T}',
  Theory_6: '\\large{M_T}',
  Theory_7: '\\large{E_{S_{T}}}',
  Theory_8: '\\large{W_T}',
  Theory_9: '\\large{G_T}',
  Theory_10: '\\large{X_T}',
  Theory_11: '\\large{U_T}',
  Theory_Dropdown_1: '\\large{T_1}',
  Theory_Dropdown_2: '\\large{T_2}',
  Theory_Dropdown_3: '\\large{T_3}',
  Theory_Dropdown_4: '\\large{T_4}',
  Theory_Dropdown_5: '\\large{T_5}',
  Theory_Dropdown_6: '\\large{T_6}',
  Theory_Dropdown_7: '\\large{T_7}',
  Theory_Dropdown_8: '\\large{T_8}',
  Theory_Dropdown_9: '\\large{T_9}',
  Theory_Dropdown_10: '\\large{T_{10}}',
  Theory_Dropdown_11: '\\large{T}',
  Theory_Dropdown_12: '\\large{T}_{\\large{x}}',
  Theory_Dropdown_13: '\\large{A}',
  Theory_Dropdown_14: "\\large{A}'",
  Theory_Dropdown_15: "\\large{A}'|_{\\Large{t_{x}}}",
  Theory_Dropdown_16: "\\large{A}'_{\\Large{x}}",
  Fundamental_1: 'f_{\\large{K}_{\\large{T}}}',
  Fundamental_2: 'f_{\\large{i}_{\\large{T}}}',
  Fundamental_3: 'f_{\\large{I_{T}}}',
  Fundamental_4: 'f_{\\large{E_{T}}}',
  Fundamental_5: 'f_{\\large{P_{T}}}',
  Fundamental_6: 'f_{\\large{M_{T}}}',
  Fundamental_7: 'f_{\\large{E_{S_{T}}}}',
  Fundamental_8: 'f_{\\large{W_{T}}}',
  Fundamental_9: 'f_{\\large{G_{T}}}',
  Fundamental_10: 'f_{\\large{X_{T}}}',
  Fundamental_11: 'f_{\\large{U_{T}}}',
  Fundamental_Dropdown_1: 'f_{\\large{T_{1}}}',
  Fundamental_Dropdown_2: 'f_{\\large{T_{2}}}',
  Fundamental_Dropdown_3: 'f_{\\large{T_{3}}}',
  Fundamental_Dropdown_4: 'f_{\\large{T_{4}}}',
  Fundamental_Dropdown_5: 'f_{\\large{T_{5}}}',
  Fundamental_Dropdown_6: 'f_{\\large{T_{6}}}',
  Fundamental_Dropdown_7: 'f_{\\large{T_{7}}}',
  Fundamental_Dropdown_8: 'f_{\\large{T_{8}}}',
  Fundamental_Dropdown_9: 'f_{\\large{T_{9}}}',
  Fundamental_Dropdown_10: 'f_{\\large{T_{10}}}',
  Fundamental_Dropdown_11: 'f_{\\large{T}}',
  Fundamental_Dropdown_12: 'f_{\\large{T}_{\\large{x}}}',
  Fundamental_Dropdown_13: 'f_{\\large{A}}',
  Fundamental_Dropdown_14: "f_{\\large{A}'}",
  Dropdown_Function_1: '\\large{\\class{nimbusScript}L}(\\large{t})}',
  Dropdown_Function_2: '\\large{h({t})}',
  Dropdown_Function_3: '\\large{u({t})}',
  Dropdown_Function_4: '\\large{h({t})+u({t})}',
  Dropdown_Function_5:
    '\\sum\\limits_{\\large{n=1}}^{\\large{\\infty}}{\\large{h_{n}(t)}}',
  Dropdown_Function_6:
    '\\sum\\limits_{\\large{m=0}}^{\\large{M}}{\\large{u_{m}(t)}}',
  Dropdown_Function_7: 'Int\\left\\{{\\large{x}}\\right\\}',
  Dropdown_Function_8: '\\bar{\\large{u}}(t)',
  Dropdown_Function_9: '\\bar{\\large{u}}_{\\large{x}}(t)',
  Dropdown_Function_10: '\\large{h}_{\\large{x}}(t)',
  Dropdown_Time_1: '\\large{t_{0}}',
  Dropdown_Time_2: '\\large{t_{0+}}',
  Dropdown_Time_3: '\\large{t_{0++}}',
  Dropdown_Time_4: '\\large{t_{1}}',
  Dropdown_Time_5: '\\large{t_{1}}+{\\large{x}}',
  Dropdown_Time_6: '\\large{t_{2}}',
  Dropdown_Time_7: '\\large{t_{2}}+{\\large{x}}',
  Dropdown_Time_8: '\\large{t_{3}}',
  Dropdown_Time_9: '\\large{t_{3}}+{\\large{x}}',
  Dropdown_Time_10: '\\large{t_{4}}',
  Dropdown_Time_11: '\\large{t_{4}}+{\\large{x}}',
  Dropdown_Time_12: "\\large{t'}",
  Derivative_1: '\\frac{\\large{d{a}}}{\\large{dx}}',
  Derivative_2: '\\frac{\\large{dI}}{\\large{dT}}',
  Derivative_3: '\\frac{\\large{dM}}{\\large{dT}}',
  Derivative_4: '\\large{NE}',
  Derivative_5: '\\large{IE}',
  Instrument_1: '\\large{I}',
  Instrument_2: '\\large{M}',
  Instrument_3: 'Tr\\left\\{{T}\\right\\}',
  Instrument_4: 'Tr\\left\\{{\\large{x}}\\right\\}',
  Instrument_5: '\\large{I}[\\large{u(t)}]',
  Instrument_6: '\\large{M}[\\large{u(t)}]',
  Instrument_7: 'I[u_{\\large{x}}(t)]',
  Instrument_8: 'M[u_{\\large{x}}(t)]',
  Stability_1: '\\large{k}',
  Stability_2: '\\large{x}',
  Stability_3: '\\large{y}',
  Stability_4: '\\large{x}_{\\large{x}}',
  Stability_5: '\\large{y}_{\\large{x}}',
  Stability_6: '\\large{xy}',
  Stability_7: '\\large{x}_{\\large{x}}\\large{y}_{\\large{y}}',
  Stability_8: '\\large{S}',
  Stability_9: '\\large{S}_{\\large{x}}',
  Stability_10: '\\Delta{\\large{x}}',
  Stability_11: '\\bar{\\large{T}}',
  Stability_12: '\\large{L}',
  Stability_13: '\\large{G}',
  Stability_14: '\\Delta{L}',
  Stability_15: 'L_{\\large{x}}',
  Stability_16: 'G_{\\large{x}}',
  Stability_17: 'L|_{t_{\\large{x}}}',
  Stability_18: 'G|_{t_{\\large{x}}}',
  Stability_19: '\\Delta{G}',
  Stability_20: '\\Delta{t}',
  Stability_21: '\\frac{\\Delta{L}}{\\Delta{t}}',
  Stability_22: '\\frac{\\Delta{G}}{\\Delta{t}} ',
  Stability_23: 'Q',
  Stability_24: 'q',
  Stability_25: 'Q|_{t_{\\large{x}}}',
  Stability_26: 'd',
  Stability_27: 'd_{\\large{x}}',
  Stability_28: '\\Delta{t}',
  Stability_29: '\\Delta{t}_{u}',
  Stability_30: '\\Delta{t}_{d}',
  Stability_31: '\\Delta{t}_{\\large{x}}',
  Theorem_Dropdown_1: '\\large{Th}',
  Theorem_Dropdown_2: '\\large{K_{Th}}',
  Theorem_Dropdown_3: '\\large{i_{Th}}',
  Theorem_Dropdown_4: '\\large{I_{Th}}',
  Theorem_Dropdown_5: '\\large{M_{Th}}',
  Theorem_Dropdown_6: '\\large{E_{S_{Th}}}',
  Theorem_Dropdown_7: '\\large{W_{Th}}',
  Theorem_Dropdown_8: '\\large{G_{Th}}',
  Theorem_Dropdown_9: '\\large{Th_{n}}',
  Theorem_Dropdown_10: '\\large{K}_{\\large{Th}_{\\large{x}}}',
  Theorem_Dropdown_11: '\\large{i}_{\\large{Th}_{\\large{x}}}',
  Theorem_Dropdown_12: '\\large{I}_{\\large{Th}_{\\large{x}}}',
  Theorem_Dropdown_13: '\\large{M}_{\\large{Th}_{\\large{x}}}',
  Theorem_Dropdown_14: '\\large{E}_{\\large{S}_{\\large{Th}_{\\large{x}}}}',
  Theorem_Dropdown_15: '\\large{W}_{\\large{Th}_{\\large{x}}}',
  Theorem_Dropdown_16: '\\large{G}_{\\large{Th}_{\\large{x}}}',
  Theorem_Dropdown_17: '\\large{Th}',
  Theorem_Dropdown_18: '\\large{Th}_{\\large{x}}',
  Theorem_Dropdown_19: '\\large{Th}|_{\\large{t}_{\\large{x}}}',
  Theorem_Dropdown_20: '\\large{Th}_{\\large{g}}',
  Theorem_Dropdown_21: '\\large{Th}_{\\large{g}}|_{\\large{t}_{\\large{x}}}',
};

export function getShapeByType(type, id: string, addInfo: Object, annotation) {
  switch (type) {
    case 'Person':
      let label = [
        {
          content: annotation[0],
          offset: { x: 0.5, y: 1 },
          margin: {
            top: 15,
          },
          style: {
            textWrapping: 'NoWrap',
          },
        },
      ];
      if (annotation.length === 2) {
        label.push({
          content: annotation[1],
          offset: { x: 0.5, y: 1 },
          margin: {
            top: 30,
          },
          style: {
            textWrapping: 'NoWrap',
          },
        });
      }
      return {
        id,
        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `
          <g transform="translate(2,2)">
            <rect vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" x="0" y="0" height="77" width="47"/>
            <path vector-effect="non-scaling-stroke" d="M9.4, 19.25 A14.1 14.4375 0 0 1 37.6, 19.25A14.1 14.4375 0 0 1 9.4, 19.25 z" fill="transparent" stroke="#000000" stroke-width="1px" />
            <path vector-effect="non-scaling-stroke" d="M23.5, 32.34 L23.5, 50.05 z" stroke="#000000" stroke-width="1px" />
            <path vector-effect="non-scaling-stroke" d="M23.5, 50.05 L39.95, 73.15 z" stroke="#000000" stroke-width="1px" />
            <path vector-effect="non-scaling-stroke" d="M23.5, 50.05 L7.05, 73.15 z" stroke="#000000" stroke-width="1px" />
            <path vector-effect="non-scaling-stroke" d="M4.7, 46.2 L42.3, 46.2 z" stroke="#000000" stroke-width="1px" />
            <path vector-effect="non-scaling-stroke" d="M18.8, 26.95 A5 2.5 0 0 1 28.2, 26.95 A5 2.5 0 0 1 18.8, 26.95 z" fill="transparent" stroke="#000000" stroke-width="1px" />
            <path viewBox="0 0 60 55" d="M15.04, 14.63 A1 1 0 0 1 19.74, 14.63 A1 1 0 0 1 15.04, 14.63 z" fill="#00000" stroke="#000000" stroke-width="1px" />
            <path viewBox="0 0 60 55" d="M27.26, 14.63 A1 1 0 0 1 31.96, 14.63 A1 1 0 0 1 27.26, 14.63 z" fill="#00000" stroke="#000000" stroke-width="1px" />
          </g>`,
        },
        height: 80,
        width: 50,
        annotations: label,
        style: {
          fontSize: 10,
        },
        ports: personPort1,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'PersonGroup':
      return {
        id,
        addInfo: addInfo,
        shape: {
          type: 'Native',
          content:
            '<g  transform="translate(2, 2)">' +
            '<rect vector-effect="non-scaling-stroke" height="40" width="120" stroke="black" fill="transparent" stroke-width="1"/>' +
            '<circle vector-effect="non-scaling-stroke" cx="11" cy="7.5" r="6" fill="transparent" stroke="black" stroke-width="1" />' +
            '<circle vector-effect="non-scaling-stroke" cx="9.0" cy="6" r="1" fill="black" />' +
            '<circle vector-effect="non-scaling-stroke" cx="13.0" cy="6" r="1.0" fill="black" />' +
            '<ellipse vector-effect="non-scaling-stroke" cx="11.0" cy="11.5" rx="2.0" ry="0.75" fill="transparent" stroke="black" stroke-width="1"/>' +
            '<path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 11 13.5 L 11 19.5 L 4 29.5 M 11 19.5 L 18 29.5 M 3 18 L 19 18"/>' +
            '<circle vector-effect="non-scaling-stroke" cx="41" cy="7.5" r="6" fill="transparent" stroke="black" stroke-width="1" />' +
            '<circle vector-effect="non-scaling-stroke" cx="39.0" cy="6" r="1" fill="black" />' +
            '<circle vector-effect="non-scaling-stroke" cx="43.0" cy="6" r="1.0" fill="black" />' +
            '<ellipse vector-effect="non-scaling-stroke" cx="41.0" cy="11.5" rx="2.0" ry="0.75" fill="transparent" stroke="black" stroke-width="1"/>' +
            '<path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 41 13.5 L 41 19.5 L 34 29.5 M 41 19.5 L 48 29.5 M 33 18 L 49 18"/>' +
            '<circle vector-effect="non-scaling-stroke" fill="black" cx="62" cy="17.5" r="1.5"/>' +
            '<circle vector-effect="non-scaling-stroke" fill="black" cx="72" cy="17.5" r="1.5"/>' +
            '<circle vector-effect="non-scaling-stroke" fill="black" cx="82" cy="17.5" r="1.5"/>' +
            '<foreignObject class="symbol-text-container" x="3" y="30" width="20" height="10" visibility="show">' +
            '<div class="flex-container">' +
            '<div class="symbol-text-element">' +
            '<div style="font-size:5px;font-weight:100"><i>Person1</i></div>' +
            '</div>' +
            '</div>' +
            '</foreignObject>' +
            '<foreignObject class="symbol-text-container" x="33" y="30" width="20" height="10" visibility="show">' +
            '<div class="flex-container">' +
            '<div class="symbol-text-element">' +
            '<div style="font-size:5px;font-weight:100"><i>Person2</i></div>' +
            '</div>' +
            '</div>' +
            '</foreignObject>' +
            '</g>',
        },
        annotations: [
          {
            content: annotation,
            verticalAlignment: 'Bottom',
            offset: { x: 0.5, y: 1 },
            margin: {
              top: 20,
            },
          },
        ],
        height: 140,
        width: 400,
        style: {
          fontSize: 10,
        },
        ports: rectPorts,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'PersonNoFrame':
      let label2 = [
        {
          content: annotation[0],
          offset: { x: 0.5, y: 1 },
          margin: {
            top: 15,
          },
          style: {
            textWrapping: 'NoWrap',
          },
        },
      ];
      if (annotation.length === 2) {
        label2.push({
          content: annotation[1],
          offset: { x: 0.5, y: 1 },
          margin: {
            top: 30,
          },
          style: {
            textWrapping: 'NoWrap',
          },
        });
      }

      return {
        id,
        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `
          <g transform="translate(2,2)">
            <rect vector-effect="non-scaling-stroke" fill="transparent" stroke="transparent" stroke-width="1" x="0" y="0" height="87" width="47"/>
            <path vector-effect="non-scaling-stroke" d="M7.05, 21.75A15.98 16.4333333333333 0 0 1 39.95, 21.75A15.98 16.4333333333333 0 0 1 7.05, 21.75z" fill="transparent" stroke="#000000" stroke-width="1px" />
            <path vector-effect="non-scaling-stroke" d="M23.5, 37.41L23.5, 56.55z" fill="transparent" stroke="#000000" stroke-width="1px" />
            <path vector-effect="non-scaling-stroke" d="M23.5, 56.55L39.95, 82.65z" fill="transparent" stroke="#000000" stroke-width="1px" />
            <path vector-effect="non-scaling-stroke" d="M23.5, 56.55L7.05, 82.65z" fill="transparent" stroke="#000000" stroke-width="1px" />
            <path vector-effect="non-scaling-stroke" d="M4.7, 52.2L42.3, 52.2z" fill="transparent" stroke="#000000" stroke-width="1px" />
            <path vector-effect="non-scaling-stroke" d="M17.86, 30.45A6 3 0 0 1 29.14, 30.45A6 3 0 0 1 17.86, 30.45z" fill="transparent" stroke="#000000" stroke-width="1px" />
            <path d="M14.1, 16.53A2 2 0 0 1 18.8, 16.53A2 2 0 0 1 14.1, 16.53z" fill="#000000" stroke="#000000" stroke-width="1px" />
            <path d="M28.2, 16.53A2 2 0 0 1 32.9, 16.53A2 2 0 0 1 28.2, 16.53z" fill="#000000" stroke="#000000" stroke-width="1px" />
          </g>`,
        },
        height: 90,
        width: 50,
        annotations: label2,
        style: {
          fontSize: 10,
        },
        ports: personPort2,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'NaturalObserver':
      return {
        id,
        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g transform="translate(2,2)">
                              <rect vector-effect="non-scaling-stroke" fill="transparent" stroke="transparent" stroke-width="1" x="0" y="0" height="100" width="100"/>
                              <path d="M25, 50A25 25 0 0 1 75, 50A25 25 0 0 1 25, 50z" fill="transparent" stroke="#000000" stroke-width="1px" />
                              <path d="M50, 0L50, 20z" fill="transparent" stroke="#000000" stroke-width="1px" />
                              <path d="M79.4, 9.5L67.6, 25.7z" fill="transparent" stroke="#000000" stroke-width="1px" />
                              <path d="M97.5, 34.5L78.5, 40.7z" fill="transparent" stroke="#000000" stroke-width="1px" />
                              <path d="M97.5, 65.5L78.5, 59.3z" fill="transparent" stroke="#000000" stroke-width="1px" />
                              <path d="M79.4, 90.5L67.6, 74.3z" fill="transparent" stroke="#000000" stroke-width="1px" />
                              <path d="M50, 100L50, 80z" fill="transparent" stroke="#000000" stroke-width="1px" />
                              <path d="M20.6, 90.5L32.4, 74.3z" fill="transparent" stroke="#000000" stroke-width="1px" />
                              <path d="M2.5, 65.5L21.5, 59.3z" fill="transparent" stroke="#000000" stroke-width="1px" />
                              <path d="M2.5, 34.5L21.5, 40.7z" fill="transparent" stroke="#000000" stroke-width="1px" />
                              <path d="M20.6, 9.5L32.4, 25.7z" fill="transparent" stroke="#000000" stroke-width="1px" />
                          </g>`,
        },
        height: 100,
        width: 100,
        style: {
          fontSize: 10,
        },
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'Overlap':
      return {
        id,
        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `
          <g  transform="translate(2, 2)">
            <rect x="0" y="0" height="50" width="100" fill="transparent" stroke-width="0"/>
            <rect width="90" height="40" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />
            <rect x="10" y="10" height="40" width="90"  fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>
            <foreignObject class="symbol-text-container" x="${
              (0.25 * 100) / 2
            }" width="${100 * 0.75}" height="${50}" visibility="hidden">
              <div style="height: ${50}px" class="flex-container">
                <div width="${100 * 0.75}" class="symbol-text-element">
                  ${annotation}
                </div>
              </div>
            </foreignObject>
          </g>`,
        },
        annotations: [
          {
            offset: { x: 0.55, y: 0.5 },
            content: annotation,
          },
        ],
        style: {
          fill: 'none',
          fontSize: 10,
        },
        ports: rectPorts,
        height: 100,
        width: 210,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'cover':
      return {
        id,
        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g transform="translate(2,2)">
                      <rect vector-effect="non-scaling-stroke" height="10" width="7.5" stroke-width="1" stroke="black" fill="green" opacity="0.5"/>
                      </g>`,
        },
        annotations: [
          {
            content: annotation,
          },
        ],
        height: 80,
        width: 35.56,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'mobility':
      return {
        id,
        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g transform="translate(2,2)">
                      <rect vector-effect="non-scaling-stroke" height="10" width="10" stroke="none" fill="none"/>
                      <path d="M 0 4, S 2.5 1.5, 5 4 M 5 4, S 7.5 6.5, 10 4 M 0 6, S 2.5 3.5, 5 6 M 5 6, S 7.5 8.5, 10 6" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="none"/>
                      </g>`,
        },
        height: 50,
        width: 50,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'Continuity':
      let strokeWidth =
        annotation.strokeWidth !== undefined ? annotation.strokeWidth : 1;
      let strokeDashArray =
        annotation.strokeDashArray !== undefined
          ? annotation.strokeDashArray
          : '';
      let ports = annotation.ports !== undefined ? annotation.ports : rectPorts;
      return {
        id,
        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `
          <g transform="translate(2, 2)">
            <rect width="10" height="5" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="${strokeWidth}" stroke-dasharray = "${strokeDashArray}" />
            <circle vector-effect="non-scaling-stroke" cx="3.5" cy="2.5" r="0.4"/>
            <circle vector-effect="non-scaling-stroke" cx="5.0" cy="2.5" r="0.4"/>
            <circle vector-effect="non-scaling-stroke" cx="6.5" cy="2.5" r="0.4"/>
          </g>`,
        },
        style: {
          fill: 'none',
          fontSize: 10,
        },
        ports: ports,
        width: 210,
        height: 100,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'Ellipse':
      return {
        id,
        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `
          <g transform="translate(2,2)">
            <rect height="40" width="120" stroke-width="0" fill="transparent" />
            <ellipse vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" cx="60" cy="20" rx="60" ry="20"/>
            <foreignObject class="symbol-text-container" x="${
              (0.25 * 120) / 2
            }" width="${120 * 0.75}" height="${40}" visibility="hidden">
              <div style="height: ${40}px" class="flex-container">
                <div width="${120 * 0.75}" class="symbol-text-element">
                  ${annotation}
                </div>
              </div>
            </foreignObject>
          </g>`,
        },
        annotations: [
          {
            content: annotation,
          },
        ],
        style: {
          fill: 'white',
          fontSize: 10,
        },
        ports: rectPorts,
        height: 40,
        width: 120,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'Group':
      return {
        id,
        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `
          <g  transform="translate(2, 2)">
            <rect x="0" y="0" width="100" height="50" fill="none" stroke-width="0"/>
            <rect width="90" height="50" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />
            <rect x="90" height="50" width="10" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>
            <foreignObject class="symbol-text-container" x="${
              (0.25 * 100) / 2
            }" width="${100 * 0.75}" height="${50}" visibility="hidden">
              <div style="height: ${50}px" class="flex-container">
                <div width="${100 * 0.75}" class="symbol-text-element">
                  ${annotation}
                </div>
              </div>
            </foreignObject>
          </g>`,
        },
        annotations: [
          {
            content: annotation,
          },
        ],
        style: {
          fill: 'none',
          fontSize: 10,
        },
        ports: rectPorts,
        height: 100,
        width: 210,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'Sub':
      return {
        id,
        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `
          <g transform="translate(2, 2)">
            <rect x="0" y="0" width="100" height="50" fill="none" stroke-width="0"/>
            <rect width="100" height="40" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />
            <rect y="40" height="10" width="100" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>
            <foreignObject class="symbol-text-container" x="${
              (0.25 * 100) / 2
            }" y="-5" width="${100 * 0.75}" height="${50}" visibility="hidden">
              <div style="height: ${50}px" class="flex-container">
                <div width="${100 * 0.75}" class="symbol-text-element">
                  ${annotation}
                </div>
              </div>
            </foreignObject>
          </g>`,
        },
        annotations: [
          {
            content: annotation,
          },
        ],
        style: {
          fill: 'none',
          fontSize: 10,
        },
        ports: rectPorts,
        height: 100,
        width: 210,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'Text':
      return {
        id,
        shape: {
          type: 'Native',
          content: `<g  transform="translate(2, 2)">
            <rect height="30" width="100" fill="transparent" stroke-width="0"/>
            <foreignObject class="symbol-text-container" x="0" y="25" width="${100}" height="${30}" visibility="hidden">
            <div style="height: ${30}px" class="flex-container">
              <div width="${100}" class="symbol-text-element">
                ${annotation}
              </div>
            </div>
            </foreignObject>
          </g>`,
        },
        addInfo: addInfo,
        annotations: [
          {
            content: annotation,
            style: {
              bold: true,
              fontSize: 15,
              italic: true,
            },
          },
        ],
        height: 30,
        width: 100,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'WhatWeDo':
      return {
        id,
        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g  transform="translate(2, 2)">
                      <rect vector-effect="non-scaling-stroke" width="575" height="150" stroke="black" fill="transparent" stroke-width="1" />
                      <rect x="25" y="25" width="200" height="100" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />
                      <foreignObject class="symbol-text-container" x="${
                        0.11 * 575
                      }" width="${100}" height="${150}" visibility="hidden">
                          <div style="height: ${150}px" class="flex-container">
                              <div width="${100}" class="symbol-text-element">
                                  ${annotation[0]}
                              </div>
                          </div>
                      </foreignObject>
                      <rect x="350" y="025" height="100" width="200"  fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>
                      <foreignObject class="symbol-text-container" x="${
                        0.65 * 575
                      }" width="${100}" height="${150}" visibility="hidden">
                          <div style="height: ${150}px" class="flex-container">
                              <div width="${100}" class="symbol-text-element">
                                  ${annotation[1]}
                              </div>
                          </div>
                      </foreignObject>
                  </g>`,
        },
        annotations: [
          {
            content: annotation[0],
            offset: { x: 0.22, y: 0.5 },
          },
          {
            content: annotation[1],
            offset: { x: 0.78, y: 0.5 },
          },
          {
            content: annotation[2],
            offset: { x: 0.9, y: 0 },
            margin: { bottom: 10 },
          },
        ],
        style: {
          fill: 'none',
          fontSize: 10,
        },

        height: 108,
        width: 300,
        ports: [
          {
            id: 'left',
            offset: {
              x: 0.3913,
              y: 0.5,
            },
            visibility: PortVisibility.Visible,
            shape: 'X',
            width: 4,
            height: 4,
          },
          {
            id: 'Right',
            offset: {
              x: 0.60869,
              y: 0.5,
            },
            visibility: PortVisibility.Visible,
            shape: 'X',
            width: 4,
            height: 4,
          },
        ],
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'CommunicationGrouped':
      return {
        id,
        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g  transform="translate(2, 2)">
                      <rect vector-effect="non-scaling-stroke" width="500" height="150" stroke="black" fill="transparent" stroke-width="1" />
                      <rect x="25" y="25" width="200" height="100" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />
                      <rect x="270" y="025" height="100" width="200"  fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>
                  </g>`,
        },
        annotations: [
          {
            content: annotation[0],
            offset: { x: 0.26, y: 0.5 },
          },
          {
            content: annotation[1],
            offset: { x: 0.76, y: 0.5 },
          },
          {
            content: annotation[2],
            offset: { x: 0.5, y: 0 },
            margin: { bottom: 10 },
          },
        ],
        style: {
          fill: 'none',
          fontSize: 10,
        },
        height: 108,
        width: 300,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'CommunicationGrouped2':
      return {
        id,
        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g  transform="translate(2, 2)">
                      <rect vector-effect="non-scaling-stroke" width="500" height="150" stroke="black" fill="transparent" stroke-width="1" />
                      <rect x="50" y="50" width="100" height="50" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />
                      <rect x="200" y="50" width="100" height="50" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />
                      <rect x="375" y="50" width="100" height="50" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>
                      <rect x="25" y="25" vector-effect="non-scaling-stroke" width="300" height="100" stroke="black" fill="transparent" stroke-width="1" />
                  </g>`,
        },
        annotations: [
          {
            content: annotation[0],
            offset: { x: 0.5, y: 0 },
            margin: { bottom: 10 },
          },
          {
            content: annotation[1],
            offset: { x: 0.35, y: 0.1 },
          },
          {
            content: annotation[2],
            offset: { x: 0.2, y: 0.5 },
          },
          {
            content: annotation[3],
            offset: { x: 0.5, y: 0.5 },
          },
          {
            content: annotation[4],
            offset: { x: 0.85, y: 0.5 },
          },
        ],
        style: {
          fill: 'none',
          fontSize: 10,
        },
        height: 175,
        width: 500,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'groupApplicationPart':
      return {
        id,
        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g  transform="translate(2, 2)">
                      <rect vector-effect="non-scaling-stroke" width="250" height="150" stroke="black" fill="transparent" stroke-width="1" />
                      <rect x="25" y="25" width="200" height="100" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />
                  </g>`,
        },
        annotations: [
          {
            content: annotation[0],
            offset: { x: 0.5, y: 0.5 },
          },
          {
            content: annotation[1],
            offset: { x: 0.5, y: 0 },
            margin: { bottom: 10 },
          },
        ],
        style: {
          fill: 'none',
          fontSize: 10,
        },
        height: 130,
        width: 200,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'groupApplicationSub':
      return {
        id,
        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g  transform="translate(2, 2)">
                      <rect vector-effect="non-scaling-stroke" width="250" height="170" stroke="black" fill="transparent" stroke-width="1" />
                      <rect x="25" y="25" width="200" height="100" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />
                      <rect y="125" x="25" height="20" width="200" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>
                      <foreignObject class="symbol-text-container" x="${
                        (0.25 * 100) / 2
                      }" y="-5" width="${
            100 * 0.75
          }" height="${50}" visibility="hidden">
                          <div style="height: ${50}px" class="flex-container">
                              <div width="${
                                100 * 0.75
                              }" class="symbol-text-element">
                                  ${annotation}
                              </div>
                          </div>
                      </foreignObject>
                  </g>`,
        },
        annotations: [
          {
            content: annotation[0],
            offset: { x: 0.5, y: 0.5 },
          },
          {
            content: annotation[1],
            offset: { x: 0.5, y: 0 },
            margin: { bottom: 10 },
          },
        ],
        style: {
          fill: 'none',
          fontSize: 10,
        },
        height: 130,
        width: 200,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'ECF':
      return {
        id,
        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g  transform="translate(2,2)">
                          <rect height="100" width="100" fill="transparent" stroke-width="0"/>
                          <rect x="${100 / (Math.sqrt(2) * 2)}" y="${
            -100 / (Math.sqrt(2) * 2)
          }" width="${100 / Math.sqrt(2)}" height="${
            100 / Math.sqrt(2)
          }" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" transform="rotate(45)"/>
                          <foreignObject class="symbol-text-container" x="${
                            (0.25 * 100) / 2
                          }" width="${
            100 * 0.75
          }" height="${100}" visibility="hidden">
                          <div style="height: ${100}px" class="flex-container">
                              <div width="${
                                100 * 0.75
                              }" class="symbol-text-element">
                                  ${annotation}
                              </div>
                          </div>
                      </foreignObject>
                      </g>`,
        },
        annotations: [
          {
            content: annotation,
          },
        ],

        style: {
          fill: 'none',
          fontSize: 10,
        },
        ports: rectPorts,
        height: 120,
        width: 120,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'Circle':
      let content =
        annotation.content !== undefined ? annotation.content[0].content : '';
      let radius = annotation.radius;
      let pointClass =
        annotation.isPoint === true ? 'class="point-circle"' : '';
      return {
        id,
        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g  ${pointClass} transform="translate(2, 2)">
                          <rect height="${radius * 2}" width="${
            radius * 2
          }" fill="transparent" stroke-width="0" />
                          <circle vector-effect="non-scaling-stroke" cx="${radius}" cy="${radius}" r="${radius}" fill="${
            annotation.fill
          }" stroke="black" stroke-width="1"/>
                          <foreignObject class="symbol-text-container" x="${
                            (0.25 * radius * 2) / 2
                          }" width="${radius * 2 * 0.75}" height="${
            radius * 2
          }" visibility="hidden">
                          <div style="height: ${
                            radius * 2
                          }px" class="flex-container">
                              <div width="${
                                radius * 2 * 0.75
                              }" class="symbol-text-element">
                                  ${content}
                              </div>
                          </div>
                      </foreignObject>
                      </g>`,
        },
        annotations:
          annotation.content !== undefined ? annotation.content : null,
        style: {
          fill: 'none',
          fontSize: 10,
        },
        ports: annotation.ports !== undefined ? annotation.ports : null,
        height: annotation.radius * 2,
        width: annotation.radius * 2,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'Note':
      return {
        id,
        addInfo: addInfo,
        annotations: [
          {
            content: annotation,
          },
        ],

        shape: {
          type: 'Native',
          content: `<g transfrom="translate(2,2)">
                      <rect height="120" width="120" stroke-width="0" fill="transparent" />
                      <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" d = "M 0 0 L 0 120 L 120 120 L 120 20 L 100 0 L 0 0"/>
                      <polygon vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" points="100,0 100,20 120,20"/>
                      <foreignObject class="symbol-text-container" x="${
                        (0.25 * 120) / 2
                      }" width="${
            120 * 0.75
          }" height="${120}" visibility="hidden">
                          <div style="height: ${120}px" class="flex-container">
                              <div width="${
                                120 * 0.75
                              }" class="symbol-text-element">
                                  My Note
                              </div>
                          </div>
                      </foreignObject>
                  </g>`,
        },
        height: 120,
        width: 120,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'Callout':
      return {
        id,
        addInfo: addInfo,
        annotations: [
          {
            content: annotation,
            offset: { x: 0.5, y: 0.4 },
          },
        ],

        shape: {
          type: 'Native',
          content: `<g  transform="translate(2, 2)">
                      <rect height="250" width="350" fill="transparent" stroke-width="0"/>
                      <path fill="transparent" stroke="black" stroke-width="1" vector-effect="non-scaling-stroke" d="M 0 0 L 350 0 L 350 200 L 120 200 L 100 250 L 100 200 L 0 200 L 0 0"/>
                      <foreignObject class="symbol-text-container" x="${
                        (0.25 * 350) / 2
                      }" width="${
            350 * 0.75
          }" height="${250}" visibility="hidden">
                      <div style="height: ${250}px" class="flex-container">
                          <div width="${
                            350 * 0.75
                          }" class="symbol-text-element">
                              ${annotation}
                          </div>
                      </div>
                  </foreignObject>
                  </g>`,
        },
        height: 250,
        width: 350,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'Table':
      let columnNo = annotation.columnNo;

      let shapeData;
      for (let i = 0; i < columnNo; i++) {
        shapeData += `<g transform="translate(${100 * i})">
              <rect vector-effect="non-scaling-stroke" fill="transparent" stroke-width="1" stroke="black" height="100" width="100"/>
              <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" d="M 0 50 L 100 50"/>
              <text class="symbol-text-container" visibility="hidden" lengthAdjust="spacingAndGlyphs" font-size="10px" font-weight="bold"><tspan x="20" y="30">Title</tspan></text>
              <text class="symbol-text-container" visibility="hidden" lengthAdjust="spacingAndGlyphs" font-size="10px" font-weight="bold"><tspan x="20" y="80">Value</tspan></text>
              </g>`;
      }
      let annotationsArray = [];
      let ratio = 1 / (columnNo * 2);
      for (let i = 0; i < columnNo * 2; i++) {
        annotationsArray.push({
          content: annotation.content[i],
          width: 100,
          offset: { x: ratio, y: i % 2 === 0 ? 0.25 : 0.75 },
        });
        if (i % 2 !== 0) ratio = ratio + 1 / columnNo;
      }

      return {
        id,
        addInfo: addInfo,
        annotations: annotationsArray,
        shape: {
          type: 'Native',
          content: `<g  transform="translate(2, 2)">
                              <rect height="100" width="${
                                100 * columnNo
                              }" fill="transparent" stroke-width="0"/>
                              ${shapeData}
                          </g>`,
        },
        height: 100,
        width: 100 * columnNo,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'WideArrow':
      let angle = 0;
      let x = 0,
        y = 0;
      if (annotation.direction === 'left') {
        angle = 180;
        x = -200;
        y = -70;
      }
      let rightArrow = `<g  transform="translate(2, 2)">
                  <g transform="rotate(${angle}) translate(${x},${y})">
                  <rect height="70" width="200" fill="transparent" stroke-width="0"/>
                  <path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 0 15 L 175 15 L 175 0 L 200 35 L 175 70 L 175 55 L 0 55 L 0 15"/>
                  </g>
                  <foreignObject class="symbol-text-container" x="${
                    (0.25 * 200) / 2
                  }" width="${200 * 0.75}" height="${70}" visibility="hidden">
                  <div style="height: ${70}px" class="flex-container">
                      <div width="${200 * 0.75}" class="symbol-text-element">
                          ${annotation.content}
                      </div>
                  </div>
                  </foreignObject>
              </g>`;
      return {
        id,
        addInfo: addInfo,
        annotations: [
          {
            content: annotation.content,
          },
        ],
        shape: {
          type: 'Native',
          content: rightArrow,
        },
        height: 70,
        width: 200,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'BiWideArrow':
      return {
        id,
        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g transform="translate(2, 2)">
                      <g>
                          <rect height="90" width="500" fill="none" stroke-width="0"/>
                          <path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 0 45 L 50 0 L 50 20 L 450 20 L 450 0 L 500 45 L 450 90 L 450 70 L 50 70 L 50 90 L 0 45"/>
                          <foreignObject class="symbol-text-container" x="${
                            (0.25 * 500) / 2
                          }" width="${
            500 * 0.75
          }" height="${90}" visibility="hidden">
                          <div style="height: ${90}px" class="flex-container">
                              <div width="${
                                500 * 0.75
                              }" class="symbol-text-element">
                                  ${annotation}
                              </div>
                          </div>
                      </foreignObject>
                      </g>
                  </g>`,
        },

        annotations: [
          {
            content: annotation,
          },
        ],
        height: 90,
        width: 280,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'CylinderArrow':
      return {
        id,
        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g  transform="translate(2, 2)">
                      <g fill="transparent">
                          <rect height="50" width="550" fill="none" strole-width="0"/>
                          <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" d="M 25 0 L 525 0 L 525 50 L 25 50 L 25 0"/>
                          <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" cx="25" cy="25" r="25" />
                          <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" cx="525" cy="25" r="25" />
                      </g>
                      <foreignObject class="symbol-text-container" x="${
                        (0.25 * 550) / 2
                      }" width="${
            550 * 0.75
          }" height="${50}" visibility="hidden">
                      <div style="height: ${50}px" class="flex-container">
                          <div width="${
                            550 * 0.75
                          }" class="symbol-text-element">
                              ${annotation}
                          </div>
                      </div>
                  </foreignObject>
                  </g>`,
        },

        annotations: [
          {
            content: annotation,
          },
        ],
        height: 0.001,
        width: 0.003,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'Arrow':
      let sourcePoint = {
        x: -4,
        y: -5,
      };
      let targetPoint = {
        x: -5,
        y: -5,
      };
      if (id === 'giveRiseTo' || id === 'errorToProblem') {
        sourcePoint = {
          x: -5,
          y: -5,
        };
        targetPoint = {
          x: -5,
          y: -4,
        };
      }
      return {
        id,
        addInfo: addInfo,
        type: annotation.type ? annotation.type : 'Straight',
        annotations: annotation.content,
        targetDecorator: {
          shape:
            annotation.shape.target !== undefined
              ? annotation.shape.target
              : 'None',
          style: annotation.style !== undefined ? annotation.style : null,
        },
        sourceDecorator: {
          shape:
            annotation.shape.source !== undefined
              ? annotation.shape.source
              : 'None',
        },
        style: annotation.style !== undefined ? annotation.style : null,
        sourcePoint,
        targetPoint,
        constraints:
          ConnectorConstraints.Default |
          ConnectorConstraints.AllowDrop |
          ConnectorConstraints.Tooltip,
      };
    case 'House':
      return {
        id,
        addInfo: addInfo,
        shape: {
          type: 'Native',
          content:
            '<g  transform="translate(2, 2)">' +
            '<rect height="50" width="50" fill="transparent" stroke-width="0" />' +
            '<path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" d="M 25 0 L 0 25 M 25 0 L 50 25 M 5 20 L 45 20 M 10 20 L 10 50 L 40 50 L 40 20"/>' +
            '<rect vector-effect="non-scaling-stroke" x ="20" y = "25" height="22.5" width="10" fill="#e9eff7" stroke-width="1" stroke="black"/>' +
            '<rect vector-effect="non-scaling-stroke" x="10" y="47.5" width="30" height="2.5" fill="url(#Pattern1)" stroke="black" stroke-width="1"/>' +
            '</g>',
        },
        height: 250,
        width: 250,
        annotations: [
          {
            content: annotation,
            verticalAlignment: 'Bottom',
            offset: { x: 0.5, y: 1 },
            margin: {
              top: 20,
            },
          },
        ],
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'House1':
      return {
        id,
        addInfo: addInfo,
        shape: {
          type: 'Native',
          content:
            '<g  transform="translate(2, 2)">' +
            '<rect height="50" width="50" fill="transparent" stroke-width="0" />' +
            '<path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" d="M 25 0 L 0 25 M 25 0 L 50 25 M 5 20 L 45 20 M 10 20 L 10 50 L 40 50 L 40 20"/>' +
            '<rect vector-effect="non-scaling-stroke" x ="20" y = "25" height="22.5" width="10" fill="#e9eff7" stroke-width="1" stroke="black"/>' +
            '<circle vector-effect="non-scaling-stroke" cx="25" cy="7" r="2.5" fill="#e9eff7" stroke="black" stroke-width="1"/>' +
            '<text x="24.25" y="7.75" style="font: italic 2.5px serif;">k</text>' +
            '<rect vector-effect="non-scaling-stroke" x="10" y="47.5" width="30" height="2.5" fill="url(#Pattern2)" stroke="black" stroke-width="1"/>' +
            '</g>',
        },
        height: 250,
        width: 250,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'Basis':
      return {
        id,
        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g  transform="translate(2, 2)">
                      <rect height="20" width="320" fill="transparent" stroke-width="0"/>
                      <rect x="0" y="0" vector-effect="non-scaling-stroke" height="20" width="20" stroke="black" stroke-width="1" fill="transparent"/>
                      <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dashArray="10 5" fill="transparent" d = "M 20 10 L 320 10"/>
                      <foreignObject class="symbol-text-container" x="${
                        0.03 * 320
                      }" width="${
            320 * 0.75
          }" height="${20}" visibility="hidden">
                      <div style="height: ${20}px" class="flex-container">
                          <div width="${
                            320 * 0.75
                          }" class="symbol-text-element">
                              ${annotation}
                          </div>
                      </div>
                  </foreignObject>
                  </g>`,
        },
        annotations: [
          {
            content: annotation,
            offset: { x: 0.03, y: 0.5 },
            style: {
              color: 'black',
              bold: true,
              italic: true,
              fontSize: '12',
              fontFamily: 'Serif',
            },
          },
        ],
        height: 30,
        width: 450,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'HorizontalLine':
      let strokeDash = annotation.style.strokeDashArray
        ? annotation.style.strokeDashArray
        : '';
      return {
        id,
        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g  transform="translate(2, 2)">
                      <g>
                          <rect width="10" height="5" fill="transparent" stroke-width="0"/>
                          <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dasharray="${strokeDash}" d="M 0 2.5 L 10 2.5"/>
                      </g>
                  </g>`,
        },

        ports: annotation.ports,
        annotations: annotation.content,
        height: 30,
        width: annotation.length,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'VerticalLine':
      const strokeDashV = annotation.style.strokeDashArray
        ? annotation.style.strokeDashArray
        : '';
      return {
        id,
        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g  transform="translate(2, 2)">
                      <g>
                          <rect width="5" height="10" fill="transparent" stroke-width="0"/>
                          <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dasharray="${strokeDashV}" d="M 2.5 0 L 2.5 10"/>
                      </g>
                  </g>`,
        },

        ports: annotation.ports,
        annotations: annotation.content,
        height: annotation.length,
        width: 30,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'Graph':
      return {
        id,
        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g  transform="translate(2, 2)">
                          <rect width="10" height="10" fill="transparent" stroke-width="0" />
                          <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1.5" fill="transparent" d="M 0.5 10 L 0.5 0 M 0 9.5 L 10 9.5" />
                      </g>`,
        },
        annotations: annotation,
        height: 600,
        width: 600,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'Curly':
      return {
        id,
        addInfo: addInfo,
        annotations: annotation.content,
        shape: {
          type: 'Native',
          content: `<g  transform="translate(2,2)">
                      <rect height="120" width="30" stroke-width="1" stroke="1" fill="transparent"/>
                      <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" d="M 30 0 A 15 20 0 0 0 15 20 L 15 50 A 15 10 0 0 1 0 60 A 15 10 0 0 1 15 70 L 15 100 A 15 20 0 0 0 30 120"/>
                  </g>`,
        },
        height: 120,
        width: 40,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'CurlyClose':
      return {
        id,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
        addInfo: addInfo,
        annotations: annotation.content,
        shape: {
          type: 'Native',
          content: `<g transform="translate(2,2)">
                      <rect height="120" width="30" stroke-width="1" stroke="1" fill="transparent"/>
                      <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" d="M 0 0 A 15 20 0 0 1 15 20 L 15 50 A 15 10 0 0 0 30 60 A 15 10 0 0 0 15 70 L 15 100 A 15 20 0 0 1 0 120" />
                  </g>`,
        },
        height: 120,
        width: 40,
      };
    case 'DottedGroup':
      return {
        id,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,

        addInfo: addInfo,
        annotations: [
          {
            content: annotation,
          },
        ],
        shape: {
          type: 'Native',
          content: `<g  transform="translate(2, 2)">
                          <rect x = "0" y = "0" vector-effect="non-scaling-stroke" height="90" width="170" stroke="black" stroke-dasharray="8 4" stroke-width="1" fill="Transparent"/>
                          <rect x="30" y="15" width="100" height="50" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />
                          <rect x="40" y="25" height="50" width="100"  fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>
                          <foreignObject class="symbol-text-container" x="${
                            (0.25 * 170) / 2
                          }" width="${
            170 * 0.75
          }" height="${90}" visibility="hidden">
                          <div style="height: ${90}px" class="flex-container">
                              <div width="${
                                170 * 0.75
                              }" class="symbol-text-element">
                                  ${annotation}
                              </div>
                          </div>
                          </foreignObject>
                      </g>`,
        },
        ports: rectPorts,
        height: 80,
        width: 160,
      };
    case 'DomainTop':
      return {
        id,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
        addInfo: addInfo,
        annotations: annotation.content,
        shape: {
          type: 'Native',
          content: `<g transform="translate(2, 2)">
                          <g>
                              <rect height="50" width="200" fill="transparent" stroke-width="0" />
                              <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="Transparent" d="M 0 0 L 0 50 L 200 50 L 200 0"/>
                              <foreignObject class="symbol-text-container" x="${
                                (0.25 * 200) / 2
                              }" width="${
            200 * 0.75
          }" height="${50}" visibility="hidden">
                              <div style="height: ${50}px" class="flex-container">
                                  <div width="${
                                    200 * 0.75
                                  }" class="symbol-text-element">
                                      ${annotation.content}
                                  </div>
                              </div>
                              </foreignObject>
                          </g>
                      </g>`,
        },
        style: {
          fontSize: 10,
        },
        height: 50,
        width: 200,
      };
    case 'DomainBottom':
      return {
        id,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
        addInfo: addInfo,
        annotations: annotation.content,
        shape: {
          type: 'Native',
          content: `<g transform="translate(2, 2)">
                          <g>
                              <rect height="50" width="200" fill="transparent" stroke-width="0" />
                              <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="Transparent" d="M 0 50 L 0 0 L 200 0 L 200 50"/>
                              <foreignObject class="symbol-text-container" x="${
                                (0.25 * 200) / 2
                              }" width="${
            200 * 0.75
          }" height="${50}" visibility="hidden">
                              <div style="height: ${50}px" class="flex-container">
                                  <div width="${
                                    200 * 0.75
                                  }" class="symbol-text-element">
                                      ${annotation.content}
                                  </div>
                              </div>
                              </foreignObject>
                          </g>
                      </g>`,
        },
        style: {
          fontSize: 10,
        },
        height: 50,
        width: 200,
      };
    case 'DomainRight':
      return {
        id,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
        addInfo: addInfo,
        annotations: annotation.content,
        shape: {
          type: 'Native',
          content: `<g transform="translate(2, 2)">
                          <g>
                              <rect height="200" width="50" fill="transparent" stroke-width="0" />
                              <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="Transparent" d="M 50 0 L 0 0 L 0 200 L 50 200"/>
                              <foreignObject class="symbol-text-container" x="${0}" width="${50}" height="${200}" visibility="hidden">
                              <div style="height: ${200}px" class="flex-container">
                                  <div width="${50}" class="symbol-text-element">
                                      ${annotation.content}
                                  </div>
                              </div>
                              </foreignObject>
                          </g>
                      </g>`,
        },
        style: {
          fontSize: 10,
        },
        height: 200,
        width: 50,
      };
    case 'DomainLeft':
      return {
        id,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
        addInfo: addInfo,
        annotations: annotation.content,
        shape: {
          type: 'Native',
          content: `<g transform="translate(2, 2)">
                          <g>
                              <rect height="200" width="50" fill="transparent" stroke-width="0" />
                              <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="Transparent" d="M 0 0 L 50 0 L 50 200 L 0 200"/>
                              <foreignObject class="symbol-text-container" x="${0}" width="${50}" height="${200}" visibility="hidden">
                              <div style="height: ${200}px" class="flex-container">
                                  <div width="${50}" class="symbol-text-element">
                                      ${annotation.content}
                                  </div>
                              </div>
                              </foreignObject>
                          </g>
                      </g>`,
        },
        style: {
          fontSize: 10,
        },
        height: 200,
        width: 50,
      };
    case 'Direction':
      return {
        id,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,

        addInfo: addInfo,
        shape: {
          type: 'Native',
          content:
            '<g  transform="translate(2, 2)">' +
            '<rect height="35" width="70" fill="transparent" stroke-width="0"/>' +
            '<Path vector-effect="non-scaling-stroke" stroke="black" fill="url(#Pattern3)" stroke-width="1" d="M 0 30 L 5 35 L 70 0 L 65 0 L 0 30">' +
            '</g>',
        },
        width: 500,
        height: 200,
      };
    case 'LifeBox':
      return {
        id,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,

        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g  transform="translate(2, 2)">
                          <rect vector-effect="non-scaling-stroke" x="0" y="0" height="600" width="300" fill="transparent" stroke="black" stroke-width="2" />
                          <rect vector-effect="non-scaling-stroke" x="25" y="25" height="250" width="250" fill="transparent" stroke="black" stroke-width="1" />
                          <rect vector-effect="non-scaling-stroke" x="25" y="325" height="250" width="250" fill="transparent" stroke="black" stroke-width="1" />
                          <foreignObject class="symbol-text-container" x="${
                            (0.25 * 300) / 2
                          }" y="${50}"width="${
            300 * 0.75
          }" height="${100}" visibility="hidden">
                              <div style="height: ${100}px" class="flex-container">
                                  <div width="${
                                    350 * 0.75
                                  }" class="symbol-text-element">
                                      ${annotation[0]}
                                  </div>
                              </div>
                          </foreignObject>
                          <foreignObject class="symbol-text-container" x="${
                            (0.25 * 300) / 2
                          }" y="${375}"width="${
            300 * 0.75
          }" height="${100}" visibility="hidden">
                              <div style="height: ${100}px" class="flex-container">
                                  <div width="${
                                    300 * 0.75
                                  }" class="symbol-text-element">
                                      ${annotation[1]}
                                  </div>
                              </div>
                          </foreignObject>
                      </g>`,
        },
        annotations: [
          {
            content: annotation[0],
            offset: { x: 0.5, y: 0.25 },
          },
          {
            content: annotation[1],
            offset: { x: 0.5, y: 0.75 },
          },
          {
            content: annotation[2],
            offset: { x: 0.5, y: 1 },
            margin: { top: 20 },
          },
        ],
        height: 400,
        width: 200,
      };
    case 'LifeCircle':
      return {
        id,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,

        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g  transform="translate(2, 2)">
                          <rect height="600" width="600" stroke-width="0" fill="transparent" />
                          <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="2" fill="transparent" cx="300" cy="300" r="300"/>
                          <ellipse vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="147.5" cy="300" rx="112.5" ry="220"/>
                          <ellipse vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="447.5" cy="300" rx="112.5" ry="220"/>
                          <foreignObject class="symbol-text-container" x="${
                            0.15 * 600
                          }" width="${
            200 * 0.75
          }" height="${600}" visibility="hidden">
                          <div style="height: ${600}px" class="flex-container">
                              <div width="${
                                200 * 0.75
                              }" class="symbol-text-element">
                                  ${annotation[0]}
                              </div>
                          </div>
                          </foreignObject>
                          <foreignObject class="symbol-text-container" x="${
                            0.65 * 600
                          }" width="${
            200 * 0.75
          }" height="${600}" visibility="hidden">
                          <div style="height: ${600}px" class="flex-container">
                              <div width="${
                                200 * 0.75
                              }" class="symbol-text-element">
                                  ${annotation[1]}
                              </div>
                          </div>
                          </foreignObject>
                      </g>`,
        },
        annotations: [
          {
            content: annotation[0],
            offset: { x: 0.25, y: 0.5 },
          },
          {
            content: annotation[1],
            offset: { x: 0.75, y: 0.5 },
          },
          {
            content: annotation[2],
            offset: { x: 0.5, y: 1 },
            margin: { top: 20 },
          },
        ],
        height: 400,
        width: 400,
      };
    case 'Natural':
      return {
        id,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,

        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g  transform="translate(2, 2)">
                          <rect vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" height="150" width="100"/>
                          <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" d = "M 20 30 L 50 80 L 72 30 M 50 80 L 50 130 M 85 40 A 10 10 0 1 0 50 25"/>
                          <polygon vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="black" points="45,25 55,25 50,35"/>
                      </g>`,
        },
        ports: rectPorts,
        height: 150,
        width: 100,
      };
    case 'Reference':
      return {
        id,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,

        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g  transform="translate(2, 2)">
                          <rect height="710" width="900" stroke-width="0" fill="transparent" />
                          <ellipse vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="450" cy="355" ry="355" rx="450"/>
                          <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="125" cy="355" r="100" />
                          <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="350" cy="355" r="100" />
                          <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="560" cy="370" r="100" />
                          <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="775" cy="355" r="100" />
                          <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="450" cy="130" r="100" />
                          <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="245" cy="170" r="100" />
                          <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="450" cy="580" r="100" />
                          <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="245" cy="540" r="100" />
                          <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="655" cy="180" r="100" />
                          <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="675" cy="540" r="100" />
                      </g>`,
        },

        annotations: [
          {
            content: 'Education Theory',
            offset: { x: 0.14, y: 0.5 },
            width: 75,
          },
          {
            content: 'Power Theory',
            offset: { x: 0.39, y: 0.5 },
            width: 75,
          },
          {
            content: 'Marketing Theory',
            offset: { x: 0.625, y: 0.52 },
            width: 75,
          },
          {
            content: 'Exchange System Theory',
            offset: { x: 0.865, y: 0.5 },
            width: 75,
          },
          {
            content: 'Communicaiton Theory',
            offset: { x: 0.268, y: 0.25 },
            width: 75,
          },
          {
            content: 'Information Theory',
            offset: { x: 0.5, y: 0.185 },
            width: 75,
          },
          {
            content: 'Instrumentation Theory',
            offset: { x: 0.725, y: 0.255 },
            width: 75,
          },
          {
            content: 'Gamming Theory',
            offset: { x: 0.268, y: 0.75 },
            width: 75,
          },
          {
            content: 'Work Theory',
            offset: { x: 0.51, y: 0.815 },
            width: 75,
          },
          {
            content: 'Reproduction Theory',
            offset: { x: 0.75, y: 0.76 },
            width: 75,
          },
          {
            content: 'The Given Reference',
            offset: { x: 0.5, y: 1 },
            margin: { top: 20 },
          },
        ],
        height: 355,
        width: 450,
      };
    case 'Reference1':
      return {
        id,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,

        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g  transform="translate(2, 2)">
                      <rect height="710" width="900" stroke-width="0" fill="transparent" />
                      <ellipse vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="450" cy="355" ry="355" rx="450"/>
                      <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="125" cy="355" r="100" />
                      <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="350" cy="355" r="100" />
                      <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="560" cy="370" r="100" />
                      <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="775" cy="355" r="100" />
                      <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="450" cy="130" r="100" />
                      <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="245" cy="170" r="100" />
                      <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="450" cy="580" r="100" />
                      <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="245" cy="540" r="100" />
                      <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="655" cy="180" r="100" />
                      <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="675" cy="540" r="100" />
                  </g>`,
        },

        annotations: [
          {
            template:
              '<div style="margin-top:170px; margin-left:55px;">E<sub>T</sub></div>',
          },
          {
            template:
              '<div style="margin-top:170px; margin-left:170px;">P<sub>T</sub></div>',
          },
          {
            template:
              '<div style="margin-top:180px; margin-left:275px;">M<sub>T</sub></div>',
          },
          {
            template:
              '<div style="margin-top:170px; margin-left:380px;">Es<sub>T</sub></div>',
          },
          {
            template:
              '<div style="margin-top:75px; margin-left:115px;">K<sub>T</sub></div>',
          },
          {
            template:
              '<div style="margin-top:55px; margin-left:220px;">i<sub>T</sub></div>',
          },
          {
            template:
              '<div style="margin-top:80px; margin-left:320px;">I<sub>T</sub></div>',
          },
          {
            template:
              '<div style="margin-top:260px; margin-left:115px;">G<sub>T</sub></div>',
          },
          {
            template:
              '<div style="margin-top:280px; margin-left:220px;">W<sub>T</sub></div>',
          },
          {
            template:
              '<div style="margin-top:260px; margin-left:330px;">X<sub>T</sub></div>',
          },
          {
            content: 'R',
            offset: { x: 0.85, y: 1 },
          },
        ],
        height: 355,
        width: 450,
      };
    case 'StrokeRect':
      return {
        id,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,

        addInfo: addInfo,
        annotations: [
          {
            content: annotation,
          },
        ],
        shape: {
          type: 'Native',
          content: `<g  transform="translate(2, 2)">
                      <rect x = "0" y = "0" vector-effect="non-scaling-stroke" height="80" width="160" stroke="black" stroke-dasharray="8 4" stroke-width="1" fill="transparent"/>
                      <rect x="30" y="20" width="100" height="40" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />
                      <foreignObject class="symbol-text-container" x="${
                        (0.25 * 160) / 2
                      }" width="${
            160 * 0.75
          }" height="${80}" visibility="hidden">
                      <div style="height: ${80}px" class="flex-container">
                          <div width="${
                            0.75 * 160
                          }" class="symbol-text-element">
                              ${annotation}
                          </div>
                      </div>
                      </foreignObject>
                      </g>`,
        },
        ports: rectPorts,
        height: 80,
        width: 160,
      };
    case 'LeftLabel':
      return {
        id,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,

        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g transfrom="translate(2, 2)">
                      <rect height="50" width="200" stroke-width="0" fill="transparent"/>
                      <path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d = "M 30 50 L 200 50 M 30 50 L 30 15"/>
                      <polygon vector-effect="non-scaling-stroke" fill="black" stroke="black" stroke-width="1" points="25,15 35,15 30,10"/>
                      <foreignObject class="symbol-text-container" x="${
                        (0.25 * 200) / 2
                      }" y="25" width="${
            200 * 0.75
          }" height="${25}" visibility="hidden">
                      <div style="height: ${25}px" class="flex-container">
                          <div width="${
                            200 * 0.75
                          }" class="symbol-text-element">
                              ${'label'}
                          </div>
                      </div>
                      </foreignObject>
                  </g>`,
        },
        annotations: [
          {
            content: 'label',
            offset: { x: 0.5, y: 1 },
            margin: { top: 10 },
          },
        ],
        height: 50,
        width: 200,
      };
    case 'RightLabel':
      return {
        id,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,

        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g>
                      <rect height="50" width="200" stroke-width="0" fill="transparent"/>
                      <path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 30 50 L 200 50 L 200 15"/>
                      <polygon vector-effect="non-scaling-stroke" fill="black" stroke="black" stroke-width="1" points="195,15 205,15 200 ,10" />
                      <foreignObject class="symbol-text-container" x="${
                        (0.25 * 200) / 2
                      }" y="25" width="${
            200 * 0.75
          }" height="${25}" visibility="hidden">
                      <div style="height: ${25}px" class="flex-container">
                          <div width="${
                            200 * 0.75
                          }" class="symbol-text-element">
                              ${'label'}
                          </div>
                      </div>
                      </foreignObject>
                  </g>`,
        },
        annotations: [
          {
            content: 'label',
            offset: { x: 0.5, y: 1 },
            margin: { top: 10 },
          },
        ],
        height: 50,
        width: 200,
      };
    case 'PushUpRight':
      return {
        id,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,

        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g transform="translate(2,2)">
                      <rect height="100" width="100" stroke-width="0" fill="transparent"/>
                      <path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 50 100 L 100 100 L 100 0"/>
                      <polygon vector-effect="non-scaling-stroke" fill="black" stroke="black" stroke-width="1" points="95,5 105,5 100,0"/>
                      <foreignObject class="symbol-text-container" x="${
                        0.4 * 100
                      }" y="25" width="${
            100 * 0.75
          }" height="${75}" visibility="hidden">
                      <div style="height: ${75}px" class="flex-container">
                          <div width="${
                            100 * 0.75
                          }" class="symbol-text-element">
                              ${'push up'}
                          </div>
                      </div>
                      </foreignObject>
                  </g>`,
        },
        annotations: [
          {
            content: 'push up',
            offset: { x: 1, y: 0.5 },
            margin: { left: 30 },
          },
        ],
        height: 100,
        width: 100,
      };
    case 'PushUpLeft':
      return {
        id,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,

        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g transform="translate(2,2)">
                      <rect height="100" width="100" stroke-width="0" fill="transparent"/>
                      <path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 55 100 L 5 100 L 5 0"/>
                      <polygon vector-effect="non-scaling-stroke" fill="black" stroke="black" stroke-width="1" points=" 0,5 10,5 5,0"/>
                      <foreignObject class="symbol-text-container" x="${
                        0.02 * 100
                      }" y="25" width="${
            100 * 0.75
          }" height="${75}" visibility="hidden">
                      <div style="height: ${75}px" class="flex-container">
                          <div width="${
                            100 * 0.75
                          }" class="symbol-text-element">
                              ${'push up'}
                          </div>
                      </div>
                      </foreignObject>
                  </g>`,
        },
        annotations: [
          {
            content: 'push up',
            offset: { x: 0, y: 0.5 },
            margin: { right: 30 },
          },
        ],
        height: 100,
        width: 100,
      };
    case 'TheoryScale':
      return {
        id,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,

        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g tranform="translate(2,2)">
                      <rect height="50" width="600" fill="transparent" stroke-width="0"/>
                      <path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 0 25 L 600 25 M 270 10 L 270 40 M 290 10 L 290 40 M 310 10 L 310 40 M 330 10 L 330 40"/>
                      <circle vector-effect="non-scaling-stroke" fill="black" stroke="black" stroke-width="1" cx="5" cy="15" r="3"/>
                      <circle vector-effect="non-scaling-stroke" fill="black" stroke="black" stroke-width="1" cx="25" cy="15" r="3"/>
                      <circle vector-effect="non-scaling-stroke" fill="black" stroke="black" stroke-width="1" cx="45" cy="15" r="3"/>
                      <circle vector-effect="non-scaling-stroke" fill="black" stroke="black" stroke-width="1" cx="595" cy="15" r="3"/>
                      <circle vector-effect="non-scaling-stroke" fill="black" stroke="black" stroke-width="1" cx="575" cy="15" r="3"/>
                      <circle vector-effect="non-scaling-stroke" fill="black" stroke="black" stroke-width="1" cx="555" cy="15" r="3"/>
                  </g>`,
        },

        annotations: [
          {
            content: '-2',
            offset: { x: 0.45, y: 1 },
          },
          {
            content: '-1',
            offset: { x: 0.4833, y: 1 },
          },
          {
            content: '1',
            offset: { x: 0.5167, y: 1 },
          },
          {
            content: '2',
            offset: { x: 0.55, y: 1 },
          },
        ],
        height: 50,
        width: 600,
      };
    case 'VerticalContinuity':
      return {
        id,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,

        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g>
                      <rect vector-effect="non-scaling-stroke" height="60" width="120" stroke-width="1" fill="none" stroke="black"/>
                      <circle vector-effect="non-scaling-stroke" stroke-width="1" fill="black" stroke="black" cx="60" cy="15" r="3.5"/>
                      <circle vector-effect="non-scaling-stroke" stroke-width="1" fill="black" stroke="black" cx="60" cy="30" r="3.5"/>
                      <circle vector-effect="non-scaling-stroke" stroke-width="1" fill="black" stroke="black" cx="60" cy="45" r="3.5"/>
                  </g>`,
        },
        ports: rectPorts,
        height: 50,
        width: 100,
      };
    case 'redcross':
      return {
        id,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g transform="translate(2,2)">
                      <rect vector-effect="non-scaling-stroke" height="10" width="10" stroke="none" fill="none"/>
                      <path vector-effect="non-scaling-stroke" stroke="red" stroke-width="1" fill="none" d="M 0 0 L 10 10 M 0 10 L 10 0"/>
                  </g>`,
        },
        height: 50,
        width: 50,
      };
    case 'linkednode':
      return {
        id,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,

        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g transform="translate(2,2)">
                      <rect vector-effect="non-scaling-stroke" height="12" width="10" stroke="none" fill="none"/>
                      <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="none" cx="5" cy="5" r="5"/>
                      <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="none" d="M 2 11 L 8 11 M 2 12 L 8 12"/>
                  </g>`,
        },
        annotations: [
          {
            content: '1',
            offset: { x: 0.5, y: 0.45 },
          },
        ],
        height: 60,
        width: 50,
      };
    case 'emptycontainer':
      return {
        id,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,

        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g transfrom="translate(2,2)">
                  <rect vector-effect="non-scaling-stroke" height="150" width="700" fill="none" stroke="black" stroke-width="1"/>
                  </g>`,
        },
        annotations: [
          {
            content: 'Empty Container',
          },
        ],
        height: 150,
        width: 400,
      };
    case 'squareemptycontainer':
      return {
        id,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,

        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g transform="translate(2,2)">
                      <rect vector-effect="non-scaling-stroke" height="200" width="200" fill="none" stroke="black" stroke-width="1"/>
                  </g>`,
        },
        annotations: [
          {
            content: annotation,
            offset: { x: 0.5, y: 0 },
            margin: { bottom: 10 },
          },
        ],
        height: 200,
        width: 200,
      };
    case 'RawAnnotationContent':
      let heightR = annotation.height !== undefined ? annotation.height : 80;
      let widthR = annotation.width !== undefined ? annotation.width : 80;
      let textR =
        annotation.content !== undefined
          ? annotation.content[0].content
          : annotation;
      let textLenR;
      if (String(textR).length === 1) {
        textLenR = widthR * 0.15;
      } else if (String(textR).length > 1 && String(textR).length < 5) {
        textLenR = widthR * 0.3;
      } else if (String(textR).length <= 20 && String(textR).length >= 5) {
        textLenR = widthR * 0.65;
      } else {
        textLenR = widthR * 0.85;
      }
      return {
        id,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,

        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g transform="translate(2,2)">
                      <rect vector-effect="non-scaling-stroke" height="${heightR}" width="${widthR}" stroke="black" stroke-width="1" fill="transparent" />
                      <foreignObject class="symbol-text-container" x="${
                        (0.25 * widthR) / 2
                      }" width="${
            widthR * 0.75
          }" height="${heightR}" visibility="hidden">
                          <div style="height: ${heightR}px" class="flex-container">
                              <div width="${
                                widthR * 0.75
                              }" class="symbol-text-element">
                                  ${textR}
                              </div>
                          </div>
                      </foreignObject>`,
        },
        annotations:
          annotation.content !== undefined
            ? annotation.content
            : [{ content: annotation }],
        width: widthR,
        height: heightR,
        ports: annotation.ports !== undefined ? annotation.ports : rectPorts,
        style: {
          ...annotation.style,
          fill: 'white',
          fontSize: 20,
        },
      };
    case 'ConnectorArrow':
      let sourcePointC;
      let targetPointC;
      switch (annotation.decoration) {
        case 'up':
          sourcePointC = { x: 0, y: 0 };
          targetPointC = { x: 0, y: 1 };
          break;
        case 'down':
          sourcePointC = { x: 0, y: 0 };
          targetPointC = { x: 0, y: -1 };
          break;
        case 'left':
          sourcePointC = { x: 0, y: 0 };
          targetPointC = { x: 1, y: 0 };
          break;
        case 'right':
          sourcePointC = { x: 0, y: 0 };
          targetPointC = { x: -1, y: 0 };
          break;
        case 'upLeft':
          sourcePointC = { x: 0, y: 0 };
          targetPointC = { x: 1, y: 1 };
          break;
        case 'downLeft':
          sourcePointC = { x: 0, y: 0 };
          targetPointC = { x: 1, y: -1 };
          break;
        case 'upRight':
          sourcePointC = { x: 0, y: 0 };
          targetPointC = { x: -1, y: 1 };
          break;
        case 'downRight':
          sourcePointC = { x: 0, y: 0 };
          targetPointC = { x: -1, y: -1 };
          break;
        default:
          sourcePointC = { x: 0, y: 0 };
          targetPointC = { x: 1, y: 0 };
          break;
      }
      return {
        id,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
        addInfo: addInfo,
        type: annotation.type || 'Straight',
        annotations: annotation.content,
        sourceDecorator: {
          shape: annotation.source || 'None',
          style: annotation.sourceStyle || null,
        },
        targetDecorator: {
          shape: annotation.target || 'Arrow',
          style: annotation.targetStyle || null,
        },
        style: annotation.style || null,
        sourcePointC,
        targetPointC,
      };
    case 'ConnectorBezier':
      let sourcePointB;
      let targetPointB;
      switch (annotation.decoration) {
        case 'up':
          sourcePointB = { x: 0, y: 0 };
          targetPointB = { x: 0, y: 1 };
          break;
        case 'down':
          sourcePointB = { x: 0, y: 0 };
          targetPointB = { x: 0, y: -1 };
          break;
        case 'left':
          sourcePointB = { x: 0, y: 0 };
          targetPointB = { x: 1, y: 0 };
          break;
        case 'right':
          sourcePointB = { x: 0, y: 0 };
          targetPointB = { x: -1, y: 0 };
          break;
        case 'upLeft':
          sourcePointB = { x: 0, y: 0 };
          targetPointB = { x: 1, y: 1 };
          break;
        case 'downLeft':
          sourcePointB = { x: 0, y: 0 };
          targetPointB = { x: 1, y: -1 };
          break;
        case 'upRight':
          sourcePointB = { x: 0, y: 0 };
          targetPointB = { x: -1, y: 1 };
          break;
        case 'downRight':
          sourcePointB = { x: 0, y: 0 };
          targetPointB = { x: -1, y: -1 };
          break;
        default:
          sourcePointB = { x: 0, y: 0 };
          targetPointB = { x: 1, y: 0 };
          break;
      }
      return {
        id,
        addInfo: addInfo,
        type: annotation.type || 'Bezier',
        annotations: annotation.content,
        sourceDecorator: {
          shape: annotation.source || 'Arrow',
          style: annotation.sourceStyle || null,
        },
        targetDecorator: {
          shape: annotation.target || 'Arrow',
          style: annotation.targetStyle || null,
        },
        style: annotation.style || null,
        sourcePointB,
        targetPointB,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'EquationWithBorder':
      let heightE = annotation?.height !== undefined ? annotation.height : 80;
      let widthE = annotation?.width !== undefined ? annotation.width : 150;
      let textE =
        annotation?.content !== undefined
          ? annotation?.content[0]?.content
          : annotation;
      let textLenE;
      if (String(textE).length === 1) {
        textLenE = widthE * 0.15;
      } else if (String(textE).length > 1 && String(textE).length < 5) {
        textLenE = widthE * 0.3;
      } else if (String(textE).length <= 20 && String(textE).length >= 5) {
        textLenE = widthE * 0.65;
      } else {
        textLenE = widthE * 0.85;
      }
      return {
        id,
        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g transform="translate(2,2)">
                      <rect vector-effect="non-scaling-stroke" height="${heightE}" width="${widthE}" stroke="black" stroke-width="1" fill="transparent" />
                      </g>`,
        },
        annotations: [{ template: annotation }],
        width: widthE,
        height: heightE,
        ports: rectPorts,
        style: { fill: 'white', fontSize: 10 },
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    case 'EquationWithNoBorder':
      return {
        id,
        shape: {
          type: 'Native',
          content: `<g  transform="translate(2, 2)">
            <rect height="30" width="100" fill="transparent" stroke-width="0"/>
            <foreignObject class="symbol-text-container" x="0" y="25" width="${100}" height="${30}" visibility="hidden">
            </foreignObject>
          </g>`,
        },
        addInfo: addInfo,
        annotations: [{ template: annotation }],
        height: 30,
        width: 100,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      };
    default:
      let height = annotation?.height !== undefined ? annotation.height : 80;
      let width = annotation?.width !== undefined ? annotation.width : 150;
      let text =
        annotation?.content !== undefined
          ? annotation?.content[0]?.content
          : annotation;
      let textLen;
      if (String(text).length === 1) {
        textLen = width * 0.15;
      } else if (String(text).length > 1 && String(text).length < 5) {
        textLen = width * 0.3;
      } else if (String(text).length <= 20 && String(text).length >= 5) {
        textLen = width * 0.65;
      } else {
        textLen = width * 0.85;
      }
      return {
        id,
        addInfo: addInfo,
        shape: {
          type: 'Native',
          content: `<g transform="translate(2,2)">
                    <rect vector-effect="non-scaling-stroke" height="${height}" width="${width}" stroke="black" stroke-width="1" fill="transparent" />
                    <foreignObject class="symbol-text-container" x="${
                      (0.25 * width) / 2
                    }" width="${
            width * 0.75
          }" height="${height}" visibility="hidden">
                        <div style="height: ${height}px" class="flex-container">
                            <div width="${
                              width * 0.75
                            }" class="symbol-text-element">
                                ${text}
                            </div>
                        </div>
                    </foreignObject>`,
        },
        annotations:
          annotation?.content !== undefined
            ? annotation?.content
            : [{ content: annotation }],
        width: width,
        height: height,
        ports: annotation?.ports !== undefined ? annotation?.ports : rectPorts,
        constraints: NodeConstraints.Default | NodeConstraints.Rotate,
        style: {
          ...annotation?.style,
          fill: 'white',
          fontSize: 10,
        },
      };
  }
}

export function drawShape({ id, title, annotation, toolTip, type, menuId }) {
  let node;
  if (type === 'Ellipse') {
    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],
      shape: {
        type: 'Native',
        content: `
        <g transform="translate(2,2)">
          <rect height="40" width="120" stroke-width="0" fill="transparent" />
          <ellipse vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" cx="60" cy="20" rx="60" ry="20"/>
          <foreignObject class="symbol-text-container" x="${
            (0.25 * 120) / 2
          }" width="${120 * 0.75}" height="${40}" visibility="hidden">
            <div style="height: ${40}px" class="flex-container">
              <div width="${120 * 0.75}" class="symbol-text-element">
                ${annotation}
              </div>
            </div>
          </foreignObject>
        </g>`,
      },
      annotations: [
        {
          content: annotation,
        },
      ],
      style: {
        fill: 'white',
        fontSize: 10,
      },
      ports: rectPorts,
      constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      height: 40,
      width: 120,
    };
  } else if (type === 'Continuity') {
    let strokeWidth =
      annotation.strokeWidth !== undefined ? annotation.strokeWidth : 1;
    let strokeDashArray =
      annotation.strokeDashArray !== undefined
        ? annotation.strokeDashArray
        : '';
    // let fill = (annotation.fill !== undefined) ? annotation.fill : 'White';
    let ports = annotation.ports !== undefined ? annotation.ports : rectPorts;
    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],
      shape: {
        type: 'Native',
        content: `
        <g transform="translate(2, 2)">
          <rect width="10" height="5" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="${strokeWidth}" stroke-dasharray = "${strokeDashArray}" />
          <circle vector-effect="non-scaling-stroke" cx="3.5" cy="2.5" r="0.4"/>
          <circle vector-effect="non-scaling-stroke" cx="5.0" cy="2.5" r="0.4"/>
          <circle vector-effect="non-scaling-stroke" cx="6.5" cy="2.5" r="0.4"/>
        </g>`,
      },
      style: {
        fill: 'none',
        fontSize: 10,
      },
      constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      ports: ports,
      width: 210,
      height: 100,
    };
  } else if (type === 'Group') {
    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],
      shape: {
        type: 'Native',
        content: `
        <g  transform="translate(2, 2)">
          <rect x="0" y="0" width="100" height="50" fill="none" stroke-width="0"/>
          <rect width="90" height="50" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />
          <rect x="90" height="50" width="10" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>
          <foreignObject class="symbol-text-container" x="${
            (0.25 * 100) / 2
          }" width="${100 * 0.75}" height="${50}" visibility="hidden">
            <div style="height: ${50}px" class="flex-container">
              <div width="${100 * 0.75}" class="symbol-text-element">
                ${annotation}
              </div>
            </div>
          </foreignObject>
        </g>`,
      },
      annotations: [
        {
          content: annotation,
        },
      ],
      style: {
        fill: 'none',
        fontSize: 10,
      },
      constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      ports: rectPorts,
      height: 100,
      width: 210,
    };
  } else if (type === 'Sub') {
    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],
      shape: {
        type: 'Native',
        content: `
        <g transform="translate(2, 2)">
          <rect x="0" y="0" width="100" height="50" fill="none" stroke-width="0"/>
          <rect width="100" height="40" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />
          <rect y="40" height="10" width="100" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>
          <foreignObject class="symbol-text-container" x="${
            (0.25 * 100) / 2
          }" y="-5" width="${100 * 0.75}" height="${50}" visibility="hidden">
            <div style="height: ${50}px" class="flex-container">
              <div width="${100 * 0.75}" class="symbol-text-element">
                ${annotation}
              </div>
            </div>
          </foreignObject>
        </g>`,
      },
      annotations: [
        {
          content: annotation,
        },
      ],
      style: {
        fill: 'none',
        fontSize: 10,
      },
      constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      ports: rectPorts,
      height: 100,
      width: 210,
    };
  } else if (type === 'Overlap') {
    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],
      shape: {
        type: 'Native',
        content: `
        <g  transform="translate(2, 2)">
          <rect x="0" y="0" height="50" width="100" fill="transparent" stroke-width="0"/>
          <rect width="90" height="40" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />
          <rect x="10" y="10" height="40" width="90"  fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>
          <foreignObject class="symbol-text-container" x="${
            (0.25 * 100) / 2
          }" width="${100 * 0.75}" height="${50}" visibility="hidden">
            <div style="height: ${50}px" class="flex-container">
              <div width="${100 * 0.75}" class="symbol-text-element">
                ${annotation}
              </div>
            </div>
          </foreignObject>
        </g>`,
      },
      annotations: [
        {
          offset: { x: 0.55, y: 0.5 },
          content: annotation,
        },
      ],
      style: {
        fill: 'none',
        fontSize: 10,
      },
      constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      ports: rectPorts,
      height: 100,
      width: 210,
    };
  } else if (type === 'Text') {
    node = {
      id,
      shape: {
        type: 'Native',
        content: `<g  transform="translate(2, 2)">
          <rect height="30" width="100" fill="transparent" stroke-width="0"/>
          <foreignObject class="symbol-text-container" x="0" y="25" width="${100}" height="${30}" visibility="hidden">
          <div style="height: ${30}px" class="flex-container">
            <div width="${100}" class="symbol-text-element">
              ${annotation}
            </div>
          </div>
          </foreignObject>
        </g>`,
      },
      addInfo: [
        {
          title,
          toolTip,
        },
      ],
      annotations: [
        {
          content: annotation,
          style: {
            bold: true,
            fontSize: 15,
            italic: true,
          },
        },
      ],
      constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      height: 30,
      width: 100,
    };
  } else if (type === 'Person') {
    let label = [
      {
        content: annotation[0],
        offset: { x: 0.5, y: 1 },
        margin: {
          top: 15,
        },
        style: {
          textWrapping: 'NoWrap',
        },
      },
    ];
    if (annotation.length === 2) {
      label.push({
        content: annotation[1],
        offset: { x: 0.5, y: 1 },
        margin: {
          top: 30,
        },
        style: {
          textWrapping: 'NoWrap',
        },
      });
    }
    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],
      shape: {
        type: 'Native',
        content: `
        <g transform="translate(2,2)">
          <rect vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" x="0" y="0" height="77" width="47"/>
          <path vector-effect="non-scaling-stroke" d="M9.4, 19.25 A14.1 14.4375 0 0 1 37.6, 19.25A14.1 14.4375 0 0 1 9.4, 19.25 z" fill="transparent" stroke="#000000" stroke-width="1px" />
          <path vector-effect="non-scaling-stroke" d="M23.5, 32.34 L23.5, 50.05 z" stroke="#000000" stroke-width="1px" />
          <path vector-effect="non-scaling-stroke" d="M23.5, 50.05 L39.95, 73.15 z" stroke="#000000" stroke-width="1px" />
          <path vector-effect="non-scaling-stroke" d="M23.5, 50.05 L7.05, 73.15 z" stroke="#000000" stroke-width="1px" />
          <path vector-effect="non-scaling-stroke" d="M4.7, 46.2 L42.3, 46.2 z" stroke="#000000" stroke-width="1px" />
          <path vector-effect="non-scaling-stroke" d="M18.8, 26.95 A5 2.5 0 0 1 28.2, 26.95 A5 2.5 0 0 1 18.8, 26.95 z" fill="transparent" stroke="#000000" stroke-width="1px" />
          <path viewBox="0 0 60 55" d="M15.04, 14.63 A1 1 0 0 1 19.74, 14.63 A1 1 0 0 1 15.04, 14.63 z" fill="#00000" stroke="#000000" stroke-width="1px" />
          <path viewBox="0 0 60 55" d="M27.26, 14.63 A1 1 0 0 1 31.96, 14.63 A1 1 0 0 1 27.26, 14.63 z" fill="#00000" stroke="#000000" stroke-width="1px" />
        </g>`,
      },
      height: 80,
      width: 50,
      annotations: label,
      style: {
        fontSize: 10,
      },
      constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      ports: personPort1,
    };
  } else if (type === 'PersonNoFrame') {
    let label = [
      {
        content: annotation[0],
        offset: { x: 0.5, y: 1 },
        margin: {
          top: 15,
        },
        style: {
          textWrapping: 'NoWrap',
        },
      },
    ];
    if (annotation.length === 2) {
      label.push({
        content: annotation[1],
        offset: { x: 0.5, y: 1 },
        margin: {
          top: 30,
        },
        style: {
          textWrapping: 'NoWrap',
        },
      });
    }

    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],
      shape: {
        type: 'Native',
        content: `
        <g transform="translate(2,2)">
          <rect vector-effect="non-scaling-stroke" fill="transparent" stroke="transparent" stroke-width="1" x="0" y="0" height="87" width="47"/>
          <path vector-effect="non-scaling-stroke" d="M7.05, 21.75A15.98 16.4333333333333 0 0 1 39.95, 21.75A15.98 16.4333333333333 0 0 1 7.05, 21.75z" fill="transparent" stroke="#000000" stroke-width="1px" />
          <path vector-effect="non-scaling-stroke" d="M23.5, 37.41L23.5, 56.55z" fill="transparent" stroke="#000000" stroke-width="1px" />
          <path vector-effect="non-scaling-stroke" d="M23.5, 56.55L39.95, 82.65z" fill="transparent" stroke="#000000" stroke-width="1px" />
          <path vector-effect="non-scaling-stroke" d="M23.5, 56.55L7.05, 82.65z" fill="transparent" stroke="#000000" stroke-width="1px" />
          <path vector-effect="non-scaling-stroke" d="M4.7, 52.2L42.3, 52.2z" fill="transparent" stroke="#000000" stroke-width="1px" />
          <path vector-effect="non-scaling-stroke" d="M17.86, 30.45A6 3 0 0 1 29.14, 30.45A6 3 0 0 1 17.86, 30.45z" fill="transparent" stroke="#000000" stroke-width="1px" />
          <path d="M14.1, 16.53A2 2 0 0 1 18.8, 16.53A2 2 0 0 1 14.1, 16.53z" fill="#000000" stroke="#000000" stroke-width="1px" />
          <path d="M28.2, 16.53A2 2 0 0 1 32.9, 16.53A2 2 0 0 1 28.2, 16.53z" fill="#000000" stroke="#000000" stroke-width="1px" />
        </g>`,
      },
      height: 90,
      width: 50,
      annotations: label,
      style: {
        fontSize: 10,
      },
      constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      ports: personPort2,
    };
  } else if (type === 'PersonGroup') {
    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],
      shape: {
        type: 'Native',
        content:
          '<g  transform="translate(2, 2)">' +
          '<rect vector-effect="non-scaling-stroke" height="40" width="120" stroke="black" fill="transparent" stroke-width="1"/>' +
          '<circle vector-effect="non-scaling-stroke" cx="11" cy="7.5" r="6" fill="transparent" stroke="black" stroke-width="1" />' +
          '<circle vector-effect="non-scaling-stroke" cx="9.0" cy="6" r="1" fill="black" />' +
          '<circle vector-effect="non-scaling-stroke" cx="13.0" cy="6" r="1.0" fill="black" />' +
          '<ellipse vector-effect="non-scaling-stroke" cx="11.0" cy="11.5" rx="2.0" ry="0.75" fill="transparent" stroke="black" stroke-width="1"/>' +
          '<path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 11 13.5 L 11 19.5 L 4 29.5 M 11 19.5 L 18 29.5 M 3 18 L 19 18"/>' +
          '<circle vector-effect="non-scaling-stroke" cx="41" cy="7.5" r="6" fill="transparent" stroke="black" stroke-width="1" />' +
          '<circle vector-effect="non-scaling-stroke" cx="39.0" cy="6" r="1" fill="black" />' +
          '<circle vector-effect="non-scaling-stroke" cx="43.0" cy="6" r="1.0" fill="black" />' +
          '<ellipse vector-effect="non-scaling-stroke" cx="41.0" cy="11.5" rx="2.0" ry="0.75" fill="transparent" stroke="black" stroke-width="1"/>' +
          '<path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 41 13.5 L 41 19.5 L 34 29.5 M 41 19.5 L 48 29.5 M 33 18 L 49 18"/>' +
          '<circle vector-effect="non-scaling-stroke" fill="black" cx="62" cy="17.5" r="1.5"/>' +
          '<circle vector-effect="non-scaling-stroke" fill="black" cx="72" cy="17.5" r="1.5"/>' +
          '<circle vector-effect="non-scaling-stroke" fill="black" cx="82" cy="17.5" r="1.5"/>' +
          '<foreignObject class="symbol-text-container" x="3" y="30" width="20" height="10" visibility="show">' +
          '<div class="flex-container">' +
          '<div class="symbol-text-element">' +
          '<div style="font-size:5px;font-weight:100"><i>Person1</i></div>' +
          '</div>' +
          '</div>' +
          '</foreignObject>' +
          '<foreignObject class="symbol-text-container" x="33" y="30" width="20" height="10" visibility="show">' +
          '<div class="flex-container">' +
          '<div class="symbol-text-element">' +
          '<div style="font-size:5px;font-weight:100"><i>Person2</i></div>' +
          '</div>' +
          '</div>' +
          '</foreignObject>' +
          '</g>',
      },
      annotations: [
        {
          content: annotation,
          verticalAlignment: 'Bottom',
          offset: { x: 0.5, y: 1 },
          margin: {
            top: 20,
          },
        },
      ],
      height: 140,
      width: 400,
      style: {
        fontSize: 10,
      },
      constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      ports: rectPorts,
    };
  } else if (type === 'WhatWeDo') {
    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],
      shape: {
        type: 'Native',
        content: `<g  transform="translate(2, 2)">
                    <rect vector-effect="non-scaling-stroke" width="575" height="150" stroke="black" fill="transparent" stroke-width="1" />
                    <rect x="25" y="25" width="200" height="100" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />
                    <foreignObject class="symbol-text-container" x="${
                      0.11 * 575
                    }" width="${100}" height="${150}" visibility="hidden">
                        <div style="height: ${150}px" class="flex-container">
                            <div width="${100}" class="symbol-text-element">
                                ${annotation[0]}
                            </div>
                        </div>
                    </foreignObject>
                    <rect x="350" y="025" height="100" width="200"  fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>
                    <foreignObject class="symbol-text-container" x="${
                      0.65 * 575
                    }" width="${100}" height="${150}" visibility="hidden">
                        <div style="height: ${150}px" class="flex-container">
                            <div width="${100}" class="symbol-text-element">
                                ${annotation[1]}
                            </div>
                        </div>
                    </foreignObject>
                </g>`,
      },
      annotations: [
        {
          content: annotation[0],
          offset: { x: 0.22, y: 0.5 },
        },
        {
          content: annotation[1],
          offset: { x: 0.78, y: 0.5 },
        },
        {
          content: annotation[2],
          offset: { x: 0.9, y: 0 },
          margin: { bottom: 10 },
        },
      ],
      style: {
        fill: 'none',
        fontSize: 10,
      },

      height: 108,
      width: 414,
      ports: [
        {
          id: 'left',
          offset: {
            x: 0.3913,
            y: 0.5,
          },
          visibility: PortVisibility.Visible,
          shape: 'X',
          width: 4,
          height: 4,
        },
        {
          id: 'Right',
          offset: {
            x: 0.60869,
            y: 0.5,
          },
          visibility: PortVisibility.Visible,
          shape: 'X',
          width: 4,
          height: 4,
        },
      ],
      constraints: NodeConstraints.Default | NodeConstraints.Rotate,
    };
  } else if (type === 'CommunicationGrouped') {
    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],
      shape: {
        type: 'Native',
        content: `<g  transform="translate(2, 2)">
                    <rect vector-effect="non-scaling-stroke" width="500" height="150" stroke="black" fill="transparent" stroke-width="1" />
                    <rect x="25" y="25" width="200" height="100" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />
                    <rect x="270" y="025" height="100" width="200"  fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>
                </g>`,
      },
      annotations: [
        {
          content: annotation[0],
          offset: { x: 0.26, y: 0.5 },
        },
        {
          content: annotation[1],
          offset: { x: 0.76, y: 0.5 },
        },
        {
          content: annotation[2],
          offset: { x: 0.5, y: 0 },
          margin: { bottom: 10 },
        },
      ],
      style: {
        fill: 'none',
        fontSize: 10,
      },
      height: 108,
      width: 414,
      constraints: NodeConstraints.Default | NodeConstraints.Rotate,
    };
  } else if (type === 'CommunicationGrouped2') {
    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],
      shape: {
        type: 'Native',
        content: `<g  transform="translate(2, 2)">
                    <rect vector-effect="non-scaling-stroke" width="500" height="150" stroke="black" fill="transparent" stroke-width="1" />
                    <rect x="50" y="50" width="100" height="50" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />
                    <rect x="200" y="50" width="100" height="50" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />
                    <rect x="375" y="50" width="100" height="50" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>
                    <rect x="25" y="25" vector-effect="non-scaling-stroke" width="300" height="100" stroke="black" fill="transparent" stroke-width="1" />
                </g>`,
      },
      annotations: [
        {
          content: annotation[0],
          offset: { x: 0.5, y: 0 },
          margin: { bottom: 10 },
        },
        {
          content: annotation[1],
          offset: { x: 0.35, y: 0.1 },
        },
        {
          content: annotation[2],
          offset: { x: 0.2, y: 0.5 },
        },
        {
          content: annotation[3],
          offset: { x: 0.5, y: 0.5 },
        },
        {
          content: annotation[4],
          offset: { x: 0.85, y: 0.5 },
        },
      ],
      style: {
        fill: 'none',
        fontSize: 10,
      },
      height: 175,
      width: 500,
      constraints: NodeConstraints.Default | NodeConstraints.Rotate,
    };
  } else if (type === 'groupApplicationPart') {
    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],
      shape: {
        type: 'Native',
        content: `<g  transform="translate(2, 2)">
                    <rect vector-effect="non-scaling-stroke" width="250" height="150" stroke="black" fill="transparent" stroke-width="1" />
                    <rect x="25" y="25" width="200" height="100" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />
                </g>`,
      },
      annotations: [
        {
          content: annotation[0],
          offset: { x: 0.5, y: 0.5 },
        },
        {
          content: annotation[1],
          offset: { x: 0.5, y: 0 },
          margin: { bottom: 10 },
        },
      ],
      style: {
        fill: 'none',
        fontSize: 10,
      },
      height: 130,
      width: 200,
      constraints: NodeConstraints.Default | NodeConstraints.Rotate,
    };
  } else if (type === 'groupApplicationSub') {
    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],
      shape: {
        type: 'Native',
        content: `<g  transform="translate(2, 2)">
                    <rect vector-effect="non-scaling-stroke" width="250" height="170" stroke="black" fill="transparent" stroke-width="1" />
                    <rect x="25" y="25" width="200" height="100" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />
                    <rect y="125" x="25" height="20" width="200" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>
                    <foreignObject class="symbol-text-container" x="${
                      (0.25 * 100) / 2
                    }" y="-5" width="${
          100 * 0.75
        }" height="${50}" visibility="hidden">
                        <div style="height: ${50}px" class="flex-container">
                            <div width="${
                              100 * 0.75
                            }" class="symbol-text-element">
                                ${annotation}
                            </div>
                        </div>
                    </foreignObject>
                </g>`,
      },
      annotations: [
        {
          content: annotation[0],
          offset: { x: 0.5, y: 0.5 },
        },
        {
          content: annotation[1],
          offset: { x: 0.5, y: 0 },
          margin: { bottom: 10 },
        },
      ],
      style: {
        fill: 'none',
        fontSize: 10,
      },
      height: 130,
      width: 200,
      constraints: NodeConstraints.Default | NodeConstraints.Rotate,
    };
  } else if (type === 'ECF') {
    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],
      shape: {
        type: 'Native',
        content: `<g  transform="translate(2,2)">
                        <rect height="100" width="100" fill="transparent" stroke-width="0"/>
                        <rect x="${100 / (Math.sqrt(2) * 2)}" y="${
          -100 / (Math.sqrt(2) * 2)
        }" width="${100 / Math.sqrt(2)}" height="${
          100 / Math.sqrt(2)
        }" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" transform="rotate(45)"/>
                        <foreignObject class="symbol-text-container" x="${
                          (0.25 * 100) / 2
                        }" width="${
          100 * 0.75
        }" height="${100}" visibility="hidden">
                        <div style="height: ${100}px" class="flex-container">
                            <div width="${
                              100 * 0.75
                            }" class="symbol-text-element">
                                ${annotation}
                            </div>
                        </div>
                    </foreignObject>
                    </g>`,
      },
      annotations: [
        {
          content: annotation,
        },
      ],

      style: {
        fill: 'none',
        fontSize: 10,
      },
      constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      ports: rectPorts,
      height: 120,
      width: 120,
    };
  } else if (type === 'Circle') {
    let content =
      annotation.content !== undefined ? annotation.content[0].content : '';
    let radius = annotation.radius;
    let pointClass = annotation.isPoint === true ? 'class="point-circle"' : '';
    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],
      shape: {
        type: 'Native',
        content: `<g  ${pointClass} transform="translate(2, 2)">
                        <rect height="${radius * 2}" width="${
          radius * 2
        }" fill="transparent" stroke-width="0" />
                        <circle vector-effect="non-scaling-stroke" cx="${radius}" cy="${radius}" r="${radius}" fill="${
          annotation.fill
        }" stroke="black" stroke-width="1"/>
                        <foreignObject class="symbol-text-container" x="${
                          (0.25 * radius * 2) / 2
                        }" width="${radius * 2 * 0.75}" height="${
          radius * 2
        }" visibility="hidden">
                        <div style="height: ${
                          radius * 2
                        }px" class="flex-container">
                            <div width="${
                              radius * 2 * 0.75
                            }" class="symbol-text-element">
                                ${content}
                            </div>
                        </div>
                    </foreignObject>
                    </g>`,
      },
      annotations: annotation.content !== undefined ? annotation.content : null,
      style: {
        fill: 'none',
        fontSize: 10,
      },
      constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      ports: annotation.ports !== undefined ? annotation.ports : null,
      height: annotation.radius * 2,
      width: annotation.radius * 2,
    };
  } else if (type === 'Note') {
    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],
      annotations: [
        {
          content: annotation,
        },
      ],

      shape: {
        type: 'Native',
        content: `<g transfrom="translate(2,2)">
                    <rect height="120" width="120" stroke-width="0" fill="transparent" />
                    <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" d = "M 0 0 L 0 120 L 120 120 L 120 20 L 100 0 L 0 0"/>
                    <polygon vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" points="100,0 100,20 120,20"/>
                    <foreignObject class="symbol-text-container" x="${
                      (0.25 * 120) / 2
                    }" width="${
          120 * 0.75
        }" height="${120}" visibility="hidden">
                        <div style="height: ${120}px" class="flex-container">
                            <div width="${
                              120 * 0.75
                            }" class="symbol-text-element">
                                My Note
                            </div>
                        </div>
                    </foreignObject>
                </g>`,
      },
      constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      height: 120,
      width: 120,
    };
  } else if (type === 'Callout') {
    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],
      annotations: [
        {
          content: annotation,
          offset: { x: 0.5, y: 0.4 },
        },
      ],

      shape: {
        type: 'Native',
        content: `<g  transform="translate(2, 2)">
                    <rect height="250" width="350" fill="transparent" stroke-width="0"/>
                    <path fill="transparent" stroke="black" stroke-width="1" vector-effect="non-scaling-stroke" d="M 0 0 L 350 0 L 350 200 L 120 200 L 100 250 L 100 200 L 0 200 L 0 0"/>
                    <foreignObject class="symbol-text-container" x="${
                      (0.25 * 350) / 2
                    }" width="${
          350 * 0.75
        }" height="${250}" visibility="hidden">
                    <div style="height: ${250}px" class="flex-container">
                        <div width="${350 * 0.75}" class="symbol-text-element">
                            ${annotation}
                        </div>
                    </div>
                </foreignObject>
                </g>`,
      },
      constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      height: 250,
      width: 350,
    };
  } else if (type === 'Table') {
    let columnNo = annotation.columnNo;

    let shapeData;
    for (let i = 0; i < columnNo; i++) {
      shapeData += `<g transform="translate(${100 * i})">
            <rect vector-effect="non-scaling-stroke" fill="transparent" stroke-width="1" stroke="black" height="100" width="100"/>
            <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" d="M 0 50 L 100 50"/>
            <text class="symbol-text-container" visibility="hidden" lengthAdjust="spacingAndGlyphs" font-size="10px" font-weight="bold"><tspan x="20" y="30">Title</tspan></text>
            <text class="symbol-text-container" visibility="hidden" lengthAdjust="spacingAndGlyphs" font-size="10px" font-weight="bold"><tspan x="20" y="80">Value</tspan></text>
            </g>`;
    }
    let annotationsArray = [];
    let ratio = 1 / (columnNo * 2);
    for (let i = 0; i < columnNo * 2; i++) {
      annotationsArray.push({
        content: annotation.content[i],
        width: 100,
        offset: { x: ratio, y: i % 2 === 0 ? 0.25 : 0.75 },
      });
      if (i % 2 !== 0) ratio = ratio + 1 / columnNo;
    }

    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],

      annotations: annotationsArray,
      shape: {
        type: 'Native',
        content: `<g  transform="translate(2, 2)">
                            <rect height="100" width="${
                              100 * columnNo
                            }" fill="transparent" stroke-width="0"/>
                            ${shapeData}
                        </g>`,
      },
      constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      height: 100,
      width: 100 * columnNo,
    };
  } else if (type === 'WideArrow') {
    let angle = 0;
    let x = 0,
      y = 0;
    if (annotation.direction === 'left') {
      angle = 180;
      x = -200;
      y = -70;
    }
    let rightArrow = `<g  transform="translate(2, 2)">
                <g transform="rotate(${angle}) translate(${x},${y})">
                <rect height="70" width="200" fill="transparent" stroke-width="0"/>
                <path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 0 15 L 175 15 L 175 0 L 200 35 L 175 70 L 175 55 L 0 55 L 0 15"/>
                </g>
                <foreignObject class="symbol-text-container" x="${
                  (0.25 * 200) / 2
                }" width="${200 * 0.75}" height="${70}" visibility="hidden">
                <div style="height: ${70}px" class="flex-container">
                    <div width="${200 * 0.75}" class="symbol-text-element">
                        ${annotation.content}
                    </div>
                </div>
                </foreignObject>
            </g>`;
    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],

      annotations: [
        {
          content: annotation.content,
        },
      ],
      shape: {
        type: 'Native',
        content: rightArrow,
      },
      constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      height: 70,
      width: 200,
    };
  } else if (type === 'BiWideArrow') {
    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],
      shape: {
        type: 'Native',
        content: `<g transform="translate(2, 2)">
                    <g>
                        <rect height="90" width="500" fill="none" stroke-width="0"/>
                        <path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 0 45 L 50 0 L 50 20 L 450 20 L 450 0 L 500 45 L 450 90 L 450 70 L 50 70 L 50 90 L 0 45"/>
                        <foreignObject class="symbol-text-container" x="${
                          (0.25 * 500) / 2
                        }" width="${
          500 * 0.75
        }" height="${90}" visibility="hidden">
                        <div style="height: ${90}px" class="flex-container">
                            <div width="${
                              500 * 0.75
                            }" class="symbol-text-element">
                                ${annotation}
                            </div>
                        </div>
                    </foreignObject>
                    </g>
                </g>`,
      },

      annotations: [
        {
          content: annotation,
        },
      ],
      constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      height: 90,
      width: 500,
    };
  } else if (type === 'CylinderArrow') {
    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],
      shape: {
        type: 'Native',
        content: `<g  transform="translate(2, 2)">
                    <g fill="transparent">
                        <rect height="50" width="550" fill="none" strole-width="0"/>
                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" d="M 25 0 L 525 0 L 525 50 L 25 50 L 25 0"/>
                        <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" cx="25" cy="25" r="25" />
                        <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" cx="525" cy="25" r="25" />
                    </g>
                    <foreignObject class="symbol-text-container" x="${
                      (0.25 * 550) / 2
                    }" width="${550 * 0.75}" height="${50}" visibility="hidden">
                    <div style="height: ${50}px" class="flex-container">
                        <div width="${550 * 0.75}" class="symbol-text-element">
                            ${annotation}
                        </div>
                    </div>
                </foreignObject>
                </g>`,
      },

      annotations: [
        {
          content: annotation,
        },
      ],
      constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      height: 50,
      width: 550,
    };
  } else if (type === 'Arrow') {
    let sourcePoint = {
      x: -4,
      y: -5,
    };
    let targetPoint = {
      x: -5,
      y: -5,
    };
    if (id === 'giveRiseTo' || id === 'errorToProblem') {
      sourcePoint = {
        x: -5,
        y: -5,
      };
      targetPoint = {
        x: -5,
        y: -4,
      };
    }
    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],
      type: annotation.type ? annotation.type : 'Straight',
      annotations: annotation.content,
      targetDecorator: {
        shape:
          annotation.shape.target !== undefined
            ? annotation.shape.target
            : 'None',
        style: annotation.style !== undefined ? annotation.style : null,
      },
      sourceDecorator: {
        shape:
          annotation.shape.source !== undefined
            ? annotation.shape.source
            : 'None',
      },
      style: annotation.style !== undefined ? annotation.style : null,
      sourcePoint,
      targetPoint,
    };
  } else if (type === 'House') {
    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],
      shape: {
        type: 'Native',
        content:
          '<g  transform="translate(2, 2)">' +
          '<rect height="50" width="50" fill="transparent" stroke-width="0" />' +
          '<path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" d="M 25 0 L 0 25 M 25 0 L 50 25 M 5 20 L 45 20 M 10 20 L 10 50 L 40 50 L 40 20"/>' +
          '<rect vector-effect="non-scaling-stroke" x ="20" y = "25" height="22.5" width="10" fill="#e9eff7" stroke-width="1" stroke="black"/>' +
          '<rect vector-effect="non-scaling-stroke" x="10" y="47.5" width="30" height="2.5" fill="url(#Pattern1)" stroke="black" stroke-width="1"/>' +
          '</g>',
      },
      height: 250,
      width: 250,
      annotations: [
        {
          content: annotation,
          verticalAlignment: 'Bottom',
          offset: { x: 0.5, y: 1 },
          margin: {
            top: 20,
          },
        },
      ],
      constraints: NodeConstraints.Default | NodeConstraints.Rotate,
    };
  } else if (type === 'House1') {
    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],
      shape: {
        type: 'Native',
        content:
          '<g  transform="translate(2, 2)">' +
          '<rect height="50" width="50" fill="transparent" stroke-width="0" />' +
          '<path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" d="M 25 0 L 0 25 M 25 0 L 50 25 M 5 20 L 45 20 M 10 20 L 10 50 L 40 50 L 40 20"/>' +
          '<rect vector-effect="non-scaling-stroke" x ="20" y = "25" height="22.5" width="10" fill="#e9eff7" stroke-width="1" stroke="black"/>' +
          '<circle vector-effect="non-scaling-stroke" cx="25" cy="7" r="2.5" fill="#e9eff7" stroke="black" stroke-width="1"/>' +
          '<text x="24.25" y="7.75" style="font: italic 2.5px serif;">k</text>' +
          '<rect vector-effect="non-scaling-stroke" x="10" y="47.5" width="30" height="2.5" fill="url(#Pattern2)" stroke="black" stroke-width="1"/>' +
          '</g>',
      },
      height: 250,
      width: 250,
      constraints: NodeConstraints.Default | NodeConstraints.Rotate,
    };
  } else if (type === 'Basis') {
    node = {
      id,
      addInfo: [
        {
          toolTip,
          title,
        },
      ],
      shape: {
        type: 'Native',
        content: `<g  transform="translate(2, 2)">
                    <rect height="20" width="320" fill="transparent" stroke-width="0"/>
                    <rect x="0" y="0" vector-effect="non-scaling-stroke" height="20" width="20" stroke="black" stroke-width="1" fill="transparent"/>
                    <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dashArray="10 5" fill="transparent" d = "M 20 10 L 320 10"/>
                    <foreignObject class="symbol-text-container" x="${
                      0.03 * 320
                    }" width="${320 * 0.75}" height="${20}" visibility="hidden">
                    <div style="height: ${20}px" class="flex-container">
                        <div width="${320 * 0.75}" class="symbol-text-element">
                            ${annotation}
                        </div>
                    </div>
                </foreignObject>
                </g>`,
      },
      annotations: [
        {
          content: annotation,
          offset: { x: 0.03, y: 0.5 },
          style: {
            color: 'black',
            bold: true,
            italic: true,
            fontSize: '12',
            fontFamily: 'Serif',
          },
        },
      ],
      constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      height: 30,
      width: 450,
    };
  } else if (type === 'HorizontalLine') {
    let constraint = NodeConstraints.ResizeEast | NodeConstraints.ResizeWest;
    let strokeDash = annotation.style.strokeDashArray
      ? annotation.style.strokeDashArray
      : '';
    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],

      shape: {
        type: 'Native',
        content: `<g  transform="translate(2, 2)">
                    <g>
                        <rect width="10" height="5" fill="transparent" stroke-width="0"/>
                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dasharray="${strokeDash}" d="M 0 2.5 L 10 2.5"/>
                    </g>
                </g>`,
      },

      ports: annotation.ports,
      annotations: annotation.content,
      constraints: NodeConstraints.Default | NodeConstraints.OutConnect | NodeConstraints.Resize | NodeConstraints.Rotate,
      height: 30,
      width: annotation.length,
    };
  } else if (type === 'VerticalLine') {
    let constraint = NodeConstraints.ResizeNorth | NodeConstraints.ResizeSouth;
    let strokeDash = annotation.style.strokeDashArray
      ? annotation.style.strokeDashArray
      : '';
    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],

      shape: {
        type: 'Native',
        content: `<g  transform="translate(2, 2)">
                    <g>
                        <rect width="5" height="10" fill="transparent" stroke-width="0"/>
                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dasharray="${strokeDash}" d="M 2.5 0 L 2.5 10"/>
                    </g>
                </g>`,
      },

      ports: annotation.ports,
      annotations: annotation.content,
      constraints: NodeConstraints.Default | NodeConstraints.OutConnect | NodeConstraints.Resize | NodeConstraints.Rotate,
      height: annotation.length,
      width: 30,
    };
  } else if (type === 'Graph') {
    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],
      shape: {
        type: 'Native',
        content: `<g  transform="translate(2, 2)">
                        <rect width="10" height="10" fill="transparent" stroke-width="0" />
                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1.5" fill="transparent" d="M 0.5 10 L 0.5 0 M 0 9.5 L 10 9.5" />
                    </g>`,
      },

      constraints: NodeConstraints.Default | NodeConstraints.InConnect | NodeConstraints.OutConnect | NodeConstraints.Rotate,
      annotations: annotation,
      height: 600,
      width: 600,
    };
  } else if (type === 'Curly') {
    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],

      annotations: annotation.content,
      shape: {
        type: 'Native',
        content: `<g  transform="translate(2,2)">
                    <rect height="120" width="30" stroke-width="1" stroke="1" fill="transparent"/>
                    <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" d="M 30 0 A 15 20 0 0 0 15 20 L 15 50 A 15 10 0 0 1 0 60 A 15 10 0 0 1 15 70 L 15 100 A 15 20 0 0 0 30 120"/>
                </g>`,
      },
      constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      height: 120,
      width: 40,
    };
  } else if (type === 'CurlyClose') {
    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],
      annotations: annotation.content,
      shape: {
        type: 'Native',
        content: `<g transform="translate(2,2)">
                    <rect height="120" width="30" stroke-width="1" stroke="1" fill="transparent"/>
                    <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" d="M 0 0 A 15 20 0 0 1 15 20 L 15 50 A 15 10 0 0 0 30 60 A 15 10 0 0 0 15 70 L 15 100 A 15 20 0 0 1 0 120" />
                </g>`,
      },
      constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      height: 120,
      width: 40,
    };
  } else if (type === 'DottedGroup') {
    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],
      annotations: [
        {
          content: annotation,
        },
      ],
      shape: {
        type: 'Native',
        content: `<g  transform="translate(2, 2)">
                        <rect x = "0" y = "0" vector-effect="non-scaling-stroke" height="90" width="170" stroke="black" stroke-dasharray="8 4" stroke-width="1" fill="Transparent"/>
                        <rect x="30" y="15" width="100" height="50" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />
                        <rect x="40" y="25" height="50" width="100"  fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>
                        <foreignObject class="symbol-text-container" x="${
                          (0.25 * 170) / 2
                        }" width="${
          170 * 0.75
        }" height="${90}" visibility="hidden">
                        <div style="height: ${90}px" class="flex-container">
                            <div width="${
                              170 * 0.75
                            }" class="symbol-text-element">
                                ${annotation}
                            </div>
                        </div>
                        </foreignObject>
                    </g>`,
      },
      constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      ports: rectPorts,
      height: 80,
      width: 160,
    };
  } else if (type === 'DomainTop') {
    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],
      annotations: annotation.content,
      shape: {
        type: 'Native',
        content: `<g transform="translate(2, 2)">
                        <g>
                            <rect height="50" width="200" fill="transparent" stroke-width="0" />
                            <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="Transparent" d="M 0 0 L 0 50 L 200 50 L 200 0"/>
                            <foreignObject class="symbol-text-container" x="${
                              (0.25 * 200) / 2
                            }" width="${
          200 * 0.75
        }" height="${50}" visibility="hidden">
                            <div style="height: ${50}px" class="flex-container">
                                <div width="${
                                  200 * 0.75
                                }" class="symbol-text-element">
                                    ${annotation.content}
                                </div>
                            </div>
                            </foreignObject>
                        </g>
                    </g>`,
      },
      style: {
        fontSize: 10,
      },
      constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      height: 50,
      width: 200,
    };
  } else if (type === 'DomainBottom') {
    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],
      annotations: annotation.content,
      shape: {
        type: 'Native',
        content: `<g transform="translate(2, 2)">
                        <g>
                            <rect height="50" width="200" fill="transparent" stroke-width="0" />
                            <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="Transparent" d="M 0 50 L 0 0 L 200 0 L 200 50"/>
                            <foreignObject class="symbol-text-container" x="${
                              (0.25 * 200) / 2
                            }" width="${
          200 * 0.75
        }" height="${50}" visibility="hidden">
                            <div style="height: ${50}px" class="flex-container">
                                <div width="${
                                  200 * 0.75
                                }" class="symbol-text-element">
                                    ${annotation.content}
                                </div>
                            </div>
                            </foreignObject>
                        </g>
                    </g>`,
      },
      style: {
        fontSize: 10,
      },
      constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      height: 50,
      width: 200,
    };
  } else if (type === 'DomainRight') {
    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],
      annotations: annotation.content,
      shape: {
        type: 'Native',
        content: `<g transform="translate(2, 2)">
                        <g>
                            <rect height="200" width="50" fill="transparent" stroke-width="0" />
                            <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="Transparent" d="M 50 0 L 0 0 L 0 200 L 50 200"/>
                            <foreignObject class="symbol-text-container" x="${0}" width="${50}" height="${200}" visibility="hidden">
                            <div style="height: ${200}px" class="flex-container">
                                <div width="${50}" class="symbol-text-element">
                                    ${annotation.content}
                                </div>
                            </div>
                            </foreignObject>
                        </g>
                    </g>`,
      },
      style: {
        fontSize: 10,
      },
      constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      height: 200,
      width: 50,
    };
  } else if (type === 'DomainLeft') {
    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],
      annotations: annotation.content,
      shape: {
        type: 'Native',
        content: `<g transform="translate(2, 2)">
                        <g>
                            <rect height="200" width="50" fill="transparent" stroke-width="0" />
                            <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="Transparent" d="M 0 0 L 50 0 L 50 200 L 0 200"/>
                            <foreignObject class="symbol-text-container" x="${0}" width="${50}" height="${200}" visibility="hidden">
                            <div style="height: ${200}px" class="flex-container">
                                <div width="${50}" class="symbol-text-element">
                                    ${annotation.content}
                                </div>
                            </div>
                            </foreignObject>
                        </g>
                    </g>`,
      },
      style: {
        fontSize: 10,
      },
      constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      height: 200,
      width: 50,
    };
  } else if (type === 'Direction') {
    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],
      shape: {
        type: 'Native',
        content:
          '<g  transform="translate(2, 2)">' +
          '<rect height="35" width="70" fill="transparent" stroke-width="0"/>' +
          '<Path vector-effect="non-scaling-stroke" stroke="black" fill="url(#Pattern3)" stroke-width="1" d="M 0 30 L 5 35 L 70 0 L 65 0 L 0 30">' +
          '</g>',
      },
      constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      width: 500,
      height: 200,
    };
  } else if (type === 'LifeBox') {
    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],
      shape: {
        type: 'Native',
        content: `<g  transform="translate(2, 2)">
                        <rect vector-effect="non-scaling-stroke" x="0" y="0" height="600" width="300" fill="transparent" stroke="black" stroke-width="2" />
                        <rect vector-effect="non-scaling-stroke" x="25" y="25" height="250" width="250" fill="transparent" stroke="black" stroke-width="1" />
                        <rect vector-effect="non-scaling-stroke" x="25" y="325" height="250" width="250" fill="transparent" stroke="black" stroke-width="1" />
                        <foreignObject class="symbol-text-container" x="${
                          (0.25 * 300) / 2
                        }" y="${50}"width="${
          300 * 0.75
        }" height="${100}" visibility="hidden">
                            <div style="height: ${100}px" class="flex-container">
                                <div width="${
                                  350 * 0.75
                                }" class="symbol-text-element">
                                    ${annotation[0]}
                                </div>
                            </div>
                        </foreignObject>
                        <foreignObject class="symbol-text-container" x="${
                          (0.25 * 300) / 2
                        }" y="${375}"width="${
          300 * 0.75
        }" height="${100}" visibility="hidden">
                            <div style="height: ${100}px" class="flex-container">
                                <div width="${
                                  300 * 0.75
                                }" class="symbol-text-element">
                                    ${annotation[1]}
                                </div>
                            </div>
                        </foreignObject>
                    </g>`,
      },
      annotations: [
        {
          content: annotation[0],
          offset: { x: 0.5, y: 0.25 },
        },
        {
          content: annotation[1],
          offset: { x: 0.5, y: 0.75 },
        },
        {
          content: annotation[2],
          offset: { x: 0.5, y: 1 },
          margin: { top: 20 },
        },
      ],
      constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      height: 400,
      width: 200,
    };
  } else if (type === 'LifeCircle') {
    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],
      shape: {
        type: 'Native',
        content: `<g  transform="translate(2, 2)">
                        <rect height="600" width="600" stroke-width="0" fill="transparent" />
                        <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="2" fill="transparent" cx="300" cy="300" r="300"/>
                        <ellipse vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="147.5" cy="300" rx="112.5" ry="220"/>
                        <ellipse vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="447.5" cy="300" rx="112.5" ry="220"/>
                        <foreignObject class="symbol-text-container" x="${
                          0.15 * 600
                        }" width="${
          200 * 0.75
        }" height="${600}" visibility="hidden">
                        <div style="height: ${600}px" class="flex-container">
                            <div width="${
                              200 * 0.75
                            }" class="symbol-text-element">
                                ${annotation[0]}
                            </div>
                        </div>
                        </foreignObject>
                        <foreignObject class="symbol-text-container" x="${
                          0.65 * 600
                        }" width="${
          200 * 0.75
        }" height="${600}" visibility="hidden">
                        <div style="height: ${600}px" class="flex-container">
                            <div width="${
                              200 * 0.75
                            }" class="symbol-text-element">
                                ${annotation[1]}
                            </div>
                        </div>
                        </foreignObject>
                    </g>`,
      },
      annotations: [
        {
          content: annotation[0],
          offset: { x: 0.25, y: 0.5 },
        },
        {
          content: annotation[1],
          offset: { x: 0.75, y: 0.5 },
        },
        {
          content: annotation[2],
          offset: { x: 0.5, y: 1 },
          margin: { top: 20 },
        },
      ],
      constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      height: 400,
      width: 400,
    };
  } else if (type === 'Natural') {
    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],
      shape: {
        type: 'Native',
        content: `<g  transform="translate(2, 2)">
                        <rect vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" height="150" width="100"/>
                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" d = "M 20 30 L 50 80 L 72 30 M 50 80 L 50 130 M 85 40 A 10 10 0 1 0 50 25"/>
                        <polygon vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="black" points="45,25 55,25 50,35"/>
                    </g>`,
      },
      constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      ports: rectPorts,
      height: 150,
      width: 100,
    };
  } else if (type === 'Reference') {
    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],
      shape: {
        type: 'Native',
        content: `<g  transform="translate(2, 2)">
                        <rect height="710" width="900" stroke-width="0" fill="transparent" />
                        <ellipse vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="450" cy="355" ry="355" rx="450"/>
                        <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="125" cy="355" r="100" />
                        <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="350" cy="355" r="100" />
                        <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="560" cy="370" r="100" />
                        <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="775" cy="355" r="100" />
                        <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="450" cy="130" r="100" />
                        <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="245" cy="170" r="100" />
                        <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="450" cy="580" r="100" />
                        <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="245" cy="540" r="100" />
                        <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="655" cy="180" r="100" />
                        <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="675" cy="540" r="100" />
                    </g>`,
      },

      annotations: [
        {
          content: 'Education Theory',
          offset: { x: 0.14, y: 0.5 },
          width: 75,
        },
        {
          content: 'Power Theory',
          offset: { x: 0.39, y: 0.5 },
          width: 75,
        },
        {
          content: 'Marketing Theory',
          offset: { x: 0.625, y: 0.52 },
          width: 75,
        },
        {
          content: 'Exchange System Theory',
          offset: { x: 0.865, y: 0.5 },
          width: 75,
        },
        {
          content: 'Communicaiton Theory',
          offset: { x: 0.268, y: 0.25 },
          width: 75,
        },
        {
          content: 'Information Theory',
          offset: { x: 0.5, y: 0.185 },
          width: 75,
        },
        {
          content: 'Instrumentation Theory',
          offset: { x: 0.725, y: 0.255 },
          width: 75,
        },
        {
          content: 'Gamming Theory',
          offset: { x: 0.268, y: 0.75 },
          width: 75,
        },
        {
          content: 'Work Theory',
          offset: { x: 0.51, y: 0.815 },
          width: 75,
        },
        {
          content: 'Reproduction Theory',
          offset: { x: 0.75, y: 0.76 },
          width: 75,
        },
        {
          content: 'The Given Reference',
          offset: { x: 0.5, y: 1 },
          margin: { top: 20 },
        },
      ],
      constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      height: 355,
      width: 450,
    };
  } else if (type === 'Reference1') {
    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],
      shape: {
        type: 'Native',
        content: `<g  transform="translate(2, 2)">
                    <rect height="710" width="900" stroke-width="0" fill="transparent" />
                    <ellipse vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="450" cy="355" ry="355" rx="450"/>
                    <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="125" cy="355" r="100" />
                    <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="350" cy="355" r="100" />
                    <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="560" cy="370" r="100" />
                    <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="775" cy="355" r="100" />
                    <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="450" cy="130" r="100" />
                    <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="245" cy="170" r="100" />
                    <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="450" cy="580" r="100" />
                    <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="245" cy="540" r="100" />
                    <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="655" cy="180" r="100" />
                    <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" cx="675" cy="540" r="100" />
                </g>`,
      },

      annotations: [
        {
          template:
            '<div style="margin-top:170px; margin-left:55px;">E<sub>T</sub></div>',
        },
        {
          template:
            '<div style="margin-top:170px; margin-left:170px;">P<sub>T</sub></div>',
        },
        {
          template:
            '<div style="margin-top:180px; margin-left:275px;">M<sub>T</sub></div>',
        },
        {
          template:
            '<div style="margin-top:170px; margin-left:380px;">Es<sub>T</sub></div>',
        },
        {
          template:
            '<div style="margin-top:75px; margin-left:115px;">K<sub>T</sub></div>',
        },
        {
          template:
            '<div style="margin-top:55px; margin-left:220px;">i<sub>T</sub></div>',
        },
        {
          template:
            '<div style="margin-top:80px; margin-left:320px;">I<sub>T</sub></div>',
        },
        {
          template:
            '<div style="margin-top:260px; margin-left:115px;">G<sub>T</sub></div>',
        },
        {
          template:
            '<div style="margin-top:280px; margin-left:220px;">W<sub>T</sub></div>',
        },
        {
          template:
            '<div style="margin-top:260px; margin-left:330px;">X<sub>T</sub></div>',
        },
        {
          content: 'R',
          offset: { x: 0.85, y: 1 },
        },
      ],
      constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      height: 355,
      width: 450,
    };
  } else if (type === 'StrokeRect') {
    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],
      annotations: [
        {
          content: annotation,
        },
      ],
      shape: {
        type: 'Native',
        content: `<g  transform="translate(2, 2)">
                    <rect x = "0" y = "0" vector-effect="non-scaling-stroke" height="80" width="160" stroke="black" stroke-dasharray="8 4" stroke-width="1" fill="transparent"/>
                    <rect x="30" y="20" width="100" height="40" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />
                    <foreignObject class="symbol-text-container" x="${
                      (0.25 * 160) / 2
                    }" width="${160 * 0.75}" height="${80}" visibility="hidden">
                    <div style="height: ${80}px" class="flex-container">
                        <div width="${0.75 * 160}" class="symbol-text-element">
                            ${annotation}
                        </div>
                    </div>
                    </foreignObject>
                    </g>`,
      },
      constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      ports: rectPorts,
      height: 80,
      width: 160,
    };
  } else if (type === 'LeftLabel') {
    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],
      shape: {
        type: 'Native',
        content: `<g transfrom="translate(2, 2)">
                    <rect height="50" width="200" stroke-width="0" fill="transparent"/>
                    <path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d = "M 30 50 L 200 50 M 30 50 L 30 15"/>
                    <polygon vector-effect="non-scaling-stroke" fill="black" stroke="black" stroke-width="1" points="25,15 35,15 30,10"/>
                    <foreignObject class="symbol-text-container" x="${
                      (0.25 * 200) / 2
                    }" y="25" width="${
          200 * 0.75
        }" height="${25}" visibility="hidden">
                    <div style="height: ${25}px" class="flex-container">
                        <div width="${200 * 0.75}" class="symbol-text-element">
                            ${'label'}
                        </div>
                    </div>
                    </foreignObject>
                </g>`,
      },
      annotations: [
        {
          content: 'label',
          offset: { x: 0.5, y: 1 },
          margin: { top: 10 },
        },
      ],
      constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      height: 50,
      width: 200,
    };
  } else if (type === 'RightLabel') {
    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],
      shape: {
        type: 'Native',
        content: `<g>
                    <rect height="50" width="200" stroke-width="0" fill="transparent"/>
                    <path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 30 50 L 200 50 L 200 15"/>
                    <polygon vector-effect="non-scaling-stroke" fill="black" stroke="black" stroke-width="1" points="195,15 205,15 200 ,10" />
                    <foreignObject class="symbol-text-container" x="${
                      (0.25 * 200) / 2
                    }" y="25" width="${
          200 * 0.75
        }" height="${25}" visibility="hidden">
                    <div style="height: ${25}px" class="flex-container">
                        <div width="${200 * 0.75}" class="symbol-text-element">
                            ${'label'}
                        </div>
                    </div>
                    </foreignObject>
                </g>`,
      },
      annotations: [
        {
          content: 'label',
          offset: { x: 0.5, y: 1 },
          margin: { top: 10 },
        },
      ],
      constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      height: 50,
      width: 200,
    };
  } else if (type === 'PushUpRight') {
    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],
      shape: {
        type: 'Native',
        content: `<g transform="translate(2,2)">
                    <rect height="100" width="100" stroke-width="0" fill="transparent"/>
                    <path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 50 100 L 100 100 L 100 0"/>
                    <polygon vector-effect="non-scaling-stroke" fill="black" stroke="black" stroke-width="1" points="95,5 105,5 100,0"/>
                    <foreignObject class="symbol-text-container" x="${
                      0.4 * 100
                    }" y="25" width="${
          100 * 0.75
        }" height="${75}" visibility="hidden">
                    <div style="height: ${75}px" class="flex-container">
                        <div width="${100 * 0.75}" class="symbol-text-element">
                            ${'push up'}
                        </div>
                    </div>
                    </foreignObject>
                </g>`,
      },
      annotations: [
        {
          content: 'push up',
          offset: { x: 1, y: 0.5 },
          margin: { left: 30 },
        },
      ],
      constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      height: 100,
      width: 100,
    };
  } else if (type === 'PushUpLeft') {
    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],
      shape: {
        type: 'Native',
        content: `<g transform="translate(2,2)">
                    <rect height="100" width="100" stroke-width="0" fill="transparent"/>
                    <path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 55 100 L 5 100 L 5 0"/>
                    <polygon vector-effect="non-scaling-stroke" fill="black" stroke="black" stroke-width="1" points=" 0,5 10,5 5,0"/>
                    <foreignObject class="symbol-text-container" x="${
                      0.02 * 100
                    }" y="25" width="${
          100 * 0.75
        }" height="${75}" visibility="hidden">
                    <div style="height: ${75}px" class="flex-container">
                        <div width="${100 * 0.75}" class="symbol-text-element">
                            ${'push up'}
                        </div>
                    </div>
                    </foreignObject>
                </g>`,
      },
      annotations: [
        {
          content: 'push up',
          offset: { x: 0, y: 0.5 },
          margin: { right: 30 },
        },
      ],
      constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      height: 100,
      width: 100,
    };
  } else if (type === 'TheoryScale') {
    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],
      shape: {
        type: 'Native',
        content: `<g tranform="translate(2,2)">
                    <rect height="50" width="600" fill="transparent" stroke-width="0"/>
                    <path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 0 25 L 600 25 M 270 10 L 270 40 M 290 10 L 290 40 M 310 10 L 310 40 M 330 10 L 330 40"/>
                    <circle vector-effect="non-scaling-stroke" fill="black" stroke="black" stroke-width="1" cx="5" cy="15" r="3"/>
                    <circle vector-effect="non-scaling-stroke" fill="black" stroke="black" stroke-width="1" cx="25" cy="15" r="3"/>
                    <circle vector-effect="non-scaling-stroke" fill="black" stroke="black" stroke-width="1" cx="45" cy="15" r="3"/>
                    <circle vector-effect="non-scaling-stroke" fill="black" stroke="black" stroke-width="1" cx="595" cy="15" r="3"/>
                    <circle vector-effect="non-scaling-stroke" fill="black" stroke="black" stroke-width="1" cx="575" cy="15" r="3"/>
                    <circle vector-effect="non-scaling-stroke" fill="black" stroke="black" stroke-width="1" cx="555" cy="15" r="3"/>
                </g>`,
      },

      annotations: [
        {
          content: '-2',
          offset: { x: 0.45, y: 1 },
        },
        {
          content: '-1',
          offset: { x: 0.4833, y: 1 },
        },
        {
          content: '1',
          offset: { x: 0.5167, y: 1 },
        },
        {
          content: '2',
          offset: { x: 0.55, y: 1 },
        },
      ],
      constraints: NodeConstraints.Default | NodeConstraints.Resize | NodeConstraints.ResizeEast | NodeConstraints.ResizeWest | NodeConstraints.Rotate,
      height: 50,
      width: 600,
    };
  } else if (type === 'VerticalContinuity') {
    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],
      shape: {
        type: 'Native',
        content: `<g>
                    <rect vector-effect="non-scaling-stroke" height="60" width="120" stroke-width="1" fill="none" stroke="black"/>
                    <circle vector-effect="non-scaling-stroke" stroke-width="1" fill="black" stroke="black" cx="60" cy="15" r="3.5"/>
                    <circle vector-effect="non-scaling-stroke" stroke-width="1" fill="black" stroke="black" cx="60" cy="30" r="3.5"/>
                    <circle vector-effect="non-scaling-stroke" stroke-width="1" fill="black" stroke="black" cx="60" cy="45" r="3.5"/>
                </g>`,
      },
      constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      ports: rectPorts,
      height: 50,
      width: 100,
    };
  } else if (type === 'cover') {
    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],
      shape: {
        type: 'Native',
        content: `<g transform="translate(2,2)">
                    <rect vector-effect="non-scaling-stroke" height="10" width="7.5" stroke-width="1" stroke="black" fill="green" opacity="0.5"/>
                    </g>`,
      },
      annotations: [
        {
          content: annotation,
        },
      ],
      constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      height: 80,
      width: 35.56,
    };
  } else if (type === 'mobility') {
    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],
      shape: {
        type: 'Native',
        content: `<g transform="translate(2,2)">
                    <rect vector-effect="non-scaling-stroke" height="10" width="10" stroke="none" fill="none"/>
                    <path d="M 0 4, S 2.5 1.5, 5 4 M 5 4, S 7.5 6.5, 10 4 M 0 6, S 2.5 3.5, 5 6 M 5 6, S 7.5 8.5, 10 6" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="none"/>
                    </g>`,
      },
      constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      height: 50,
      width: 50,
    };
  } else if (type === 'redcross') {
    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],
      shape: {
        type: 'Native',
        content: `<g transform="translate(2,2)">
                    <rect vector-effect="non-scaling-stroke" height="10" width="10" stroke="none" fill="none"/>
                    <path vector-effect="non-scaling-stroke" stroke="red" stroke-width="1" fill="none" d="M 0 0 L 10 10 M 0 10 L 10 0"/>
                </g>`,
      },
      constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      height: 50,
      width: 50,
    };
  } else if (type === 'linkednode') {
    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],
      shape: {
        type: 'Native',
        content: `<g transform="translate(2,2)">
                    <rect vector-effect="non-scaling-stroke" height="12" width="10" stroke="none" fill="none"/>
                    <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="none" cx="5" cy="5" r="5"/>
                    <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="none" d="M 2 11 L 8 11 M 2 12 L 8 12"/>
                </g>`,
      },
      annotations: [
        {
          content: '1',
          offset: { x: 0.5, y: 0.45 },
        },
      ],
      constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      height: 60,
      width: 50,
    };
  } else if (type === 'emptycontainer') {
    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],
      shape: {
        type: 'Native',
        content: `<g transfrom="translate(2,2)">
                <rect vector-effect="non-scaling-stroke" height="150" width="700" fill="none" stroke="black" stroke-width="1"/>
                </g>`,
      },
      annotations: [
        {
          content: 'Empty Container',
        },
      ],
      constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      height: 150,
      width: 700,
    };
  } else if (type === 'NaturalObserver') {
    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],
      shape: {
        type: 'Native',
        content: `<g transform="translate(2,2)">
                            <rect vector-effect="non-scaling-stroke" fill="transparent" stroke="transparent" stroke-width="1" x="0" y="0" height="100" width="100"/>
                            <path d="M25, 50A25 25 0 0 1 75, 50A25 25 0 0 1 25, 50z" fill="transparent" stroke="#000000" stroke-width="1px" />
                            <path d="M50, 0L50, 20z" fill="transparent" stroke="#000000" stroke-width="1px" />
                            <path d="M79.4, 9.5L67.6, 25.7z" fill="transparent" stroke="#000000" stroke-width="1px" />
                            <path d="M97.5, 34.5L78.5, 40.7z" fill="transparent" stroke="#000000" stroke-width="1px" />
                            <path d="M97.5, 65.5L78.5, 59.3z" fill="transparent" stroke="#000000" stroke-width="1px" />
                            <path d="M79.4, 90.5L67.6, 74.3z" fill="transparent" stroke="#000000" stroke-width="1px" />
                            <path d="M50, 100L50, 80z" fill="transparent" stroke="#000000" stroke-width="1px" />
                            <path d="M20.6, 90.5L32.4, 74.3z" fill="transparent" stroke="#000000" stroke-width="1px" />
                            <path d="M2.5, 65.5L21.5, 59.3z" fill="transparent" stroke="#000000" stroke-width="1px" />
                            <path d="M2.5, 34.5L21.5, 40.7z" fill="transparent" stroke="#000000" stroke-width="1px" />
                            <path d="M20.6, 9.5L32.4, 25.7z" fill="transparent" stroke="#000000" stroke-width="1px" />
                        </g>`,
      },
      height: 100,
      width: 100,
      style: {
        fontSize: 10,
      },
      constraints: NodeConstraints.Default | NodeConstraints.Rotate,
    };
  } else if (type === 'squareemptycontainer') {
    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],
      shape: {
        type: 'Native',
        content: `<g transform="translate(2,2)">
                    <rect vector-effect="non-scaling-stroke" height="200" width="200" fill="none" stroke="black" stroke-width="1"/>
                </g>`,
      },
      annotations: [
        {
          content: annotation,
          offset: { x: 0.5, y: 0 },
          margin: { bottom: 10 },
        },
      ],
      constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      height: 200,
      width: 200,
    };
  } else if (type === 'RawAnnotationContent') {
    let height = annotation.height !== undefined ? annotation.height : 80;
    let width = annotation.width !== undefined ? annotation.width : 80;
    let text =
      annotation.content !== undefined
        ? annotation.content[0].content
        : annotation;
    let textLen;
    if (String(text).length === 1) {
      textLen = width * 0.15;
    } else if (String(text).length > 1 && String(text).length < 5) {
      textLen = width * 0.3;
    } else if (String(text).length <= 20 && String(text).length >= 5) {
      textLen = width * 0.65;
    } else {
      textLen = width * 0.85;
    }
    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],
      shape: {
        type: 'Native',
        content: `<g transform="translate(2,2)">
                    <rect vector-effect="non-scaling-stroke" height="${height}" width="${width}" stroke="black" stroke-width="1" fill="transparent" />
                    <foreignObject class="symbol-text-container" x="${
                      (0.25 * width) / 2
                    }" width="${
          width * 0.75
        }" height="${height}" visibility="hidden">
                        <div style="height: ${height}px" class="flex-container">
                            <div width="${
                              width * 0.75
                            }" class="symbol-text-element">
                                ${text}
                            </div>
                        </div>
                    </foreignObject>`,
      },
      annotations:
        annotation.content !== undefined
          ? annotation.content
          : [{ content: annotation }],
      width: width,
      height: height,
      ports: annotation.ports !== undefined ? annotation.ports : rectPorts,
      constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      style: {
        ...annotation.style,
        fill: 'white',
        fontSize: 20,
      },
    };
  } else if (type === 'ConnectorArrow') {
    let sourcePoint;
    let targetPoint;
    switch (annotation.decoration) {
      case 'up':
        sourcePoint = { x: 0, y: 0 };
        targetPoint = { x: 0, y: 1 };
        break;
      case 'down':
        sourcePoint = { x: 0, y: 0 };
        targetPoint = { x: 0, y: -1 };
        break;
      case 'left':
        sourcePoint = { x: 0, y: 0 };
        targetPoint = { x: 1, y: 0 };
        break;
      case 'right':
        sourcePoint = { x: 0, y: 0 };
        targetPoint = { x: -1, y: 0 };
        break;
      case 'upLeft':
        sourcePoint = { x: 0, y: 0 };
        targetPoint = { x: 1, y: 1 };
        break;
      case 'downLeft':
        sourcePoint = { x: 0, y: 0 };
        targetPoint = { x: 1, y: -1 };
        break;
      case 'upRight':
        sourcePoint = { x: 0, y: 0 };
        targetPoint = { x: -1, y: 1 };
        break;
      case 'downRight':
        sourcePoint = { x: 0, y: 0 };
        targetPoint = { x: -1, y: -1 };
        break;
      default:
        sourcePoint = { x: 0, y: 0 };
        targetPoint = { x: 1, y: 0 };
        break;
    }
    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],
      type: annotation.type || 'Straight',
      annotations: annotation.content,
      sourceDecorator: {
        shape: annotation.source || 'None',
        style: annotation.sourceStyle || null,
      },
      targetDecorator: {
        shape: annotation.target || 'Arrow',
        style: annotation.targetStyle || null,
      },
      style: annotation.style || null,
      sourcePoint,
      targetPoint,
    };
  } else if (type === 'ConnectorBezier') {
    let sourcePoint;
    let targetPoint;
    switch (annotation.decoration) {
      case 'up':
        sourcePoint = { x: 0, y: 0 };
        targetPoint = { x: 0, y: 1 };
        break;
      case 'down':
        sourcePoint = { x: 0, y: 0 };
        targetPoint = { x: 0, y: -1 };
        break;
      case 'left':
        sourcePoint = { x: 0, y: 0 };
        targetPoint = { x: 1, y: 0 };
        break;
      case 'right':
        sourcePoint = { x: 0, y: 0 };
        targetPoint = { x: -1, y: 0 };
        break;
      case 'upLeft':
        sourcePoint = { x: 0, y: 0 };
        targetPoint = { x: 1, y: 1 };
        break;
      case 'downLeft':
        sourcePoint = { x: 0, y: 0 };
        targetPoint = { x: 1, y: -1 };
        break;
      case 'upRight':
        sourcePoint = { x: 0, y: 0 };
        targetPoint = { x: -1, y: 1 };
        break;
      case 'downRight':
        sourcePoint = { x: 0, y: 0 };
        targetPoint = { x: -1, y: -1 };
        break;
      default:
        sourcePoint = { x: 0, y: 0 };
        targetPoint = { x: 1, y: 0 };
        break;
    }
    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],
      type: annotation.type || 'Bezier',
      annotations: annotation.content,
      sourceDecorator: {
        shape: annotation.source || 'Arrow',
        style: annotation.sourceStyle || null,
      },
      targetDecorator: {
        shape: annotation.target || 'Arrow',
        style: annotation.targetStyle || null,
      },
      style: annotation.style || null,
      sourcePoint,
      targetPoint,
    };
  } else if (type === 'EquationWithBorder') {
    let height = annotation?.height !== undefined ? annotation.height : 80;
    let width = annotation?.width !== undefined ? annotation.width : 150;
    let text =
      annotation?.content !== undefined
        ? annotation?.content[0]?.content
        : annotation;
    let textLen;
    if (String(text).length === 1) {
      textLen = width * 0.15;
    } else if (String(text).length > 1 && String(text).length < 5) {
      textLen = width * 0.3;
    } else if (String(text).length <= 20 && String(text).length >= 5) {
      textLen = width * 0.65;
    } else {
      textLen = width * 0.85;
    }
    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],
      shape: {
        type: 'Native',
        content: `<g transform="translate(2,2)">
                    <rect vector-effect="non-scaling-stroke" height="${height}" width="${width}" stroke="black" stroke-width="1" fill="transparent" />
                    </g>`,
      },
      annotations: [{ template: annotation }],
      width: width,
      height: height,
      ports: rectPorts,
      constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      style: { fill: 'white', fontSize: 10 },
    };
  } else if (type === 'EquationWithNoBorder') {
    node = {
      id,
      shape: {
        type: 'Native',
        content: `<g  transform="translate(2, 2)">
          <rect height="30" width="100" fill="transparent" stroke-width="0"/>
          <foreignObject class="symbol-text-container" x="0" y="25" width="${100}" height="${30}" visibility="hidden">
          </foreignObject>
        </g>`,
      },
      addInfo: [
        {
          title,
          toolTip,
        },
      ],
      annotations: [{ template: annotation }],
      constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      height: 30,
      width: 100,
    };
  } else {
    let height = annotation?.height !== undefined ? annotation.height : 80;
    let width = annotation?.width !== undefined ? annotation.width : 150;
    let text =
      annotation?.content !== undefined
        ? annotation?.content[0]?.content
        : annotation;
    let textLen;
    if (String(text).length === 1) {
      textLen = width * 0.15;
    } else if (String(text).length > 1 && String(text).length < 5) {
      textLen = width * 0.3;
    } else if (String(text).length <= 20 && String(text).length >= 5) {
      textLen = width * 0.65;
    } else {
      textLen = width * 0.85;
    }
    node = {
      id,
      addInfo: [
        {
          title,
          toolTip,
        },
      ],
      shape: {
        type: 'Native',
        content: `<g transform="translate(2,2)">
                    <rect vector-effect="non-scaling-stroke" height="${height}" width="${width}" stroke="black" stroke-width="1" fill="transparent" />
                    <foreignObject class="symbol-text-container" x="${
                      (0.25 * width) / 2
                    }" width="${
          width * 0.75
        }" height="${height}" visibility="hidden">
                        <div style="height: ${height}px" class="flex-container">
                            <div width="${
                              width * 0.75
                            }" class="symbol-text-element">
                                ${text}
                            </div>
                        </div>
                    </foreignObject>`,
      },
      annotations:
        annotation?.content !== undefined
          ? annotation?.content
          : [{ content: annotation }],
      width: width,
      height: height,
      ports: annotation?.ports !== undefined ? annotation?.ports : rectPorts,
      constraints: NodeConstraints.Default | NodeConstraints.Rotate,
      style: {
        ...annotation?.style,
        fill: 'white',
        fontSize: 10,
      },
    };
  }
  if (node.ports) {
    drawPortCircle(node);
  }
  node.addInfo[0].menuId = menuId;
  return node;
};

export function dropGrouped(node, parentNode, ignoreCond, diagram) {

  let source = node.id ? node : node?.properties?.nodes[0];

  var bienx = false;
  var bieny = false;
  var bienz = false;
  var bientong = false;
  var bienkt = 0;
  if (diagram.nodes.length > 1) {
    var group = diagram.getObject(parentNode.parentId);
    try {
      let firstChild = diagram.getObject(group.children[0]);
      bienx = firstChild.id.startsWith("dictionary");
      bieny = firstChild.id.startsWith("collection");
      bienz = firstChild.id.startsWith("workingarea");
    } catch (ex) {
      bienx = false;
      bieny = false;
      bienz = false;
    }
  }

  if (node.id.startsWith("wordCommunication") && (parentNode.id.startsWith("dictionary") || bienx)) {
    bientong = true;
  }
  if (node.id.startsWith("entityCommunication") && (parentNode.id.startsWith("collection") || bieny)) {
    bientong = true;
  }
  if (node.id.startsWith("location") && (parentNode.id.startsWith("workingarea") || bienz)) {
    bientong = true;
    bienkt = 5;
  }

  if (!bientong) {
    setTimeout(() => {
      // Checking the nodes length greater than one or not
      if (diagram.nodes.length > 1) {
        if (!node.children && node.id !== parentNode.id && !node.parentId) {
          //Getting the group node by getObject method by passing parent ID
          if (
            (parentNode.parentId &&
              communicationDroppedElementChecker(node, parentNode)) ||
            (parentNode.parentId && ignoreCond)
          ) {
            var group = diagram.getObject(parentNode.parentId);
            //let firstChild = diagram.getObject(group.children[0]);
            let firstChild = parentNode;
            let alerted = checkDropAlert(group, node, firstChild);
            if (alerted) {
              return alert(alerted);
            }
            //Added the child into the group by using addChildToGroup
            diagram.addChildToGroup(group, node);

            let newNode = diagram.getObject(
              diagram.nodes[diagram.nodes.length - 1].id
            );
            let childNode = diagram.getObject(
              group.children[group.children.length - 2]
            );
            //Passing the first node to getObject method to set width and offset for the group node
            newNode.offsetX = childNode.offsetX + 100;
            newNode.offsetY = childNode.offsetY;
            diagram.dataBind();
            firstChild.offsetX = group.offsetX;
            firstChild.offsetY = group.offsetY;
            firstChild.annotations[0].offset = {x: 0.5, y: -0.1};
            group.width = group.width + source.width - 30;
            firstChild.width = group.width;
            diagram.dataBind();
            for (let i = 1; i < group.children.length; i++) {
              const childEl = diagram.getObject(group.children[i]);
              let annoContent = childEl.annotations[0].content;
              let previousChild = diagram.getObject(group.children[i - 1]);
              let previousAnnoContent = previousChild.annotations[0].content;
              childEl.offsetY = group.offsetY;
              if (i - 1 > 0) {
                childEl.offsetX =
                  previousChild.offsetX +
                  previousChild.width / 2 +
                  childEl.width / 2 +
                  25;
              } else {
                childEl.offsetX =
                  group.offsetX - group.width / 2 + childEl.width / 2 + 35;
              }
              if (
                previousAnnoContent.startsWith(annoContent) &&
                previousAnnoContent.length - annoContent.length < 3
              ) {
                childEl.annotations[0].content =
                  source.annotations[0].content + " " + i;
                source.annotations[0].content =
                  source.annotations[0].content + "" + (i + 1);
              }
            }
            diagram.dataBind();
            //diagram.refresh();
          } else {
            if (
              communicationDroppedElementChecker(source, parentNode) ||
              ignoreCond
            ) {
              diagram.select([parentNode, source]);
              diagram.group();
              let group = diagram.getObject(parentNode.parentId);
              let alerted = checkDropAlert(group, source, parentNode);

              if (alerted) {
                diagram.unGroup();
                return alert(alerted);
              }
              let newNode = diagram.getObject(source.id);
              // parentNode.height = parentNode.height - 30;
              // parentNode.width = parentNode.width - 100;
              parentNode.offsetX = parentNode.offsetX;
              parentNode.offsetY = parentNode.offsetY;
              parentNode.annotations[0].offset = {x: 0.5, y: -0.1};
              diagram.dataBind();
              newNode.offsetX = parentNode.offsetX;
              newNode.offsetY = parentNode.offsetY;
              diagram.dataBind();
              //diagram.refresh();
              if (parentNode.children && parentNode.children.length > 1) {
                //diagram.remove(diagram.nodes[diagram.nodes.length - 3]);
                parentNode.style.strokeColor = "black";
                parentNode.style.strokeWidth = 1;
              }
            }
          }
        }
      }
    }, 0);

  }


  if (bientong) {
    setTimeout(() => {
      // Checking the nodes length greater than one or not
      if (diagram.nodes.length > 1) {
        if (!node.children && node.id !== parentNode.id && !node.parentId) {
          //Getting the group node by getObject method by passing parent ID
          if (
            (parentNode.parentId &&
              communicationDroppedElementChecker(node, parentNode)) ||
            (parentNode.parentId && ignoreCond)
          ) {
            var group = diagram.getObject(parentNode.parentId);
            //let firstChild = diagram.getObject(group.children[0]);
            let firstChild = parentNode;
            let alerted = checkDropAlert(group, node, firstChild);

            if (alerted) {
              return alert(alerted);
            }
            //Added the child into the group by using addChildToGroup
            diagram.addChildToGroup(group, node);
            firstChild.offsetX = group.offsetX;
            firstChild.offsetY = group.offsetY;
            firstChild.annotations[0].offset = {x: 0.5, y: -0.1};
            if (group.children.length > 6) {
              group.width = 2 * (((group.children.length - 1) * 50 + (group.children.length - 2) * 20) / (2 * Math.PI) + 40 + bienkt);
              group.height = group.width;
            }
            if (group.children.length == 6 || group.children.length == 5) {
              group.width = 2 * (60 + 40 + bienkt);
              group.height = group.width;
            }
            if (group.children.length == 4 || group.children.length == 3) {
              group.width = 2 * (60 + 15 + bienkt);
              group.height = group.width;
            }

            diagram.dataBind();

            if (group.children.length > 6) {
              for (let i = 1; i < group.children.length; i++) {
                const childEl = diagram.getObject(group.children[i]);
                let annoContent = childEl.annotations[0].content;
                let previousChild = diagram.getObject(group.children[i - 1]);
                let previousAnnoContent = previousChild.annotations[0].content;

                if (i > 1) {
                  childEl.offsetX = group.offsetX + Math.cos(Math.PI - Math.PI * 2 / (group.children.length - 2) * (i - 2)) * (((group.children.length - 2) * 50 + (group.children.length - 3) * 20) / (2 * Math.PI) + bienkt);
                  childEl.offsetY = group.offsetY + Math.sin(Math.PI - Math.PI * 2 / (group.children.length - 2) * (i - 2)) * (((group.children.length - 2) * 50 + (group.children.length - 3) * 20) / (2 * Math.PI) + bienkt);
                  childEl.width = 50 + bienkt;
                  childEl.height = 50 + bienkt;
                }
                if (i == 1) {
                  childEl.offsetX = group.offsetX;
                  childEl.offsetY = group.offsetY;
                  childEl.width = 50 + bienkt;
                  childEl.height = 50 + bienkt;
                }

                if (
                  previousAnnoContent.startsWith(annoContent) &&
                  previousAnnoContent.length - annoContent.length < 3
                ) {
                  childEl.annotations[0].content =
                    source.annotations[0].content + " " + i;
                  source.annotations[0].content =
                    source.annotations[0].content + "" + (i + 1);
                }
              }
              diagram.dataBind();
            }

            if (group.children.length == 5 || group.children.length == 6) {
              for (let i = 1; i < group.children.length; i++) {
                const childEl = diagram.getObject(group.children[i]);
                let annoContent = childEl.annotations[0].content;
                let previousChild = diagram.getObject(group.children[i - 1]);
                let previousAnnoContent = previousChild.annotations[0].content;
                if (i > 1) {
                  childEl.offsetX = group.offsetX + Math.cos(Math.PI - Math.PI * 2 / (group.children.length - 2) * (i - 2)) * (60 + bienkt);
                  childEl.offsetY = group.offsetY + Math.sin(Math.PI - Math.PI * 2 / (group.children.length - 2) * (i - 2)) * (60 + bienkt);
                  childEl.width = 50 + bienkt;
                  childEl.height = 50 + bienkt;
                }
                if (i == 1) {
                  childEl.offsetX = group.offsetX;
                  childEl.offsetY = group.offsetY;
                  childEl.width = 50 + bienkt;
                  childEl.height = 50 + bienkt;
                }

                if (
                  previousAnnoContent.startsWith(annoContent) &&
                  previousAnnoContent.length - annoContent.length < 3
                ) {
                  childEl.annotations[0].content =
                    source.annotations[0].content + " " + i;
                  source.annotations[0].content =
                    source.annotations[0].content + "" + (i + 1);
                }
              }
              diagram.dataBind();
            }

            if (group.children.length == 3 || group.children.length == 4) {
              for (let i = 1; i < group.children.length; i++) {
                const childEl = diagram.getObject(group.children[i]);
                let annoContent = childEl.annotations[0].content;
                let previousChild = diagram.getObject(group.children[i - 1]);
                let previousAnnoContent = previousChild.annotations[0].content;

                childEl.offsetX = group.offsetX + Math.cos(Math.PI - Math.PI * 2 / (group.children.length - 1) * (i - 1)) * (35 + bienkt);
                childEl.offsetY = group.offsetY + Math.sin(Math.PI - Math.PI * 2 / (group.children.length - 1) * (i - 1)) * (35 + bienkt);
                childEl.width = 50 + bienkt;
                childEl.height = 50 + bienkt;

                if (
                  previousAnnoContent.startsWith(annoContent) &&
                  previousAnnoContent.length - annoContent.length < 3
                ) {
                  childEl.annotations[0].content =
                    source.annotations[0].content + " " + i;
                  source.annotations[0].content =
                    source.annotations[0].content + "" + (i + 1);
                }
              }
              diagram.dataBind();
            }


          } else {
            if (
              communicationDroppedElementChecker(source, parentNode) ||
              ignoreCond
            ) {
              diagram.select([parentNode, source]);
              diagram.group();
              let group = diagram.getObject(parentNode.parentId);

              let alerted = checkDropAlert(group, source, parentNode);
              if (alerted) {
                diagram.unGroup();
                return alert(alerted);
              }
              let newNode = diagram.getObject(source.id);
              parentNode.width = 150;
              parentNode.height = parentNode.width;
              parentNode.offsetX = parentNode.offsetX;
              parentNode.offsetY = parentNode.offsetY;
              parentNode.annotations[0].offset = {x: 0.5, y: -0.1};
              diagram.dataBind();
              newNode.offsetX = parentNode.offsetX;
              newNode.offsetY = parentNode.offsetY;
              diagram.dataBind();
              if (parentNode.children && parentNode.children.length > 1) {
                //diagram.remove(diagram.nodes[diagram.nodes.length - 3]);
                parentNode.style.strokeColor = "black";
                parentNode.style.strokeWidth = 1;
              }
            }
          }
        }
      }
    }, 0);
  }
  return group;
}

export function communicationDroppedElementChecker(id, parentId) {
  let allowDropped = [];
  let childAllow = [];


  if (parentId.id.startsWith("personAspect")) {
    allowDropped = ["personAspect"];
    childAllow = ["personAspect"];
    if (!id.id.startsWith("personAspect")) alert("The Person Aspect Entity identified the aspect of a person.  Multiple aspects of a person can be combined to one.  The aspect of a person does not accept other entity.");
  }


  if (parentId.id.startsWith("application") || parentId.id.startsWith("a")) {
    allowDropped = ["application", "a"];
    childAllow = ["application"];
  }


  if (parentId.id.startsWith("communicationFunction") || parentId.id.startsWith("functionx") || parentId.id.startsWith("function0")) {
    allowDropped = ["communicationFunction", "functionx", "function0"];
    childAllow = ["communicationFunction", "functionx"];
  }


  if (
    parentId.id.startsWith("communicationEntity")
    || parentId.id.startsWith("communicationElement")
    || parentId.id.startsWith("information")
    || parentId.id.startsWith("question")
    || parentId.id.startsWith("answer")
  ) {
    allowDropped = ["communicationEntity", "communicationElement", "information", "question", "answer"];
    childAllow = [
      "communicationEntity",
      "x",
      "word",
      "sentence",
      "paragraph",
      "communicationElement",
      "question",
      "answer",
      "picture",
      "video",
      "audio",
      "text",
      "principle",
      "information",
    ];
    if (
      (!id.id.startsWith("communicationEntity"))
      && (!id.id.startsWith("x"))
      && (!id.id.startsWith("word"))
      && (!id.id.startsWith("sentence"))
      && (!id.id.startsWith("paragraph"))
      && (!id.id.startsWith("communicationElement"))
      && (!id.id.startsWith("question"))
      && (!id.id.startsWith("answer"))
      && (!id.id.startsWith("picture"))
      && (!id.id.startsWith("audio"))
      && (!id.id.startsWith("text"))
      && (!id.id.startsWith("principle"))
      && (!id.id.startsWith("information"))
    )
      alert("A communication or communication entity is viewed as an entity that contains communication elements such as word, paragraph, sentence, image, video etc.  Only such entities included in communication.");
  }

  if (parentId.id.startsWith("word")) {
    allowDropped = ["word"];
    childAllow = ["word"];
    if (!id.id.startsWith("word")) alert("A composite word is composed of multiple words.  The word entity only accepts other words to form composite word.");
  }

  if (parentId.id.startsWith("sentence")) {
    allowDropped = ["sentence"];
    childAllow = ["word", "sentence", "communicationElement", "principle"];
    if (
      (!id.id.startsWith("word"))
      && (!id.id.startsWith("sentence"))
      && (!id.id.startsWith("communicationElement"))
      && (!id.id.startsWith("principle"))
    )
      alert("The sentence entity accepts words, sentences and other communications elements like phrases, expressions, and so forth to form other sentence.");
  }
  if (
    parentId.id.startsWith("paragraph")
  ) {
    allowDropped = ["paragraph"];
    childAllow = [
      "word",
      "sentence",
      "communicationElement",
      "principle",
      "paragraph",
    ];
    if (
      (!id.id.startsWith("word"))
      && (!id.id.startsWith("sentence"))
      && (!id.id.startsWith("communicationElement"))
      && (!id.id.startsWith("principle"))
      && (!id.id.startsWith("paragraph"))
    )
      alert("The paragraph entity accepts words, sentences, paragraphs and other communications elements like phrases, expressions, and so forth to form other paragraph.");
  }
  if (parentId.id.startsWith("communicationFunction")) {
    allowDropped = ["communicationFunction", "function"];
    childAllow = ["function", "communicationFunction"];
    if (!id.id.startsWith("communicationFunction"))
      alert("A function can be viewed as a function that is made of other functions; the function entity only accepts function.");
  }
  if (parentId.id.startsWith("aspect")) {
    allowDropped = ["aspect"];
    childAllow = ["aspect"];
    if (!id.id.startsWith("aspect"))
      alert("Aspect entity can only takes aspect to form a group of aspects.");
  }
  if (parentId.id.startsWith("dictionary")) {
    allowDropped = ["dictionary"];
    childAllow = ["word"];
  }
  if (parentId.id.startsWith("collection")) {
    allowDropped = ["collection"];
    childAllow = ["entity"];
  }
  if (parentId.id.startsWith("communicationResult")) {
    allowDropped = ["communicationResult"];
    childAllow = ["communicationResult"];
  }
  if (parentId.id.startsWith("action")) {
    allowDropped = ["action"];
    childAllow = ["action"];
  }
  if (parentId.id.startsWith("reason")) {
    allowDropped = ["reason"];
    childAllow = ["reason"];
  }
  if (parentId.id.startsWith("principle2")) {
    allowDropped = ["principle2"];
    childAllow = ["principle"];
    if (id.addInfo[0].menuId === "principle") {
      alert("A subset of principle can only accept principle");
    }
  }
  if (parentId.id.startsWith("principle1")) {
    allowDropped = ["principle1"];
    childAllow = ["principle", "principle2"];
    if (
      id.addInfo[0].menuId !== "principle" &&
      id.addInfo[0].menuId !== "subSetofPrinciple"
    ) {
      alert(
        "the main set of principle can only accept principle and subset of principle"
      );
    }
  }
  if (parentId.id.startsWith("reference")) {
    allowDropped = ["reference"];
    childAllow = [
      "communicationEntity",
      "communicationElement",
      "word",
      "sentence",
      "paragraph",
      "question",
      "answer",
      "picture",
      "video",
      "audio",
      "text",
      "principle",
      "information",
    ];
  }
  if (
    parentId.id.startsWith("locationOfOperation") ||
    parentId.id.startsWith("siteOfOperation")
  ) {
    allowDropped = ["locationOfOperation", "siteOfOperation"];
    childAllow = ["locationOfOperation", "siteOfOperation"];
  }
  if (parentId.id.startsWith("mainArea")) {
    allowDropped = ["mainArea"];
    childAllow = ["locationOfOperation", "siteOfOperation"];
  }
  if (parentId.id.startsWith("workingareaAL")) {
    allowDropped = ["workingareaAL"];
    childAllow = ["locationAL", "locationOfOperation", "siteOfOperation"];
  }
  if (parentId.id.startsWith("constantCharacteristics")) {
    allowDropped = ["constantCharacteristics"];
    childAllow = ["constantCharacteristics"];
  }
  if (parentId.id.startsWith("theory")) {
    allowDropped = ["theory", "theorem"];
    childAllow = ["theory", "theorem"];
  }
  if (parentId.id.startsWith("utilizationTheory")) {
    allowDropped = ["utilizationTheory"];
    childAllow = ["theory", "theorem"];
  }
  if (parentId.id.startsWith("characteristics")) {
    allowDropped = ["characteristics"];
    childAllow = ["characteristics"];
  }
  if (parentId.id.startsWith("naturalElement")) {
    allowDropped = ["naturalElement"];
    childAllow = ["naturalElement"];
  }
  if (parentId.id.startsWith("inputElement")) {
    allowDropped = ["inputElement"];
    childAllow = ["inputElement"];
  }
  if (parentId.id.startsWith("functionSystem")) {
    allowDropped = ["functionSystem"];
    childAllow = ["functionSystem"];
  }
  if (parentId.id.startsWith("functionalSystem")) {
    allowDropped = ["functionalSystem"];
    childAllow = ["functionalSystem"];
  }
  if (parentId.id.startsWith("fundamentalUtilizationTheory")) {
    allowDropped = ["fundamentalUtilizationTheory"];
    childAllow = ["fundamentalUtilizationTheory"];
  }

  return (
    childAllow.some((a) => id.id.startsWith(a)) &&
    allowDropped.some((a) => parentId.id.startsWith(a))
  );
}

export function checkDropAlert(group, source, n) {
  let checkedSource;
  if (Array.isArray(source.addInfo)) {
    checkedSource = source.addInfo[0].menuId;
  } else {
    checkedSource = source.addInfo.menuId;
  }
  let checkedNode;
  if (Array.isArray(n.addInfo)) {
    checkedNode = n.addInfo[0].menuId;
  } else {
    checkedNode = n.addInfo.menuId;
  }

  if (checkedSource === "principle" && checkedNode === "principle") {
    return "While a principle may have multiple parts, for now consider it as one entity.";
  }
  if (checkedNode === "principle" && checkedSource === "subSetofPrinciple") {
    return "Consider a principle as a single entity where a subset as multiple entities; a subset of principles includes multiple principles not the other way around";
  }
  if (checkedSource === "mainSetofPrinciple" && checkedNode === "principle") {
    return "The main set of principles includes multiple subsets of principles where each subset includes principle.  A single principle does not include the main set of principles.";
  }
  if (
    checkedSource === "subSetofPrinciple" &&
    checkedNode === "subSetofPrinciple"
  ) {
    return "A subset of principles includes multiple unique principle.  A subset of principles does not include other subsets of principles.";
  }
  if (
    checkedSource === "mainSetofPrinciple" &&
    checkedNode === "subSetofPrinciple"
  ) {
    return "The main set of principles includes all the subsets of principles.  A subset of principles does not include the main set of principles.";
  }
  if (
    checkedSource === "mainSetofPrinciple" &&
    checkedNode === "mainSetofPrinciple"
  ) {
    return "The main set of principles is unique and does not include another main set.  There is only one main set of principles.";
  }

  if (
    checkedSource === "subSetofPrinciple" && group.children.filter((a) => a.startsWith("principle2")).length >= 10
  ) {
    return "The number of subset identified in the main set is 10 subsets";
  }
  if (
    checkedNode === "constantCharacteristics" &&
    group.children.filter((a) => a.startsWith("constantCharacteristics"))
      .length >= 5
  ) {
    return "The number of constant characteristic identified is up to 5";
  }
  if (
    checkedNode === "theoryCharacteristic" &&
    group.children.filter((a) => a.startsWith("characteristics"))
      .length >= 16
  ) {
    return "The number of theory characteristic is fixed";
  }

  if (
    checkedNode === "fundamentalTheory" &&
    group.children.filter((a) => a.startsWith("fundamentalUtilizationTheory"))
      .length >= 10
  ) {
    return "fundamental of our utilization theory include the fundamental of all other theories and they cannot be duplicated";
  }
  return '';
}

export function drawPortCircle(node) {
  const replaceStyle = {
    shape: "Circle", style: {
      fill: "black",
    }, width: 2, height: 2,
  };
  node.ports = node.ports.map((e) => {
    if (e.offset.x === 0 || e.offset.x === 1 || e.offset.x === 0.5) {
      e.offset.x = e.offset.x - 0.01;
    }
    if (e.offset.y === 0 || e.offset.y === 1 || e.offset.y === 0.5) {
      e.offset.y = e.offset.y - 0.01;
    }
    return {...e, ...replaceStyle};
  });
}

export const STORAGE_KEY = '@SETTINGS';
export const LOCATION_COUNTRY_KEY = 'location_country';

export const LIST_ITEM = {
  pointTo: [
    "Point To",
    "Define From",
    "Define By",
    "Map to",
    "Mean",
    "Identify",
  ],
  giveRiseTo: [
    "Give Rise",
    "Derive From",
    "Develop From",
    "Derive By",
    "Because",
    "Cause",
    "Cause By",
  ],
  relatedTo: [
    "Relate to",
    "Link",
    "Connect",
    "Part of",
    "Because",
    "Have",
    "Contain",
  ],
  by: ["By", "By this", "By that"],
  depend: ["Depend", "Related"],
  agree: ["Agree", "Match", "Related"],
  match: ["Match", "Relate", "Agree", "Go with", "Map"],
  have: ["Have", "Include", "Contain", "Part of", "Exits with", "Given with"],
  Interact: ["Interact", "Use"],
  Use: ["Use"],
  compare: ["Compare"],
  attach: ["Attach"],
  identify: ["Identify"],
  define: ["Define"],
  visuallyIdentify: ["Visually Identify"],
};

export const areaData = [
  {
    id: "locationOfOperation",
    title: "Location of Operation",
    annotation: "Location",
    menuId: "location",
    toolTip: "Identify Operation Location",
  },
  {
    id: "siteOfOperationRect",
    title: "Site of Operation",
    annotation: "Site",
    menuId: "location",
    toolTip: "Identify Operation Site",
  },
  {
    id: "mainArea",
    title: "Main Area",
    annotation: {
      content: [
        {
          content: "Main Area",
          offset: {x: 0.5, y: 0},
          margin: {bottom: 20},
        },
      ],
      ports: [],
      style: {
        strokeWidth: 4,
      },
      height: 200,
      width: 200,
    },
    menuId: "location",
    toolTip: "Identify The Main Area",
  },
  {
    id: "siteOfOperation",
    title: "Site of Operation",
    annotation: "Site",
    toolTip: "Identify a Site",
    menuId: "location",
    type: "House",
  },
  {
    id: "workingareaAL",
    title: "Working Area",
    annotation: {
      fill: "none",
      radius: 75,
      content: [
        {
          content: "Working Area",
        },
      ],
    },
    menuId: "location",
    toolTip: "Identify a Working Area",
    type: "Circle",
  },
  {
    id: "locationAL",
    title: "Location",
    annotation: {
      fill: "none",
      radius: 30,
      content: [
        {
          content: "Locaiton",
        },
      ],
    },
    menuId: "location",
    toolTip: "Identify a Location",
    type: "Circle",
  },
  {
    id: "mobilityAL",
    title: "Mobility",
    toolTip: "Movement of a Person",
    menuId: "empty",
    type: "mobility",
    annotation: null
  },
];

export const personData = [
  {
    id: "person",
    title: "Person",
    annotation: ["Person Name", "No Title"],
    toolTip: "A Person Without Title",
    menuId: "personShapes",
    type: "Person",
  },
  {
    id: "personNoframe",
    title: "Person",
    annotation: ["Person Name", "No Title"],
    toolTip: "Sketched Without Frame",
    menuId: "personShapes",
    type: "PersonNoFrame",
  },
  {
    id: "employee",
    title: "Employeee",
    annotation: ["Person Name", "Employee"],
    toolTip: "A Person as Employee",
    menuId: "personShapes",
    type: "Person",
  },
  {
    id: "manager",
    title: "Manager",
    annotation: ["Person Name", "Manager"],
    toolTip: "A Person as Manager",
    menuId: "personShapes",
    type: "Person",
  },
  {
    id: "teamLead",
    title: "Team Lead",
    annotation: ["Person Name", "Team Lead"],
    toolTip: "A Person as Team Lead",
    menuId: "personShapes",
    type: "Person",
  },
  {
    id: "customer",
    title: "Customer",
    annotation: ["Person Name", "Customer"],
    toolTip: "A Person as Customer",
    menuId: "personShapes",
    type: "Person",
  },
  {
    id: "client",
    title: "Client",
    annotation: ["Person Name", "Client"],
    toolTip: "A Person as Client",
    menuId: "personShapes",
    type: "Person",
  },
  {
    id: "contractor",
    title: "Contractor",
    annotation: ["Person Name", "Conractor"],
    toolTip: "A Person as Contractor",
    menuId: "personShapes",
    type: "Person",
  },
  {
    id: "salePerson",
    title: "Sale Person",
    annotation: ["Person Name", "Sale Rep"],
    toolTip: "A Person as Sale Rep",
    menuId: "personShapes",
    type: "Person",
  },
  {
    id: "servicePerson",
    title: "Service Person",
    annotation: ["Person Name", "Service Rep"],
    toolTip: "A Person as Service Rep",
    menuId: "personShapes",
    type: "Person",
  },
  {
    id: "supportPerson",
    title: "Support Person",
    annotation: ["Person Name", "Support Rep"],
    toolTip: "A Person as Service Rep",
    menuId: "personShapes",
    type: "Person",
  },
  {
    id: "testPerson",
    title: "Test Person",
    annotation: ["Person Name", "Test Person"],
    toolTip: "A Person Who Conducts Test",
    menuId: "personShapes",
    type: "Person",
  },
  {
    id: "inspector",
    title: "Inspector",
    annotation: ["Person Name", "Inspector"],
    toolTip: "A Person as Inspector",
    menuId: "personShapes",
    type: "Person",
  },
  {
    id: "agent",
    title: "Agent",
    annotation: ["Person Name", "Agent"],
    toolTip: "A Person as Agent",
    menuId: "personShapes",
    type: "Person",
  },
  {
    id: "user",
    title: "User",
    annotation: ["Person Name", "User"],
    toolTip: "A person as a User",
    menuId: "personShapes",
    type: "Person",
  },
  {
    id: "other",
    title: "Other",
    annotation: ["Person Name", "Other Title"],
    toolTip: "Other Person Not Listed",
    menuId: "personShapes",
    type: "Person",
  },
  {
    id: "groupOfPeople",
    title: "Group of People",
    annotation: "Group Name",
    toolTip: "Represents a Group of People",
    menuId: "groupPeople",
    type: "PersonGroup",
  },
  {
    id: "communicationHolder",
    title: "Comunication Holder",
    annotation: "Communication Holder",
    menuId: "communicationHolder",
    toolTip: "Hold Person Communication",
  },
  {
    id: "externalCommunicationHolder",
    title: "External Communication Holder",
    annotation: "External Communication Holder",
    menuId: "communicationHolder",
    toolTip: "Hold Person Communication",
  },
  {
    id: "communicationNaturalObserver",
    title: "Natural Observer",
    annotation: " ",
    menuId: "communicationNaturalObserver",
    toolTip: "Show Entity is Naturally Indentified",
    type: "NaturalObserver",
  },
  {
    id: "communicationMixturePerson1",
    title: "Communication Mixture",
    annotation: {
      content: [
        {
          content: "Comm Mix",
        },
      ],
      ports: [
        {
          id: "top-port",
          offset: {x: 0.5, y: 0},
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "right-port",
          offset: {x: 1, y: 0.5},
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "bottom-port",
          offset: {x: 0.5, y: 1},
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
      ],
      height: 50,
      width: 50,
    },
    menuId: "commMix",
    toolTip: "Two Input Communication",
  },
  {
    id: "communicationMixturePerson2",
    title: "Communication Mixture",
    annotation: {
      content: [
        {
          content: "Comm Mix",
        },
      ],
      ports: [
        {
          id: "top-port",
          offset: {x: 0.5, y: 0},
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "right-port",
          offset: {x: 1, y: 0.5},
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "bottom-port",
          offset: {x: 0.5, y: 1},
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
      ],
      height: 50,
      width: 50,
    },
    menuId: "commMix",
    toolTip: "Multi Input Communication",
  },
  {
    id: "personAspect",
    title: "Person Aspect",
    annotation: "Person Aspect",
    menuId: "personAspect",
    toolTip: "Identify Aspect of a Person",
  },
  {
    id: "groupPreson1",
    title: "Group",
    annotation: {
      content: [
        {
          content: "Group",
        },
      ],
      ports: [
        {
          id: "left-1",
          offset: {x: 0, y: 0.25},
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "left-2",
          offset: {x: 0, y: 0.75},
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "right",
          offset: {x: 1, y: 0.5},
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
      ],
      height: 75,
      width: 50,
    },
    menuId: "commMix",
    toolTip: "Use to Group or Add Entities",
  },
  {
    id: "commHolderGroup",
    title: "Comm Holder Group",
    annotation: "Communication Holder",
    toolTip: "Group of Communication Holder",
    menuId: "communicationHolder",
    type: "Overlap",
  },
  {
    id: "externalCommHolderGroup",
    title: "External Comm Holder Group",
    annotation: "External Communication Holder",
    toolTip: "Group of External Communication Holder",
    menuId: "communicationHolder",
    type: "Overlap",
  },
  {
    id: "coverPerson",
    title: "Cover",
    toolTip: "Use to Cover a Person",
    menuId: "cover",
    type: "cover",
  },
  {
    id: "mobilityPerson",
    title: "Mobility",
    toolTip: "Movement of a Person",
    menuId: "personShapes",
    type: "mobility",
  },
  {
    id: "continuityPerson",
    title: "Continuity",
    annotation: {
      strokeWidth: 0,
      strokeDashArray: "",
      fill: "transparent",
      ports: [],
    },
    toolTip: "Show Continuity of Entity",
    menuId: "empty",
    type: "Continuity",
  },
  {
    id: "personWithNumber",
    title: "P[n]",
    annotation: ["Pn"],
    toolTip: "Denote Person With Number",
    menuId: "personShapes",
    type: "PersonNoFrame",
  },
  {
    id: "PersonWithNumberAndFrame123",
    title: "x[n]",
    annotation: ["Xn"],
    toolTip: "Denote Person With Number",
    menuId: "personShapes",
    type: "Person",
  },
];

export const commLinkData = [
  {
    id: "communicationLink",
    title: "Communication Link",
    annotation: {
      content: [
        {
          content: "Communicate",
          alignment: "After",
          margin: {
            top: 2,
            bottom: 2,
            left: 2,
            right: 2,
          },
        },
      ],
      shape: {
        source: "Arrow",
      },
      style: {
        fill: "black",
        strokeColor: "black",
        strokeWidth: 1,
      },
    },
    menuId: "edit",
    toolTip: "Right Communication Flow",
    type: "Arrow",
  },
  {
    id: "communicationLinkLeft",
    title: "Communication Link",
    annotation: {
      content: [
        {
          content: "Communicate",
          alignment: "Before",
          margin: {
            top: 2,
            bottom: 2,
            left: 2,
            right: 2,
          },
        },
      ],
      shape: {
        target: "Arrow",
      },
      style: {
        fill: "black",
        strokeColor: "black",
        strokeWidth: 1,
      },
    },
    menuId: "edit",
    toolTip: "Left Communication Flow",
    type: "Arrow",
  },
  {
    id: "bidirectionalCommunicationLink",
    title: "Bidirectional Communication Link",
    annotation: {
      content: [
        {
          content: "Communicate",
          alignment: "Before",
          margin: {
            top: 2,
            bottom: 2,
            left: 2,
            right: 2,
          },
        },
      ],

      shape: {
        target: "Arrow",
        source: "Arrow",
      },

      style: {
        fill: "black",
        strokeColor: "black",
        strokeWidth: 1,
      },
    },
    menuId: "edit",
    toolTip: "Left & RIght Communication Flow",
    type: "Arrow",
  },
  {
    id: "rightCommunicationLink",
    title: "Right Communication Link",
    annotation: {
      content: "Information",
    },
    menuId: "edit",
    toolTip: "Communication Link With Information",
    type: "WideArrow",
  },
  {
    id: "leftCommunicationLink",
    title: "Left Communication Link",
    annotation: {
      content: "Information",
      direction: "left",
    },
    menuId: "edit",
    toolTip: "Communication Link With Information",
    type: "WideArrow",
  },
  {
    id: "biDirectionalArrow",
    title: "Bidirectional Arrow",
    annotation: "Information",
    menuId: "edit",
    toolTip: "Communication Link With Information",
    type: "BiWideArrow",
  },
  {
    id: "communicationLink1",
    title: "Communication Link",
    annotation: "Information",
    menuId: "edit",
    toolTip: "Communication Link With Information",
    type: "CylinderArrow",
  },
];

export const communicationData = [
  {
    id: "communicationEntity",
    title: "Communication Entity",
    annotation: "Communication",
    menuId: "communication",
    toolTip: "Represents a Communication",
  },
  {
    id: "commText",
    title: "Communication",
    annotation: "Communication",
    menuId: "communication",
    toolTip: "Represents a Communication",
    type: "Text",
  },
  {
    id: "word",
    title: "Word",
    annotation: "Word",
    menuId: "word",
    toolTip: "Represents an Actual Word",
  },
  {
    id: "sentence",
    title: "Sentence",
    annotation: "Sentence",
    menuId: "sentence",
    toolTip: "Represents an Actual Sentence",
  },
  {
    id: "paragraph",
    title: "Paragraph",
    annotation: "Paragraph",
    menuId: "paragraph",
    toolTip: "Represents an Actual Pragraph",
  },
  {
    id: "communicationElement",
    title: "Communication Element",
    annotation: "Communication Element",
    menuId: "communicationElement",
    toolTip: "Represent a Communication Element",
  },
  {
    id: "communicationProcess",
    title: "Communication Process",
    annotation: "Communication Process",
    menuId: "commMix",
    toolTip: "Represents a Process of Communication",
  },
  {
    id: "information",
    title: "Information",
    annotation: "Information",
    menuId: "information",
    toolTip: "Respresents an actual Information",
  },
  {
    id: "entity",
    title: "Entity",
    annotation: "Entity",
    menuId: "entity",
    toolTip: "Represents an Actual Entity",
  },
  {
    id: "question",
    title: "Question",
    annotation: "Question",
    menuId: "question",
    toolTip: "Represent an Actual Question",
  },
  {
    id: "answer",
    title: "Answer",
    annotation: "Answer",
    menuId: "answer",
    toolTip: "Represents an Actual Sentence",
  },
  {
    id: "unkownEntity",
    title: "Unknown Entity",
    annotation: "Unknown Entity",
    menuId: "entity",
    toolTip: "Represents an Unkown Entity",
  },
  {
    id: "blankEntity",
    title: "Blank Entitiy",
    annotation: "?",
    menuId: "entity",
    toolTip: "Existed Whether or Not",
  },
  {
    id: "function",
    title: "Function",
    annotation: "Function",
    menuId: "function",
    toolTip: "Entity as Function",
  },
  {
    id: "aspect",
    title: "Aspect",
    annotation: "Aspect",
    menuId: "aspect",
    toolTip: "Entity as Aspect",
  },
  {
    id: "test",
    title: "Test",
    annotation: "Test",
    menuId: "test",
    toolTip: "Entity as Test",
  },
  {
    id: "functionStatus",
    title: "Function Status",
    annotation: "Function Status",
    menuId: "functionstatus",
    toolTip: "Entity as Function Status",
  },
  {
    id: "entityUsage",
    title: "Entity Usage",
    annotation: "Entity Usage",
    menuId: "functionstatus",
    toolTip: "Entity as Entity Usage",
  },
  {
    id: "picture",
    title: "Picture",
    annotation: "Picture",
    menuId: "picture",
    toolTip: "Represents an actual Picture",
  },
  {
    id: "video",
    title: "Video",
    annotation: "Video",
    menuId: "video",
    toolTip: "Represents an Actual Video",
  },
  {
    id: "audio",
    title: "Audio",
    annotation: "Audio",
    menuId: "audio",
    toolTip: "Represents an actual Audio",
  },
  {
    id: "dictionary",
    title: "Dictionary",
    annotation: {
      radius: 50,
      fill: "none",
      content: [
        {
          offset: {x: 0.5, y: 1},
          margin: {top: 8},
          content: "Dictonary",
        },
      ],
    },
    menuId: "dictionary",
    toolTip: "Represent a Dictionary of Words",
    type: "Circle",
  },
  {
    id: "wordCommunication",
    title: "Word",
    annotation: {
      fill: "none",
      radius: 25,
      content: [
        {
          content: "Word",
        },
      ],
    },
    menuId: "wordCircle",
    toolTip: "Represent a Word",
    type: "Circle",
  },
  {
    id: "collection",
    title: "Collection",
    annotation: {
      radius: 50,
      fill: "none",
      content: [
        {
          offset: {x: 0.5, y: 1},
          margin: {top: 8},
          content: "Collection",
        },
      ],
    },
    menuId: "collection",
    toolTip: "Represent a Collection of Entity",
    type: "Circle",
  },
  {
    id: "entityCommunication",
    title: "Entity",
    annotation: {
      fill: "none",
      radius: 25,
      content: [
        {
          content: "Entity",
        },
      ],
    },
    menuId: "entitycircle",
    toolTip: "Represents an Entity",
    type: "Circle",
  },
  {
    id: "relationship123",
    title: "Relationship",
    annotation: {
      content: [
        {
          content: "Relates",
        },
      ],
      fill: "white",
      radius: 35,
      ports: rectPorts,
    },
    menuId: "empty",
    toolTip: "Use to Show a Relationship",
    type: "Circle",
  },
  {
    id: "comparision",
    title: "Comparision",
    annotation: {
      content: [
        {
          content: "Compare",
        },
      ],
      fill: "white",
      radius: 35,
      ports: rectPorts,
    },
    menuId: "empty",
    toolTip: "Use to Show a Comparision",
    type: "Circle",
  },
  {
    id: "communicationMixtureCommuincation1",
    title: "Communication Mixture",
    annotation: {
      content: [
        {
          content: "Comm Mix",
        },
      ],
      ports: [
        {
          id: "top-port",
          offset: {x: 0.5, y: 0},
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "right-port",
          offset: {x: 1, y: 0.5},
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "bottom-port",
          offset: {x: 0.5, y: 1},
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
      ],
      height: 50,
      width: 50,
    },
    menuId: "commMix",
    toolTip: "Two Input Communication",
  },
  {
    id: "communicationMixtureCommunication2",
    title: "Communication Mixture",
    annotation: {
      content: [
        {
          content: "Comm Mix",
        },
      ],
      ports: [
        {
          id: "top-port",
          offset: {x: 0.5, y: 0},
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "right-port",
          offset: {x: 1, y: 0.5},
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "bottom-port",
          offset: {x: 0.5, y: 1},
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
      ],
      height: 50,
      width: 50,
    },
    menuId: "commMix",
    toolTip: "Multi Input Communication",
  },
  {
    id: "groupCommunication",
    title: "Group",
    annotation: {
      content: [
        {
          content: "Group",
        },
      ],
      ports: [
        {
          id: "left-1",
          offset: {x: 0, y: 0.25},
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "left-2",
          offset: {x: 0, y: 0.75},
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "right",
          offset: {x: 1, y: 0.5},
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
      ],
      height: 75,
      width: 50,
    },
    menuId: "commMix",
    toolTip: "Use to Group or Add Entities",
  },
  {
    id: "continuityComm",
    title: "Continuity",
    annotation: {
      strokeWidth: "1",
      strokeDashArray: "10 5",
    },
    menuId: "empty",
    toolTip: "Show Continuity of Entity",
    type: "Continuity",
  },
  {
    id: "entities",
    title: "Entities",
    annotation: "Entities",
    toolTip: "Represents a Group of Entity",
    menuId: "entity",
    type: "Overlap",
  },
  {
    id: "communicatonElements",
    title: "Communication Elements",
    annotation: "Communication Elements",
    menuId: "communication",
    toolTip: "A Group of Communication Element",
    type: "Overlap",
  },
  {
    id: "questions",
    title: "Questions",
    annotation: "Questions",
    toolTip: "Represents a Group of Question",
    menuId: "question",
    type: "Overlap",
  },
  {
    id: "answers",
    title: "Answers",
    annotation: "Answers",
    toolTip: "Represents a Group of Answer",
    menuId: "answer",
    type: "Overlap",
  },
  {
    id: "x",
    title: "x",
    annotation: "x",
    menuId: "communication",
    toolTip: "Represent a Communication",
  },
  {
    id: "x1",
    title: "x",
    annotation: "x",
    toolTip: "Represents Communication",
    menuId: "communication",
    type: "Text",
  },
];

export const otherData: any[] = [
  {
    id: "separationLineComm",
    title: "Separation Line",
    annotation: {
      length: 400,
      style: {
        strokeDashArray: "10 5",
      },
    },
    menuId: "edit",
    toolTip: "Use to Show Separation",
    type: "VerticalLine",
  },
  {
    id: "time",
    title: "Time",
    annotation: {
      shape: {
        target: "Arrow",
        source: "Arrow",
      },
      content: [
        {
          content: "Time",
          alignment: "Before",
        },
      ],
    },
    menuId: "edit",
    toolTip: "Identify a Time",
    type: "Arrow",
  },
  {
    id: "progress",
    title: "Progress",
    annotation: {
      content: [{content: "% Completed"}],
      height: 20,
      width: 400,
    },
    menuId: "edit",
    nodes: [],
    toolTip: "Use to Show Progress",
  },
  {
    id: "timeLine",
    title: "Time Line",
    annotation: {
      content: [
        {
          content: "Time",
          offset: {x: 1, y: 0.5},
          margin: {left: 20},
        },
      ],
      length: 600,
      style: {strokeDashArray: ""},
    },
    menuId: "edit",
    toolTip: "Use For Graph or Chart",
    type: "HorizontalLine",
  },
  {
    id: "dateLine",
    title: "Date Line",
    annotation: {
      content: [
        {
          content: "Date",
          offset: {x: 0, y: 1},
          margin: {top: 20, left: 10},
        },
      ],
      length: 600,
      style: {strokeDashArray: ""},
    },
    menuId: "edit",
    toolTip: "Insert a Date Line",
    type: "VerticalLine",
  },
  {
    id: "principleLineOthers",
    title: "PrincipleLine",
    annotation: {
      length: 600,
      ports: [
        {
          id: "Center",
          offset: {
            x: 0.5,
            y: 0.5,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "Left",
          offset: {
            x: 0,
            y: 0.5,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "Right",
          offset: {
            x: 1,
            y: 0.5,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
      ],
      style: {},
    },
    menuId: "edit",
    toolTip: "Principle of Operation Line",
    type: "HorizontalLine",
  },
  {
    id: "note",
    title: "Note",
    annotation: "My Note",
    toolTip: "Represent a Note",
    menuId: "edit",
    type: "Note",
  },
  {
    id: "nodeOthers",
    title: "Node",
    annotation: {
      content: [
        {
          content: "1",
        },
      ],
      radius: 15,
      fill: "White",
    },
    menuId: "edit",
    toolTip: "Represent a Node",
    type: "Circle",
  },
  {
    id: "callOut",
    title: "Callout",
    annotation: "My Text",
    menuId: "edit",
    toolTip: "Represent a Callout",
    type: "Callout",
  },
  {
    id: "nodeTableComm",
    title: "Node Table",
    annotation: {
      content: ["Node Number", "Information", "1", ""],
      columnNo: 2,
    },
    menuId: "edit",
    toolTip: "Represents a Table of Node",
    type: "Table",
  },
  {
    id: "statement",
    title: "Statement",
    annotation: "Statement",
    toolTip: "Identify a Statement",
    menuId: "edit",
    type: "Text",
  },
  {
    id: "numberIdentification",
    title: "Number Identification",
    annotation: "#1",
    toolTip: "Use to Identify Entity",
    menuId: "edit",
    type: "Text",
  },
  {
    id: "entityInclusionLineHorizontal",
    title: "Entity Inclusion Line Horizontal",
    annotation: {
      length: 600,
      ports: [
        {
          id: "Center",
          offset: {
            x: 0.5,
            y: 0.5,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "Left",
          offset: {
            x: 0,
            y: 0.5,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "Right",
          offset: {
            x: 1,
            y: 0.5,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
      ],
      style: {},
    },
    toolTip: "Entity has Entities",
    menuId: "edit",
    type: "HorizontalLine",
  },
  {
    id: "entityInclusionLineVertical",
    title: "Entity Inclusion Line Vertical",
    annotation: {
      length: 600,
      ports: [
        {
          id: "Center",
          offset: {
            x: 0.5,
            y: 0.5,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "Top",
          offset: {
            x: 0.5,
            y: 0,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "Right",
          offset: {
            x: 0.5,
            y: 1,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
      ],
      style: {},
    },
    menuId: "edit",
    toolTip: "Entity has Entities",
    type: "VerticalLine",
  },
  {
    id: "changeofApplication",
    title: "Change of Application",
    annotation: {
      content: [
        "Communication",
        "",
        "Application Value",
        "",
        "Communication Function",
        "",
      ],
      columnNo: 3,
    },
    menuId: "edit",
    toolTip: "Communication change Application Tablulated Form",
    type: "Table",
  },
  {
    id: "changeofApplication1",
    title: "Change of Application",
    annotation: [
      {
        content: "Communication",
        offset: {x: 0.5, y: 1},
        margin: {top: 10},
      },
      {
        content: "Application",
        offset: {x: 0, y: 0.5},
        margin: {right: 10},
      },
    ],
    menuId: "edit",
    toolTip: "Communication Change Application Graphical Form",
    type: "Graph",
  },
  {
    id: "graphLine",
    title: "Graph Line",
    annotation: {
      type: "Straight",
      shape: {},
    },
    menuId: "edit",
    toolTip: "Use to Draw Graph",
    type: "Arrow",
  },
  {
    id: "graphPoint",
    title: "Graph Point",
    annotation: {
      fill: "black",
      radius: 5,
      isPoint: true,
    },
    menuId: "edit",
    toolTip: "Use to Draw Graph",
    type: "Circle",
  },
  {
    id: "graphLineAndPoint",
    title: "Graph Line and Point",
    annotation: {
      fill: "black",
      shape: {
        target: "Circle",
      },
    },
    menuId: "edit",
    toolTip: "Use to Draw Graph",
    type: "Arrow",
  },
  {
    id: "xAxis",
    title: "X-Axis",
    annotation: {
      length: 600,
      content: [
        {
          content: "X-Axis",
          offset: {x: 0.5, y: 1},
          margin: {top: 15},
        },
      ],
      style: {},
    },
    menuId: "edit",
    toolTip: "Use to Graph",
    type: "HorizontalLine",
  },
  {
    id: "yAxis",
    title: "Y-Axis",
    annotation: {
      length: 600,
      content: [
        {
          content: "X-Axis",
          offset: {x: 0, y: 0.5},
          margin: {right: 15},
        },
      ],
      style: {},
    },
    menuId: "edit",
    toolTip: "Use to Graph",
    type: "VerticalLine",
  },
];

export const applicationRects = [
  {
    id: "application",
    title: "Application",
    annotation: "Application",
    menuId: "application",
    toolTip: "Represents an Actual Application",
  },
  {
    id: "communicationFunction",
    title: "Communication Function",
    annotation: "Communication Function",
    menuId: "commFunction",
    toolTip: "Function of Our Communication",
  },
  {
    id: "communicationResult",
    title: "Communication Result",
    annotation: "Communication Result",
    menuId: "commResult",
    toolTip: "Result of an Application",
  },
  {
    id: "communicationFunction1",
    title: "Communication Function",
    annotation: "Communication Function",
    toolTip: "Represent Communication Function",
    type: "Text",
  },
  {
    id: "commAppMixture",
    title: "Comm App Mixture",
    annotation: {
      fill: "white",
      radius: 35,
      content: [
        {
          content: "Comm & App Mixture",
        },
      ],
      ports: rectPorts,
    },
    menuId: "empty",
    toolTip: "Communication Application Mixture",
    type: "Circle",
  },
  {
    id: "commAppMixture1",
    title: "Comm App Mixture",
    annotation: {
      content: [
        {
          content: "Communication Application Mixture",
        },
      ],
      height: 80,
      width: 80,
    },
    menuId: "commMix",
    toolTip: "Multi Inputs Comm & App Mixture",
  },
  {
    id: "communicationFunctionGrouped",
    title: "Communication Function",
    annotation: [
      "Communication Function",
      "Communication Function",
      "Communication Function",
    ],
    menuId: "entity",
    toolTip: "What We Do as Entity",
    type: "CommunicationGrouped",
  },
  {
    id: "whatWeDo",
    title: "What We Do",
    annotation: ["Communication", "Application", "What We Do"],
    menuId: "entity",
    toolTip: "What We Do as Entity",
    type: "WhatWeDo",
  },
  {
    id: "whatWeDo1",
    title: "What We Do",
    annotation: "What We Do",
    toolTip: "Represent Things That We Do",
    menuId: "entity",
    type: "DualBox",
  },
  {
    id: "action",
    title: "Action",
    annotation: "Action",
    menuId: "action",
    toolTip: "An Action That We Take",
  },
  {
    id: "reason",
    title: "Reason",
    annotation: "Reason",
    menuId: "reason",
    toolTip: "Reason For an Action",
  },
  {
    id: "work1234",
    title: "Work",
    annotation: "Work",
    menuId: "work",
    toolTip: "Work That we Do",
  },
  {
    id: "application1",
    title: "Application",
    annotation: "application",
    toolTip: "Represent Application",
    type: "Text",
  },
  {
    id: "emptycontainer",
    title: "Empty Container",
    toolTip: "A Container to Add Part to",
    menuId: "emptyContainer",
    type: "emptycontainer",
  },
  {
    id: "work",
    title: "Work",
    annotation: {
      fill: "white",
      radius: 40,
      content: [
        {
          content: "Work",
        },
      ],
      ports: rectPorts,
    },
    menuId: "workinput",
    toolTip: "People Work Together",
    type: "Circle",
  },
  {
    id: "subFunction",
    title: "Sub Function",
    annotation: "Sub Communication Function",
    menuId: "subFunction",
    toolTip: "Function Inside Function",
    type: "Sub",
  },
  {
    id: "subApplication",
    title: "Sub Application",
    annotation: "Sub Application",
    menuId: "subApplication",
    toolTip: "Application Inside Application",
    type: "Sub",
  },
  {
    id: "subResult",
    title: "Sub Result",
    annotation: "Sub Result",
    menuId: "subResult",
    toolTip: "Result Inside Result",
    type: "Sub",
  },
  {
    id: "groupFunction",
    title: "Group Function",
    annotation: "Group Communication Function",
    menuId: "groupFunction",
    toolTip: "Group Communication Function",
    type: "Group",
  },
  {
    id: "groupApplication",
    title: "Group Application",
    annotation: "Group Application",
    menuId: "groupApplication",
    toolTip: "Denote Group of Application",
    type: "Group",
  },
  {
    id: "groupResult",
    title: "Group Result",
    annotation: "Group Communication Result",
    menuId: "groupResult",
    toolTip: "Group Communication Result",
    type: "Group",
  },
  {
    id: "group1",
    title: "Group",
    annotation: {
      content: [
        {
          content: "Group",
        },
      ],
      ports: [
        {
          id: "left-1",
          offset: {x: 0, y: 0.25},
          visibility: PortVisibility.Visible,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "left-2",
          offset: {x: 0, y: 0.75},
          visibility: PortVisibility.Visible,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "right",
          offset: {x: 1, y: 0.5},
          visibility: PortVisibility.Visible,
          shape: "X",
          width: 4,
          height: 4,
        },
      ],
      height: 75,
      width: 50,
    },
    menuId: "commMix",
    toolTip: "Use to Group or Add Entities",
  },
  {
    id: "continuityApplication",
    title: "Continuity",
    annotation: {
      strokeWidth: 1,
      strokeDashArray: "10 5",
    },
    menuId: "empty",
    toolTip: "Show Continuity of Entity",
    type: "Continuity",
  },
  {
    id: "a",
    title: "A",
    annotation: "A",
    menuId: "application",
    toolTip: "Represents an Actual Application",
  },
  {
    id: "a1",
    title: "A",
    annotation: "A",
    toolTip: "Represent Application",
    menuId: "empty",
    type: "Text",
  },
  {
    id: "functionx",
    title: "f(x)",
    annotation: "f(x)",
    menuId: "functionx",
    toolTip: "Function of Our Communication",
  },
  {
    id: "functionx1",
    title: "f(x)",
    annotation: "f(x)",
    toolTip: "Represent Communication Function",
    menuId: "empty",
    type: "Text",
  },
  {
    id: "function0",
    title: "f()",
    annotation: "f()",
    menuId: "functionx",
    toolTip: "Function of Our Communication",
  },
  {
    id: "communicationFunction12",
    title: "Communication Function",
    annotation: "communication function",
    toolTip: "Represent Communication Function",
    menuId: "empty",
    type: "Text",
  },
];

export const analysisData = [
  {
    id: "principle",
    title: "Principle",
    annotation: "Principle",
    menuId: "principle",
    toolTip: "Represent Actual Principle",
  },
  {
    id: "parentPrinciple",
    title: "Parent Principle",
    annotation: "Principle",
    menuId: "principle",
    toolTip: "Represent Parent Principle",
  },
  {
    id: "referencerect",
    title: "Reference",
    annotation: "Reference",
    menuId: "reference",
    toolTip: "Represent an Actual Reference",
  },
  {
    id: "sentenceAnalysis",
    title: "Sentence Analysis",
    annotation: "Sentence Analysis",
    menuId: "sentenceAnalysis",
    toolTip: "Represent Sentence Analysis",
  },
  {
    id: "analysis",
    title: "Analysis",
    annotation: "Analysis",
    menuId: "sentenceAnalysis",
    toolTip: "Represent Actual Analysis",
  },
  {
    id: "feedback",
    title: "Feedback",
    annotation: "Feedback",
    menuId: "feedback",
    toolTip: "Represent a Feedback",
  },
  {
    id: "operatingPrinciple",
    title: "Operating Principle",
    annotation: "Principle",
    menuId: "operatingPrinciple",
    toolTip: "Represent Actual Principle",
  },
  {
    id: "error",
    title: "Error",
    annotation: "Error",
    menuId: "error",
    toolTip: "Represent an Actual Error",
  },
  {
    id: "compensator",
    title: "Compensator",
    annotation: "Compensator",
    menuId: "compensator",
    toolTip: "Represent an Actual Compensator",
  },
  {
    id: "problem",
    title: "Problem",
    annotation: "Problem",
    menuId: "problem",
    toolTip: "Represent an Actual Problem",
  },
  {
    id: "problemStatement",
    title: "Problem Statement",
    annotation: "Problem Statement",
    menuId: "problemStatement",
    toolTip: "Problem Statement as Entity",
  },
  {
    id: "principle1",
    title: "Principle",
    annotation: "Main Set of Principles",
    menuId: "mainSetofPrinciple",
    toolTip: "Represent a Main Set of Principles",
  },
  {
    id: "principle2",
    title: "Principle",
    annotation: "Sub Set of Principles",
    menuId: "subSetofPrinciple",
    toolTip: "Represent a Subset of Principles",
  },
  {
    id: "analysisWindow",
    title: "Analysis Window",
    annotation: "Analysis Window",
    menuId: "analysisWindow",
    toolTip: "Represents an Actual Analysis",
  },
  {
    id: "edfDiamond",
    title: "Error Correction Function",
    annotation: "Error Correction Function",
    toolTip: "The Error Correction Function",
    menuId: "empty",
    type: "ECF",
  },
  {
    id: "ecfRect",
    title: "Error Correction Function",
    annotation: "Error Correction Function",
    menuId: "empty",
    toolTip: "Enable Error Correction",
  },
  {
    id: "problemDevelopment",
    title: "Problem Development",
    annotation: {
      content: [
        {
          content: "Problem Name Development",
          offset: {
            x: 0.5,
            y: 1,
          },
          margin: {
            top: 30,
          },
        },
      ],
      radius: 150,
      fill: "White",
    },
    toolTip: "Problem Development From Error",
    menuId: "problemDevelopment",
    type: "Circle",
  },
  {
    id: "principleAspect",
    title: "Principle Aspect",
    annotation: "Principle Aspect",
    menuId: "principleAspect",
    toolTip: "Identify Aspect of a Principle",
  },
  {
    id: "redcrossanalysis",
    title: "Red Cross",
    toolTip: "Use to Cross Out Entity",
    menuId: "empty",
    type: "redcross",
  },
  {
    id: "solutionanalysis",
    title: "Solution",
    annotation: "Analysis",
    menuId: "solution",
    toolTip: "Represent an Actual Solution",
  },
  {
    id: "group4",
    title: "Group",
    annotation: {
      content: [
        {
          content: "Group",
        },
      ],
      ports: [
        {
          id: "left-1",
          offset: {x: 0, y: 0.25},
          visibility: PortVisibility.Visible,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "left-2",
          offset: {x: 0, y: 0.75},
          visibility: PortVisibility.Visible,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "right",
          offset: {x: 1, y: 0.5},
          visibility: PortVisibility.Visible,
          shape: "X",
          width: 4,
          height: 4,
        },
      ],
      height: 75,
      width: 50,
    },
    menuId: "commMix",
    toolTip: "Use to Group or Add Entities",
  },
  {
    id: "continuity4",
    title: "Continuity",
    annotation: {
      strokeWidth: 1,
      strokeDashArray: "10 5",
    },
    menuId: "empty",
    toolTip: "Show Continuity of Entity",
    type: "Continuity",
  },
  {
    id: "analyses",
    title: "Analyses",
    annotation: "Analyses",
    menuId: "sentenceAnalysis",
    toolTip: "Represents a Group of Analysis",
    type: "Overlap",
  },
  {
    id: "errors",
    title: "Errors",
    annotation: "Errors",
    menuId: "error",
    toolTip: "Represent a Group of Error",
    type: "Overlap",
  },
  {
    id: "problems",
    title: "Problems",
    annotation: "Problems",
    menuId: "problem",
    toolTip: "Represents a Group of Problem",
    type: "Overlap",
  },
  {
    id: "feedbacks",
    title: "Feedbacks",
    annotation: "Feedbacks",
    menuId: "feedback",
    toolTip: "Represents a Group of Feedback",
    type: "Overlap",
  },
  {
    id: "compensators",
    title: "Compensators",
    annotation: "Compenstors",
    menuId: "compensator",
    toolTip: "Represent a Group of Feedback",
    type: "Overlap",
  },
  {
    id: "solutionsanalysis",
    title: "Solutions",
    annotation: "Solutions",
    menuId: "solution",
    toolTip: "Represent a Group of Solutions",
    type: "Overlap",
  },
];

export function randomId() {
  return (Math.random() + 1).toString(36).substring(7);
}

export function camelize(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "")
    .replace(/[^\w\s]/gi, "");
}

export function getTypeAddPartToApplication(id) {
  const listIdGroupSub = [
    "applicationaddsubtoapplication",
    "commfunctionaddpartoffunction",
    "commresultaddsubapplicationresult",
  ];
  if (listIdGroupSub.includes(id)) {
    return "groupApplicationSub";
  }
  return "groupApplicationPart";
}

export function getAnnotationAddPartToApplication(id) {
  if (
    id === "applicationaddsubtoapplication" ||
    id === "functionxaddsubfunction"
  ) {
    return ["Sub Application 1", "Application"];
  }
  if (id === "commfunctionaddpartoffunction") {
    return ["Function 1", "Communication Function"];
  }
  if (id === "commresultaddparttoresult") {
    return ["Part1", "Communication Result"];
  }
  if (id === "commresultaddsubapplicationresult") {
    return ["Sub Application 1", "Communication Result"];
  }
  return ["Part1", "Application"];
}

// export function getItemById(id) {
//   let shape = allShapes.find((x) => x.id === id);
//   if (shape !== undefined) {
//     return shape;
//   }
// }

// let persons = personData.map((shape) => drawShape(shape as any));
// let communication = communicationData.map((shape) => drawShape(shape as any));
// let application = applicationRects.map((shape) => drawShape(shape as asny))
// let commLink = personData.map((shape) => drawShape(shape as any));;
// let analysis = analysisData.map((item) => drawShape(item as any));;
// let commSignal = getCommSignal();
// let area = getCommAreAndLocation();
// let others = getCommOthers();
// let commlabel = getCommLabel();
// let quickComm = getQuickComm();
// let system = getThoerySystem();
// let thoery = getTheory();
// let fundamental = getThoeryFundamental();
// let interface = getTheoryInterface();
// let theorySignal = getTheorySignal();
// let instrument = getTheoryInstrument();
// let functions = getTheoryFunction();
// let stability = getTheoryStability();
// let thoerylabel = getTheoryLabel();

// const allShapes = []
//   .concat(persons)
//   .concat(communication)
//   .concat(application)
//   .concat(commLink)
//   .concat(analysis)
//   .concat(commSignal)
//   .concat(area)
//   .concat(others)
//   .concat(commlabel)
//   .concat(system)
//   .concat(thoery)
//   .concat(fundamental)
//   .concat(interface)
//   .concat(theorySignal)
//   .concat(instrument)
//   .concat(functions)
//   .concat(stability)
//   .concat(thoerylabel)
//   // .concat(getEquations('commPalette'))
//   // .concat(getEquations('theoryPalette'));

export const everyShape = [
  {
    id: "person",
    addInfo: [
      {
        title: "Person",
        toolTip: "A Person Without Title",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)"><rect vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" x="0" y="0" height="27" width="12"/><circle vector-effect="non-scaling-stroke" cx="6" cy="6" r="5" fill="transparent" stroke="black" stroke-width="1" /><circle vector-effect="non-scaling-stroke" cx="4.0" cy="4.5" r="1" fill="black" /><circle vector-effect="non-scaling-stroke" cx="8.0" cy="4.5" r="1.0" fill="black" /><ellipse vector-effect="non-scaling-stroke" cx="6.0" cy="9.0" rx="2.0" ry="0.75" fill="transparent" stroke="black" stroke-width="1"/><path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 6 11 L 6 16 L 1 26 M 6 16 L 11 26 M 1 13.5 L 11 13.5"/></g>',
    },
    height: 80,
    width: 35.556,
    annotations: [
      {
        content: "Person Name",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 15,
        },
        style: {
          textWrapping: "NoWrap",
        },
      },
      {
        content: "No Title",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 30,
        },
        style: {
          textWrapping: "NoWrap",
        },
      },
    ],
    style: {
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftCenter",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "LeftTop",
        offset: {
          x: 0,
          y: 0.25,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "LeftBottom",
        offset: {
          x: 0,
          y: 0.75,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "Bottom",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightCenter",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightTop",
        offset: {
          x: 1,
          y: 0.25,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightBottom",
        offset: {
          x: 1,
          y: 0.75,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "Top",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
  },
  {
    id: "employee",
    addInfo: [
      {
        title: "Employeee",
        toolTip: "A Person as Employee",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)"><rect vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" x="0" y="0" height="27" width="12"/><circle vector-effect="non-scaling-stroke" cx="6" cy="6" r="5" fill="transparent" stroke="black" stroke-width="1" /><circle vector-effect="non-scaling-stroke" cx="4.0" cy="4.5" r="1" fill="black" /><circle vector-effect="non-scaling-stroke" cx="8.0" cy="4.5" r="1.0" fill="black" /><ellipse vector-effect="non-scaling-stroke" cx="6.0" cy="9.0" rx="2.0" ry="0.75" fill="transparent" stroke="black" stroke-width="1"/><path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 6 11 L 6 16 L 1 26 M 6 16 L 11 26 M 1 13.5 L 11 13.5"/></g>',
    },
    height: 80,
    width: 35.556,
    annotations: [
      {
        content: "Person Name",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 15,
        },
        style: {
          textWrapping: "NoWrap",
        },
      },
      {
        content: "Employee",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 30,
        },
        style: {
          textWrapping: "NoWrap",
        },
      },
    ],
    style: {
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftCenter",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "LeftTop",
        offset: {
          x: 0,
          y: 0.25,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "LeftBottom",
        offset: {
          x: 0,
          y: 0.75,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "Bottom",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightCenter",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightTop",
        offset: {
          x: 1,
          y: 0.25,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightBottom",
        offset: {
          x: 1,
          y: 0.75,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "Top",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
  },
  {
    id: "manager",
    addInfo: [
      {
        title: "Manager",
        toolTip: "A Person as Manager",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)"><rect vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" x="0" y="0" height="27" width="12"/><circle vector-effect="non-scaling-stroke" cx="6" cy="6" r="5" fill="transparent" stroke="black" stroke-width="1" /><circle vector-effect="non-scaling-stroke" cx="4.0" cy="4.5" r="1" fill="black" /><circle vector-effect="non-scaling-stroke" cx="8.0" cy="4.5" r="1.0" fill="black" /><ellipse vector-effect="non-scaling-stroke" cx="6.0" cy="9.0" rx="2.0" ry="0.75" fill="transparent" stroke="black" stroke-width="1"/><path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 6 11 L 6 16 L 1 26 M 6 16 L 11 26 M 1 13.5 L 11 13.5"/></g>',
    },
    height: 80,
    width: 35.556,
    annotations: [
      {
        content: "Person Name",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 15,
        },
        style: {
          textWrapping: "NoWrap",
        },
      },
      {
        content: "Manager",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 30,
        },
        style: {
          textWrapping: "NoWrap",
        },
      },
    ],
    style: {
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftCenter",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "LeftTop",
        offset: {
          x: 0,
          y: 0.25,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "LeftBottom",
        offset: {
          x: 0,
          y: 0.75,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "Bottom",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightCenter",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightTop",
        offset: {
          x: 1,
          y: 0.25,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightBottom",
        offset: {
          x: 1,
          y: 0.75,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "Top",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
  },
  {
    id: "teamLead",
    addInfo: [
      {
        title: "Team Lead",
        toolTip: "A Person as Team Lead",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)"><rect vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" x="0" y="0" height="27" width="12"/><circle vector-effect="non-scaling-stroke" cx="6" cy="6" r="5" fill="transparent" stroke="black" stroke-width="1" /><circle vector-effect="non-scaling-stroke" cx="4.0" cy="4.5" r="1" fill="black" /><circle vector-effect="non-scaling-stroke" cx="8.0" cy="4.5" r="1.0" fill="black" /><ellipse vector-effect="non-scaling-stroke" cx="6.0" cy="9.0" rx="2.0" ry="0.75" fill="transparent" stroke="black" stroke-width="1"/><path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 6 11 L 6 16 L 1 26 M 6 16 L 11 26 M 1 13.5 L 11 13.5"/></g>',
    },
    height: 80,
    width: 35.556,
    annotations: [
      {
        content: "Person Name",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 15,
        },
        style: {
          textWrapping: "NoWrap",
        },
      },
      {
        content: "Team Lead",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 30,
        },
        style: {
          textWrapping: "NoWrap",
        },
      },
    ],
    style: {
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftCenter",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "LeftTop",
        offset: {
          x: 0,
          y: 0.25,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "LeftBottom",
        offset: {
          x: 0,
          y: 0.75,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "Bottom",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightCenter",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightTop",
        offset: {
          x: 1,
          y: 0.25,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightBottom",
        offset: {
          x: 1,
          y: 0.75,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "Top",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
  },
  {
    id: "customer",
    addInfo: [
      {
        title: "Customer",
        toolTip: "A Person as Customer",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)"><rect vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" x="0" y="0" height="27" width="12"/><circle vector-effect="non-scaling-stroke" cx="6" cy="6" r="5" fill="transparent" stroke="black" stroke-width="1" /><circle vector-effect="non-scaling-stroke" cx="4.0" cy="4.5" r="1" fill="black" /><circle vector-effect="non-scaling-stroke" cx="8.0" cy="4.5" r="1.0" fill="black" /><ellipse vector-effect="non-scaling-stroke" cx="6.0" cy="9.0" rx="2.0" ry="0.75" fill="transparent" stroke="black" stroke-width="1"/><path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 6 11 L 6 16 L 1 26 M 6 16 L 11 26 M 1 13.5 L 11 13.5"/></g>',
    },
    height: 80,
    width: 35.556,
    annotations: [
      {
        content: "Person Name",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 15,
        },
        style: {
          textWrapping: "NoWrap",
        },
      },
      {
        content: "Customer",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 30,
        },
        style: {
          textWrapping: "NoWrap",
        },
      },
    ],
    style: {
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftCenter",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "LeftTop",
        offset: {
          x: 0,
          y: 0.25,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "LeftBottom",
        offset: {
          x: 0,
          y: 0.75,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "Bottom",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightCenter",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightTop",
        offset: {
          x: 1,
          y: 0.25,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightBottom",
        offset: {
          x: 1,
          y: 0.75,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "Top",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
  },
  {
    id: "client",
    addInfo: [
      {
        title: "Client",
        toolTip: "A Person as Client",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)"><rect vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" x="0" y="0" height="27" width="12"/><circle vector-effect="non-scaling-stroke" cx="6" cy="6" r="5" fill="transparent" stroke="black" stroke-width="1" /><circle vector-effect="non-scaling-stroke" cx="4.0" cy="4.5" r="1" fill="black" /><circle vector-effect="non-scaling-stroke" cx="8.0" cy="4.5" r="1.0" fill="black" /><ellipse vector-effect="non-scaling-stroke" cx="6.0" cy="9.0" rx="2.0" ry="0.75" fill="transparent" stroke="black" stroke-width="1"/><path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 6 11 L 6 16 L 1 26 M 6 16 L 11 26 M 1 13.5 L 11 13.5"/></g>',
    },
    height: 80,
    width: 35.556,
    annotations: [
      {
        content: "Person Name",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 15,
        },
        style: {
          textWrapping: "NoWrap",
        },
      },
      {
        content: "Client",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 30,
        },
        style: {
          textWrapping: "NoWrap",
        },
      },
    ],
    style: {
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftCenter",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "LeftTop",
        offset: {
          x: 0,
          y: 0.25,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "LeftBottom",
        offset: {
          x: 0,
          y: 0.75,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "Bottom",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightCenter",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightTop",
        offset: {
          x: 1,
          y: 0.25,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightBottom",
        offset: {
          x: 1,
          y: 0.75,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "Top",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
  },
  {
    id: "contractor",
    addInfo: [
      {
        title: "Contractor",
        toolTip: "A Person as Contractor",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)"><rect vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" x="0" y="0" height="27" width="12"/><circle vector-effect="non-scaling-stroke" cx="6" cy="6" r="5" fill="transparent" stroke="black" stroke-width="1" /><circle vector-effect="non-scaling-stroke" cx="4.0" cy="4.5" r="1" fill="black" /><circle vector-effect="non-scaling-stroke" cx="8.0" cy="4.5" r="1.0" fill="black" /><ellipse vector-effect="non-scaling-stroke" cx="6.0" cy="9.0" rx="2.0" ry="0.75" fill="transparent" stroke="black" stroke-width="1"/><path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 6 11 L 6 16 L 1 26 M 6 16 L 11 26 M 1 13.5 L 11 13.5"/></g>',
    },
    height: 80,
    width: 35.556,
    annotations: [
      {
        content: "Person Name",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 15,
        },
        style: {
          textWrapping: "NoWrap",
        },
      },
      {
        content: "Conractor",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 30,
        },
        style: {
          textWrapping: "NoWrap",
        },
      },
    ],
    style: {
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftCenter",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "LeftTop",
        offset: {
          x: 0,
          y: 0.25,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "LeftBottom",
        offset: {
          x: 0,
          y: 0.75,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "Bottom",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightCenter",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightTop",
        offset: {
          x: 1,
          y: 0.25,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightBottom",
        offset: {
          x: 1,
          y: 0.75,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "Top",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
  },
  {
    id: "salePerson",
    addInfo: [
      {
        title: "Sale Person",
        toolTip: "A Person as Sale Rep",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)"><rect vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" x="0" y="0" height="27" width="12"/><circle vector-effect="non-scaling-stroke" cx="6" cy="6" r="5" fill="transparent" stroke="black" stroke-width="1" /><circle vector-effect="non-scaling-stroke" cx="4.0" cy="4.5" r="1" fill="black" /><circle vector-effect="non-scaling-stroke" cx="8.0" cy="4.5" r="1.0" fill="black" /><ellipse vector-effect="non-scaling-stroke" cx="6.0" cy="9.0" rx="2.0" ry="0.75" fill="transparent" stroke="black" stroke-width="1"/><path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 6 11 L 6 16 L 1 26 M 6 16 L 11 26 M 1 13.5 L 11 13.5"/></g>',
    },
    height: 80,
    width: 35.556,
    annotations: [
      {
        content: "Person Name",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 15,
        },
        style: {
          textWrapping: "NoWrap",
        },
      },
      {
        content: "Sale Rep",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 30,
        },
        style: {
          textWrapping: "NoWrap",
        },
      },
    ],
    style: {
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftCenter",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "LeftTop",
        offset: {
          x: 0,
          y: 0.25,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "LeftBottom",
        offset: {
          x: 0,
          y: 0.75,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "Bottom",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightCenter",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightTop",
        offset: {
          x: 1,
          y: 0.25,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightBottom",
        offset: {
          x: 1,
          y: 0.75,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "Top",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
  },
  {
    id: "servicePerson",
    addInfo: [
      {
        title: "Service Person",
        toolTip: "A Person as Service Rep",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)"><rect vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" x="0" y="0" height="27" width="12"/><circle vector-effect="non-scaling-stroke" cx="6" cy="6" r="5" fill="transparent" stroke="black" stroke-width="1" /><circle vector-effect="non-scaling-stroke" cx="4.0" cy="4.5" r="1" fill="black" /><circle vector-effect="non-scaling-stroke" cx="8.0" cy="4.5" r="1.0" fill="black" /><ellipse vector-effect="non-scaling-stroke" cx="6.0" cy="9.0" rx="2.0" ry="0.75" fill="transparent" stroke="black" stroke-width="1"/><path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 6 11 L 6 16 L 1 26 M 6 16 L 11 26 M 1 13.5 L 11 13.5"/></g>',
    },
    height: 80,
    width: 35.556,
    annotations: [
      {
        content: "Person Name",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 15,
        },
        style: {
          textWrapping: "NoWrap",
        },
      },
      {
        content: "Service Rep",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 30,
        },
        style: {
          textWrapping: "NoWrap",
        },
      },
    ],
    style: {
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftCenter",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "LeftTop",
        offset: {
          x: 0,
          y: 0.25,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "LeftBottom",
        offset: {
          x: 0,
          y: 0.75,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "Bottom",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightCenter",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightTop",
        offset: {
          x: 1,
          y: 0.25,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightBottom",
        offset: {
          x: 1,
          y: 0.75,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "Top",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
  },
  {
    id: "supportPerson",
    addInfo: [
      {
        title: "Support Person",
        toolTip: "A Person as Service Rep",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)"><rect vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" x="0" y="0" height="27" width="12"/><circle vector-effect="non-scaling-stroke" cx="6" cy="6" r="5" fill="transparent" stroke="black" stroke-width="1" /><circle vector-effect="non-scaling-stroke" cx="4.0" cy="4.5" r="1" fill="black" /><circle vector-effect="non-scaling-stroke" cx="8.0" cy="4.5" r="1.0" fill="black" /><ellipse vector-effect="non-scaling-stroke" cx="6.0" cy="9.0" rx="2.0" ry="0.75" fill="transparent" stroke="black" stroke-width="1"/><path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 6 11 L 6 16 L 1 26 M 6 16 L 11 26 M 1 13.5 L 11 13.5"/></g>',
    },
    height: 80,
    width: 35.556,
    annotations: [
      {
        content: "Person Name",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 15,
        },
        style: {
          textWrapping: "NoWrap",
        },
      },
      {
        content: "Support Rep",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 30,
        },
        style: {
          textWrapping: "NoWrap",
        },
      },
    ],
    style: {
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftCenter",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "LeftTop",
        offset: {
          x: 0,
          y: 0.25,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "LeftBottom",
        offset: {
          x: 0,
          y: 0.75,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "Bottom",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightCenter",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightTop",
        offset: {
          x: 1,
          y: 0.25,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightBottom",
        offset: {
          x: 1,
          y: 0.75,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "Top",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
  },
  {
    id: "testPerson",
    addInfo: [
      {
        title: "Test Person",
        toolTip: "A Person Who Conducts Test",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)"><rect vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" x="0" y="0" height="27" width="12"/><circle vector-effect="non-scaling-stroke" cx="6" cy="6" r="5" fill="transparent" stroke="black" stroke-width="1" /><circle vector-effect="non-scaling-stroke" cx="4.0" cy="4.5" r="1" fill="black" /><circle vector-effect="non-scaling-stroke" cx="8.0" cy="4.5" r="1.0" fill="black" /><ellipse vector-effect="non-scaling-stroke" cx="6.0" cy="9.0" rx="2.0" ry="0.75" fill="transparent" stroke="black" stroke-width="1"/><path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 6 11 L 6 16 L 1 26 M 6 16 L 11 26 M 1 13.5 L 11 13.5"/></g>',
    },
    height: 80,
    width: 35.556,
    annotations: [
      {
        content: "Person Name",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 15,
        },
        style: {
          textWrapping: "NoWrap",
        },
      },
      {
        content: "Test Person",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 30,
        },
        style: {
          textWrapping: "NoWrap",
        },
      },
    ],
    style: {
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftCenter",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "LeftTop",
        offset: {
          x: 0,
          y: 0.25,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "LeftBottom",
        offset: {
          x: 0,
          y: 0.75,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "Bottom",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightCenter",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightTop",
        offset: {
          x: 1,
          y: 0.25,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightBottom",
        offset: {
          x: 1,
          y: 0.75,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "Top",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
  },
  {
    id: "inspector",
    addInfo: [
      {
        title: "Inspector",
        toolTip: "A Person as Inspector",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)"><rect vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" x="0" y="0" height="27" width="12"/><circle vector-effect="non-scaling-stroke" cx="6" cy="6" r="5" fill="transparent" stroke="black" stroke-width="1" /><circle vector-effect="non-scaling-stroke" cx="4.0" cy="4.5" r="1" fill="black" /><circle vector-effect="non-scaling-stroke" cx="8.0" cy="4.5" r="1.0" fill="black" /><ellipse vector-effect="non-scaling-stroke" cx="6.0" cy="9.0" rx="2.0" ry="0.75" fill="transparent" stroke="black" stroke-width="1"/><path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 6 11 L 6 16 L 1 26 M 6 16 L 11 26 M 1 13.5 L 11 13.5"/></g>',
    },
    height: 80,
    width: 35.556,
    annotations: [
      {
        content: "Person Name",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 15,
        },
        style: {
          textWrapping: "NoWrap",
        },
      },
      {
        content: "Inspector",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 30,
        },
        style: {
          textWrapping: "NoWrap",
        },
      },
    ],
    style: {
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftCenter",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "LeftTop",
        offset: {
          x: 0,
          y: 0.25,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "LeftBottom",
        offset: {
          x: 0,
          y: 0.75,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "Bottom",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightCenter",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightTop",
        offset: {
          x: 1,
          y: 0.25,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightBottom",
        offset: {
          x: 1,
          y: 0.75,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "Top",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
  },
  {
    id: "agent",
    addInfo: [
      {
        title: "Agent",
        toolTip: "A Person as Agent",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)"><rect vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" x="0" y="0" height="27" width="12"/><circle vector-effect="non-scaling-stroke" cx="6" cy="6" r="5" fill="transparent" stroke="black" stroke-width="1" /><circle vector-effect="non-scaling-stroke" cx="4.0" cy="4.5" r="1" fill="black" /><circle vector-effect="non-scaling-stroke" cx="8.0" cy="4.5" r="1.0" fill="black" /><ellipse vector-effect="non-scaling-stroke" cx="6.0" cy="9.0" rx="2.0" ry="0.75" fill="transparent" stroke="black" stroke-width="1"/><path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 6 11 L 6 16 L 1 26 M 6 16 L 11 26 M 1 13.5 L 11 13.5"/></g>',
    },
    height: 80,
    width: 35.556,
    annotations: [
      {
        content: "Person Name",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 15,
        },
        style: {
          textWrapping: "NoWrap",
        },
      },
      {
        content: "Agent",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 30,
        },
        style: {
          textWrapping: "NoWrap",
        },
      },
    ],
    style: {
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftCenter",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "LeftTop",
        offset: {
          x: 0,
          y: 0.25,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "LeftBottom",
        offset: {
          x: 0,
          y: 0.75,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "Bottom",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightCenter",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightTop",
        offset: {
          x: 1,
          y: 0.25,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightBottom",
        offset: {
          x: 1,
          y: 0.75,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "Top",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
  },
  {
    id: "user",
    addInfo: [
      {
        title: "User",
        toolTip: "A person as a User",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)"><rect vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" x="0" y="0" height="27" width="12"/><circle vector-effect="non-scaling-stroke" cx="6" cy="6" r="5" fill="transparent" stroke="black" stroke-width="1" /><circle vector-effect="non-scaling-stroke" cx="4.0" cy="4.5" r="1" fill="black" /><circle vector-effect="non-scaling-stroke" cx="8.0" cy="4.5" r="1.0" fill="black" /><ellipse vector-effect="non-scaling-stroke" cx="6.0" cy="9.0" rx="2.0" ry="0.75" fill="transparent" stroke="black" stroke-width="1"/><path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 6 11 L 6 16 L 1 26 M 6 16 L 11 26 M 1 13.5 L 11 13.5"/></g>',
    },
    height: 80,
    width: 35.556,
    annotations: [
      {
        content: "Person Name",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 15,
        },
        style: {
          textWrapping: "NoWrap",
        },
      },
      {
        content: "User",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 30,
        },
        style: {
          textWrapping: "NoWrap",
        },
      },
    ],
    style: {
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftCenter",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "LeftTop",
        offset: {
          x: 0,
          y: 0.25,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "LeftBottom",
        offset: {
          x: 0,
          y: 0.75,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "Bottom",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightCenter",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightTop",
        offset: {
          x: 1,
          y: 0.25,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightBottom",
        offset: {
          x: 1,
          y: 0.75,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "Top",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
  },
  {
    id: "other",
    addInfo: [
      {
        title: "Other",
        toolTip: "Other Person Not Listed",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)"><rect vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" x="0" y="0" height="27" width="12"/><circle vector-effect="non-scaling-stroke" cx="6" cy="6" r="5" fill="transparent" stroke="black" stroke-width="1" /><circle vector-effect="non-scaling-stroke" cx="4.0" cy="4.5" r="1" fill="black" /><circle vector-effect="non-scaling-stroke" cx="8.0" cy="4.5" r="1.0" fill="black" /><ellipse vector-effect="non-scaling-stroke" cx="6.0" cy="9.0" rx="2.0" ry="0.75" fill="transparent" stroke="black" stroke-width="1"/><path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 6 11 L 6 16 L 1 26 M 6 16 L 11 26 M 1 13.5 L 11 13.5"/></g>',
    },
    height: 80,
    width: 35.556,
    annotations: [
      {
        content: "Person Name",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 15,
        },
        style: {
          textWrapping: "NoWrap",
        },
      },
      {
        content: "Other Title",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 30,
        },
        style: {
          textWrapping: "NoWrap",
        },
      },
    ],
    style: {
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftCenter",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "LeftTop",
        offset: {
          x: 0,
          y: 0.25,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "LeftBottom",
        offset: {
          x: 0,
          y: 0.75,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "Bottom",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightCenter",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightTop",
        offset: {
          x: 1,
          y: 0.25,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightBottom",
        offset: {
          x: 1,
          y: 0.75,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "Top",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
  },
  {
    id: "personNoframe",
    addInfo: [
      {
        title: "Person",
        toolTip: "Sketched Without Frame",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)"><rect height="25" width="10" fill="transparent" stroke-width="0"/><circle vector-effect="non-scaling-stroke" cx="5" cy="5" r="5" fill="transparent" stroke="black" stroke-width="1" /><circle vector-effect="non-scaling-stroke" cx="3.0" cy="3.5" r="1" fill="black" /><circle vector-effect="non-scaling-stroke" cx="7.0" cy="3.5" r="1" fill="black" /><ellipse vector-effect="non-scaling-stroke" cx="5.0" cy="8.0" rx="2.0" ry="0.75" fill="transparent" stroke="black" stroke-width="1"/><path vector-effect="non-scaling-stroke" fill ="transparent" stroke="black" stroke-width="1" d="M 5 10 L 5 15 L 0 25 M 5 15 L 10 25 M 0 12.5 L 10 12.5"/></g>',
    },
    height: 80,
    width: 35.556,
    annotations: [
      {
        content: "Person Name",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 15,
        },
        style: {
          textWrapping: "NoWrap",
        },
      },
      {
        content: "No Title",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 30,
        },
        style: {
          textWrapping: "NoWrap",
        },
      },
    ],
    style: {
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftCenter",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "LeftTop",
        offset: {
          x: 0,
          y: 0.25,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "LeftBottom",
        offset: {
          x: 0,
          y: 0.75,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "Bottom",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightCenter",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightTop",
        offset: {
          x: 1,
          y: 0.25,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightBottom",
        offset: {
          x: 1,
          y: 0.75,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "Top",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
  },
  {
    id: "personWithNumber",
    addInfo: [
      {
        title: "P[n]",
        toolTip: "Denote Person With Number",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)"><rect height="25" width="10" fill="transparent" stroke-width="0"/><circle vector-effect="non-scaling-stroke" cx="5" cy="5" r="5" fill="transparent" stroke="black" stroke-width="1" /><circle vector-effect="non-scaling-stroke" cx="3.0" cy="3.5" r="1" fill="black" /><circle vector-effect="non-scaling-stroke" cx="7.0" cy="3.5" r="1" fill="black" /><ellipse vector-effect="non-scaling-stroke" cx="5.0" cy="8.0" rx="2.0" ry="0.75" fill="transparent" stroke="black" stroke-width="1"/><path vector-effect="non-scaling-stroke" fill ="transparent" stroke="black" stroke-width="1" d="M 5 10 L 5 15 L 0 25 M 5 15 L 10 25 M 0 12.5 L 10 12.5"/></g>',
    },
    height: 80,
    width: 35.556,
    annotations: [
      {
        content: "Pn",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 15,
        },
        style: {
          textWrapping: "NoWrap",
        },
      },
    ],
    style: {
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftCenter",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "LeftTop",
        offset: {
          x: 0,
          y: 0.25,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "LeftBottom",
        offset: {
          x: 0,
          y: 0.75,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "Bottom",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightCenter",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightTop",
        offset: {
          x: 1,
          y: 0.25,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightBottom",
        offset: {
          x: 1,
          y: 0.75,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "Top",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
  },
  {
    id: "PersonWithNumberAndFrame123",
    addInfo: [
      {
        title: "x[n]",
        toolTip: "Denote Person With Number",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)"><rect vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" x="0" y="0" height="27" width="12"/><circle vector-effect="non-scaling-stroke" cx="6" cy="6" r="5" fill="transparent" stroke="black" stroke-width="1" /><circle vector-effect="non-scaling-stroke" cx="4.0" cy="4.5" r="1" fill="black" /><circle vector-effect="non-scaling-stroke" cx="8.0" cy="4.5" r="1.0" fill="black" /><ellipse vector-effect="non-scaling-stroke" cx="6.0" cy="9.0" rx="2.0" ry="0.75" fill="transparent" stroke="black" stroke-width="1"/><path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 6 11 L 6 16 L 1 26 M 6 16 L 11 26 M 1 13.5 L 11 13.5"/></g>',
    },
    height: 80,
    width: 35.556,
    annotations: [
      {
        content: "Xn",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 15,
        },
        style: {
          textWrapping: "NoWrap",
        },
      },
    ],
    style: {
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftCenter",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "LeftTop",
        offset: {
          x: 0,
          y: 0.25,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "LeftBottom",
        offset: {
          x: 0,
          y: 0.75,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "Bottom",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightCenter",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightTop",
        offset: {
          x: 1,
          y: 0.25,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightBottom",
        offset: {
          x: 1,
          y: 0.75,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "Top",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
  },
  {
    id: "groupOfPeople",
    addInfo: [
      {
        title: "Group of People",
        toolTip: "Represents a Group of People",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)"><rect vector-effect="non-scaling-stroke" height="27" width="36" stroke="black" fill="transparent" stroke-width="1"/><circle vector-effect="non-scaling-stroke" cx="6" cy="6" r="5" fill="transparent" stroke="black" stroke-width="1" /><circle vector-effect="non-scaling-stroke" cx="4.0" cy="4.5" r="1" fill="black" /><circle vector-effect="non-scaling-stroke" cx="8.0" cy="4.5" r="1" fill="black" /><ellipse vector-effect="non-scaling-stroke" cx="6.0" cy="9.0" rx="2.0" ry="0.75" fill="transparent" stroke="black" stroke-width="1"/><path vector-effect="non-scaling-stroke" fill ="transparent" stroke="black" stroke-width="1" d="M 6 11 L 6 16 L 1 26 M 6 16 L 11 26 M 1 13.5 L 11 13.5"/><circle vector-effect="non-scaling-stroke" cx="18" cy="6" r="5" fill="transparent" stroke="black" stroke-width="1" /><circle vector-effect="non-scaling-stroke" cx="16.0" cy="4.5" r="1" fill="black" /><circle vector-effect="non-scaling-stroke" cx="20.0" cy="4.5" r="1" fill="black" /><ellipse vector-effect="non-scaling-stroke" cx="18.0" cy="9.0" rx="2.0" ry="0.75" fill="transparent" stroke="black" stroke-width="1"/><path vector-effect="non-scaling-stroke" fill ="transparent" stroke="black" stroke-width="1" d="M 18 11 L 18 16 L 13 26 M 18 16 L 23 26 M 13 13.5 L 23 13.5"/><circle vector-effect="non-scaling-stroke" fill="black" cx="27" cy="13.5" r="1"/><circle vector-effect="non-scaling-stroke" fill="black" cx="30" cy="13.5" r="1"/><circle vector-effect="non-scaling-stroke" fill="black" cx="33" cy="13.5" r="1"/></g>',
    },
    annotations: [
      {
        content: "Group Name",
        verticalAlignment: "Bottom",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 20,
        },
      },
    ],
    height: 150,
    width: 200,
    style: {
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
  },
  {
    id: "communicationHolder",
    addInfo: [
      {
        title: "Comunication Holder",
        toolTip: "Hold Person Communication",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Communication Holder\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Communication Holder",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "communicationHolder",
    addInfo: [
      {
        title: "Comunication Holder",
        toolTip: "Hold Person Communication",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Communication Holder\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Communication Holder",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "ellipseBasic",
    addInfo: [
      {
        title: "Related",
        toolTip: "Related",
      },
    ],
    shape: {
      type: "Basic",
      shape: "Ellipse",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Related\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Related",
      },
    ],
    width: 100,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "externalCommunicationHolder",
    addInfo: [
      {
        title: "External Communication Holder",
        toolTip: "Hold Person Communication",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                External Communication Holder\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "External Communication Holder",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "communicationMixturePerson1",
    addInfo: [
      {
        title: "Communication Mixture",
        toolTip: "Two Input Communication",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="50" width="50" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="6.25" width="37.5" height="50" visibility="hidden">\n                        <div style="height: 50px" class="flex-container">\n                            <div width="37.5" class="symbol-text-element">\n                                Comm Mix\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Comm Mix",
      },
    ],
    width: 50,
    height: 50,
    ports: [
      {
        id: "top-port",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "right-port",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "bottom-port",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "communicationMixturePerson2",
    addInfo: [
      {
        title: "Communication Mixture",
        toolTip: "Multi Input Communication",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="50" width="50" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="6.25" width="37.5" height="50" visibility="hidden">\n                        <div style="height: 50px" class="flex-container">\n                            <div width="37.5" class="symbol-text-element">\n                                Comm Mix\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Comm Mix",
      },
    ],
    width: 50,
    height: 50,
    ports: [
      {
        id: "top-port",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "right-port",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "bottom-port",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "personAspect",
    addInfo: [
      {
        title: "Person Aspect",
        toolTip: "Identify Aspect of a Person",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Person Aspect\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Person Aspect",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "groupPreson1",
    addInfo: [
      {
        title: "Group",
        toolTip: "Use to Group or Add Entities",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="75" width="50" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="6.25" width="37.5" height="75" visibility="hidden">\n                        <div style="height: 75px" class="flex-container">\n                            <div width="37.5" class="symbol-text-element">\n                                Group\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Group",
      },
    ],
    width: 50,
    height: 75,
    ports: [
      {
        id: "left-1",
        offset: {
          x: 0,
          y: 0.25,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "left-2",
        offset: {
          x: 0,
          y: 0.75,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "right",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "continuityPerson",
    addInfo: [
      {
        title: "Continuity",
        toolTip: "Show Continuity of Entity",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2, 2)">\n                    <rect width="10" height="5" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="0" stroke-dasharray = "" />\n                    <circle vector-effect="non-scaling-stroke" cx="3.5" cy="2.5" r="0.4"/>\n                    <circle vector-effect="non-scaling-stroke" cx="5.0" cy="2.5" r="0.4"/>\n                    <circle vector-effect="non-scaling-stroke" cx="6.5" cy="2.5" r="0.4"/>\n                    </g>',
    },
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: [],
    width: 210,
    height: 100,
  },
  {
    id: "commHolderGroup",
    addInfo: [
      {
        title: "Comm Holder Group",
        toolTip: "Group of Communication Holder",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <rect x="0" y="0" height="50" width="100" fill="transparent" stroke-width="0"/>\n                    <rect width="90" height="40" fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />\n                    <rect x="10" y="10" height="40" width="90"  fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>\n                    <foreignObject class="symbol-text-container" x="12.5" width="75" height="50" visibility="hidden">\n                        <div style="height: 50px" class="flex-container">\n                            <div width="75" class="symbol-text-element">\n                                Communication Holder\n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
    },
    annotations: [
      {
        offset: {
          x: 0.55,
          y: 0.5,
        },
        content: "Communication Holder",
      },
    ],
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    height: 100,
    width: 210,
  },
  {
    id: "externalCommHolderGroup",
    addInfo: [
      {
        title: "External Comm Holder Group",
        toolTip: "Group of External Communication Holder",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <rect x="0" y="0" height="50" width="100" fill="transparent" stroke-width="0"/>\n                    <rect width="90" height="40" fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />\n                    <rect x="10" y="10" height="40" width="90"  fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>\n                    <foreignObject class="symbol-text-container" x="12.5" width="75" height="50" visibility="hidden">\n                        <div style="height: 50px" class="flex-container">\n                            <div width="75" class="symbol-text-element">\n                                External Communication Holder\n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
    },
    annotations: [
      {
        offset: {
          x: 0.55,
          y: 0.5,
        },
        content: "External Communication Holder",
      },
    ],
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    height: 100,
    width: 210,
  },
  {
    id: "coverPerson",
    addInfo: [
      {
        title: "Cover",
        toolTip: "Use to Cover a Person",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="10" width="7.5" stroke-width="1" stroke="black" fill="green" opacity="0.5"/>\n                    </g>',
    },
    annotations: [{}],
    height: 80,
    width: 35.56,
  },
  {
    id: "mobilityPerson",
    addInfo: [
      {
        title: "Mobility",
        toolTip: "Movement of a Person",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="10" width="10" stroke="none" fill="none"/>\n                    <path d="M 0 4, S 2.5 1.5, 5 4 M 5 4, S 7.5 6.5, 10 4 M 0 6, S 2.5 3.5, 5 6 M 5 6, S 7.5 8.5, 10 6" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="none"/>\n                    </g>',
    },
    height: 50,
    width: 50,
  },
  {
    id: "communicationEntity",
    addInfo: [
      {
        title: "Communication Entity",
        toolTip: "Represents a Communication",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Communication\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Communication",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "x",
    addInfo: [
      {
        title: "x",
        toolTip: "Represent a Communication",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                x\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "x",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "word",
    addInfo: [
      {
        title: "Word",
        toolTip: "Represents an Actual Word",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Word\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Word",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "sentence",
    addInfo: [
      {
        title: "Sentence",
        toolTip: "Represents an Actual Sentence",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Sentence\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Sentence",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "paragraph",
    addInfo: [
      {
        title: "Paragraph",
        toolTip: "Represents an Actual Pragraph",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Paragraph\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Paragraph",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "communicationElement",
    addInfo: [
      {
        title: "Communication Element",
        toolTip: "Represent a Communication Element",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Communication Element\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Communication Element",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "communicationProcess",
    addInfo: [
      {
        title: "Communication Process",
        toolTip: "Represents a Process of Communication",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Communication Process\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Communication Process",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "information",
    addInfo: [
      {
        title: "Information",
        toolTip: "Respresents an actual Information",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Information\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Information",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "entity",
    addInfo: [
      {
        title: "Entity",
        toolTip: "Represents an Actual Entity",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Entity\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Entity",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "question",
    addInfo: [
      {
        title: "Question",
        toolTip: "Represent an Actual Question",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Question\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Question",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "answer",
    addInfo: [
      {
        title: "Answer",
        toolTip: "Represents an Actual Sentence",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Answer\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Answer",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "unkownEntity",
    addInfo: [
      {
        title: "Unknown Entity",
        toolTip: "Represents an Unkown Entity",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Unknown Entity\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Unknown Entity",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "blankEntity",
    addInfo: [
      {
        title: "Blank Entitiy",
        toolTip: "Existed Whether or Not",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                ?\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "?",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "function",
    addInfo: [
      {
        title: "Function",
        toolTip: "Entity as Function",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Function\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Function",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "aspect",
    addInfo: [
      {
        title: "Aspect",
        toolTip: "Entity as Aspect",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Aspect\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Aspect",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "test",
    addInfo: [
      {
        title: "Test",
        toolTip: "Entity as Test",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Test\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Test",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "functionStatus",
    addInfo: [
      {
        title: "Function Status",
        toolTip: "Entity as Function Status",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Function Status\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Function Status",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "entityUsage",
    addInfo: [
      {
        title: "Entity Usage",
        toolTip: "Entity as Entity Usage",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Entity Usage\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Entity Usage",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "picture",
    addInfo: [
      {
        title: "Picture",
        toolTip: "Represents an actual Picture",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Picture\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Picture",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "video",
    addInfo: [
      {
        title: "Video",
        toolTip: "Represents an Actual Video",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Video\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Video",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "audio",
    addInfo: [
      {
        title: "Audio",
        toolTip: "Represents an actual Audio",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Audio\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Audio",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "dictionary",
    addInfo: [
      {
        title: "Dictionary",
        toolTip: "Represent a Dictionary of Words",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g   transform="translate(2, 2)">\n                        <rect height="100" width="100" fill="transparent" stroke-width="0" /> \n                        <circle vector-effect="non-scaling-stroke" cx="50" cy="50" r="50" fill="none" stroke="black" stroke-width="1"/>\n                        <foreignObject class="symbol-text-container" x="12.5" width="75" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="75" class="symbol-text-element">\n                                Dictonary\n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
    },
    annotations: [
      {
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 8,
        },
        content: "Dictonary",
      },
    ],
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: null,
    height: 100,
    width: 100,
  },
  {
    id: "wordCommunication",
    addInfo: [
      {
        title: "Word",
        toolTip: "Represent a Word",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g   transform="translate(2, 2)">\n                        <rect height="50" width="50" fill="transparent" stroke-width="0" /> \n                        <circle vector-effect="non-scaling-stroke" cx="25" cy="25" r="25" fill="none" stroke="black" stroke-width="1"/>\n                        <foreignObject class="symbol-text-container" x="6.25" width="37.5" height="50" visibility="hidden">\n                        <div style="height: 50px" class="flex-container">\n                            <div width="37.5" class="symbol-text-element">\n                                Word\n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
    },
    annotations: [
      {
        content: "Word",
      },
    ],
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: null,
    height: 50,
    width: 50,
  },
  {
    id: "collection",
    addInfo: [
      {
        title: "Collection",
        toolTip: "Represent a Collection of Entity",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g   transform="translate(2, 2)">\n                        <rect height="100" width="100" fill="transparent" stroke-width="0" /> \n                        <circle vector-effect="non-scaling-stroke" cx="50" cy="50" r="50" fill="none" stroke="black" stroke-width="1"/>\n                        <foreignObject class="symbol-text-container" x="12.5" width="75" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="75" class="symbol-text-element">\n                                Collection\n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
    },
    annotations: [
      {
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 8,
        },
        content: "Collection",
      },
    ],
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: null,
    height: 100,
    width: 100,
  },
  {
    id: "entityCommunication",
    addInfo: [
      {
        title: "Entity",
        toolTip: "Represents an Entity",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g   transform="translate(2, 2)">\n                        <rect height="50" width="50" fill="transparent" stroke-width="0" /> \n                        <circle vector-effect="non-scaling-stroke" cx="25" cy="25" r="25" fill="none" stroke="black" stroke-width="1"/>\n                        <foreignObject class="symbol-text-container" x="6.25" width="37.5" height="50" visibility="hidden">\n                        <div style="height: 50px" class="flex-container">\n                            <div width="37.5" class="symbol-text-element">\n                                Entity\n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
    },
    annotations: [
      {
        content: "Entity",
      },
    ],
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: null,
    height: 50,
    width: 50,
  },
  {
    id: "x1",
    shape: {
      type: "Native",
      content:
        '<g>\n                    <rect height="30" width="100" fill="transparent" stroke-width="0"/>\n                    <foreignObject class="symbol-text-container" x="0" y="25" width="100" height="30" visibility="hidden">\n                    <div style="height: 30px" class="flex-container">\n                        <div width="100" class="symbol-text-element">\n                            x\n                        </div>\n                    </div>\n                    </foreignObject>     \n                </g>',
    },
    addInfo: [
      {
        title: "x",
        toolTip: "Represents Communication",
      },
    ],
    annotations: [
      {
        content: "x",
        style: {
          bold: true,
          fontSize: 15,
          italic: true,
        },
      },
    ],
    height: 30,
    width: 100,
  },
  {
    id: "relationship123",
    addInfo: [
      {
        title: "Relationship",
        toolTip: "Use to Show a Relationship",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g   transform="translate(2, 2)">\n                        <rect height="70" width="70" fill="transparent" stroke-width="0" /> \n                        <circle vector-effect="non-scaling-stroke" cx="35" cy="35" r="35" fill="white" stroke="black" stroke-width="1"/>\n                        <foreignObject class="symbol-text-container" x="8.75" width="52.5" height="70" visibility="hidden">\n                        <div style="height: 70px" class="flex-container">\n                            <div width="52.5" class="symbol-text-element">\n                                Relates\n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
    },
    annotations: [
      {
        content: "Relates",
      },
    ],
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    height: 70,
    width: 70,
  },
  {
    id: "comparision",
    addInfo: [
      {
        title: "Comparision",
        toolTip: "Use to Show a Comparision",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g   transform="translate(2, 2)">\n                        <rect height="70" width="70" fill="transparent" stroke-width="0" /> \n                        <circle vector-effect="non-scaling-stroke" cx="35" cy="35" r="35" fill="white" stroke="black" stroke-width="1"/>\n                        <foreignObject class="symbol-text-container" x="8.75" width="52.5" height="70" visibility="hidden">\n                        <div style="height: 70px" class="flex-container">\n                            <div width="52.5" class="symbol-text-element">\n                                Compare\n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
    },
    annotations: [
      {
        content: "Compare",
      },
    ],
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    height: 70,
    width: 70,
  },
  {
    id: "communicationMixtureCommuincation1",
    addInfo: [
      {
        title: "Communication Mixture",
        toolTip: "Two Input Communication",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="50" width="50" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="6.25" width="37.5" height="50" visibility="hidden">\n                        <div style="height: 50px" class="flex-container">\n                            <div width="37.5" class="symbol-text-element">\n                                Comm Mix\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Comm Mix",
      },
    ],
    width: 50,
    height: 50,
    ports: [
      {
        id: "top-port",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "right-port",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "bottom-port",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "communicationMixtureCommunication2",
    addInfo: [
      {
        title: "Communication Mixture",
        toolTip: "Multi Input Communication",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="50" width="50" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="6.25" width="37.5" height="50" visibility="hidden">\n                        <div style="height: 50px" class="flex-container">\n                            <div width="37.5" class="symbol-text-element">\n                                Comm Mix\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Comm Mix",
      },
    ],
    width: 50,
    height: 50,
    ports: [
      {
        id: "top-port",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "right-port",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "bottom-port",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "groupCommunication",
    addInfo: [
      {
        title: "Group",
        toolTip: "Use to Group or Add Entities",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="75" width="50" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="6.25" width="37.5" height="75" visibility="hidden">\n                        <div style="height: 75px" class="flex-container">\n                            <div width="37.5" class="symbol-text-element">\n                                Group\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Group",
      },
    ],
    width: 50,
    height: 75,
    ports: [
      {
        id: "left-1",
        offset: {
          x: 0,
          y: 0.25,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "left-2",
        offset: {
          x: 0,
          y: 0.75,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "right",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "continuityComm",
    addInfo: [
      {
        title: "Continuity",
        toolTip: "Show Continuity of Entity",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2, 2)">\n                    <rect width="10" height="5" fill="White" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dasharray = "10 5" />\n                    <circle vector-effect="non-scaling-stroke" cx="3.5" cy="2.5" r="0.4"/>\n                    <circle vector-effect="non-scaling-stroke" cx="5.0" cy="2.5" r="0.4"/>\n                    <circle vector-effect="non-scaling-stroke" cx="6.5" cy="2.5" r="0.4"/>\n                    </g>',
    },
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    width: 210,
    height: 100,
  },
  {
    id: "entities",
    addInfo: [
      {
        title: "Entities",
        toolTip: "Represents a Group of Entity",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <rect x="0" y="0" height="50" width="100" fill="transparent" stroke-width="0"/>\n                    <rect width="90" height="40" fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />\n                    <rect x="10" y="10" height="40" width="90"  fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>\n                    <foreignObject class="symbol-text-container" x="12.5" width="75" height="50" visibility="hidden">\n                        <div style="height: 50px" class="flex-container">\n                            <div width="75" class="symbol-text-element">\n                                Entities\n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
    },
    annotations: [
      {
        offset: {
          x: 0.55,
          y: 0.5,
        },
        content: "Entities",
      },
    ],
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    height: 100,
    width: 210,
  },
  {
    id: "communicatonElements",
    addInfo: [
      {
        title: "Communication Elements",
        toolTip: "A Group of Communication Element",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <rect x="0" y="0" height="50" width="100" fill="transparent" stroke-width="0"/>\n                    <rect width="90" height="40" fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />\n                    <rect x="10" y="10" height="40" width="90"  fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>\n                    <foreignObject class="symbol-text-container" x="12.5" width="75" height="50" visibility="hidden">\n                        <div style="height: 50px" class="flex-container">\n                            <div width="75" class="symbol-text-element">\n                                Communication Elements\n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
    },
    annotations: [
      {
        offset: {
          x: 0.55,
          y: 0.5,
        },
        content: "Communication Elements",
      },
    ],
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    height: 100,
    width: 210,
  },
  {
    id: "questions",
    addInfo: [
      {
        title: "Questions",
        toolTip: "Represents a Group of Question",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <rect x="0" y="0" height="50" width="100" fill="transparent" stroke-width="0"/>\n                    <rect width="90" height="40" fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />\n                    <rect x="10" y="10" height="40" width="90"  fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>\n                    <foreignObject class="symbol-text-container" x="12.5" width="75" height="50" visibility="hidden">\n                        <div style="height: 50px" class="flex-container">\n                            <div width="75" class="symbol-text-element">\n                                Questions\n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
    },
    annotations: [
      {
        offset: {
          x: 0.55,
          y: 0.5,
        },
        content: "Questions",
      },
    ],
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    height: 100,
    width: 210,
  },
  {
    id: "answers",
    addInfo: [
      {
        title: "Answers",
        toolTip: "Represents a Group of Answer",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <rect x="0" y="0" height="50" width="100" fill="transparent" stroke-width="0"/>\n                    <rect width="90" height="40" fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />\n                    <rect x="10" y="10" height="40" width="90"  fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>\n                    <foreignObject class="symbol-text-container" x="12.5" width="75" height="50" visibility="hidden">\n                        <div style="height: 50px" class="flex-container">\n                            <div width="75" class="symbol-text-element">\n                                Answers\n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
    },
    annotations: [
      {
        offset: {
          x: 0.55,
          y: 0.5,
        },
        content: "Answers",
      },
    ],
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    height: 100,
    width: 210,
  },
  {
    id: "application",
    addInfo: [
      {
        title: "Application",
        toolTip: "Represents an Actual Application",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Application\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Application",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "a",
    addInfo: [
      {
        title: "A",
        toolTip: "Represents an Actual Application",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                A\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "A",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "communicationFunction",
    addInfo: [
      {
        title: "Communication Function",
        toolTip: "Function of Our Communication",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Communication Function\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Communication Function",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "functionx",
    addInfo: [
      {
        title: "f(x)",
        toolTip: "Function of Our Communication",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                f(x)\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "f(x)",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "f()",
    addInfo: [
      {
        title: "f()",
        toolTip: "Function of Our Communication",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                f()\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "f()",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "communicationResult",
    addInfo: [
      {
        title: "Communication Result",
        toolTip: "Result of an Application",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Communication Result\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Communication Result",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "whatWeDo",
    addInfo: [
      {
        title: "What We Do",
        toolTip: "Represent Things That We Do",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                draw New Shape\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "draw New Shape",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "whatWeDo1",
    addInfo: [
      {
        title: "What We Do",
        toolTip: "What We Do as Entity",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <rect vector-effect="non-scaling-stroke" width="575" height="150" stroke="black" fill="white" stroke-width="1" />\n                    <rect x="25" y="25" width="200" height="100" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />\n                    <foreignObject class="symbol-text-container" x="63.25" width="100" height="150" visibility="hidden">\n                        <div style="height: 150px" class="flex-container">\n                            <div width="100" class="symbol-text-element">\n                                Communication\n                            </div>\n                        </div>\n                    </foreignObject>\n                    <rect x="350" y="025" height="100" width="200"  fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>\n                    <foreignObject class="symbol-text-container" x="373.75" width="100" height="150" visibility="hidden">\n                        <div style="height: 150px" class="flex-container">\n                            <div width="100" class="symbol-text-element">\n                                Application\n                            </div>\n                        </div>\n                    </foreignObject>\n                </g>',
    },
    annotations: [
      {
        content: "Communication",
        offset: {
          x: 0.22,
          y: 0.5,
        },
      },
      {
        content: "Application",
        offset: {
          x: 0.78,
          y: 0.5,
        },
      },
      {
        content: "What We Do",
        offset: {
          x: 0.9,
          y: 0,
        },
        margin: {
          bottom: 10,
        },
      },
    ],
    style: {
      fill: "none",
      fontSize: 10,
    },
    height: 108,
    width: 414,
    ports: [
      {
        id: "left",
        offset: {
          x: 0.3913,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "Right",
        offset: {
          x: 0.60869,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
  },
  {
    id: "action",
    addInfo: [
      {
        title: "Action",
        toolTip: "An Action That We Take",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Action\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Action",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "reason",
    addInfo: [
      {
        title: "Reason",
        toolTip: "Reason For an Action",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Reason\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Reason",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "work1234",
    addInfo: [
      {
        title: "Work",
        toolTip: "Work That we Do",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Work\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Work",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "application1",
    shape: {
      type: "Native",
      content:
        '<g>\n                    <rect height="30" width="100" fill="transparent" stroke-width="0"/>\n                    <foreignObject class="symbol-text-container" x="0" y="25" width="100" height="30" visibility="hidden">\n                    <div style="height: 30px" class="flex-container">\n                        <div width="100" class="symbol-text-element">\n                            application\n                        </div>\n                    </div>\n                    </foreignObject>     \n                </g>',
    },
    addInfo: [
      {
        title: "Application",
        toolTip: "Represent Application",
      },
    ],
    annotations: [
      {
        content: "application",
        style: {
          bold: true,
          fontSize: 15,
          italic: true,
        },
      },
    ],
    height: 30,
    width: 100,
  },
  {
    id: "a1",
    shape: {
      type: "Native",
      content:
        '<g>\n                    <rect height="30" width="100" fill="transparent" stroke-width="0"/>\n                    <foreignObject class="symbol-text-container" x="0" y="25" width="100" height="30" visibility="hidden">\n                    <div style="height: 30px" class="flex-container">\n                        <div width="100" class="symbol-text-element">\n                            A\n                        </div>\n                    </div>\n                    </foreignObject>     \n                </g>',
    },
    addInfo: [
      {
        title: "A",
        toolTip: "Represent Application",
      },
    ],
    annotations: [
      {
        content: "A",
        style: {
          bold: true,
          fontSize: 15,
          italic: true,
        },
      },
    ],
    height: 30,
    width: 100,
  },
  {
    id: "communicationFunction1",
    shape: {
      type: "Native",
      content:
        '<g>\n                    <rect height="30" width="100" fill="transparent" stroke-width="0"/>\n                    <foreignObject class="symbol-text-container" x="0" y="25" width="100" height="30" visibility="hidden">\n                    <div style="height: 30px" class="flex-container">\n                        <div width="100" class="symbol-text-element">\n                            communication function\n                        </div>\n                    </div>\n                    </foreignObject>     \n                </g>',
    },
    addInfo: [
      {
        title: "Communication Function",
        toolTip: "Represent Communication Function",
      },
    ],
    annotations: [
      {
        content: "communication function",
        style: {
          bold: true,
          fontSize: 15,
          italic: true,
        },
      },
    ],
    height: 30,
    width: 100,
  },
  {
    id: "functionx1",
    shape: {
      type: "Native",
      content:
        '<g>\n                    <rect height="30" width="100" fill="transparent" stroke-width="0"/>\n                    <foreignObject class="symbol-text-container" x="0" y="25" width="100" height="30" visibility="hidden">\n                    <div style="height: 30px" class="flex-container">\n                        <div width="100" class="symbol-text-element">\n                            f(x)\n                        </div>\n                    </div>\n                    </foreignObject>     \n                </g>',
    },
    addInfo: [
      {
        title: "f(x)",
        toolTip: "Represent Communication Function",
      },
    ],
    annotations: [
      {
        content: "f(x)",
        style: {
          bold: true,
          fontSize: 15,
          italic: true,
        },
      },
    ],
    height: 30,
    width: 100,
  },
  {
    id: "commAppMixture",
    addInfo: [
      {
        title: "Comm App Mixture",
        toolTip: "Communication Application Mixture",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g   transform="translate(2, 2)">\n                        <rect height="70" width="70" fill="transparent" stroke-width="0" /> \n                        <circle vector-effect="non-scaling-stroke" cx="35" cy="35" r="35" fill="white" stroke="black" stroke-width="1"/>\n                        <foreignObject class="symbol-text-container" x="8.75" width="52.5" height="70" visibility="hidden">\n                        <div style="height: 70px" class="flex-container">\n                            <div width="52.5" class="symbol-text-element">\n                                Comm & App Mixture\n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
    },
    annotations: [
      {
        content: "Comm & App Mixture",
      },
    ],
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    height: 70,
    width: 70,
  },
  {
    id: "commAppMixture1",
    addInfo: [
      {
        title: "Comm App Mixture",
        toolTip: "Communication Application Mixture",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g   transform="translate(2, 2)">\n                        <rect height="80" width="80" fill="transparent" stroke-width="0" /> \n                        <circle vector-effect="non-scaling-stroke" cx="40" cy="40" r="40" fill="white" stroke="black" stroke-width="1"/>\n                        <foreignObject class="symbol-text-container" x="10" width="60" height="80" visibility="hidden">\n                        <div style="height: 80px" class="flex-container">\n                            <div width="60" class="symbol-text-element">\n                                x\n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
    },
    annotations: [
      {
        content: "x",
      },
    ],
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    height: 80,
    width: 80,
  },
  {
    id: "commAppMixture2",
    addInfo: [
      {
        title: "Comm App Mixture",
        toolTip: "Multi Inputs Comm & App Mixture",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="120" width="80" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="10" width="60" height="120" visibility="hidden">\n                        <div style="height: 120px" class="flex-container">\n                            <div width="60" class="symbol-text-element">\n                                undefined\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: "Communication Application Mixture",
    width: 80,
    height: 120,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "emptycontainer",
    addInfo: [
      {
        title: "Empty Container",
        toolTip: "A Container to Add Part to",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transfrom="translate(2,2)">\n                <rect vector-effect="non-scaling-stroke" height="150" width="700" fill="none" stroke="black" stroke-width="1"/>\n                </g>',
    },
    annotations: [
      {
        content: "Empty Container",
      },
    ],
    height: 150,
    width: 700,
  },
  {
    id: "work",
    addInfo: [
      {
        title: "Work",
        toolTip: "People Work Together",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g   transform="translate(2, 2)">\n                        <rect height="80" width="80" fill="transparent" stroke-width="0" /> \n                        <circle vector-effect="non-scaling-stroke" cx="40" cy="40" r="40" fill="white" stroke="black" stroke-width="1"/>\n                        <foreignObject class="symbol-text-container" x="10" width="60" height="80" visibility="hidden">\n                        <div style="height: 80px" class="flex-container">\n                            <div width="60" class="symbol-text-element">\n                                Work\n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
    },
    annotations: [
      {
        content: "Work",
      },
    ],
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    height: 80,
    width: 80,
  },
  {
    id: "subFunction",
    addInfo: [
      {
        title: "Sub Function",
        toolTip: "Function Inside Function",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <rect x="0" y="0" width="100" height="50" fill="none" stroke-width="0"/>\n                    <rect width="100" height="40" fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />\n                    <rect y="40" height="10" width="100" fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>\n                    <foreignObject class="symbol-text-container" x="12.5" y="-5" width="75" height="50" visibility="hidden">\n                        <div style="height: 50px" class="flex-container">\n                            <div width="75" class="symbol-text-element">\n                                Sub Communication Function\n                            </div>\n                        </div>\n                    </foreignObject>\n                </g>',
    },
    annotations: [
      {
        content: "Sub Communication Function",
      },
    ],
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    height: 100,
    width: 210,
  },
  {
    id: "subApplication",
    addInfo: [
      {
        title: "Sub Application",
        toolTip: "Application Inside Application",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <rect x="0" y="0" width="100" height="50" fill="none" stroke-width="0"/>\n                    <rect width="100" height="40" fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />\n                    <rect y="40" height="10" width="100" fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>\n                    <foreignObject class="symbol-text-container" x="12.5" y="-5" width="75" height="50" visibility="hidden">\n                        <div style="height: 50px" class="flex-container">\n                            <div width="75" class="symbol-text-element">\n                                Sub Application\n                            </div>\n                        </div>\n                    </foreignObject>\n                </g>',
    },
    annotations: [
      {
        content: "Sub Application",
      },
    ],
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    height: 100,
    width: 210,
  },
  {
    id: "subResult",
    addInfo: [
      {
        title: "Sub Result",
        toolTip: "Result Inside Result",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <rect x="0" y="0" width="100" height="50" fill="none" stroke-width="0"/>\n                    <rect width="100" height="40" fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />\n                    <rect y="40" height="10" width="100" fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>\n                    <foreignObject class="symbol-text-container" x="12.5" y="-5" width="75" height="50" visibility="hidden">\n                        <div style="height: 50px" class="flex-container">\n                            <div width="75" class="symbol-text-element">\n                                Sub Result\n                            </div>\n                        </div>\n                    </foreignObject>\n                </g>',
    },
    annotations: [
      {
        content: "Sub Result",
      },
    ],
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    height: 100,
    width: 210,
  },
  {
    id: "groupFunction",
    addInfo: [
      {
        title: "Group Function",
        toolTip: "Group Communication Function",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <rect x="0" y="0" width="100" height="50" fill="none" stroke-width="0"/>\n                    <rect width="90" height="50" fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />\n                    <rect x="90" height="50" width="10" fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>\n                    <foreignObject class="symbol-text-container" x="12.5" width="75" height="50" visibility="hidden">\n                        <div style="height: 50px" class="flex-container">\n                            <div width="75" class="symbol-text-element">\n                                Group Communication Function\n                            </div>\n                        </div>\n                    </foreignObject>\n                </g>',
    },
    annotations: [
      {
        content: "Group Communication Function",
      },
    ],
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    height: 100,
    width: 210,
  },
  {
    id: "groupApplication",
    addInfo: [
      {
        title: "Group Application",
        toolTip: "Denote Group of Application",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <rect x="0" y="0" width="100" height="50" fill="none" stroke-width="0"/>\n                    <rect width="90" height="50" fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />\n                    <rect x="90" height="50" width="10" fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>\n                    <foreignObject class="symbol-text-container" x="12.5" width="75" height="50" visibility="hidden">\n                        <div style="height: 50px" class="flex-container">\n                            <div width="75" class="symbol-text-element">\n                                Group Application\n                            </div>\n                        </div>\n                    </foreignObject>\n                </g>',
    },
    annotations: [
      {
        content: "Group Application",
      },
    ],
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    height: 100,
    width: 210,
  },
  {
    id: "groupResult",
    addInfo: [
      {
        title: "Group Result",
        toolTip: "Group Communication Result",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <rect x="0" y="0" width="100" height="50" fill="none" stroke-width="0"/>\n                    <rect width="90" height="50" fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />\n                    <rect x="90" height="50" width="10" fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>\n                    <foreignObject class="symbol-text-container" x="12.5" width="75" height="50" visibility="hidden">\n                        <div style="height: 50px" class="flex-container">\n                            <div width="75" class="symbol-text-element">\n                                Group Communication Result\n                            </div>\n                        </div>\n                    </foreignObject>\n                </g>',
    },
    annotations: [
      {
        content: "Group Communication Result",
      },
    ],
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    height: 100,
    width: 210,
  },
  {
    id: "group1",
    addInfo: [
      {
        title: "Group",
        toolTip: "Use to Group or Add Entities",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="75" width="50" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="6.25" width="37.5" height="75" visibility="hidden">\n                        <div style="height: 75px" class="flex-container">\n                            <div width="37.5" class="symbol-text-element">\n                                Group\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Group",
      },
    ],
    width: 50,
    height: 75,
    ports: [
      {
        id: "left-1",
        offset: {
          x: 0,
          y: 0.25,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "left-2",
        offset: {
          x: 0,
          y: 0.75,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "right",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "continuityApplication",
    addInfo: [
      {
        title: "Continuity",
        toolTip: "Show Continuity of Entity",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2, 2)">\n                    <rect width="10" height="5" fill="White" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dasharray = "10 5" />\n                    <circle vector-effect="non-scaling-stroke" cx="3.5" cy="2.5" r="0.4"/>\n                    <circle vector-effect="non-scaling-stroke" cx="5.0" cy="2.5" r="0.4"/>\n                    <circle vector-effect="non-scaling-stroke" cx="6.5" cy="2.5" r="0.4"/>\n                    </g>',
    },
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    width: 210,
    height: 100,
  },
  {
    id: "communicationLink",
    addInfo: [
      {
        title: "Communication Link",
        toolTip: "Right Communication Flow",
      },
    ],
    type: "Straight",
    annotations: [
      {
        content: "Communicate",
        alignment: "Before",
        margin: {
          top: 2,
          bottom: 2,
          left: 2,
          right: 2,
        },
      },
    ],
    targetDecorator: {
      shape: "Arrow",
      style: {
        fill: "black",
        strokeColor: "black",
        strokeWidth: 1,
      },
    },
    sourceDecorator: {
      shape: "None",
    },
    style: {
      fill: "black",
      strokeColor: "black",
      strokeWidth: 1,
    },
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "communicationLinkLeft",
    addInfo: [
      {
        title: "Communication Link",
        toolTip: "Left Communication Flow",
      },
    ],
    type: "Straight",
    annotations: [
      {
        content: "Communicate",
        alignment: "After",
        margin: {
          top: 2,
          bottom: 2,
          left: 2,
          right: 2,
        },
      },
    ],
    targetDecorator: {
      shape: "None",
      style: {
        fill: "black",
        strokeColor: "black",
        strokeWidth: 1,
      },
    },
    sourceDecorator: {
      shape: "Arrow",
    },
    style: {
      fill: "black",
      strokeColor: "black",
      strokeWidth: 1,
    },
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "bidirectionalCommunicationLink",
    addInfo: [
      {
        title: "Bidirectional Communication Link",
        toolTip: "Left & RIght Communication Flow",
      },
    ],
    type: "Straight",
    annotations: [
      {
        content: "Communicate",
        alignment: "Before",
        margin: {
          top: 2,
          bottom: 2,
          left: 2,
          right: 2,
        },
      },
    ],
    targetDecorator: {
      shape: "Arrow",
      style: {
        fill: "black",
        strokeColor: "black",
        strokeWidth: 1,
      },
    },
    sourceDecorator: {
      shape: "Arrow",
    },
    style: {
      fill: "black",
      strokeColor: "black",
      strokeWidth: 1,
    },
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "rightCommunicationLink",
    addInfo: [
      {
        title: "Right Communication Link",
        toolTip: "Communication Link With Information",
      },
    ],
    annotations: [
      {
        content: "Information",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                <g transform="rotate(0) translate(0,0)">\n                <rect height="70" width="200" fill="transparent" stroke-width="0"/>\n                <path vector-effect="non-scaling-stroke" fill="white" stroke="black" stroke-width="1" d="M 0 15 L 175 15 L 175 0 L 200 35 L 175 70 L 175 55 L 0 55 L 0 15"/>\n                </g>\n                <foreignObject class="symbol-text-container" x="25" width="150" height="70" visibility="hidden">\n                <div style="height: 70px" class="flex-container">\n                    <div width="150" class="symbol-text-element">\n                        Information\n                    </div>\n                </div>\n                </foreignObject>\n            </g>',
    },
    height: 70,
    width: 200,
  },
  {
    id: "leftCommunicationLink",
    addInfo: [
      {
        title: "Left Communication Link",
        toolTip: "Communication Link With Information",
      },
    ],
    annotations: [
      {
        content: "Information",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                <g transform="rotate(180) translate(-200,-70)">\n                <rect height="70" width="200" fill="transparent" stroke-width="0"/>\n                <path vector-effect="non-scaling-stroke" fill="white" stroke="black" stroke-width="1" d="M 0 15 L 175 15 L 175 0 L 200 35 L 175 70 L 175 55 L 0 55 L 0 15"/>\n                </g>\n                <foreignObject class="symbol-text-container" x="25" width="150" height="70" visibility="hidden">\n                <div style="height: 70px" class="flex-container">\n                    <div width="150" class="symbol-text-element">\n                        Information\n                    </div>\n                </div>\n                </foreignObject>\n            </g>',
    },
    height: 70,
    width: 200,
  },
  {
    id: "biDirectionalArrow",
    addInfo: [
      {
        title: "Bidirectional Arrow",
        toolTip: "Communication Link With Information",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2, 2)">\n                    <g>\n                        <rect height="90" width="500" fill="none" stroke-width="0"/>\n                        <path vector-effect="non-scaling-stroke" fill="white" stroke="black" stroke-width="1" d="M 0 45 L 50 0 L 50 20 L 450 20 L 450 0 L 500 45 L 450 90 L 450 70 L 50 70 L 50 90 L 0 45"/>\n                        <foreignObject class="symbol-text-container" x="62.5" width="375" height="90" visibility="hidden">\n                        <div style="height: 90px" class="flex-container">\n                            <div width="375" class="symbol-text-element">\n                                Information\n                            </div>\n                        </div>\n                    </foreignObject>  \n                    </g>\n                </g>',
    },
    annotations: [
      {
        content: "Information",
      },
    ],
    height: 90,
    width: 500,
  },
  {
    id: "communicationLink1",
    addInfo: [
      {
        title: "Communication Link",
        toolTip: "Communication Link With Information",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <g fill="white">\n                        <rect height="50" width="550" fill="none" strole-width="0"/>\n                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" d="M 25 0 L 525 0 L 525 50 L 25 50 L 25 0"/>\n                        <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" cx="25" cy="25" r="25" />\n                        <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" cx="525" cy="25" r="25" />\n                    </g>\n                    <foreignObject class="symbol-text-container" x="68.75" width="412.5" height="50" visibility="hidden">\n                    <div style="height: 50px" class="flex-container">\n                        <div width="412.5" class="symbol-text-element">\n                            Information\n                        </div>\n                    </div>\n                </foreignObject>  \n                </g>',
    },
    annotations: [
      {
        content: "Information",
      },
    ],
    height: 50,
    width: 550,
  },
  {
    id: "principle",
    addInfo: [
      {
        title: "Principle",
        toolTip: "Represent Actual Principle",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Principle\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Principle",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "parentPrinciple",
    addInfo: [
      {
        title: "Parent Principle",
        toolTip: "Represent Parent Principle",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Principle\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Principle",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "referencerect",
    addInfo: [
      {
        title: "Reference",
        toolTip: "Represent an Actual Reference",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Reference\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Reference",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "sentenceAnalysis",
    addInfo: [
      {
        title: "Sentence Analysis",
        toolTip: "Represent Sentence Analysis",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Sentence Analysis\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Sentence Analysis",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "analysis",
    addInfo: [
      {
        title: "Analysis",
        toolTip: "Represent Actual Analysis",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Analysis\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Analysis",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "feedback",
    addInfo: [
      {
        title: "Feedback",
        toolTip: "Represent a Feedback",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Feedback\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Feedback",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "operatingPrinciple",
    addInfo: [
      {
        title: "Operating Principle",
        toolTip: "Represent Operating Principle",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Principle\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Operating Principle",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "error",
    addInfo: [
      {
        title: "Error",
        toolTip: "Represent an Actual Error",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Error\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Error",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "compensator",
    addInfo: [
      {
        title: "Compensator",
        toolTip: "Represent an Actual Compensator",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Compensator\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Compensator",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "problem",
    addInfo: [
      {
        title: "Problem",
        toolTip: "Represent an Actual Problem",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Problem\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Problem",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "problemStatement",
    addInfo: [
      {
        title: "Problem Statement",
        toolTip: "Problem Statement as Entity",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Problem Statement\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Problem Statement",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "principle1",
    addInfo: [
      {
        title: "Principle",
        toolTip: "Represent The Main Set of Principles",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Principle\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Main Set of Principle",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "principle2",
    addInfo: [
      {
        title: "Principle",
        toolTip: "Principle a Subset of Principles",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Principle\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Subset of Principle",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "analysisWindow",
    addInfo: [
      {
        title: "Analysis Window",
        toolTip: "Represents an Actual Analysis",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Analysis Window\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Analysis Window",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "edfDiamond",
    addInfo: [
      {
        title: "ECF",
        toolTip: "The Error Correction Function",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2,2)">\n                        <rect height="100" width="100" fill="transparent" stroke-width="0"/>\n                        <rect x="35.35533905932737" y="-35.35533905932737" width="70.71067811865474" height="70.71067811865474" fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" transform="rotate(45)"/>\n                        <foreignObject class="symbol-text-container" x="12.5" width="75" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="75" class="symbol-text-element">\n                                ECF\n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
    },
    annotations: [
      {
        content: "ECF",
      },
    ],
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    height: 120,
    width: 120,
  },
  {
    id: "ecfRect",
    addInfo: [
      {
        title: "ECF",
        toolTip: "Enable Error Correction",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                ECF\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "ECF",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "problemDevelopment",
    addInfo: [
      {
        title: "Problem Development",
        toolTip: "Problem Development From Error",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g   transform="translate(2, 2)">\n                        <rect height="300" width="300" fill="transparent" stroke-width="0" /> \n                        <circle vector-effect="non-scaling-stroke" cx="150" cy="150" r="150" fill="White" stroke="black" stroke-width="1"/>\n                        <foreignObject class="symbol-text-container" x="37.5" width="225" height="300" visibility="hidden">\n                        <div style="height: 300px" class="flex-container">\n                            <div width="225" class="symbol-text-element">\n                                Problem Name Development\n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
    },
    annotations: [
      {
        content: "Problem Name Development",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 30,
        },
      },
    ],
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: null,
    height: 300,
    width: 300,
  },
  {
    id: "principleAspect",
    addInfo: [
      {
        title: "Principle Aspect",
        toolTip: "Identify Aspect of a Principle",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Principle Aspect\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Principle Aspect",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "redcrossanalysis",
    addInfo: [
      {
        title: "Red Cross",
        toolTip: "Use to Cross Out Entity",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="10" width="10" stroke="none" fill="none"/>\n                    <path vector-effect="non-scaling-stroke" stroke="red" stroke-width="1" fill="none" d="M 0 0 L 10 10 M 0 10 L 10 0"/> \n                </g>',
    },
    height: 50,
    width: 50,
  },
  {
    id: "solutionanalysis",
    addInfo: [
      {
        title: "Solution",
        toolTip: "Represent an Actual Solution",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Analysis\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Analysis",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "group4",
    addInfo: [
      {
        title: "Group",
        toolTip: "Use to Group or Add Entities",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="75" width="50" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="6.25" width="37.5" height="75" visibility="hidden">\n                        <div style="height: 75px" class="flex-container">\n                            <div width="37.5" class="symbol-text-element">\n                                Group\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Group",
      },
    ],
    width: 50,
    height: 75,
    ports: [
      {
        id: "left-1",
        offset: {
          x: 0,
          y: 0.25,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "left-2",
        offset: {
          x: 0,
          y: 0.75,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "right",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "continuity4",
    addInfo: [
      {
        title: "Continuity",
        toolTip: "Show Continuity of Entity",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2, 2)">\n                    <rect width="10" height="5" fill="White" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dasharray = "10 5" />\n                    <circle vector-effect="non-scaling-stroke" cx="3.5" cy="2.5" r="0.4"/>\n                    <circle vector-effect="non-scaling-stroke" cx="5.0" cy="2.5" r="0.4"/>\n                    <circle vector-effect="non-scaling-stroke" cx="6.5" cy="2.5" r="0.4"/>\n                    </g>',
    },
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    width: 210,
    height: 100,
  },
  {
    id: "analyses",
    addInfo: [
      {
        title: "Analyses",
        toolTip: "Represents a Group of Analysis",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <rect x="0" y="0" height="50" width="100" fill="transparent" stroke-width="0"/>\n                    <rect width="90" height="40" fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />\n                    <rect x="10" y="10" height="40" width="90"  fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>\n                    <foreignObject class="symbol-text-container" x="12.5" width="75" height="50" visibility="hidden">\n                        <div style="height: 50px" class="flex-container">\n                            <div width="75" class="symbol-text-element">\n                                Analyses\n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
    },
    annotations: [
      {
        offset: {
          x: 0.55,
          y: 0.5,
        },
        content: "Analyses",
      },
    ],
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    height: 100,
    width: 210,
  },
  {
    id: "errors",
    addInfo: [
      {
        title: "Errors",
        toolTip: "Represent a Group of Error",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <rect x="0" y="0" height="50" width="100" fill="transparent" stroke-width="0"/>\n                    <rect width="90" height="40" fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />\n                    <rect x="10" y="10" height="40" width="90"  fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>\n                    <foreignObject class="symbol-text-container" x="12.5" width="75" height="50" visibility="hidden">\n                        <div style="height: 50px" class="flex-container">\n                            <div width="75" class="symbol-text-element">\n                                Errors\n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
    },
    annotations: [
      {
        offset: {
          x: 0.55,
          y: 0.5,
        },
        content: "Errors",
      },
    ],
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    height: 100,
    width: 210,
  },
  {
    id: "problems",
    addInfo: [
      {
        title: "Problems",
        toolTip: "Represents a Group of Problem",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <rect x="0" y="0" height="50" width="100" fill="transparent" stroke-width="0"/>\n                    <rect width="90" height="40" fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />\n                    <rect x="10" y="10" height="40" width="90"  fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>\n                    <foreignObject class="symbol-text-container" x="12.5" width="75" height="50" visibility="hidden">\n                        <div style="height: 50px" class="flex-container">\n                            <div width="75" class="symbol-text-element">\n                                Problems\n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
    },
    annotations: [
      {
        offset: {
          x: 0.55,
          y: 0.5,
        },
        content: "Problems",
      },
    ],
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    height: 100,
    width: 210,
  },
  {
    id: "feedbacks",
    addInfo: [
      {
        title: "Feedbacks",
        toolTip: "Represents a Group of Feedback",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <rect x="0" y="0" height="50" width="100" fill="transparent" stroke-width="0"/>\n                    <rect width="90" height="40" fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />\n                    <rect x="10" y="10" height="40" width="90"  fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>\n                    <foreignObject class="symbol-text-container" x="12.5" width="75" height="50" visibility="hidden">\n                        <div style="height: 50px" class="flex-container">\n                            <div width="75" class="symbol-text-element">\n                                Feedbacks\n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
    },
    annotations: [
      {
        offset: {
          x: 0.55,
          y: 0.5,
        },
        content: "Feedbacks",
      },
    ],
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    height: 100,
    width: 210,
  },
  {
    id: "compensators",
    addInfo: [
      {
        title: "Compensators",
        toolTip: "Represent a Group of Feedback",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <rect x="0" y="0" height="50" width="100" fill="transparent" stroke-width="0"/>\n                    <rect width="90" height="40" fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />\n                    <rect x="10" y="10" height="40" width="90"  fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>\n                    <foreignObject class="symbol-text-container" x="12.5" width="75" height="50" visibility="hidden">\n                        <div style="height: 50px" class="flex-container">\n                            <div width="75" class="symbol-text-element">\n                                Compenstors\n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
    },
    annotations: [
      {
        offset: {
          x: 0.55,
          y: 0.5,
        },
        content: "Compenstors",
      },
    ],
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    height: 100,
    width: 210,
  },
  {
    id: "solutionsanalysis",
    addInfo: [
      {
        title: "Solutions",
        toolTip: "Represent a Group of Solutions",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <rect x="0" y="0" height="50" width="100" fill="transparent" stroke-width="0"/>\n                    <rect width="90" height="40" fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />\n                    <rect x="10" y="10" height="40" width="90"  fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>\n                    <foreignObject class="symbol-text-container" x="12.5" width="75" height="50" visibility="hidden">\n                        <div style="height: 50px" class="flex-container">\n                            <div width="75" class="symbol-text-element">\n                                Solutions\n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
    },
    annotations: [
      {
        offset: {
          x: 0.55,
          y: 0.5,
        },
        content: "Solutions",
      },
    ],
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    height: 100,
    width: 210,
  },
  {
    id: "greenCommSignal",
    addInfo: [
      {
        title: "Green Comm Signal",
        toolTip: "Represents a Comm Without Error",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  class="point-circle" transform="translate(2, 2)">\n                        <rect height="25" width="25" fill="transparent" stroke-width="0" /> \n                        <circle vector-effect="non-scaling-stroke" cx="12.5" cy="12.5" r="12.5" fill="LimeGreen" stroke="black" stroke-width="1"/>\n                        <foreignObject class="symbol-text-container" x="3.125" width="18.75" height="25" visibility="hidden">\n                        <div style="height: 25px" class="flex-container">\n                            <div width="18.75" class="symbol-text-element">\n                                \n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
    },
    annotations: null,
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: null,
    height: 25,
    width: 25,
  },
  {
    id: "redCommSignal",
    addInfo: [
      {
        title: "Red Comm Signal",
        toolTip: "Represents a Comm With Error",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  class="point-circle" transform="translate(2, 2)">\n                        <rect height="25" width="25" fill="transparent" stroke-width="0" /> \n                        <circle vector-effect="non-scaling-stroke" cx="12.5" cy="12.5" r="12.5" fill="Red" stroke="black" stroke-width="1"/>\n                        <foreignObject class="symbol-text-container" x="3.125" width="18.75" height="25" visibility="hidden">\n                        <div style="height: 25px" class="flex-container">\n                            <div width="18.75" class="symbol-text-element">\n                                \n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
    },
    annotations: null,
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: null,
    height: 25,
    width: 25,
  },
  {
    id: "blueCommSignal",
    addInfo: [
      {
        title: "Blue Comm Signal",
        toolTip: "Represents a Comm as Feedback",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  class="point-circle" transform="translate(2, 2)">\n                        <rect height="25" width="25" fill="transparent" stroke-width="0" /> \n                        <circle vector-effect="non-scaling-stroke" cx="12.5" cy="12.5" r="12.5" fill="Blue" stroke="black" stroke-width="1"/>\n                        <foreignObject class="symbol-text-container" x="3.125" width="18.75" height="25" visibility="hidden">\n                        <div style="height: 25px" class="flex-container">\n                            <div width="18.75" class="symbol-text-element">\n                                \n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
    },
    annotations: null,
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: null,
    height: 25,
    width: 25,
  },
  {
    id: "greenSignalPath",
    addInfo: [
      {
        title: "Green Signal Path",
        toolTip: "Show Green Communication Flow",
      },
    ],
    type: "Straight",
    targetDecorator: {
      shape: "Arrow",
      style: {
        fill: "LimeGreen",
        strokeColor: "LimeGreen",
        strokeWidth: 1,
      },
    },
    sourceDecorator: {
      shape: "None",
    },
    style: {
      fill: "LimeGreen",
      strokeColor: "LimeGreen",
      strokeWidth: 1,
    },
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "redSignalPath",
    addInfo: [
      {
        title: "Red Signal Path",
        toolTip: "Show Red Communication Flow",
      },
    ],
    type: "Straight",
    targetDecorator: {
      shape: "Arrow",
      style: {
        fill: "Red",
        strokeColor: "Red",
        strokeWidth: 1,
      },
    },
    sourceDecorator: {
      shape: "None",
    },
    style: {
      fill: "Red",
      strokeColor: "Red",
      strokeWidth: 1,
    },
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "blueSignalPath",
    addInfo: [
      {
        title: "Blue Signal Path",
        toolTip: "Show Blue Communication Flow",
      },
    ],
    type: "Straight",
    targetDecorator: {
      shape: "Arrow",
      style: {
        fill: "Blue",
        strokeColor: "Blue",
        strokeWidth: 1,
      },
    },
    sourceDecorator: {
      shape: "None",
    },
    style: {
      fill: "Blue",
      strokeColor: "Blue",
      strokeWidth: 1,
    },
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "locationOfOperation",
    addInfo: [
      {
        title: "Location of Operation",
        toolTip: "Identify Operation Location",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Location\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Location",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "siteOfOperationRect",
    addInfo: [
      {
        title: "Site of Operation",
        toolTip: "Identify Operation Site",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Site\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Site",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "mainArea",
    addInfo: [
      {
        title: "Main Area",
        toolTip: "Identify The Main Area",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="200" width="800" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="100" width="600" height="200" visibility="hidden">\n                        <div style="height: 200px" class="flex-container">\n                            <div width="600" class="symbol-text-element">\n                                Main Area\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Main Area",
        offset: {
          x: 0.5,
          y: 0,
        },
        margin: {
          bottom: 20,
        },
      },
    ],
    width: 200,
    height: 200,
    ports: [],
    style: {
      strokeWidth: 4,
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "siteOfOperation",
    addInfo: [
      {
        title: "Site of Operation",
        toolTip: "Identify a Site",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)"><rect height="50" width="50" fill="transparent" stroke-width="0" /><path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" d="M 25 0 L 0 25 M 25 0 L 50 25 M 5 20 L 45 20 M 10 20 L 10 50 L 40 50 L 40 20"/><rect vector-effect="non-scaling-stroke" x ="20" y = "25" height="22.5" width="10" fill="#e9eff7" stroke-width="1" stroke="black"/><rect vector-effect="non-scaling-stroke" x="10" y="47.5" width="30" height="2.5" fill="url(#Pattern1)" stroke="black" stroke-width="1"/></g>',
    },
    height: 250,
    width: 250,
    annotations: [
      {
        content: "Site",
        verticalAlignment: "Bottom",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 20,
        },
      },
    ],
  },
  {
    id: "workingareaAL",
    addInfo: [
      {
        title: "Working Area",
        toolTip: "Identify a Working Area",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g   transform="translate(2, 2)">\n                        <rect height="150" width="150" fill="transparent" stroke-width="0" /> \n                        <circle vector-effect="non-scaling-stroke" cx="75" cy="75" r="75" fill="none" stroke="black" stroke-width="1"/>\n                        <foreignObject class="symbol-text-container" x="18.75" width="112.5" height="150" visibility="hidden">\n                        <div style="height: 150px" class="flex-container">\n                            <div width="112.5" class="symbol-text-element">\n                                Working Area\n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
    },
    annotations: [
      {
        content: "Working Area",
      },
    ],
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: null,
    height: 150,
    width: 150,
  },
  {
    id: "locationAL",
    addInfo: [
      {
        title: "Location",
        toolTip: "Identify a Location",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g   transform="translate(2, 2)">\n                        <rect height="60" width="60" fill="transparent" stroke-width="0" /> \n                        <circle vector-effect="non-scaling-stroke" cx="30" cy="30" r="30" fill="none" stroke="black" stroke-width="1"/>\n                        <foreignObject class="symbol-text-container" x="7.5" width="45" height="60" visibility="hidden">\n                        <div style="height: 60px" class="flex-container">\n                            <div width="45" class="symbol-text-element">\n                                Locaiton\n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
    },
    annotations: [
      {
        content: "Locaiton",
      },
    ],
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: null,
    height: 60,
    width: 60,
  },
  {
    id: "mobilityAL",
    addInfo: [
      {
        title: "Mobility",
        toolTip: "Movement of a Person",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="10" width="10" stroke="none" fill="none"/>\n                    <path d="M 0 4, S 2.5 1.5, 5 4 M 5 4, S 7.5 6.5, 10 4 M 0 6, S 2.5 3.5, 5 6 M 5 6, S 7.5 8.5, 10 6" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="none"/>\n                    </g>',
    },
    height: 50,
    width: 50,
  },
  {
    id: "separationLineComm",
    addInfo: [
      {
        title: "Separation Line",
        toolTip: "Use to Show Separation",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <g>\n                        <rect width="5" height="10" fill="transparent" stroke-width="0"/>\n                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dasharray="10 5" d="M 2.5 0 L 2.5 10"/> \n                    </g>                    \n                </g>',
    },
    constraints: 4753134,
    height: 400,
    width: 30,
  },
  {
    id: "time",
    addInfo: [
      {
        title: "Time",
        toolTip: "Identify a Time",
      },
    ],
    type: "Straight",
    annotations: [
      {
        content: "Time",
        alignment: "Before",
      },
    ],
    targetDecorator: {
      shape: "Arrow",
      style: null,
    },
    sourceDecorator: {
      shape: "Arrow",
    },
    style: null,
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "progress",
    addInfo: [
      {
        title: "Progress",
        toolTip: "Use to Show Progress",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="20" width="400" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="50" width="300" height="20" visibility="hidden">\n                        <div style="height: 20px" class="flex-container">\n                            <div width="300" class="symbol-text-element">\n                                % Completed\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "% Completed",
      },
    ],
    width: 400,
    height: 20,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "timeLine",
    addInfo: [
      {
        title: "Time Line",
        toolTip: "Use For Graph or Chart",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <g>\n                        <rect width="10" height="5" fill="transparent" stroke-width="0"/>\n                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dasharray="" d="M 0 2.5 L 10 2.5"/>\n                    </g>                    \n                </g>',
    },
    annotations: [
      {
        content: "Time",
        offset: {
          x: 1,
          y: 0.5,
        },
        margin: {
          left: 20,
        },
      },
    ],
    constraints: 4335342,
    height: 30,
    width: 600,
  },
  {
    id: "dateLine",
    addInfo: [
      {
        title: "Date Line",
        toolTip: "Insert a Date Line",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <g>\n                        <rect width="5" height="10" fill="transparent" stroke-width="0"/>\n                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dasharray="" d="M 2.5 0 L 2.5 10"/> \n                    </g>                    \n                </g>',
    },
    annotations: [
      {
        content: "Date",
        offset: {
          x: 0,
          y: 1,
        },
        margin: {
          top: 20,
          left: 10,
        },
      },
    ],
    constraints: 4753134,
    height: 600,
    width: 30,
  },
  {
    id: "principleLineOthers",
    addInfo: [
      {
        title: "PrincipleLine",
        toolTip: "Principle of Operation Line",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <g>\n                        <rect width="10" height="5" fill="transparent" stroke-width="0"/>\n                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dasharray="" d="M 0 2.5 L 10 2.5"/>\n                    </g>                    \n                </g>',
    },
    ports: [
      {
        id: "Center",
        offset: {
          x: 0.5,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "Left",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "Right",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    constraints: 4335342,
    height: 30,
    width: 600,
  },
  {
    id: "note",
    addInfo: [
      {
        title: "Note",
        toolTip: "Represent a Note",
      },
    ],
    annotations: [
      {
        content: "My Note",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transfrom="translate(2,2)">\n                    <rect height="120" width="120" stroke-width="0" fill="transparent" />\n                    <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="white" d = "M 0 0 L 0 120 L 120 120 L 120 20 L 100 0 L 0 0"/>\n                    <polygon vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="white" points="100,0 100,20 120,20"/>\n                    <foreignObject class="symbol-text-container" x="15" width="90" height="120" visibility="hidden">\n                        <div style="height: 120px" class="flex-container">\n                            <div width="90" class="symbol-text-element">\n                                My Note\n                            </div>\n                        </div>\n                    </foreignObject>\n                </g>',
    },
    height: 120,
    width: 120,
  },
  {
    id: "nodeOthers",
    addInfo: [
      {
        title: "Node",
        toolTip: "Represent a Node",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g   transform="translate(2, 2)">\n                        <rect height="30" width="30" fill="transparent" stroke-width="0" /> \n                        <circle vector-effect="non-scaling-stroke" cx="15" cy="15" r="15" fill="White" stroke="black" stroke-width="1"/>\n                        <foreignObject class="symbol-text-container" x="3.75" width="22.5" height="30" visibility="hidden">\n                        <div style="height: 30px" class="flex-container">\n                            <div width="22.5" class="symbol-text-element">\n                                1\n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
    },
    annotations: [
      {
        content: "1",
      },
    ],
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: null,
    height: 30,
    width: 30,
  },
  {
    id: "callOut",
    addInfo: [
      {
        title: "Callout",
        toolTip: "Represent a Callout",
      },
    ],
    annotations: [
      {
        content: "My Text",
        offset: {
          x: 0.5,
          y: 0.4,
        },
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <rect height="250" width="350" fill="transparent" stroke-width="0"/> \n                    <path fill="white" stroke="black" stroke-width="1" vector-effect="non-scaling-stroke" d="M 0 0 L 350 0 L 350 200 L 120 200 L 100 250 L 100 200 L 0 200 L 0 0"/>\n                    <foreignObject class="symbol-text-container" x="43.75" width="262.5" height="250" visibility="hidden">\n                    <div style="height: 250px" class="flex-container">\n                        <div width="262.5" class="symbol-text-element">\n                            My Text\n                        </div>\n                    </div>\n                </foreignObject>        \n                </g>',
    },
    height: 250,
    width: 350,
  },
  {
    id: "nodeTableComm",
    addInfo: [
      {
        title: "Node Table",
        toolTip: "Represents a Table of Node",
      },
    ],
    annotations: [
      {
        content: "Node Number",
        width: 100,
        offset: {
          x: 0.25,
          y: 0.25,
        },
      },
      {
        content: "Information",
        width: 100,
        offset: {
          x: 0.25,
          y: 0.75,
        },
      },
      {
        content: "1",
        width: 100,
        offset: {
          x: 0.75,
          y: 0.25,
        },
      },
      {
        content: "",
        width: 100,
        offset: {
          x: 0.75,
          y: 0.75,
        },
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                            <rect height="100" width="200" fill="transparent" stroke-width="0"/>\n                            undefined<g transform="translate(0)">\n            <rect vector-effect="non-scaling-stroke" fill="white" stroke-width="1" stroke="black" height="100" width="100"/>\n            <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" d="M 0 50 L 100 50"/>\n            <text class="symbol-text-container" visibility="hidden" lengthAdjust="spacingAndGlyphs" font-size="10px" font-weight="bold"><tspan x="20" y="30">Title</tspan></text>\n            <text class="symbol-text-container" visibility="hidden" lengthAdjust="spacingAndGlyphs" font-size="10px" font-weight="bold"><tspan x="20" y="80">Value</tspan></text> \n            </g><g transform="translate(100)">\n            <rect vector-effect="non-scaling-stroke" fill="white" stroke-width="1" stroke="black" height="100" width="100"/>\n            <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" d="M 0 50 L 100 50"/>\n            <text class="symbol-text-container" visibility="hidden" lengthAdjust="spacingAndGlyphs" font-size="10px" font-weight="bold"><tspan x="20" y="30">Title</tspan></text>\n            <text class="symbol-text-container" visibility="hidden" lengthAdjust="spacingAndGlyphs" font-size="10px" font-weight="bold"><tspan x="20" y="80">Value</tspan></text> \n            </g>\n                        </g>',
    },
    height: 100,
    width: 200,
  },
  {
    id: "statement",
    shape: {
      type: "Native",
      content:
        '<g>\n                    <rect height="30" width="100" fill="transparent" stroke-width="0"/>\n                    <foreignObject class="symbol-text-container" x="0" y="25" width="100" height="30" visibility="hidden">\n                    <div style="height: 30px" class="flex-container">\n                        <div width="100" class="symbol-text-element">\n                            Statement\n                        </div>\n                    </div>\n                    </foreignObject>     \n                </g>',
    },
    addInfo: [
      {
        title: "Statement",
        toolTip: "Identify a Statement",
      },
    ],
    annotations: [
      {
        content: "Statement",
        style: {
          bold: true,
          fontSize: 15,
          italic: true,
        },
      },
    ],
    height: 30,
    width: 100,
  },
  {
    id: "numberIdentification",
    shape: {
      type: "Native",
      content:
        '<g>\n                    <rect height="30" width="100" fill="transparent" stroke-width="0"/>\n                    <foreignObject class="symbol-text-container" x="0" y="25" width="100" height="30" visibility="hidden">\n                    <div style="height: 30px" class="flex-container">\n                        <div width="100" class="symbol-text-element">\n                            #1\n                        </div>\n                    </div>\n                    </foreignObject>     \n                </g>',
    },
    addInfo: [
      {
        title: "Number Identification",
        toolTip: "Use to Identify Entity",
      },
    ],
    annotations: [
      {
        content: "#1",
        style: {
          bold: true,
          fontSize: 15,
          italic: true,
        },
      },
    ],
    height: 30,
    width: 100,
  },
  {
    id: "entityInclusionLineHorizontal",
    addInfo: [
      {
        title: "Entity Inclusion Line Horizontal",
        toolTip: "Entity has Entities",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <g>\n                        <rect width="10" height="5" fill="transparent" stroke-width="0"/>\n                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dasharray="" d="M 0 2.5 L 10 2.5"/>\n                    </g>                    \n                </g>',
    },
    ports: [
      {
        id: "Center",
        offset: {
          x: 0.5,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "Left",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "Right",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    constraints: 4335342,
    height: 30,
    width: 600,
  },
  {
    id: "entityInclusionLineVertical",
    addInfo: [
      {
        title: "Entity Inclusion Line Vertical",
        toolTip: "Entity has Entities",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <g>\n                        <rect width="5" height="10" fill="transparent" stroke-width="0"/>\n                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dasharray="" d="M 2.5 0 L 2.5 10"/> \n                    </g>                    \n                </g>',
    },
    ports: [
      {
        id: "Center",
        offset: {
          x: 0.5,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "Top",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "Right",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    constraints: 4753134,
    height: 600,
    width: 30,
  },
  {
    id: "changeofApplication",
    addInfo: [
      {
        title: "Change of Application",
        toolTip: "Communication change Application Tablulated Form",
      },
    ],
    annotations: [
      {
        content: "Communication",
        width: 100,
        offset: {
          x: 0.16666666666666666,
          y: 0.25,
        },
      },
      {
        content: "",
        width: 100,
        offset: {
          x: 0.16666666666666666,
          y: 0.75,
        },
      },
      {
        content: "Application Value",
        width: 100,
        offset: {
          x: 0.5,
          y: 0.25,
        },
      },
      {
        content: "",
        width: 100,
        offset: {
          x: 0.5,
          y: 0.75,
        },
      },
      {
        content: "Communication Function",
        width: 100,
        offset: {
          x: 0.8333333333333333,
          y: 0.25,
        },
      },
      {
        content: "",
        width: 100,
        offset: {
          x: 0.8333333333333333,
          y: 0.75,
        },
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                            <rect height="100" width="300" fill="transparent" stroke-width="0"/>\n                            undefined<g transform="translate(0)">\n            <rect vector-effect="non-scaling-stroke" fill="white" stroke-width="1" stroke="black" height="100" width="100"/>\n            <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" d="M 0 50 L 100 50"/>\n            <text class="symbol-text-container" visibility="hidden" lengthAdjust="spacingAndGlyphs" font-size="10px" font-weight="bold"><tspan x="20" y="30">Title</tspan></text>\n            <text class="symbol-text-container" visibility="hidden" lengthAdjust="spacingAndGlyphs" font-size="10px" font-weight="bold"><tspan x="20" y="80">Value</tspan></text> \n            </g><g transform="translate(100)">\n            <rect vector-effect="non-scaling-stroke" fill="white" stroke-width="1" stroke="black" height="100" width="100"/>\n            <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" d="M 0 50 L 100 50"/>\n            <text class="symbol-text-container" visibility="hidden" lengthAdjust="spacingAndGlyphs" font-size="10px" font-weight="bold"><tspan x="20" y="30">Title</tspan></text>\n            <text class="symbol-text-container" visibility="hidden" lengthAdjust="spacingAndGlyphs" font-size="10px" font-weight="bold"><tspan x="20" y="80">Value</tspan></text> \n            </g><g transform="translate(200)">\n            <rect vector-effect="non-scaling-stroke" fill="white" stroke-width="1" stroke="black" height="100" width="100"/>\n            <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" d="M 0 50 L 100 50"/>\n            <text class="symbol-text-container" visibility="hidden" lengthAdjust="spacingAndGlyphs" font-size="10px" font-weight="bold"><tspan x="20" y="30">Title</tspan></text>\n            <text class="symbol-text-container" visibility="hidden" lengthAdjust="spacingAndGlyphs" font-size="10px" font-weight="bold"><tspan x="20" y="80">Value</tspan></text> \n            </g>\n                        </g>',
    },
    height: 100,
    width: 300,
  },
  {
    id: "changeofApplication1",
    addInfo: [
      {
        title: "Change of Application",
        toolTip: "Communication Change Application Graphical Form",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                        <rect width="10" height="10" fill="transparent" stroke-width="0" />\n                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1.5" fill="transparent" d="M 0.5 10 L 0.5 0 M 0 9.5 L 10 9.5" />\n                    </g>',
    },
    constraints: 5240430,
    annotations: [
      {
        content: "Communication",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 10,
        },
      },
      {
        content: "Application",
        offset: {
          x: 0,
          y: 0.5,
        },
        margin: {
          right: 10,
        },
      },
    ],
    height: 600,
    width: 600,
  },
  {
    id: "graphLine",
    addInfo: [
      {
        title: "Graph Line",
        toolTip: "Use to Draw Graph",
      },
    ],
    type: "Straight",
    targetDecorator: {
      shape: "None",
      style: null,
    },
    sourceDecorator: {
      shape: "None",
    },
    style: null,
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "graphPoint",
    addInfo: [
      {
        title: "Graph Point",
        toolTip: "Use to Draw Graph",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  class="point-circle" transform="translate(2, 2)">\n                        <rect height="10" width="10" fill="transparent" stroke-width="0" /> \n                        <circle vector-effect="non-scaling-stroke" cx="5" cy="5" r="5" fill="black" stroke="black" stroke-width="1"/>\n                        <foreignObject class="symbol-text-container" x="1.25" width="7.5" height="10" visibility="hidden">\n                        <div style="height: 10px" class="flex-container">\n                            <div width="7.5" class="symbol-text-element">\n                                \n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
    },
    annotations: null,
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: null,
    height: 10,
    width: 10,
  },
  {
    id: "graphLineAndPoint",
    addInfo: [
      {
        title: "Graph Line and Point",
        toolTip: "Use to Draw Graph",
      },
    ],
    type: "Straight",
    targetDecorator: {
      shape: "Circle",
      style: null,
    },
    sourceDecorator: {
      shape: "None",
    },
    style: null,
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "xAxis",
    addInfo: [
      {
        title: "X-Axis",
        toolTip: "Use to Graph",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <g>\n                        <rect width="10" height="5" fill="transparent" stroke-width="0"/>\n                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dasharray="" d="M 0 2.5 L 10 2.5"/>\n                    </g>                    \n                </g>',
    },
    annotations: [
      {
        content: "X-Axis",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 15,
        },
      },
    ],
    constraints: 4335342,
    height: 30,
    width: 600,
  },
  {
    id: "yAxis",
    addInfo: [
      {
        title: "Y-Axis",
        toolTip: "Use to Graph",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <g>\n                        <rect width="5" height="10" fill="transparent" stroke-width="0"/>\n                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dasharray="" d="M 2.5 0 L 2.5 10"/> \n                    </g>                    \n                </g>',
    },
    annotations: [
      {
        content: "X-Axis",
        offset: {
          x: 0,
          y: 0.5,
        },
        margin: {
          right: 15,
        },
      },
    ],
    constraints: 4753134,
    height: 600,
    width: 30,
  },
  {
    id: "informationlabel",
    addInfo: [
      {
        title: "Information Label",
        toolTip: "Show More Entity Info",
      },
    ],
    type: "Bezier",
    annotations: [
      {
        content: "Label",
        alignment: "Before",
      },
    ],
    targetDecorator: {
      shape: "Arrow",
      style: null,
    },
    sourceDecorator: {
      shape: "None",
    },
    style: null,
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "communication12",
    addInfo: [
      {
        title: "Communication",
        toolTip: "Communication Work Related",
      },
    ],
    type: "Bezier",
    annotations: [
      {
        content: "Communicate",
        alignment: "Before",
      },
    ],
    targetDecorator: {
      shape: "Arrow",
      style: null,
    },
    sourceDecorator: {
      shape: "None",
    },
    style: null,
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "toDO",
    addInfo: [
      {
        title: "To Do",
        toolTip: "Use With Other Entity",
      },
    ],
    type: "Straight",
    annotations: [
      {
        content: "To Do",
        alignment: "Before",
      },
    ],
    targetDecorator: {
      shape: "Arrow",
      style: null,
    },
    sourceDecorator: {
      shape: "None",
    },
    style: null,
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "pointTo",
    addInfo: [
      {
        title: "Point To",
        toolTip: "Word Point To Entity",
      },
    ],
    type: "Straight",
    annotations: [
      {
        content: "Point To",
        alignment: "Before",
      },
    ],
    targetDecorator: {
      shape: "Arrow",
      style: null,
    },
    sourceDecorator: {
      shape: "None",
    },
    style: null,
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "giveRiseTo",
    addInfo: [
      {
        title: "Give Rise To",
        toolTip: "Entity Give Rise to Entity",
      },
    ],
    type: "Straight",
    annotations: [
      {
        content: "Give Rise To",
        alignment: "Before",
      },
    ],
    targetDecorator: {
      shape: "Arrow",
      style: null,
    },
    sourceDecorator: {
      shape: "None",
    },
    style: null,
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "errorToProblem",
    addInfo: [
      {
        title: "Error to Problem",
        toolTip: "Comm Error Rise to Problem",
      },
    ],
    type: "Straight",
    annotations: [
      {
        content: "Give Rise To",
        alignment: "Before",
      },
    ],
    targetDecorator: {
      shape: "Arrow",
      style: null,
    },
    sourceDecorator: {
      shape: "None",
    },
    style: null,
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "relatedTo",
    addInfo: [
      {
        title: "Related To",
        toolTip: "Entity Related to Entity",
      },
    ],
    type: "Straight",
    annotations: [
      {
        content: "Related To",
        alignment: "Before",
      },
    ],
    targetDecorator: {
      shape: "Arrow",
      style: null,
    },
    sourceDecorator: {
      shape: "None",
    },
    style: null,
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "by",
    addInfo: [
      {
        title: "By",
        toolTip: "Entity Related to Entity By Entity",
      },
    ],
    type: "Straight",
    annotations: [
      {
        content: "By",
        alignment: "Before",
      },
    ],
    targetDecorator: {
      shape: "Arrow",
      style: null,
    },
    sourceDecorator: {
      shape: "None",
    },
    style: null,
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "depend",
    addInfo: [
      {
        title: "Depend",
        toolTip: "Entity Depend on Entity",
      },
    ],
    type: "Straight",
    annotations: [
      {
        content: "Depend",
        alignment: "Before",
      },
    ],
    targetDecorator: {
      shape: "Arrow",
      style: null,
    },
    sourceDecorator: {
      shape: "None",
    },
    style: null,
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "agree",
    addInfo: [
      {
        title: "Agree",
        toolTip: "Entity Agree With Entity",
      },
    ],
    type: "Straight",
    annotations: [
      {
        content: "Agree",
        alignment: "Before",
      },
    ],
    targetDecorator: {
      shape: "Arrow",
      style: null,
    },
    sourceDecorator: {
      shape: "None",
    },
    style: null,
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "match",
    addInfo: [
      {
        title: "Match",
        toolTip: "Entity Match With Entity",
      },
    ],
    type: "Straight",
    annotations: [
      {
        content: "Match",
        alignment: "Before",
      },
    ],
    targetDecorator: {
      shape: "Arrow",
      style: null,
    },
    sourceDecorator: {
      shape: "None",
    },
    style: null,
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "have",
    addInfo: [
      {
        title: "Have",
        toolTip: "Entity Have Entity",
      },
    ],
    type: "Straight",
    annotations: [
      {
        content: "Have",
        alignment: "Before",
      },
    ],
    targetDecorator: {
      shape: "Arrow",
      style: null,
    },
    sourceDecorator: {
      shape: "None",
    },
    style: null,
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "Interact",
    addInfo: [
      {
        title: "Interact",
        toolTip: "Entity Interact Entity",
      },
    ],
    type: "Straight",
    annotations: [
      {
        content: "Have",
        alignment: "Before",
      },
    ],
    targetDecorator: {
      shape: "Arrow",
      style: null,
    },
    sourceDecorator: {
      shape: "None",
    },
    style: null,
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "Use",
    addInfo: [
      {
        title: "Use",
        toolTip: "Entity Use Entity",
      },
    ],
    type: "Straight",
    annotations: [
      {
        content: "Use",
        alignment: "Before",
      },
    ],
    targetDecorator: {
      shape: "Arrow",
      style: null,
    },
    sourceDecorator: {
      shape: "None",
    },
    style: null,
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "compare",
    addInfo: [
      {
        title: "Compare",
        toolTip: "Entity Compare Entity",
      },
    ],
    type: "Straight",
    annotations: [
      {
        content: "Compare",
        alignment: "Before",
      },
    ],
    targetDecorator: {
      shape: "Arrow",
      style: null,
    },
    sourceDecorator: {
      shape: "None",
    },
    style: null,
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "attach",
    addInfo: [
      {
        title: "Attach",
        toolTip: "Entity Attach to Entity",
      },
    ],
    type: "Straight",
    annotations: [
      {
        content: "Attach",
        alignment: "Before",
      },
    ],
    targetDecorator: {
      shape: "Arrow",
      style: null,
    },
    sourceDecorator: {
      shape: "None",
    },
    style: null,
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "identify",
    addInfo: [
      {
        title: "Identify",
        toolTip: "Entity Identify to Entity",
      },
    ],
    type: "Straight",
    annotations: [
      {
        content: "Identify",
        alignment: "Before",
      },
    ],
    targetDecorator: {
      shape: "Arrow",
      style: null,
    },
    sourceDecorator: {
      shape: "None",
    },
    style: null,
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "define",
    addInfo: [
      {
        title: "Define",
        toolTip: "Entity Define to Entity",
      },
    ],
    type: "Straight",
    annotations: [
      {
        content: "Define",
        alignment: "Before",
      },
    ],
    targetDecorator: {
      shape: "Arrow",
      style: null,
    },
    sourceDecorator: {
      shape: "None",
    },
    style: null,
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "visuallyIdentify",
    addInfo: [
      {
        title: "isually Identify",
        toolTip: "Entity isually Identify to Entity",
      },
    ],
    type: "Straight",
    annotations: [
      {
        content: "isually Identify",
        alignment: "Before",
      },
    ],
    targetDecorator: {
      shape: "Arrow",
      style: null,
    },
    sourceDecorator: {
      shape: "None",
    },
    style: null,
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "curlBracesLeft1",
    addInfo: [
      {
        title: "Curl Braces",
        toolTip: "Left Braces",
      },
    ],
    annotations: [
      {
        content: "Text",
        offset: {
          x: 0,
          y: 0.5,
        },
        margin: {
          right: 15,
        },
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2,2)">\n                    <rect height="120" width="30" stroke-width="1" stroke="1" fill="transparent"/>\n                    <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" d="M 30 0 A 15 20 0 0 0 15 20 L 15 50 A 15 10 0 0 1 0 60 A 15 10 0 0 1 15 70 L 15 100 A 15 20 0 0 0 30 120"/>\n                </g>',
    },
    height: 120,
    width: 40,
  },
  {
    id: "curlBracesRight2",
    addInfo: [
      {
        title: "Curl Braces",
        toolTip: "Right Braces",
      },
    ],
    annotations: [
      {
        content: "Text",
        offset: {
          x: 1,
          y: 0.5,
        },
        margin: {
          left: 15,
        },
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect height="120" width="30" stroke-width="1" stroke="1" fill="transparent"/>\n                    <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" d="M 0 0 A 15 20 0 0 1 15 20 L 15 50 A 15 10 0 0 0 30 60 A 15 10 0 0 0 15 70 L 15 100 A 15 20 0 0 1 0 120" />\n                </g>',
    },
    height: 120,
    width: 40,
  },
  {
    id: "physicalSystem",
    addInfo: [
      {
        title: "Physical System",
        toolTip: "Identify a Person",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)"><rect vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" x="0" y="0" height="27" width="12"/><circle vector-effect="non-scaling-stroke" cx="6" cy="6" r="5" fill="transparent" stroke="black" stroke-width="1" /><circle vector-effect="non-scaling-stroke" cx="4.0" cy="4.5" r="1" fill="black" /><circle vector-effect="non-scaling-stroke" cx="8.0" cy="4.5" r="1.0" fill="black" /><ellipse vector-effect="non-scaling-stroke" cx="6.0" cy="9.0" rx="2.0" ry="0.75" fill="transparent" stroke="black" stroke-width="1"/><path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 6 11 L 6 16 L 1 26 M 6 16 L 11 26 M 1 13.5 L 11 13.5"/></g>',
    },
    height: 80,
    width: 35.556,
    annotations: [
      {
        content: "System",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 15,
        },
        style: {
          textWrapping: "NoWrap",
        },
      },
    ],
    style: {
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftCenter",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "LeftTop",
        offset: {
          x: 0,
          y: 0.25,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "LeftBottom",
        offset: {
          x: 0,
          y: 0.75,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "Bottom",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightCenter",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightTop",
        offset: {
          x: 1,
          y: 0.25,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightBottom",
        offset: {
          x: 1,
          y: 0.75,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "Top",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
  },
  {
    id: "physicalSystem1",
    addInfo: [
      {
        title: "Physical System",
        toolTip: "Identify a Person",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)"><rect height="25" width="10" fill="transparent" stroke-width="0"/><circle vector-effect="non-scaling-stroke" cx="5" cy="5" r="5" fill="transparent" stroke="black" stroke-width="1" /><circle vector-effect="non-scaling-stroke" cx="3.0" cy="3.5" r="1" fill="black" /><circle vector-effect="non-scaling-stroke" cx="7.0" cy="3.5" r="1" fill="black" /><ellipse vector-effect="non-scaling-stroke" cx="5.0" cy="8.0" rx="2.0" ry="0.75" fill="transparent" stroke="black" stroke-width="1"/><path vector-effect="non-scaling-stroke" fill ="transparent" stroke="black" stroke-width="1" d="M 5 10 L 5 15 L 0 25 M 5 15 L 10 25 M 0 12.5 L 10 12.5"/></g>',
    },
    height: 80,
    width: 35.556,
    annotations: [
      {
        content: "System",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 15,
        },
        style: {
          textWrapping: "NoWrap",
        },
      },
    ],
    style: {
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftCenter",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "LeftTop",
        offset: {
          x: 0,
          y: 0.25,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "LeftBottom",
        offset: {
          x: 0,
          y: 0.75,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "Bottom",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightCenter",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightTop",
        offset: {
          x: 1,
          y: 0.25,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightBottom",
        offset: {
          x: 1,
          y: 0.75,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "Top",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
  },
  {
    id: "s[n]",
    addInfo: [
      {
        title: "S[n]",
        toolTip: "Identify a Person",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)"><rect vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" x="0" y="0" height="27" width="12"/><circle vector-effect="non-scaling-stroke" cx="6" cy="6" r="5" fill="transparent" stroke="black" stroke-width="1" /><circle vector-effect="non-scaling-stroke" cx="4.0" cy="4.5" r="1" fill="black" /><circle vector-effect="non-scaling-stroke" cx="8.0" cy="4.5" r="1.0" fill="black" /><ellipse vector-effect="non-scaling-stroke" cx="6.0" cy="9.0" rx="2.0" ry="0.75" fill="transparent" stroke="black" stroke-width="1"/><path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 6 11 L 6 16 L 1 26 M 6 16 L 11 26 M 1 13.5 L 11 13.5"/></g>',
    },
    height: 80,
    width: 35.556,
    annotations: [
      {
        content: "Sn",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 15,
        },
        style: {
          textWrapping: "NoWrap",
        },
      },
    ],
    style: {
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftCenter",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "LeftTop",
        offset: {
          x: 0,
          y: 0.25,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "LeftBottom",
        offset: {
          x: 0,
          y: 0.75,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "Bottom",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightCenter",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightTop",
        offset: {
          x: 1,
          y: 0.25,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightBottom",
        offset: {
          x: 1,
          y: 0.75,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "Top",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
  },
  {
    id: "s[n]1",
    addInfo: [
      {
        title: "S[n]",
        toolTip: "Identify a Person",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)"><rect height="25" width="10" fill="transparent" stroke-width="0"/><circle vector-effect="non-scaling-stroke" cx="5" cy="5" r="5" fill="transparent" stroke="black" stroke-width="1" /><circle vector-effect="non-scaling-stroke" cx="3.0" cy="3.5" r="1" fill="black" /><circle vector-effect="non-scaling-stroke" cx="7.0" cy="3.5" r="1" fill="black" /><ellipse vector-effect="non-scaling-stroke" cx="5.0" cy="8.0" rx="2.0" ry="0.75" fill="transparent" stroke="black" stroke-width="1"/><path vector-effect="non-scaling-stroke" fill ="transparent" stroke="black" stroke-width="1" d="M 5 10 L 5 15 L 0 25 M 5 15 L 10 25 M 0 12.5 L 10 12.5"/></g>',
    },
    height: 80,
    width: 35.556,
    annotations: [
      {
        content: "Sn",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 15,
        },
        style: {
          textWrapping: "NoWrap",
        },
      },
    ],
    style: {
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftCenter",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "LeftTop",
        offset: {
          x: 0,
          y: 0.25,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "LeftBottom",
        offset: {
          x: 0,
          y: 0.75,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "Bottom",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightCenter",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightTop",
        offset: {
          x: 1,
          y: 0.25,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightBottom",
        offset: {
          x: 1,
          y: 0.75,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "Top",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
  },
  {
    id: "x[n]",
    addInfo: [
      {
        title: "x[n]",
        toolTip: "Identify a Person",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)"><rect vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" x="0" y="0" height="27" width="12"/><circle vector-effect="non-scaling-stroke" cx="6" cy="6" r="5" fill="transparent" stroke="black" stroke-width="1" /><circle vector-effect="non-scaling-stroke" cx="4.0" cy="4.5" r="1" fill="black" /><circle vector-effect="non-scaling-stroke" cx="8.0" cy="4.5" r="1.0" fill="black" /><ellipse vector-effect="non-scaling-stroke" cx="6.0" cy="9.0" rx="2.0" ry="0.75" fill="transparent" stroke="black" stroke-width="1"/><path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 6 11 L 6 16 L 1 26 M 6 16 L 11 26 M 1 13.5 L 11 13.5"/></g>',
    },
    height: 80,
    width: 35.556,
    annotations: [
      {
        content: "Xn",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 15,
        },
        style: {
          textWrapping: "NoWrap",
        },
      },
    ],
    style: {
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftCenter",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "LeftTop",
        offset: {
          x: 0,
          y: 0.25,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "LeftBottom",
        offset: {
          x: 0,
          y: 0.75,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "Bottom",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightCenter",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightTop",
        offset: {
          x: 1,
          y: 0.25,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightBottom",
        offset: {
          x: 1,
          y: 0.75,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "Top",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
  },
  {
    id: "x[n]1",
    addInfo: [
      {
        title: "x[n]",
        toolTip: "Identify a Person",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)"><rect height="25" width="10" fill="transparent" stroke-width="0"/><circle vector-effect="non-scaling-stroke" cx="5" cy="5" r="5" fill="transparent" stroke="black" stroke-width="1" /><circle vector-effect="non-scaling-stroke" cx="3.0" cy="3.5" r="1" fill="black" /><circle vector-effect="non-scaling-stroke" cx="7.0" cy="3.5" r="1" fill="black" /><ellipse vector-effect="non-scaling-stroke" cx="5.0" cy="8.0" rx="2.0" ry="0.75" fill="transparent" stroke="black" stroke-width="1"/><path vector-effect="non-scaling-stroke" fill ="transparent" stroke="black" stroke-width="1" d="M 5 10 L 5 15 L 0 25 M 5 15 L 10 25 M 0 12.5 L 10 12.5"/></g>',
    },
    height: 80,
    width: 35.556,
    annotations: [
      {
        content: "Xn",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 15,
        },
        style: {
          textWrapping: "NoWrap",
        },
      },
    ],
    style: {
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftCenter",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "LeftTop",
        offset: {
          x: 0,
          y: 0.25,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "LeftBottom",
        offset: {
          x: 0,
          y: 0.75,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "Bottom",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightCenter",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightTop",
        offset: {
          x: 1,
          y: 0.25,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightBottom",
        offset: {
          x: 1,
          y: 0.75,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "Top",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
  },
  {
    id: "physicalSystem2",
    addInfo: [
      {
        title: "Physical System",
        toolTip: "Identify a Person",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                System\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "System",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "s",
    addInfo: [
      {
        title: "S",
        toolTip: "Identify a Person",
      },
    ],
    annotations: [
      {
        content: "S",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <rect x = "0" y = "0" vector-effect="non-scaling-stroke" height="80" width="160" stroke="black" stroke-dasharray="8 4" stroke-width="1" fill="transparent"/>\n                    <rect x="30" y="20" width="100" height="40" fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />\n                    <foreignObject class="symbol-text-container" x="20" width="120" height="80" visibility="hidden">\n                    <div style="height: 80px" class="flex-container">\n                        <div width="120" class="symbol-text-element">\n                            S\n                        </div>\n                    </div>\n                    </foreignObject> \n                    </g>',
    },
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    height: 80,
    width: 160,
  },
  {
    id: "S",
    addInfo: [
      {
        title: "S",
        toolTip: "Identify a Person",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                S\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "S",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "groupPhysicalSystem",
    addInfo: [
      {
        title: "Group Physical System",
        toolTip: "Identify Group of Person",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)"><rect vector-effect="non-scaling-stroke" height="27" width="36" stroke="black" fill="transparent" stroke-width="1"/><circle vector-effect="non-scaling-stroke" cx="6" cy="6" r="5" fill="transparent" stroke="black" stroke-width="1" /><circle vector-effect="non-scaling-stroke" cx="4.0" cy="4.5" r="1" fill="black" /><circle vector-effect="non-scaling-stroke" cx="8.0" cy="4.5" r="1" fill="black" /><ellipse vector-effect="non-scaling-stroke" cx="6.0" cy="9.0" rx="2.0" ry="0.75" fill="transparent" stroke="black" stroke-width="1"/><path vector-effect="non-scaling-stroke" fill ="transparent" stroke="black" stroke-width="1" d="M 6 11 L 6 16 L 1 26 M 6 16 L 11 26 M 1 13.5 L 11 13.5"/><circle vector-effect="non-scaling-stroke" cx="18" cy="6" r="5" fill="transparent" stroke="black" stroke-width="1" /><circle vector-effect="non-scaling-stroke" cx="16.0" cy="4.5" r="1" fill="black" /><circle vector-effect="non-scaling-stroke" cx="20.0" cy="4.5" r="1" fill="black" /><ellipse vector-effect="non-scaling-stroke" cx="18.0" cy="9.0" rx="2.0" ry="0.75" fill="transparent" stroke="black" stroke-width="1"/><path vector-effect="non-scaling-stroke" fill ="transparent" stroke="black" stroke-width="1" d="M 18 11 L 18 16 L 13 26 M 18 16 L 23 26 M 13 13.5 L 23 13.5"/><circle vector-effect="non-scaling-stroke" fill="black" cx="27" cy="13.5" r="1"/><circle vector-effect="non-scaling-stroke" fill="black" cx="30" cy="13.5" r="1"/><circle vector-effect="non-scaling-stroke" fill="black" cx="33" cy="13.5" r="1"/></g>',
    },
    annotations: [
      {
        content: "Change Shape",
        verticalAlignment: "Bottom",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 20,
        },
      },
    ],
    height: 150,
    width: 200,
    style: {
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
  },
  {
    id: "groupPhysicalSystem1",
    addInfo: [
      {
        title: "Group Physical System",
        toolTip: "Identify Group of Person",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <rect x="0" y="0" height="50" width="100" fill="transparent" stroke-width="0"/>\n                    <rect width="90" height="40" fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />\n                    <rect x="10" y="10" height="40" width="90"  fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>\n                    <foreignObject class="symbol-text-container" x="12.5" width="75" height="50" visibility="hidden">\n                        <div style="height: 50px" class="flex-container">\n                            <div width="75" class="symbol-text-element">\n                                Systems\n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
    },
    annotations: [
      {
        offset: {
          x: 0.55,
          y: 0.5,
        },
        content: "Systems",
      },
    ],
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    height: 100,
    width: 210,
  },
  {
    id: "groupPhysicalSyste2",
    addInfo: [
      {
        title: "Group Physical System",
        toolTip: "Identify Group of Person",
      },
    ],
    annotations: [
      {
        content: "Change shape",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                        <rect x = "0" y = "0" vector-effect="non-scaling-stroke" height="90" width="170" stroke="black" stroke-dasharray="8 4" stroke-width="1" fill="Transparent"/>\n                        <rect x="30" y="15" width="100" height="50" fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />\n                        <rect x="40" y="25" height="50" width="100"  fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>\n                        <foreignObject class="symbol-text-container" x="21.25" width="127.5" height="90" visibility="hidden">\n                        <div style="height: 90px" class="flex-container">\n                            <div width="127.5" class="symbol-text-element">\n                                Change shape\n                            </div>\n                        </div>\n                        </foreignObject>   \n                    </g>',
    },
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    height: 80,
    width: 160,
  },
  {
    id: "s[n]2",
    addInfo: [
      {
        title: "S[n]",
        toolTip: "Represents The Physical System",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Sn\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Sn",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "s[n]3",
    shape: {
      type: "Native",
      content:
        '<g>\n                    <rect height="30" width="100" fill="transparent" stroke-width="0"/>\n                    <foreignObject class="symbol-text-container" x="0" y="25" width="100" height="30" visibility="hidden">\n                    <div style="height: 30px" class="flex-container">\n                        <div width="100" class="symbol-text-element">\n                            Sn\n                        </div>\n                    </div>\n                    </foreignObject>     \n                </g>',
    },
    addInfo: [
      {
        title: "S[n]",
        toolTip: "Represents The Physical System",
      },
    ],
    annotations: [
      {
        content: "Sn",
        style: {
          bold: true,
          fontSize: 15,
          italic: true,
        },
      },
    ],
    height: 30,
    width: 100,
  },
  {
    id: "constantCharacteristics",
    addInfo: [
      {
        title: "Constant Characteristics",
        toolTip: "Physical System Constant Characteristics",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Constant Characteristics\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Constant Characteristics",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "mobilitySystem",
    addInfo: [
      {
        title: "Mobility",
        toolTip: "Identify Our Mobility",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="10" width="10" stroke="none" fill="none"/>\n                    <path d="M 0 4, S 2.5 1.5, 5 4 M 5 4, S 7.5 6.5, 10 4 M 0 6, S 2.5 3.5, 5 6 M 5 6, S 7.5 8.5, 10 6" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="none"/>\n                    </g>',
    },
    height: 50,
    width: 50,
  },
  {
    id: "groupSystem",
    addInfo: [
      {
        title: "Group",
        toolTip: "Use to Group or Add Entities",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="75" width="50" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="6.25" width="37.5" height="75" visibility="hidden">\n                        <div style="height: 75px" class="flex-container">\n                            <div width="37.5" class="symbol-text-element">\n                                Group\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Group",
      },
    ],
    width: 50,
    height: 75,
    ports: [
      {
        id: "left-1",
        offset: {
          x: 0,
          y: 0.25,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "left-2",
        offset: {
          x: 0,
          y: 0.75,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "right",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "continuity",
    addInfo: [
      {
        title: "Continuity",
        toolTip: "Show Continuity of Entity",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2, 2)">\n                    <rect width="10" height="5" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="0" stroke-dasharray = "" />\n                    <circle vector-effect="non-scaling-stroke" cx="3.5" cy="2.5" r="0.4"/>\n                    <circle vector-effect="non-scaling-stroke" cx="5.0" cy="2.5" r="0.4"/>\n                    <circle vector-effect="non-scaling-stroke" cx="6.5" cy="2.5" r="0.4"/>\n                    </g>',
    },
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: [],
    width: 210,
    height: 100,
  },
  {
    id: "linkedNodeSystem",
    addInfo: [
      {
        title: "Linked Node",
        toolTip: "Linked Node",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="12" width="10" stroke="none" fill="none"/>\n                    <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="none" cx="5" cy="5" r="5"/>\n                    <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="none" d="M 2 11 L 8 11 M 2 12 L 8 12"/>     \n                </g>',
    },
    annotations: [
      {
        content: "1",
        offset: {
          x: 0.5,
          y: 0.45,
        },
      },
    ],
    height: 60,
    width: 50,
  },
  {
    id: "theory",
    addInfo: [
      {
        title: "Theory",
        toolTip: "Identify a Theory",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Theory\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Theory",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "theorem",
    addInfo: [
      {
        title: "Theorem",
        toolTip: "Identify a Theorem",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Theorem\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Theorem",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "communicationTheory",
    addInfo: [
      {
        title: "Communication Theory",
        toolTip: "Identify The Communication Theory",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Communication Theory\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Communication Theory",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "informationTheory",
    addInfo: [
      {
        title: "Information Theory",
        toolTip: "Identify a Information Theory",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Information Theory\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Information Theory",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "instrumentationTheory",
    addInfo: [
      {
        title: "Instrumentation Theory",
        toolTip: "Identify the Instrumentation Theory",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Instrumentation Theory\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Instrumentation Theory",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "educationTheory",
    addInfo: [
      {
        title: "Education Theory",
        toolTip: "Identify The Education Theory",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Education Theory\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Education Theory",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "powerTheorem",
    addInfo: [
      {
        title: "Power Theorem",
        toolTip: "Identify The Power Theorem",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Power Theorem\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Power Theorem",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "marketingTheory",
    addInfo: [
      {
        title: "Marketing Theory",
        toolTip: "Identify The Marketing Theory",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Marketing Theory\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Marketing Theory",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "exchangeSystemTheory",
    addInfo: [
      {
        title: "Exchange System Theory",
        toolTip: "Identify The Exchange System Theory",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Exchange System Theory\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Exchange System Theory",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "gammingTheory",
    addInfo: [
      {
        title: "Gamming Theory",
        toolTip: "Identify Gamming Theory",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Gamming Theory\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Gamming Theory",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "workTheorem",
    addInfo: [
      {
        title: "Work Theorem",
        toolTip: "Identify The Work Theorem",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Work Theorem\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Work Theorem",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "reproductionTheory",
    addInfo: [
      {
        title: "Reproduction Theory",
        toolTip: "Identify The Reproduction Theory",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Reproduction Theory\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Reproduction Theory",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "utilizationTheory",
    addInfo: [
      {
        title: "Utilization Theory",
        toolTip: "Identify Our Utilization Theory",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Utilizatin Theory\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Utilizatin Theory",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "t",
    addInfo: [
      {
        title: "T",
        toolTip: "Identify a Theory",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                T\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "T",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "theorem#",
    addInfo: [
      {
        title: "Theorem #",
        toolTip: "Identify a Theorem",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Theorem #\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Theorem #",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "th[n]",
    addInfo: [
      {
        title: "Th[n]",
        toolTip: "Identify a Theorem",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Thn\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Thn",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "communicationTheory1",
    addInfo: [
      {
        title: "Communication Theory",
        toolTip: "Identify The Communication Theory",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Kt\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Kt",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "uT",
    addInfo: [
      {
        title: "UT",
        toolTip: "Identify Our Utilization Theory",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                UT\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "UT",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "interpretationFunction",
    addInfo: [
      {
        title: "Interpretation Function",
        toolTip: "Identify The Interpretation Function",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Interpret\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Interpret",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "interpretationFunction1",
    addInfo: [
      {
        title: "Interpretation Funciton",
        toolTip: "Identify The Interpretation Function",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Int{ }\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Int{ }",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "applyTheory",
    addInfo: [
      {
        title: "Apply Theory",
        toolTip: "Theory Application Function",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Apply\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Apply",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "applyTheory1",
    addInfo: [
      {
        title: "Apply Theory",
        toolTip: "Theory Application Function",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Tr{ }\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Tr{ }",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "presentedTheory",
    addInfo: [
      {
        title: "Presented Theory",
        toolTip: "Identify a Presented Theory",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Presented Theory\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Presented Theory",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "interpretedTheory",
    addInfo: [
      {
        title: "Interpreted Theory",
        toolTip: "Identify an Interpreted Thoery",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Interpreted Theory\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Interpreted Theory",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "presentedTheory1",
    addInfo: [
      {
        title: "Presented Theory",
        toolTip: "Identify a Presented Theory",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                A\'\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "A'",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "interpretedTheory1",
    addInfo: [
      {
        title: "Interpreted Theory",
        toolTip: "Identify an Intepreted Thoery",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                A\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "A",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "reference",
    addInfo: [
      {
        title: "Reference",
        toolTip: "Identify The Given Reference",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                        <rect height="710" width="900" stroke-width="0" fill="transparent" />\n                        <ellipse vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="white" cx="450" cy="355" ry="355" rx="450"/> \n                        <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="white" cx="125" cy="355" r="100" />\n                        <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="white" cx="350" cy="355" r="100" />\n                        <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="white" cx="560" cy="370" r="100" />\n                        <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="white" cx="775" cy="355" r="100" />\n                        <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="white" cx="450" cy="130" r="100" />\n                        <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="white" cx="245" cy="170" r="100" />\n                        <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="white" cx="450" cy="580" r="100" />\n                        <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="white" cx="245" cy="540" r="100" />\n                        <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="white" cx="655" cy="180" r="100" />\n                        <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="white" cx="675" cy="540" r="100" />\n                    </g>',
    },
    annotations: [
      {
        content: "Education Theory",
        offset: {
          x: 0.14,
          y: 0.5,
        },
        width: 75,
      },
      {
        content: "Power Theory",
        offset: {
          x: 0.39,
          y: 0.5,
        },
        width: 75,
      },
      {
        content: "Marketing Theory",
        offset: {
          x: 0.625,
          y: 0.52,
        },
        width: 75,
      },
      {
        content: "Exchange System Theory",
        offset: {
          x: 0.865,
          y: 0.5,
        },
        width: 75,
      },
      {
        content: "Communicaiton Theory",
        offset: {
          x: 0.268,
          y: 0.25,
        },
        width: 75,
      },
      {
        content: "Information Theory",
        offset: {
          x: 0.5,
          y: 0.185,
        },
        width: 75,
      },
      {
        content: "Instrumentation Theory",
        offset: {
          x: 0.725,
          y: 0.255,
        },
        width: 75,
      },
      {
        content: "Gamming Theory",
        offset: {
          x: 0.268,
          y: 0.75,
        },
        width: 75,
      },
      {
        content: "Work Theory",
        offset: {
          x: 0.51,
          y: 0.815,
        },
        width: 75,
      },
      {
        content: "Reproduction Theory",
        offset: {
          x: 0.75,
          y: 0.76,
        },
        width: 75,
      },
      {
        content: "The Given Reference",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 20,
        },
      },
    ],
    height: 355,
    width: 450,
  },
  {
    id: "reference1",
    addInfo: [
      {
        title: "Reference",
        toolTip: "Identify The Given Reference",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <rect height="710" width="900" stroke-width="0" fill="transparent" />\n                    <ellipse vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="white" cx="450" cy="355" ry="355" rx="450"/> \n                    <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="white" cx="125" cy="355" r="100" />\n                    <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="white" cx="350" cy="355" r="100" />\n                    <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="white" cx="560" cy="370" r="100" />\n                    <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="white" cx="775" cy="355" r="100" />\n                    <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="white" cx="450" cy="130" r="100" />\n                    <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="white" cx="245" cy="170" r="100" />\n                    <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="white" cx="450" cy="580" r="100" />\n                    <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="white" cx="245" cy="540" r="100" />\n                    <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="white" cx="655" cy="180" r="100" />\n                    <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="white" cx="675" cy="540" r="100" />\n                </g>',
    },
    annotations: [
      {
        content: "ET",
        offset: {
          x: 0.14,
          y: 0.5,
        },
        width: 75,
      },
      {
        content: "PT",
        offset: {
          x: 0.39,
          y: 0.5,
        },
        width: 75,
      },
      {
        content: "MT",
        offset: {
          x: 0.625,
          y: 0.52,
        },
        width: 75,
      },
      {
        content: "EsT",
        offset: {
          x: 0.865,
          y: 0.5,
        },
        width: 75,
      },
      {
        content: "KT",
        offset: {
          x: 0.268,
          y: 0.25,
        },
        width: 75,
      },
      {
        content: "iT",
        offset: {
          x: 0.5,
          y: 0.185,
        },
        width: 75,
      },
      {
        content: "IT",
        offset: {
          x: 0.725,
          y: 0.255,
        },
        width: 75,
      },
      {
        content: "GT",
        offset: {
          x: 0.268,
          y: 0.75,
        },
        width: 75,
      },
      {
        content: "WT",
        offset: {
          x: 0.51,
          y: 0.815,
        },
        width: 75,
      },
      {
        content: "XT",
        offset: {
          x: 0.75,
          y: 0.76,
        },
        width: 75,
      },
      {
        content: "R",
        offset: {
          x: 0.85,
          y: 1,
        },
      },
    ],
    height: 355,
    width: 450,
  },
  {
    id: "characteristicsTh",
    addInfo: [
      {
        title: "Characteristics",
        toolTip: "Characteristic of Theory",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Theory Characteristics\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Theory Characteristics",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "groupTheoryVertical",
    addInfo: [
      {
        title: "Group",
        toolTip: "Use to Group or Add Entities",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="75" width="50" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="6.25" width="37.5" height="75" visibility="hidden">\n                        <div style="height: 75px" class="flex-container">\n                            <div width="37.5" class="symbol-text-element">\n                                Group\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Group",
      },
    ],
    width: 50,
    height: 75,
    ports: [
      {
        id: "left-1",
        offset: {
          x: 0,
          y: 0.25,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "left-2",
        offset: {
          x: 0,
          y: 0.75,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "right",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "continuity1",
    addInfo: [
      {
        title: "Continuity",
        toolTip: "Show Continuity of Entity",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2, 2)">\n                    <rect width="10" height="5" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="0" stroke-dasharray = "" />\n                    <circle vector-effect="non-scaling-stroke" cx="3.5" cy="2.5" r="0.4"/>\n                    <circle vector-effect="non-scaling-stroke" cx="5.0" cy="2.5" r="0.4"/>\n                    <circle vector-effect="non-scaling-stroke" cx="6.5" cy="2.5" r="0.4"/>\n                    </g>',
    },
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: [],
    width: 210,
    height: 100,
  },
  {
    id: "linkednodeTH",
    addInfo: [
      {
        title: "Linked Node",
        toolTip: "Linked Node",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="12" width="10" stroke="none" fill="none"/>\n                    <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="none" cx="5" cy="5" r="5"/>\n                    <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="none" d="M 2 11 L 8 11 M 2 12 L 8 12"/>     \n                </g>',
    },
    annotations: [
      {
        content: "1",
        offset: {
          x: 0.5,
          y: 0.45,
        },
      },
    ],
    height: 60,
    width: 50,
  },
  {
    id: "fundamentalTheory",
    addInfo: [
      {
        title: "Fundamental Theory",
        toolTip: "Identify The Fundamental of Theory",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Fundamental Theory\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Fundamental Theory",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "fundamentalCommunication",
    addInfo: [
      {
        title: "Fundamental Commmunication",
        toolTip: "Identify The Fundamental of Communication Theory",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Fundamental Communication\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Fundamental Communication",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "fundamentalInformationTheory",
    addInfo: [
      {
        title: "Fundamental Information Theory",
        toolTip: "Identify The Fundamental of Information Theory",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Fundamental Information Theory\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Fundamental Information Theory",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "fundamentalInstrumentationTheory",
    addInfo: [
      {
        title: "Fundamental Instrumentation Theory",
        toolTip: "Identify The Fundamental of Instrumentation Theory",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Fundamental Instrumentation Theory\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Fundamental Instrumentation Theory",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "fundamentalEducation",
    addInfo: [
      {
        title: "Fundamental Education Theory",
        toolTip: "Identify The Fundamental of Education Theory",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Fundamental Education Theory\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Fundamental Education Theory",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "fundamentalPower",
    addInfo: [
      {
        title: "Fundamental Power Theorem",
        toolTip: "Identify The Fundamental of The Power Theorem",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Fundamental Power Theorem\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Fundamental Power Theorem",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "fundamentalMarketingTheory",
    addInfo: [
      {
        title: "Fundamental Marketing Theory",
        toolTip: "Identify The Fundamanetal of Theory of Marketing",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Fundamental Marketing Theory\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Fundamental Marketing Theory",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "fundamentalExchangeSystemTheory",
    addInfo: [
      {
        title: "Fundamental Exchange System Theory",
        toolTip: "Identify The Fundamental of Exchange System Theory",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Fundamental Exchange System Theory\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Fundamental Exchange System Theory",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "fundamentalGammingTheory",
    addInfo: [
      {
        title: "Fundamental Gamming Theory",
        toolTip: "Identify The Fundamental of The Gamming Theory",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Fundamental Gamming Theory\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Fundamental Gamming Theory",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "fundamentalWorkTheory",
    addInfo: [
      {
        title: "Fundamental Work Theory",
        toolTip: "Identify The Fundamental of Work Theory",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Fundamental Work Theory\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Fundamental Work Theory",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "fundamentalReproductionTheory",
    addInfo: [
      {
        title: "Fundamental Reproduction Theory",
        toolTip: "Identify The Fundamental Reporoduction Theory",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Fundamental Reproduction Theory\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Fundamental Reproduction Theory",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "fundamentalUtilizationTheoryFirst",
    addInfo: [
      {
        title: "Fundamental Reproduction Theory",
        toolTip: "Identify The Fundamental of The Reproduction Theory",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Fundamental Reproduction Theory\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Fundamental Reproduction Theory",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "fundamentalPresentedTheory",
    addInfo: [
      {
        title: "Fundamental Presented Theory",
        toolTip: "Identify The Fundamental of a Presented Theory",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Fundamental Presented Theory\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Fundamental Presented Theory",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "fundamentalInterpretedTheory",
    addInfo: [
      {
        title: "Fundamental Interpreted Theory",
        toolTip: "Identify The Fundamental of a Interpreted Theory",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Fundamental Interpreted Theory\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Fundamental Interpreted Theory",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "fundamentalTheory1",
    addInfo: [
      {
        title: "Fundamental Theory",
        toolTip: "Identify The Fundamental Theory",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                fT\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "fT",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "fundamentalCommunicationTheory1",
    addInfo: [
      {
        title: "Fundamental Communication Theory",
        toolTip: "Identify The Fundamental of Communication Theory",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                fKT\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "fKT",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "fundamentalUtilizationTheory1",
    addInfo: [
      {
        title: "Fundamental Utilization Theory",
        toolTip: "Identify The Fundamental of Our Utilization Theory",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                fUT\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "fUT",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "groupFundamental",
    addInfo: [
      {
        title: "Group",
        toolTip: "Use to Group or Add Entities",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="75" width="50" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="6.25" width="37.5" height="75" visibility="hidden">\n                        <div style="height: 75px" class="flex-container">\n                            <div width="37.5" class="symbol-text-element">\n                                Group\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Group",
      },
    ],
    width: 50,
    height: 75,
    ports: [
      {
        id: "left-1",
        offset: {
          x: 0,
          y: 0.25,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "left-2",
        offset: {
          x: 0,
          y: 0.75,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "right",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "linkednodefundamental",
    addInfo: [
      {
        title: "Linked Node",
        toolTip: "Linked Node",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="12" width="10" stroke="none" fill="none"/>\n                    <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="none" cx="5" cy="5" r="5"/>\n                    <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="none" d="M 2 11 L 8 11 M 2 12 L 8 12"/>     \n                </g>',
    },
    annotations: [
      {
        content: "1",
        offset: {
          x: 0.5,
          y: 0.45,
        },
      },
    ],
    height: 60,
    width: 50,
  },
  {
    id: "rightInterface",
    addInfo: [
      {
        title: "Right Interface",
        toolTip: "Interface To The Right",
      },
    ],
    type: "Straight",
    annotations: [
      {
        content: "Interface",
        alignment: "Before",
      },
    ],
    targetDecorator: {
      shape: "Arrow",
      style: {},
    },
    sourceDecorator: {
      shape: "None",
    },
    style: {},
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "leftInterface",
    addInfo: [
      {
        title: "Left Interface",
        toolTip: "Interface To The Left",
      },
    ],
    type: "Straight",
    annotations: [
      {
        content: "Interface",
        alignment: "Before",
      },
    ],
    targetDecorator: {
      shape: "None",
      style: {},
    },
    sourceDecorator: {
      shape: "Arrow",
    },
    style: {},
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "upInterface",
    addInfo: [
      {
        title: "Up Interface",
        toolTip: "Interface To The Top",
      },
    ],
    type: "Straight",
    annotations: [
      {
        content: "Interface",
        alignment: "Before",
      },
    ],
    targetDecorator: {
      shape: "None",
      style: {},
    },
    sourceDecorator: {
      shape: "Arrow",
    },
    style: {},
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "downInterface",
    addInfo: [
      {
        title: "Down Interface",
        toolTip: "Interface Down",
      },
    ],
    type: "Straight",
    annotations: [
      {
        content: "Interface",
        alignment: "Before",
      },
    ],
    targetDecorator: {
      shape: "Arrow",
      style: {},
    },
    sourceDecorator: {
      shape: "None",
    },
    style: {},
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "dependencyInterface",
    addInfo: [
      {
        title: "Dependency Interface",
        toolTip: "Identify Dependency Interface",
      },
    ],
    type: "Straight",
    annotations: [
      {
        content: "Depend",
        alignment: "Before",
      },
    ],
    targetDecorator: {
      shape: "Arrow",
      style: {},
    },
    sourceDecorator: {
      shape: "None",
    },
    style: {},
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "giveRiseInterface",
    addInfo: [
      {
        title: "Give Rise Interface",
        toolTip: "Identify Give Rise Interface",
      },
    ],
    type: "Straight",
    annotations: [
      {
        content: "Give Rise To",
        alignment: "Before",
      },
    ],
    targetDecorator: {
      shape: "Arrow",
      style: {},
    },
    sourceDecorator: {
      shape: "None",
    },
    style: {},
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "pointToInterface",
    addInfo: [
      {
        title: "Point to Interface",
        toolTip: "Identify Point to Interface",
      },
    ],
    type: "Straight",
    annotations: [
      {
        content: "Point To",
        alignment: "Before",
      },
    ],
    targetDecorator: {
      shape: "Arrow",
      style: {},
    },
    sourceDecorator: {
      shape: "None",
    },
    style: {},
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "apply",
    addInfo: [
      {
        title: "Apply",
        toolTip: "Apply Interface",
      },
    ],
    type: "Straight",
    annotations: [
      {
        content: "Apply",
        alignment: "Before",
      },
    ],
    targetDecorator: {
      shape: "Arrow",
      style: null,
    },
    sourceDecorator: {
      shape: "None",
    },
    style: null,
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "execute",
    addInfo: [
      {
        title: "Execute",
        toolTip: "Execute Interface",
      },
    ],
    type: "Straight",
    annotations: [
      {
        content: "Execute",
        alignment: "Before",
      },
    ],
    targetDecorator: {
      shape: "Arrow",
      style: {},
    },
    sourceDecorator: {
      shape: "None",
    },
    style: {},
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "contributeTo",
    addInfo: [
      {
        title: "Contribute To",
        toolTip: "Use to Show Contribution Interface",
      },
    ],
    type: "Straight",
    annotations: [
      {
        content: "contribute to",
        alignment: "Before",
      },
    ],
    targetDecorator: {
      shape: "Arrow",
      style: {},
    },
    sourceDecorator: {
      shape: "None",
    },
    style: {},
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "associate",
    addInfo: [
      {
        title: "Associate",
        toolTip: "System Associates with Theory",
      },
    ],
    type: "Straight",
    annotations: [
      {
        content: "associate",
        alignment: "Before",
      },
    ],
    targetDecorator: {
      shape: "Arrow",
      style: {},
    },
    sourceDecorator: {
      shape: "None",
    },
    style: {},
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "enable",
    addInfo: [
      {
        title: "Enable",
        toolTip: "Use For Enable Relationship",
      },
    ],
    type: "Straight",
    annotations: [
      {
        content: "Enable",
        alignment: "Before",
      },
    ],
    targetDecorator: {
      shape: "Arrow",
      style: {},
    },
    sourceDecorator: {
      shape: "None",
    },
    style: {},
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "related",
    addInfo: [
      {
        title: "Related",
        toolTip: "System Related To Theory",
      },
    ],
    type: "Straight",
    annotations: [
      {
        content: "Related",
        alignment: "Before",
      },
    ],
    targetDecorator: {
      shape: "Arrow",
      style: {},
    },
    sourceDecorator: {
      shape: "None",
    },
    style: {},
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "derrive",
    addInfo: [
      {
        title: "Derrive",
        toolTip: "Instrument Derive From Theory",
      },
    ],
    type: "Straight",
    annotations: [
      {
        content: "Derrive",
        alignment: "Before",
      },
    ],
    targetDecorator: {
      shape: "Arrow",
      style: {},
    },
    sourceDecorator: {
      shape: "None",
    },
    style: {},
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "leftRightInteraction",
    addInfo: [
      {
        title: "Left-Right Interaction",
        toolTip: "Use For System Interaction",
      },
    ],
    type: "Bezier",
    annotations: [
      {
        content: "Interact",
        alignment: "Before",
      },
    ],
    targetDecorator: {
      shape: "Arrow",
      style: {},
    },
    sourceDecorator: {
      shape: "Arrow",
    },
    style: {},
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "rightLeftInteraction",
    addInfo: [
      {
        title: "Right-Left Interaction",
        toolTip: "Use For System Interaction",
      },
    ],
    type: "Bezier",
    annotations: [
      {
        content: "Interact",
        alignment: "Before",
      },
    ],
    targetDecorator: {
      shape: "Arrow",
      style: {},
    },
    sourceDecorator: {
      shape: "Arrow",
    },
    style: {},
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "related",
    addInfo: [
      {
        title: "Related",
        toolTip: "Use For Related Entities",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g   transform="translate(2, 2)">\n                        <rect height="70" width="70" fill="transparent" stroke-width="0" /> \n                        <circle vector-effect="non-scaling-stroke" cx="35" cy="35" r="35" fill="White" stroke="black" stroke-width="1"/>\n                        <foreignObject class="symbol-text-container" x="8.75" width="52.5" height="70" visibility="hidden">\n                        <div style="height: 70px" class="flex-container">\n                            <div width="52.5" class="symbol-text-element">\n                                Related\n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
    },
    annotations: [
      {
        content: "Related",
      },
    ],
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: null,
    height: 70,
    width: 70,
  },
  {
    id: "similarity",
    addInfo: [
      {
        title: "Similarity",
        toolTip: "Use For Similariry Entities",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g   transform="translate(2, 2)">\n                        <rect height="70" width="70" fill="transparent" stroke-width="0" /> \n                        <circle vector-effect="non-scaling-stroke" cx="35" cy="35" r="35" fill="White" stroke="black" stroke-width="1"/>\n                        <foreignObject class="symbol-text-container" x="8.75" width="52.5" height="70" visibility="hidden">\n                        <div style="height: 70px" class="flex-container">\n                            <div width="52.5" class="symbol-text-element">\n                                Similarity\n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
    },
    annotations: [
      {
        content: "Similarity",
      },
    ],
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: null,
    height: 70,
    width: 70,
  },
  {
    id: "relationship",
    addInfo: [
      {
        title: "Relationship",
        toolTip: "Use For Related Entities",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g   transform="translate(2, 2)">\n                        <rect height="70" width="70" fill="transparent" stroke-width="0" /> \n                        <circle vector-effect="non-scaling-stroke" cx="35" cy="35" r="35" fill="White" stroke="black" stroke-width="1"/>\n                        <foreignObject class="symbol-text-container" x="8.75" width="52.5" height="70" visibility="hidden">\n                        <div style="height: 70px" class="flex-container">\n                            <div width="52.5" class="symbol-text-element">\n                                Alpha\n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
    },
    annotations: [
      {
        content: "Alpha",
      },
    ],
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: null,
    height: 70,
    width: 70,
  },
  {
    id: "realtionshipBiArrow",
    addInfo: [
      {
        title: "Relationship",
        toolTip: "Left And Right Relationship",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2, 2)">\n                    <g>\n                        <rect height="90" width="500" fill="none" stroke-width="0"/>\n                        <path vector-effect="non-scaling-stroke" fill="white" stroke="black" stroke-width="1" d="M 0 45 L 50 0 L 50 20 L 450 20 L 450 0 L 500 45 L 450 90 L 450 70 L 50 70 L 50 90 L 0 45"/>\n                        <foreignObject class="symbol-text-container" x="62.5" width="375" height="90" visibility="hidden">\n                        <div style="height: 90px" class="flex-container">\n                            <div width="375" class="symbol-text-element">\n                                \n                            </div>\n                        </div>\n                    </foreignObject>  \n                    </g>\n                </g>',
    },
    annotations: [
      {
        content: "",
      },
    ],
    height: 90,
    width: 500,
  },
  {
    id: "realtionshipRightArrow",
    addInfo: [
      {
        title: "Relationship",
        toolTip: "Left to Right Relationship",
      },
    ],
    annotations: [
      {
        content: "",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                <g transform="rotate(0) translate(0,0)">\n                <rect height="70" width="200" fill="transparent" stroke-width="0"/>\n                <path vector-effect="non-scaling-stroke" fill="white" stroke="black" stroke-width="1" d="M 0 15 L 175 15 L 175 0 L 200 35 L 175 70 L 175 55 L 0 55 L 0 15"/>\n                </g>\n                <foreignObject class="symbol-text-container" x="25" width="150" height="70" visibility="hidden">\n                <div style="height: 70px" class="flex-container">\n                    <div width="150" class="symbol-text-element">\n                        \n                    </div>\n                </div>\n                </foreignObject>\n            </g>',
    },
    height: 70,
    width: 200,
  },
  {
    id: "realtionshipLeftArrow",
    addInfo: [
      {
        title: "Relationship",
        toolTip: "Right to Left Relationship",
      },
    ],
    annotations: [
      {
        content: "",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                <g transform="rotate(180) translate(-200,-70)">\n                <rect height="70" width="200" fill="transparent" stroke-width="0"/>\n                <path vector-effect="non-scaling-stroke" fill="white" stroke="black" stroke-width="1" d="M 0 15 L 175 15 L 175 0 L 200 35 L 175 70 L 175 55 L 0 55 L 0 15"/>\n                </g>\n                <foreignObject class="symbol-text-container" x="25" width="150" height="70" visibility="hidden">\n                <div style="height: 70px" class="flex-container">\n                    <div width="150" class="symbol-text-element">\n                        \n                    </div>\n                </div>\n                </foreignObject>\n            </g>',
    },
    height: 70,
    width: 200,
  },
  {
    id: "linkednodeinterface",
    addInfo: [
      {
        title: "Linked Node",
        toolTip: "Linked Node",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="12" width="10" stroke="none" fill="none"/>\n                    <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="none" cx="5" cy="5" r="5"/>\n                    <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="none" d="M 2 11 L 8 11 M 2 12 L 8 12"/>     \n                </g>',
    },
    annotations: [
      {
        content: "1",
        offset: {
          x: 0.5,
          y: 0.45,
        },
      },
    ],
    height: 60,
    width: 50,
  },
  {
    id: "greenSignal",
    addInfo: [
      {
        title: "Green Signal",
        toolTip: "Denote Positive Flow",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  class="point-circle" transform="translate(2, 2)">\n                        <rect height="20" width="20" fill="transparent" stroke-width="0" /> \n                        <circle vector-effect="non-scaling-stroke" cx="10" cy="10" r="10" fill="LimeGreen" stroke="black" stroke-width="1"/>\n                        <foreignObject class="symbol-text-container" x="2.5" width="15" height="20" visibility="hidden">\n                        <div style="height: 20px" class="flex-container">\n                            <div width="15" class="symbol-text-element">\n                                \n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
    },
    annotations: null,
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: null,
    height: 20,
    width: 20,
  },
  {
    id: "redSignal",
    addInfo: [
      {
        title: "Red Signal",
        toolTip: "Denote Negative Flow",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  class="point-circle" transform="translate(2, 2)">\n                        <rect height="20" width="20" fill="transparent" stroke-width="0" /> \n                        <circle vector-effect="non-scaling-stroke" cx="10" cy="10" r="10" fill="Red" stroke="black" stroke-width="1"/>\n                        <foreignObject class="symbol-text-container" x="2.5" width="15" height="20" visibility="hidden">\n                        <div style="height: 20px" class="flex-container">\n                            <div width="15" class="symbol-text-element">\n                                \n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
    },
    annotations: null,
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: null,
    height: 20,
    width: 20,
  },
  {
    id: "greenSignalPath",
    addInfo: [
      {
        title: "Green Signal Path",
        toolTip: "Denote Positive Flow Direction",
      },
    ],
    type: "Straight",
    targetDecorator: {
      shape: "Arrow",
      style: {
        fill: "LimeGreen",
        strokeColor: "LimeGreen",
      },
    },
    sourceDecorator: {
      shape: "None",
    },
    style: {
      fill: "LimeGreen",
      strokeColor: "LimeGreen",
    },
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "redSignalPath",
    addInfo: [
      {
        title: "Red Signal Path",
        toolTip: "Denote Negative Flow Direction",
      },
    ],
    type: "Straight",
    targetDecorator: {
      shape: "Arrow",
      style: {
        fill: "Red",
        strokeColor: "Red",
      },
    },
    sourceDecorator: {
      shape: "None",
    },
    style: {
      fill: "Red",
      strokeColor: "Red",
    },
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "linkednodesignal",
    addInfo: [
      {
        title: "Linked Node",
        toolTip: "Linked Node",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="12" width="10" stroke="none" fill="none"/>\n                    <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="none" cx="5" cy="5" r="5"/>\n                    <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="none" d="M 2 11 L 8 11 M 2 12 L 8 12"/>     \n                </g>',
    },
    annotations: [
      {
        content: "1",
        offset: {
          x: 0.5,
          y: 0.45,
        },
      },
    ],
    height: 60,
    width: 50,
  },
  {
    id: "instrument",
    addInfo: [
      {
        title: "Instrument",
        toolTip: "Identify an Instrument",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Instrument\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Instrument",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "method",
    addInfo: [
      {
        title: "Method",
        toolTip: "Identify a Method",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Method\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Method",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "instrumentDerivative",
    addInfo: [
      {
        title: "Instrument Derivative",
        toolTip: "Identify Derrivative of Method",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Instrument Derrivative\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Instrument Derrivative",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "methodDerivative",
    addInfo: [
      {
        title: "Method Derivative",
        toolTip: "Identify Derivative of Method",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Method Derivative\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Method Derivative",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "derrivative",
    addInfo: [
      {
        title: "Derrivative",
        toolTip: "Identify a Derivative",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Derrivative\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Derrivative",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "naturalElement",
    addInfo: [
      {
        title: "Natural Element",
        toolTip: "Identify a Natural Element",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Natural Element\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Natural Element",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "inputElement",
    addInfo: [
      {
        title: "Input Element",
        toolTip: "Identify an Input Element",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Input Element\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Input Element",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "exchangeableElement",
    addInfo: [
      {
        title: "Exchangeable Element",
        toolTip: "Identify an Exchangeable Element",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Exchangeable Element\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Exchangeable Element",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "instrumentDerivativeFunction",
    addInfo: [
      {
        title: "Instrument Derivative Function",
        toolTip: "Identify Derivative Function of Instrument",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Instrument Derivative Function\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Instrument Derivative Function",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "methodDerivativeFunction",
    addInfo: [
      {
        title: "Method Derivative Function",
        toolTip: "Identify Derivative Funciton of Method",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Method Derivative Function\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Method Derivative Function",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "methodFunction",
    addInfo: [
      {
        title: "Method Function",
        toolTip: "Identify Function of Method",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Method Function\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Method Function",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "instrumentFunction",
    addInfo: [
      {
        title: "Instrument Function",
        toolTip: "Identify Instrument Function",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Instrument Function\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Instrument Function",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "instrumentServiceFunction",
    addInfo: [
      {
        title: "Instrument Service Function",
        toolTip: "Identify Instrument Service Function",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Instrument Service Function\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Instrument Service Function",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "serviceFunciton",
    addInfo: [
      {
        title: "Service Function",
        toolTip: "Identify Service Function",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Service Function\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Service Function",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "methodExecutedFunction",
    addInfo: [
      {
        title: "Method Executed Funciton",
        toolTip: "Identify Method Executed Function",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Method Executed Function\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Method Executed Function",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "functionToInstrument",
    addInfo: [
      {
        title: "Function To Instrument",
        toolTip: "Identify Function to Instrument",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Function To Instrument\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Function To Instrument",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "functionToMethod",
    addInfo: [
      {
        title: "Function To Method",
        toolTip: "Identify Function to Method",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Function To Method\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Function To Method",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "ne",
    addInfo: [
      {
        title: "NE",
        toolTip: "Identify Natural Element",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                NE\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "NE",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "ie",
    addInfo: [
      {
        title: "IE",
        toolTip: "Identify Input Element",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                IE\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "IE",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "dl/dT",
    addInfo: [
      {
        title: "dI/dT",
        toolTip: "Identify Instrument Derivative",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                dI/dT\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "dI/dT",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "naturalElement1",
    addInfo: [
      {
        title: "Natural Element",
        toolTip: "Identify an Input Element",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                        <rect vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="white" height="150" width="100"/>\n                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="white" d = "M 20 30 L 50 80 L 72 30 M 50 80 L 50 130 M 85 40 A 10 10 0 1 0 50 25"/>\n                        <polygon vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="black" points="45,25 55,25 50,35"/>   \n                    </g>',
    },
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    height: 150,
    width: 100,
  },
  {
    id: "inputElements",
    addInfo: [
      {
        title: "Input Elements",
        toolTip: "Identify Group Exchange Elements",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <rect x="0" y="0" height="50" width="100" fill="transparent" stroke-width="0"/>\n                    <rect width="90" height="40" fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />\n                    <rect x="10" y="10" height="40" width="90"  fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>\n                    <foreignObject class="symbol-text-container" x="12.5" width="75" height="50" visibility="hidden">\n                        <div style="height: 50px" class="flex-container">\n                            <div width="75" class="symbol-text-element">\n                                Input Elements\n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
    },
    annotations: [
      {
        offset: {
          x: 0.55,
          y: 0.5,
        },
        content: "Input Elements",
      },
    ],
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    height: 100,
    width: 210,
  },
  {
    id: "exchangeElements",
    addInfo: [
      {
        title: "Exchange Elements",
        toolTip: "Identify Group Exchange Elements",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <rect x="0" y="0" height="50" width="100" fill="transparent" stroke-width="0"/>\n                    <rect width="90" height="40" fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />\n                    <rect x="10" y="10" height="40" width="90"  fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>\n                    <foreignObject class="symbol-text-container" x="12.5" width="75" height="50" visibility="hidden">\n                        <div style="height: 50px" class="flex-container">\n                            <div width="75" class="symbol-text-element">\n                                Exchange Elements\n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
    },
    annotations: [
      {
        offset: {
          x: 0.55,
          y: 0.5,
        },
        content: "Exchange Elements",
      },
    ],
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    height: 100,
    width: 210,
  },
  {
    id: "emptycontainerinsturment",
    addInfo: [
      {
        title: "Empty Container",
        toolTip: "A Container to Add Part To",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="200" width="200" fill="none" stroke="black" stroke-width="1"/>\n                </g>',
    },
    annotations: [
      {
        content: "Empty Container",
        offset: {
          x: 0.5,
          y: 0,
        },
        margin: {
          bottom: 10,
        },
      },
    ],
    height: 200,
    width: 200,
  },
  {
    id: "linkednodeinstrument",
    addInfo: [
      {
        title: "Linked Node",
        toolTip: "Linked Node",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="12" width="10" stroke="none" fill="none"/>\n                    <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="none" cx="5" cy="5" r="5"/>\n                    <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="none" d="M 2 11 L 8 11 M 2 12 L 8 12"/>     \n                </g>',
    },
    annotations: [
      {
        content: "1",
        offset: {
          x: 0.5,
          y: 0.45,
        },
      },
    ],
    height: 60,
    width: 50,
  },
  {
    id: "functionSystem",
    addInfo: [
      {
        title: "Functional System",
        toolTip: "Represents Life",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g   transform="translate(2, 2)">\n                        <rect height="300" width="300" fill="transparent" stroke-width="0" /> \n                        <circle vector-effect="non-scaling-stroke" cx="150" cy="150" r="150" fill="White" stroke="black" stroke-width="1"/>\n                        <foreignObject class="symbol-text-container" x="37.5" width="225" height="300" visibility="hidden">\n                        <div style="height: 300px" class="flex-container">\n                            <div width="225" class="symbol-text-element">\n                                Functional System\n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
    },
    annotations: [
      {
        content: "Functional System",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 20,
        },
      },
    ],
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: null,
    height: 300,
    width: 300,
  },
  {
    id: "life",
    addInfo: [
      {
        title: "Life",
        toolTip: "Represent The Functional System",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                        <rect height="600" width="600" stroke-width="0" fill="transparent" />\n                        <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="2" fill="white" cx="300" cy="300" r="300"/>\n                        <ellipse vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="white" cx="147.5" cy="300" rx="112.5" ry="220"/>\n                        <ellipse vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="white" cx="447.5" cy="300" rx="112.5" ry="220"/>\n                        <foreignObject class="symbol-text-container" x="90" width="150" height="600" visibility="hidden">\n                        <div style="height: 600px" class="flex-container">\n                            <div width="150" class="symbol-text-element">\n                                Existing Function Area\n                            </div>\n                        </div>\n                        </foreignObject>  \n                        <foreignObject class="symbol-text-container" x="390" width="150" height="600" visibility="hidden">\n                        <div style="height: 600px" class="flex-container">\n                            <div width="150" class="symbol-text-element">\n                                Added Function Area\n                            </div>\n                        </div>\n                        </foreignObject> \n                    </g>',
    },
    annotations: [
      {
        content: "Existing Function Area",
        offset: {
          x: 0.25,
          y: 0.5,
        },
      },
      {
        content: "Added Function Area",
        offset: {
          x: 0.75,
          y: 0.5,
        },
      },
      {
        content: "Life",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 20,
        },
      },
    ],
    height: 400,
    width: 400,
  },
  {
    id: "functionalSystem1",
    addInfo: [
      {
        title: "Functional System",
        toolTip: "Represents Life",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="400" width="200" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="25" width="150" height="400" visibility="hidden">\n                        <div style="height: 400px" class="flex-container">\n                            <div width="150" class="symbol-text-element">\n                                Functional System\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Functional System",
      },
    ],
    width: 200,
    height: 400,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      strokeWidth: 2,
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "lifeBox",
    addInfo: [
      {
        title: "Life",
        toolTip: "Represent The Functional System",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                        <rect vector-effect="non-scaling-stroke" x="0" y="0" height="600" width="300" fill="white" stroke="black" stroke-width="2" />\n                        <rect vector-effect="non-scaling-stroke" x="25" y="25" height="250" width="250" fill="white" stroke="black" stroke-width="1" />\n                        <rect vector-effect="non-scaling-stroke" x="25" y="325" height="250" width="250" fill="white" stroke="black" stroke-width="1" />\n                        <foreignObject class="symbol-text-container" x="37.5" y="50" width="225" height="100" visibility="hidden">\n                            <div style="height: 100px" class="flex-container">\n                                <div width="262.5" class="symbol-text-element">\n                                    Existing Functions\n                                </div>\n                            </div>\n                        </foreignObject>\n                        <foreignObject class="symbol-text-container" x="37.5" y="375" width="225" height="100" visibility="hidden">\n                            <div style="height: 100px" class="flex-container">\n                                <div width="225" class="symbol-text-element">\n                                    Added Functions\n                                </div>\n                            </div>\n                        </foreignObject>  \n                    </g>',
    },
    annotations: [
      {
        content: "Existing Functions",
        offset: {
          x: 0.5,
          y: 0.25,
        },
      },
      {
        content: "Added Functions",
        offset: {
          x: 0.5,
          y: 0.75,
        },
      },
      {
        content: "Life",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 20,
        },
      },
    ],
    height: 400,
    width: 200,
  },
  {
    id: "existingFunction",
    addInfo: [
      {
        title: "Existing Function",
        toolTip: "Identify An Existing Funciton",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Existing Function\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Existing Function",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "addedFunction",
    addInfo: [
      {
        title: "Added Function",
        toolTip: "Identify An Added Function",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Added Function\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Added Function",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "h(t)Function",
    addInfo: [
      {
        title: "h(t)",
        toolTip: "Identidy an Existing Function",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                h(t)\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "h(t)",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "u(t)function",
    addInfo: [
      {
        title: "u(t)",
        toolTip: "Identify an Added Function",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                u(t)\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "u(t)",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "existingFunction1",
    addInfo: [
      {
        title: "Existing Function",
        toolTip: "Identify An Existing Function",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect height="40" width="120" stroke-width="0" fill="transparent" />\n                    <ellipse vector-effect="non-scaling-stroke" fill="white" stroke="black" stroke-width="1" cx="60" cy="20" rx="60" ry="20"/>\n                    <foreignObject class="symbol-text-container" x="15" width="90" height="40" visibility="hidden">\n                        <div style="height: 40px" class="flex-container">\n                            <div width="90" class="symbol-text-element">\n                                Existing Function\n                            </div>\n                        </div>\n                    </foreignObject>\n                </g>',
    },
    annotations: [
      {
        content: "Existing Function",
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    height: 40,
    width: 120,
  },
  {
    id: "addedFunction1",
    addInfo: [
      {
        title: "Added Function",
        toolTip: "Identify An Added Function",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect height="40" width="120" stroke-width="0" fill="transparent" />\n                    <ellipse vector-effect="non-scaling-stroke" fill="white" stroke="black" stroke-width="1" cx="60" cy="20" rx="60" ry="20"/>\n                    <foreignObject class="symbol-text-container" x="15" width="90" height="40" visibility="hidden">\n                        <div style="height: 40px" class="flex-container">\n                            <div width="90" class="symbol-text-element">\n                                Added Function\n                            </div>\n                        </div>\n                    </foreignObject>\n                </g>',
    },
    annotations: [
      {
        content: "Added Function",
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    height: 40,
    width: 120,
  },
  {
    id: "existingFunction2",
    addInfo: [
      {
        title: "Existing Function",
        toolTip: "Identify An Existing Function",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g   transform="translate(2, 2)">\n                        <rect height="70" width="70" fill="transparent" stroke-width="0" /> \n                        <circle vector-effect="non-scaling-stroke" cx="35" cy="35" r="35" fill="white" stroke="black" stroke-width="1"/>\n                        <foreignObject class="symbol-text-container" x="8.75" width="52.5" height="70" visibility="hidden">\n                        <div style="height: 70px" class="flex-container">\n                            <div width="52.5" class="symbol-text-element">\n                                Existing Function\n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
    },
    annotations: [
      {
        content: "Existing Function",
      },
    ],
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: null,
    height: 70,
    width: 70,
  },
  {
    id: "addedFunction2",
    addInfo: [
      {
        title: "Added Function",
        toolTip: "Identify an Added Function",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g   transform="translate(2, 2)">\n                        <rect height="70" width="70" fill="transparent" stroke-width="0" /> \n                        <circle vector-effect="non-scaling-stroke" cx="35" cy="35" r="35" fill="White" stroke="black" stroke-width="1"/>\n                        <foreignObject class="symbol-text-container" x="8.75" width="52.5" height="70" visibility="hidden">\n                        <div style="height: 70px" class="flex-container">\n                            <div width="52.5" class="symbol-text-element">\n                                Added Function\n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
    },
    annotations: [
      {
        content: "Added Function",
      },
    ],
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: null,
    height: 70,
    width: 70,
  },
  {
    id: "existingFunction3",
    addInfo: [
      {
        title: "Existing Function",
        toolTip: "Identify An Existing Function",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g   transform="translate(2, 2)">\n                        <rect height="70" width="70" fill="transparent" stroke-width="0" /> \n                        <circle vector-effect="non-scaling-stroke" cx="35" cy="35" r="35" fill="White" stroke="black" stroke-width="1"/>\n                        <foreignObject class="symbol-text-container" x="8.75" width="52.5" height="70" visibility="hidden">\n                        <div style="height: 70px" class="flex-container">\n                            <div width="52.5" class="symbol-text-element">\n                                h(x)\n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
    },
    annotations: [
      {
        content: "h(x)",
      },
    ],
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: null,
    height: 70,
    width: 70,
  },
  {
    id: "addedFunction3",
    addInfo: [
      {
        title: "Added Function",
        toolTip: "Identify An Added Function",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g   transform="translate(2, 2)">\n                        <rect height="70" width="70" fill="transparent" stroke-width="0" /> \n                        <circle vector-effect="non-scaling-stroke" cx="35" cy="35" r="35" fill="White" stroke="black" stroke-width="1"/>\n                        <foreignObject class="symbol-text-container" x="8.75" width="52.5" height="70" visibility="hidden">\n                        <div style="height: 70px" class="flex-container">\n                            <div width="52.5" class="symbol-text-element">\n                                u(x)\n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
    },
    annotations: [
      {
        content: "u(x)",
      },
    ],
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: null,
    height: 70,
    width: 70,
  },
  {
    id: "addedFunction4",
    addInfo: [
      {
        title: "Added Function",
        toolTip: "Multi Inputs Added Function",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g   transform="translate(2, 2)">\n                        <rect height="70" width="70" fill="transparent" stroke-width="0" /> \n                        <circle vector-effect="non-scaling-stroke" cx="35" cy="35" r="35" fill="White" stroke="black" stroke-width="1"/>\n                        <foreignObject class="symbol-text-container" x="8.75" width="52.5" height="70" visibility="hidden">\n                        <div style="height: 70px" class="flex-container">\n                            <div width="52.5" class="symbol-text-element">\n                                function\n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
    },
    annotations: [
      {
        content: "function",
      },
    ],
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: null,
    height: 70,
    width: 70,
  },
  {
    id: "addedFunction5",
    addInfo: [
      {
        title: "Added Function",
        toolTip: "Multi Input Added Function",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g   transform="translate(2, 2)">\n                        <rect height="70" width="70" fill="transparent" stroke-width="0" /> \n                        <circle vector-effect="non-scaling-stroke" cx="35" cy="35" r="35" fill="White" stroke="black" stroke-width="1"/>\n                        <foreignObject class="symbol-text-container" x="8.75" width="52.5" height="70" visibility="hidden">\n                        <div style="height: 70px" class="flex-container">\n                            <div width="52.5" class="symbol-text-element">\n                                u(x)\n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
    },
    annotations: [
      {
        content: "u(x)",
      },
    ],
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: null,
    height: 70,
    width: 70,
  },
  {
    id: "externalFunction",
    addInfo: [
      {
        title: "External Function",
        toolTip: "Identify An External Function",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                External Function\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "External Function",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "stopFunction",
    addInfo: [
      {
        title: "Stop Function",
        toolTip: "Identify a Stop Function",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Stop Function\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Stop Function",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "functionContainer",
    addInfo: [
      {
        title: "Function Container",
        toolTip: "Identify A Function Container",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="200" width="100" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="12.5" width="75" height="200" visibility="hidden">\n                        <div style="height: 200px" class="flex-container">\n                            <div width="75" class="symbol-text-element">\n                                \n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "",
      },
    ],
    width: 100,
    height: 200,
    ports: [],
    style: {
      strokeWidth: 3,
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "eFunction",
    shape: {
      type: "Native",
      content:
        '<g>\n                    <rect height="30" width="100" fill="transparent" stroke-width="0"/>\n                    <foreignObject class="symbol-text-container" x="0" y="25" width="100" height="30" visibility="hidden">\n                    <div style="height: 30px" class="flex-container">\n                        <div width="100" class="symbol-text-element">\n                            eFunction\n                        </div>\n                    </div>\n                    </foreignObject>     \n                </g>',
    },
    addInfo: [
      {
        title: "eFunction",
        toolTip: "Identify An Existing Function",
      },
    ],
    annotations: [
      {
        content: "eFunction",
        style: {
          bold: true,
          fontSize: 15,
          italic: true,
        },
      },
    ],
    height: 30,
    width: 100,
  },
  {
    id: "aFunction",
    shape: {
      type: "Native",
      content:
        '<g>\n                    <rect height="30" width="100" fill="transparent" stroke-width="0"/>\n                    <foreignObject class="symbol-text-container" x="0" y="25" width="100" height="30" visibility="hidden">\n                    <div style="height: 30px" class="flex-container">\n                        <div width="100" class="symbol-text-element">\n                            aFunction\n                        </div>\n                    </div>\n                    </foreignObject>     \n                </g>',
    },
    addInfo: [
      {
        title: "aFunction",
        toolTip: "Identify An Added Function",
      },
    ],
    annotations: [
      {
        content: "aFunction",
        style: {
          bold: true,
          fontSize: 15,
          italic: true,
        },
      },
    ],
    height: 30,
    width: 100,
  },
  {
    id: "h(t)",
    addInfo: [
      {
        title: "h(t)",
        toolTip: "Identify an Existing Function",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                h(t)\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "h(t)",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "u(t)",
    addInfo: [
      {
        title: "u(t)",
        toolTip: "Identify an Added Function",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                u(t)\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "u(t)",
      },
    ],
    width: 210,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "life1",
    addInfo: [
      {
        title: "Life",
        toolTip: "Life as a Function of Time",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g   transform="translate(2, 2)">\n                        <rect height="140" width="140" fill="transparent" stroke-width="0" /> \n                        <circle vector-effect="non-scaling-stroke" cx="70" cy="70" r="70" fill="White" stroke="black" stroke-width="1"/>\n                        <foreignObject class="symbol-text-container" x="17.5" width="105" height="140" visibility="hidden">\n                        <div style="height: 140px" class="flex-container">\n                            <div width="105" class="symbol-text-element">\n                                Life\n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
    },
    annotations: [
      {
        content: "Life",
      },
    ],
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: null,
    height: 140,
    width: 140,
  },
  {
    id: "life2",
    shape: {
      type: "Native",
      content:
        '<g>\n                    <rect height="30" width="100" fill="transparent" stroke-width="0"/>\n                    <foreignObject class="symbol-text-container" x="0" y="25" width="100" height="30" visibility="hidden">\n                    <div style="height: 30px" class="flex-container">\n                        <div width="100" class="symbol-text-element">\n                            Life\n                        </div>\n                    </div>\n                    </foreignObject>     \n                </g>',
    },
    addInfo: [
      {
        title: "Life",
        toolTip: "Life as a Function",
      },
    ],
    annotations: [
      {
        content: "Life",
        style: {
          bold: true,
          fontSize: 15,
          italic: true,
        },
      },
    ],
    height: 30,
    width: 100,
  },
  {
    id: "L(t)",
    addInfo: [
      {
        title: "L(t)",
        toolTip: "Life as a Function of Time",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g   transform="translate(2, 2)">\n                        <rect height="140" width="140" fill="transparent" stroke-width="0" /> \n                        <circle vector-effect="non-scaling-stroke" cx="70" cy="70" r="70" fill="White" stroke="black" stroke-width="1"/>\n                        <foreignObject class="symbol-text-container" x="17.5" width="105" height="140" visibility="hidden">\n                        <div style="height: 140px" class="flex-container">\n                            <div width="105" class="symbol-text-element">\n                                L(t)\n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
    },
    annotations: [
      {
        content: "L(t)",
      },
    ],
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: null,
    height: 140,
    width: 140,
  },
  {
    id: "L(t)1",
    shape: {
      type: "Native",
      content:
        '<g>\n                    <rect height="30" width="100" fill="transparent" stroke-width="0"/>\n                    <foreignObject class="symbol-text-container" x="0" y="25" width="100" height="30" visibility="hidden">\n                    <div style="height: 30px" class="flex-container">\n                        <div width="100" class="symbol-text-element">\n                            L(t)\n                        </div>\n                    </div>\n                    </foreignObject>     \n                </g>',
    },
    addInfo: [
      {
        title: "L(t)",
        toolTip: "Life as a Function of Time",
      },
    ],
    annotations: [
      {
        content: "L(t)",
        style: {
          bold: true,
          fontSize: 15,
          italic: true,
        },
      },
    ],
    height: 30,
    width: 100,
  },
  {
    id: "groupFunctionTheory",
    addInfo: [
      {
        title: "Group",
        toolTip: "Use to Group or Add Entities",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="75" width="50" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="6.25" width="37.5" height="75" visibility="hidden">\n                        <div style="height: 75px" class="flex-container">\n                            <div width="37.5" class="symbol-text-element">\n                                Group\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "Group",
      },
    ],
    width: 50,
    height: 75,
    ports: [
      {
        id: "left-1",
        offset: {
          x: 0,
          y: 0.25,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "left-2",
        offset: {
          x: 0,
          y: 0.75,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "right",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "continuityFunction",
    addInfo: [
      {
        title: "Continuity",
        toolTip: "Show Continuity of Entity",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2, 2)">\n                    <rect width="10" height="5" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="0" stroke-dasharray = "" />\n                    <circle vector-effect="non-scaling-stroke" cx="3.5" cy="2.5" r="0.4"/>\n                    <circle vector-effect="non-scaling-stroke" cx="5.0" cy="2.5" r="0.4"/>\n                    <circle vector-effect="non-scaling-stroke" cx="6.5" cy="2.5" r="0.4"/>\n                    </g>',
    },
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: [],
    width: 210,
    height: 100,
  },
  {
    id: "linkednodefunciton",
    addInfo: [
      {
        title: "Linked Node",
        toolTip: "Linked Node",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="12" width="10" stroke="none" fill="none"/>\n                    <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="none" cx="5" cy="5" r="5"/>\n                    <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="none" d="M 2 11 L 8 11 M 2 12 L 8 12"/>     \n                </g>',
    },
    annotations: [
      {
        content: "1",
        offset: {
          x: 0.5,
          y: 0.45,
        },
      },
    ],
    height: 60,
    width: 50,
  },
  {
    id: "basis",
    addInfo: [
      {
        title: "Basis",
        toolTip: "Identify Our Basis",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <g>\n                        <rect width="10" height="5" fill="transparent" stroke-width="0"/>\n                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dasharray="10 5" d="M 0 2.5 L 10 2.5"/>\n                    </g>                    \n                </g>',
    },
    annotations: [
      {
        content: "k",
        offset: {
          x: 0,
          y: 0.5,
        },
        margin: {
          right: 10,
        },
      },
    ],
    constraints: 4335342,
    height: 30,
    width: 400,
  },
  {
    id: "basis1",
    addInfo: [
      {
        toolTip: "Identify Out Basis",
        title: "Basis",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <rect height="30" width="320" fill="transparent" stroke-width="0"/>\n                    <rect x="0" y="0" vector-effect="non-scaling-stroke" height="30" width="20" stroke="black" stroke-width="1" fill="white"/>\n                    <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dashArray="10 5" fill="transparent" d = "M 20 15 L 320 15"/>\n                    <foreignObject class="symbol-text-container" x="9.6" width="240" height="30" visibility="hidden">\n                    <div style="height: 30px" class="flex-container">\n                        <div width="240" class="symbol-text-element">\n                            k\n                        </div>\n                    </div>\n                </foreignObject>   \n                </g>',
    },
    annotations: [
      {
        content: "k",
        offset: {
          x: 0.03,
          y: 0.5,
        },
      },
    ],
    height: 50,
    width: 450,
  },
  {
    id: "stabilityLine",
    addInfo: [
      {
        title: "Stability Line",
        toolTip: "Identify Our Stablility Line",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <g>\n                        <rect width="10" height="5" fill="transparent" stroke-width="0"/>\n                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dasharray="10 5" d="M 0 2.5 L 10 2.5"/>\n                    </g>                    \n                </g>',
    },
    constraints: 4335342,
    height: 30,
    width: 400,
  },
  {
    id: "stabilityLine1",
    addInfo: [
      {
        title: "Stability Line",
        toolTip: "Stability Line With Connector",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <g>\n                        <rect width="10" height="5" fill="transparent" stroke-width="0"/>\n                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dasharray="" d="M 0 2.5 L 10 2.5"/>\n                    </g>                    \n                </g>',
    },
    constraints: 4335342,
    height: 30,
    width: 600,
  },
  {
    id: "k",
    addInfo: [
      {
        title: "k",
        toolTip: "Identify Our Basis",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="50" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="6.25" width="37.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="37.5" class="symbol-text-element">\n                                k\n                            </div>\n                        </div>\n                    </foreignObject></g>',
    },
    annotations: [
      {
        content: "k",
      },
    ],
    width: 50,
    height: 100,
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
  },
  {
    id: "k1",
    shape: {
      type: "Native",
      content:
        '<g>\n                    <rect height="30" width="100" fill="transparent" stroke-width="0"/>\n                    <foreignObject class="symbol-text-container" x="0" y="25" width="100" height="30" visibility="hidden">\n                    <div style="height: 30px" class="flex-container">\n                        <div width="100" class="symbol-text-element">\n                            k\n                        </div>\n                    </div>\n                    </foreignObject>     \n                </g>',
    },
    addInfo: [
      {
        title: "k",
        toolTip: "Identify Out Stability",
      },
    ],
    annotations: [
      {
        content: "k",
        style: {
          bold: true,
          fontSize: 15,
          italic: true,
        },
      },
    ],
    height: 30,
    width: 100,
  },
  {
    id: "destination",
    addInfo: [
      {
        title: "Destination",
        toolTip: "Identify Our Destination",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)"><rect height="50" width="50" fill="transparent" stroke-width="0" /><path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" d="M 25 0 L 0 25 M 25 0 L 50 25 M 5 20 L 45 20 M 10 20 L 10 50 L 40 50 L 40 20"/><rect vector-effect="non-scaling-stroke" x ="20" y = "25" height="22.5" width="10" fill="#e9eff7" stroke-width="1" stroke="black"/><circle vector-effect="non-scaling-stroke" cx="25" cy="7" r="2.5" fill="#e9eff7" stroke="black" stroke-width="1"/><rect vector-effect="non-scaling-stroke" x="10" y="47.5" width="30" height="2.5" fill="url(#Pattern2)" stroke="black" stroke-width="1"/></g>',
    },
    height: 250,
    width: 250,
    annotations: [
      {
        content: "k",
        offset: {
          x: 0.5,
          y: 0.14,
        },
      },
    ],
  },
  {
    id: "direction",
    addInfo: [
      {
        title: "Direction",
        toolTip: "Identify Our Direction",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)"><rect height="35" width="70" fill="transparent" stroke-width="0"/><Path vector-effect="non-scaling-stroke" stroke="black" fill="url(#Pattern3)" stroke-width="1" d="M 0 30 L 5 35 L 70 0 L 65 0 L 0 30"></g>',
    },
    width: 500,
    height: 200,
  },
  {
    id: "mobilitystability",
    addInfo: [
      {
        title: "Mobility",
        toolTip: "Identify Our Mobility",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="10" width="10" stroke="none" fill="none"/>\n                    <path d="M 0 4, S 2.5 1.5, 5 4 M 5 4, S 7.5 6.5, 10 4 M 0 6, S 2.5 3.5, 5 6 M 5 6, S 7.5 8.5, 10 6" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="none"/>\n                    </g>',
    },
    height: 50,
    width: 50,
  },
  {
    id: "roadMark",
    addInfo: [
      {
        title: "Road Mark",
        toolTip: "Identify Specific Location",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <g>\n                        <rect width="5" height="10" fill="transparent" stroke-width="0"/>\n                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dasharray="" d="M 2.5 0 L 2.5 10"/> \n                    </g>                    \n                </g>',
    },
    annotations: [
      {
        content: "Mark #",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 20,
        },
      },
    ],
    constraints: 4753134,
    height: 150,
    width: 30,
  },
  {
    id: "distance",
    addInfo: [
      {
        title: "Distance",
        toolTip: "Identify Specific Distance",
      },
    ],
    type: "Straight",
    annotations: [
      {
        content: "distance",
        alignment: "Before",
      },
    ],
    targetDecorator: {
      shape: "Arrow",
      style: {},
    },
    sourceDecorator: {
      shape: "Arrow",
    },
    style: {},
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "route",
    addInfo: [
      {
        title: "Route",
        toolTip: "Identify Specific Route",
      },
    ],
    type: "Straight",
    annotations: [
      {
        content: "Route",
        alignment: "Before",
      },
    ],
    targetDecorator: {
      shape: "Arrow",
      style: {},
    },
    sourceDecorator: {
      shape: "Arrow",
    },
    style: {},
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "interroute",
    addInfo: [
      {
        title: "Inter-Route",
        toolTip: "Identify Specific Route",
      },
    ],
    type: "Straight",
    annotations: [
      {
        content: "Inter-Route",
        alignment: "Before",
      },
    ],
    targetDecorator: {
      shape: "Arrow",
      style: {},
    },
    sourceDecorator: {
      shape: "Arrow",
    },
    style: {},
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "theoryScale",
    addInfo: [
      {
        title: "Theory Scale",
        toolTip: "Identify The Theory Scale Distance",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g tranform="translate(2,2)">\n                    <rect height="50" width="600" fill="transparent" stroke-width="0"/>\n                    <path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 0 25 L 600 25 M 270 10 L 270 40 M 290 10 L 290 40 M 310 10 L 310 40 M 330 10 L 330 40"/>\n                    <circle vector-effect="non-scaling-stroke" fill="black" stroke="black" stroke-width="1" cx="5" cy="15" r="3"/>\n                    <circle vector-effect="non-scaling-stroke" fill="black" stroke="black" stroke-width="1" cx="25" cy="15" r="3"/>\n                    <circle vector-effect="non-scaling-stroke" fill="black" stroke="black" stroke-width="1" cx="45" cy="15" r="3"/>\n                    <circle vector-effect="non-scaling-stroke" fill="black" stroke="black" stroke-width="1" cx="595" cy="15" r="3"/>\n                    <circle vector-effect="non-scaling-stroke" fill="black" stroke="black" stroke-width="1" cx="575" cy="15" r="3"/>\n                    <circle vector-effect="non-scaling-stroke" fill="black" stroke="black" stroke-width="1" cx="555" cy="15" r="3"/>\n                </g>',
    },
    annotations: [
      {
        content: "-2",
        offset: {
          x: 0.45,
          y: 1,
        },
      },
      {
        content: "-1",
        offset: {
          x: 0.4833,
          y: 1,
        },
      },
      {
        content: "1",
        offset: {
          x: 0.5167,
          y: 1,
        },
      },
      {
        content: "2",
        offset: {
          x: 0.55,
          y: 1,
        },
      },
    ],
    constraints: 4335598,
    height: 50,
    width: 600,
  },
  {
    id: "scaleMark",
    addInfo: [
      {
        title: "Scale Mark",
        toolTip: "Use to Put Mark On Scale",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <g>\n                        <rect width="5" height="10" fill="transparent" stroke-width="0"/>\n                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dasharray="" d="M 2.5 0 L 2.5 10"/> \n                    </g>                    \n                </g>',
    },
    annotations: [
      {
        content: "#",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 10,
        },
      },
    ],
    constraints: 4753134,
    height: 50,
    width: 30,
  },
  {
    id: "upHill",
    addInfo: [
      {
        title: "Uphill",
        toolTip: "Identify The Uphill Path",
      },
    ],
    type: "Bezier",
    targetDecorator: {
      shape: "None",
      style: {},
    },
    sourceDecorator: {
      shape: "None",
    },
    style: {},
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "downHill",
    addInfo: [
      {
        title: "Downhill",
        toolTip: "Identify The Downhill Path",
      },
    ],
    type: "Bezier",
    targetDecorator: {
      shape: "None",
      style: {},
    },
    sourceDecorator: {
      shape: "None",
    },
    style: {},
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "timeMark",
    addInfo: [
      {
        title: "Time Mark",
        toolTip: "Identify a Time Mark",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <g>\n                        <rect width="5" height="10" fill="transparent" stroke-width="0"/>\n                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dasharray="" d="M 2.5 0 L 2.5 10"/> \n                    </g>                    \n                </g>',
    },
    annotations: [
      {
        content: "time #",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 20,
        },
      },
    ],
    constraints: 4753134,
    height: 150,
    width: 30,
  },
  {
    id: "progressTime",
    addInfo: [
      {
        title: "Progress Time",
        toolTip: "Identify Progress Time",
      },
    ],
    type: "Straight",
    annotations: [
      {
        content: "progress Time",
        alignment: "Before",
      },
    ],
    targetDecorator: {
      shape: "Arrow",
      style: {},
    },
    sourceDecorator: {
      shape: "Arrow",
    },
    style: {},
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "declineTime",
    addInfo: [
      {
        title: "Decline Time",
        toolTip: "Identify Decline Time",
      },
    ],
    type: "Straight",
    annotations: [
      {
        content: "decline time",
        alignment: "Before",
      },
    ],
    targetDecorator: {
      shape: "Arrow",
      style: {},
    },
    sourceDecorator: {
      shape: "Arrow",
    },
    style: {},
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "lostLine",
    addInfo: [
      {
        title: "Lost Line",
        toolTip: "Identify Point of Lost",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <g>\n                        <rect width="10" height="5" fill="transparent" stroke-width="0"/>\n                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dasharray="10 5" d="M 0 2.5 L 10 2.5"/>\n                    </g>                    \n                </g>',
    },
    annotations: [
      {
        content: "Lost #",
        offset: {
          x: 1,
          y: 0.5,
        },
        margin: {
          left: 20,
        },
      },
    ],
    constraints: 4335342,
    height: 30,
    width: 400,
  },
  {
    id: "gainLine",
    addInfo: [
      {
        title: "Gain Line",
        toolTip: "Identify Point of Gain",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <g>\n                        <rect width="10" height="5" fill="transparent" stroke-width="0"/>\n                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dasharray="10 5" d="M 0 2.5 L 10 2.5"/>\n                    </g>                    \n                </g>',
    },
    annotations: [
      {
        content: "Gain #",
        offset: {
          x: 1,
          y: 0.5,
        },
        margin: {
          left: 20,
        },
      },
    ],
    constraints: 4335342,
    height: 30,
    width: 400,
  },
  {
    id: "lost",
    addInfo: [
      {
        title: "Lost",
        toolTip: "Identify Specific Lost",
      },
    ],
    type: "Straight",
    annotations: [
      {
        content: "Lost",
        alignment: "After",
      },
    ],
    targetDecorator: {
      shape: "Arrow",
      style: null,
    },
    sourceDecorator: {
      shape: "Arrow",
    },
    style: null,
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "Gain",
    addInfo: [
      {
        title: "Gain",
        toolTip: "Identify Specific Gain",
      },
    ],
    type: "Straight",
    annotations: [
      {
        content: "Gain",
        alignment: "After",
      },
    ],
    targetDecorator: {
      shape: "Arrow",
      style: null,
    },
    sourceDecorator: {
      shape: "Arrow",
    },
    style: null,
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "stabilityPoint",
    addInfo: [
      {
        title: "Stability Point",
        toolTip: "Identify a Point Of Stability",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  class="point-circle" transform="translate(2, 2)">\n                        <rect height="20" width="20" fill="transparent" stroke-width="0" /> \n                        <circle vector-effect="non-scaling-stroke" cx="10" cy="10" r="10" fill="black" stroke="black" stroke-width="1"/>\n                        <foreignObject class="symbol-text-container" x="2.5" width="15" height="20" visibility="hidden">\n                        <div style="height: 20px" class="flex-container">\n                            <div width="15" class="symbol-text-element">\n                                \n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
    },
    annotations: null,
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: null,
    height: 20,
    width: 20,
  },
  {
    id: "functionExecution",
    addInfo: [
      {
        title: "Function Execution",
        toolTip: "Function Execute At Specific Time",
      },
    ],
    type: "Straight",
    targetDecorator: {
      shape: "None",
      style: {},
    },
    sourceDecorator: {
      shape: "Circle",
    },
    style: {},
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "domainLeft",
    addInfo: [
      {
        title: "Domain Left",
        toolTip: "Identify Domain To The Left",
      },
    ],
    annotations: [
      {
        content: "Domain Name",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2, 2)">\n                        <g>\n                            <rect height="200" width="50" fill="transparent" stroke-width="0" />\n                            <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="Transparent" d="M 0 0 L 50 0 L 50 200 L 0 200"/>\n                            <foreignObject class="symbol-text-container" x="0" width="50" height="200" visibility="hidden">\n                            <div style="height: 200px" class="flex-container">\n                                <div width="50" class="symbol-text-element">\n                                    [object Object]\n                                </div>\n                            </div>\n                            </foreignObject> \n                        </g>  \n                    </g>',
    },
    style: {
      fontSize: 10,
    },
    height: 200,
    width: 50,
  },
  {
    id: "domainRight",
    addInfo: [
      {
        title: "Domain Right",
        toolTip: "Identify Domain To The Right",
      },
    ],
    annotations: [
      {
        content: "Domain Name",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2, 2)">\n                        <g>\n                            <rect height="200" width="50" fill="transparent" stroke-width="0" />\n                            <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="Transparent" d="M 50 0 L 0 0 L 0 200 L 50 200"/>\n                            <foreignObject class="symbol-text-container" x="0" width="50" height="200" visibility="hidden">\n                            <div style="height: 200px" class="flex-container">\n                                <div width="50" class="symbol-text-element">\n                                    [object Object]\n                                </div>\n                            </div>\n                            </foreignObject> \n                        </g>  \n                    </g>',
    },
    style: {
      fontSize: 10,
    },
    height: 200,
    width: 50,
  },
  {
    id: "domainTop",
    addInfo: [
      {
        title: "Domain Top",
        toolTip: "Identify Domain Above",
      },
    ],
    annotations: [
      {
        content: "Domain Name",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2, 2)">\n                        <g>\n                            <rect height="50" width="200" fill="transparent" stroke-width="0" />\n                            <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="Transparent" d="M 0 0 L 0 50 L 200 50 L 200 0"/>\n                            <foreignObject class="symbol-text-container" x="25" width="150" height="50" visibility="hidden">\n                            <div style="height: 50px" class="flex-container">\n                                <div width="150" class="symbol-text-element">\n                                    [object Object]\n                                </div>\n                            </div>\n                            </foreignObject> \n                        </g>  \n                    </g>',
    },
    style: {
      fontSize: 10,
    },
    height: 50,
    width: 200,
  },
  {
    id: "domainBottom",
    addInfo: [
      {
        title: "Domain Bottom",
        toolTip: "Identify Domain Bottom",
      },
    ],
    annotations: [
      {
        content: "Domain Name",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2, 2)">\n                        <g>\n                            <rect height="50" width="200" fill="transparent" stroke-width="0" />\n                            <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="Transparent" d="M 0 50 L 0 0 L 200 0 L 200 50"/>\n                            <foreignObject class="symbol-text-container" x="25" width="150" height="50" visibility="hidden">\n                            <div style="height: 50px" class="flex-container">\n                                <div width="150" class="symbol-text-element">\n                                    [object Object]\n                                </div>\n                            </div>\n                            </foreignObject> \n                        </g>  \n                    </g>',
    },
    style: {
      fontSize: 10,
    },
    height: 50,
    width: 200,
  },
  {
    id: "inline",
    addInfo: [
      {
        title: "Inline",
        toolTip: "Inline to Each Other",
      },
    ],
    type: "Straight",
    annotations: {
      content: "Inline",
      alignment: "Before",
    },
    targetDecorator: {
      shape: "Arrow",
      style: null,
    },
    sourceDecorator: {
      shape: "Arrow",
    },
    style: null,
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "ontop",
    shape: {
      type: "Native",
      content:
        '<g>\n                    <rect height="30" width="100" fill="transparent" stroke-width="0"/>\n                    <foreignObject class="symbol-text-container" x="0" y="25" width="100" height="30" visibility="hidden">\n                    <div style="height: 30px" class="flex-container">\n                        <div width="100" class="symbol-text-element">\n                            On Top\n                        </div>\n                    </div>\n                    </foreignObject>     \n                </g>',
    },
    addInfo: [
      {
        title: "On Top",
        toolTip: "Identify an Entity On Top",
      },
    ],
    annotations: [
      {
        content: "On Top",
        style: {
          bold: true,
          fontSize: 15,
          italic: true,
        },
      },
    ],
    height: 30,
    width: 100,
  },
  {
    id: "below",
    shape: {
      type: "Native",
      content:
        '<g>\n                    <rect height="30" width="100" fill="transparent" stroke-width="0"/>\n                    <foreignObject class="symbol-text-container" x="0" y="25" width="100" height="30" visibility="hidden">\n                    <div style="height: 30px" class="flex-container">\n                        <div width="100" class="symbol-text-element">\n                            Below\n                        </div>\n                    </div>\n                    </foreignObject>     \n                </g>',
    },
    addInfo: [
      {
        title: "Below",
        toolTip: "Identify an Entity On Below",
      },
    ],
    annotations: [
      {
        content: "Below",
        style: {
          bold: true,
          fontSize: 15,
          italic: true,
        },
      },
    ],
    height: 30,
    width: 100,
  },
  {
    id: "graphAxis",
    addInfo: [
      {
        title: "Graph Axis",
        toolTip: "Use for Data Representation",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                        <rect width="10" height="10" fill="transparent" stroke-width="0" />\n                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1.5" fill="transparent" d="M 0.5 10 L 0.5 0 M 0 9.5 L 10 9.5" />\n                    </g>',
    },
    constraints: 5240430,
    annotations: ["Label Name", "Label Name"],
    height: 600,
    width: 600,
  },
  {
    id: "philosophy",
    addInfo: [
      {
        title: "Philosophy",
        toolTip: "Identify Philosophy",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect height="40" width="120" stroke-width="0" fill="transparent" />\n                    <ellipse vector-effect="non-scaling-stroke" fill="white" stroke="black" stroke-width="1" cx="60" cy="20" rx="60" ry="20"/>\n                    <foreignObject class="symbol-text-container" x="15" width="90" height="40" visibility="hidden">\n                        <div style="height: 40px" class="flex-container">\n                            <div width="90" class="symbol-text-element">\n                                Philosophy\n                            </div>\n                        </div>\n                    </foreignObject>\n                </g>',
    },
    annotations: [
      {
        content: "Philosophy",
      },
    ],
    style: {
      fill: "white",
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    height: 40,
    width: 120,
  },
  {
    id: "changeOfPhilosophy",
    addInfo: [
      {
        title: "Change Of Philosophy",
        toolTip: "Represent Change Of Philosophy",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g   transform="translate(2, 2)">\n                        <rect height="70" width="70" fill="transparent" stroke-width="0" /> \n                        <circle vector-effect="non-scaling-stroke" cx="35" cy="35" r="35" fill="White" stroke="black" stroke-width="1"/>\n                        <foreignObject class="symbol-text-container" x="8.75" width="52.5" height="70" visibility="hidden">\n                        <div style="height: 70px" class="flex-container">\n                            <div width="52.5" class="symbol-text-element">\n                                Δx\n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
    },
    annotations: [
      {
        content: "Δx",
      },
    ],
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    height: 70,
    width: 70,
  },
  {
    id: "changeOfPhilosophy1",
    addInfo: [
      {
        title: "Change Of Philosophy",
        toolTip: "Represent Change Of Philosophy",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g   transform="translate(2, 2)">\n                        <rect height="70" width="70" fill="transparent" stroke-width="0" /> \n                        <circle vector-effect="non-scaling-stroke" cx="35" cy="35" r="35" fill="White" stroke="black" stroke-width="1"/>\n                        <foreignObject class="symbol-text-container" x="8.75" width="52.5" height="70" visibility="hidden">\n                        <div style="height: 70px" class="flex-container">\n                            <div width="52.5" class="symbol-text-element">\n                                ΔPh\n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
    },
    annotations: [
      {
        content: "ΔPh",
      },
    ],
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    height: 70,
    width: 70,
  },
  {
    id: "philosophy1",
    addInfo: [
      {
        title: "Philosophy",
        toolTip: "Identify Philosophy",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g   transform="translate(2, 2)">\n                        <rect height="30" width="30" fill="transparent" stroke-width="0" /> \n                        <circle vector-effect="non-scaling-stroke" cx="15" cy="15" r="15" fill="White" stroke="black" stroke-width="1"/>\n                        <foreignObject class="symbol-text-container" x="3.75" width="22.5" height="30" visibility="hidden">\n                        <div style="height: 30px" class="flex-container">\n                            <div width="22.5" class="symbol-text-element">\n                                yn\n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
    },
    annotations: [
      {
        content: "yn",
      },
    ],
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    height: 30,
    width: 30,
  },
  {
    id: "philosophy2",
    addInfo: [
      {
        title: "Philosophy",
        toolTip: "Identify Philosophy",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g   transform="translate(2, 2)">\n                        <rect height="30" width="30" fill="transparent" stroke-width="0" /> \n                        <circle vector-effect="non-scaling-stroke" cx="15" cy="15" r="15" fill="White" stroke="black" stroke-width="1"/>\n                        <foreignObject class="symbol-text-container" x="3.75" width="22.5" height="30" visibility="hidden">\n                        <div style="height: 30px" class="flex-container">\n                            <div width="22.5" class="symbol-text-element">\n                                Phn\n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
    },
    annotations: [
      {
        content: "Phn",
      },
    ],
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    height: 30,
    width: 30,
  },
  {
    id: "deltaPhilosophy",
    addInfo: [
      {
        title: "Delta Philosophy",
        toolTip: "Identify Change of Philosophy",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g   transform="translate(2, 2)">\n                        <rect height="70" width="70" fill="transparent" stroke-width="0" /> \n                        <circle vector-effect="non-scaling-stroke" cx="35" cy="35" r="35" fill="White" stroke="black" stroke-width="1"/>\n                        <foreignObject class="symbol-text-container" x="8.75" width="52.5" height="70" visibility="hidden">\n                        <div style="height: 70px" class="flex-container">\n                            <div width="52.5" class="symbol-text-element">\n                                Delta Philosophy\n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
    },
    annotations: [
      {
        content: "Delta Philosophy",
      },
    ],
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    height: 70,
    width: 70,
  },
  {
    id: "inheritArrow",
    addInfo: [
      {
        title: "Inherit Arrow",
        toolTip: "Show Inherited Philosophy",
      },
    ],
    type: "Straight",
    annotations: [
      {
        content: "Inherited",
        alignment: "Before",
      },
    ],
    targetDecorator: {
      shape: "None",
      style: {},
    },
    sourceDecorator: {
      shape: "Arrow",
    },
    style: {},
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "passThroughArrow",
    addInfo: [
      {
        title: "Pass Through Arrow",
        toolTip: "Show Pass Through Philosophy",
      },
    ],
    type: "Straight",
    annotations: [
      {
        content: "Pass Through",
        alignment: "Before",
      },
    ],
    targetDecorator: {
      shape: "None",
      style: {},
    },
    sourceDecorator: {
      shape: "Arrow",
    },
    style: {},
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "directionArrow",
    addInfo: [
      {
        title: "Direction Arrow",
        toolTip: "Show A Direction",
      },
    ],
    type: "Straight",
    targetDecorator: {
      shape: "Arrow",
      style: {},
    },
    sourceDecorator: {
      shape: "None",
    },
    style: {},
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "deltaT",
    addInfo: [
      {
        title: "Delta T",
        toolTip: "Change Of Time",
      },
    ],
    type: "Straight",
    annotations: [
      {
        content: "Δt",
      },
    ],
    targetDecorator: {
      shape: "Arrow",
      style: {},
    },
    sourceDecorator: {
      shape: "Arrow",
    },
    style: {},
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "deltaL",
    addInfo: [
      {
        title: "Delta L",
        toolTip: "Change of Loss",
      },
    ],
    type: "Straight",
    annotations: [
      {
        content: "ΔL",
      },
    ],
    targetDecorator: {
      shape: "Arrow",
      style: {},
    },
    sourceDecorator: {
      shape: "Arrow",
    },
    style: {},
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "deltaG",
    addInfo: [
      {
        title: "Delta G",
        toolTip: "Change of Gain",
      },
    ],
    type: "Straight",
    annotations: [
      {
        content: "ΔG",
      },
    ],
    targetDecorator: {
      shape: "Arrow",
      style: {},
    },
    sourceDecorator: {
      shape: "Arrow",
    },
    style: {},
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "initialTime",
    addInfo: [
      {
        title: "Time 0",
        toolTip: "Initial Time",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <g>\n                        <rect width="5" height="10" fill="transparent" stroke-width="0"/>\n                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dasharray="10 5" d="M 2.5 0 L 2.5 10"/> \n                    </g>                    \n                </g>',
    },
    annotations: [
      {
        content: "t0",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 20,
        },
      },
    ],
    constraints: 4753134,
    height: 250,
    width: 30,
  },
  {
    id: "initialTimeplus",
    addInfo: [
      {
        title: "Time 0 plus",
        toolTip: "Time After Initial Time",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <g>\n                        <rect width="5" height="10" fill="transparent" stroke-width="0"/>\n                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dasharray="10 5" d="M 2.5 0 L 2.5 10"/> \n                    </g>                    \n                </g>',
    },
    annotations: [
      {
        content: "t0+",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 20,
        },
      },
    ],
    constraints: 4753134,
    height: 250,
    width: 30,
  },
  {
    id: "initialTimeplusplus",
    addInfo: [
      {
        title: "Time 0 plus plus",
        toolTip: "More time after initial time",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <g>\n                        <rect width="5" height="10" fill="transparent" stroke-width="0"/>\n                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dasharray="10 5" d="M 2.5 0 L 2.5 10"/> \n                    </g>                    \n                </g>',
    },
    annotations: [
      {
        content: "t0++",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 20,
        },
      },
    ],
    constraints: 4753134,
    height: 250,
    width: 30,
  },
  {
    id: "firstTime",
    addInfo: [
      {
        title: "Time 1",
        toolTip: "First Time",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <g>\n                        <rect width="5" height="10" fill="transparent" stroke-width="0"/>\n                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dasharray="10 5" d="M 2.5 0 L 2.5 10"/> \n                    </g>                    \n                </g>',
    },
    annotations: [
      {
        content: "t1",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 20,
        },
      },
    ],
    constraints: 4753134,
    height: 250,
    width: 30,
  },
  {
    id: "firstTimePlus",
    addInfo: [
      {
        title: "Time 1 plus number",
        toolTip: "Time After Time 1",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <g>\n                        <rect width="5" height="10" fill="transparent" stroke-width="0"/>\n                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dasharray="10 5" d="M 2.5 0 L 2.5 10"/> \n                    </g>                    \n                </g>',
    },
    annotations: [
      {
        content: "t1 + n",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 20,
        },
      },
    ],
    constraints: 4753134,
    height: 250,
    width: 30,
  },
  {
    id: "secondTime",
    addInfo: [
      {
        title: "Time 2",
        toolTip: "Second Time",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <g>\n                        <rect width="5" height="10" fill="transparent" stroke-width="0"/>\n                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dasharray="10 5" d="M 2.5 0 L 2.5 10"/> \n                    </g>                    \n                </g>',
    },
    annotations: [
      {
        content: "t2",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 20,
        },
      },
    ],
    constraints: 4753134,
    height: 250,
    width: 30,
  },
  {
    id: "secondTimePlus",
    addInfo: [
      {
        title: "Time 2 plus number",
        toolTip: "Time After Second Time",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <g>\n                        <rect width="5" height="10" fill="transparent" stroke-width="0"/>\n                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dasharray="10 5" d="M 2.5 0 L 2.5 10"/> \n                    </g>                    \n                </g>',
    },
    annotations: [
      {
        content: "t2 + n",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 20,
        },
      },
    ],
    constraints: 4753134,
    height: 250,
    width: 30,
  },
  {
    id: "thirdTime",
    addInfo: [
      {
        title: "Time 3",
        toolTip: "Third Time",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <g>\n                        <rect width="5" height="10" fill="transparent" stroke-width="0"/>\n                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dasharray="10 5" d="M 2.5 0 L 2.5 10"/> \n                    </g>                    \n                </g>',
    },
    annotations: [
      {
        content: "t3",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 20,
        },
      },
    ],
    constraints: 4753134,
    height: 250,
    width: 30,
  },
  {
    id: "thirdTimePlus",
    addInfo: [
      {
        title: "Time 3 plus number",
        toolTip: "Time After Third Time",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <g>\n                        <rect width="5" height="10" fill="transparent" stroke-width="0"/>\n                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dasharray="10 5" d="M 2.5 0 L 2.5 10"/> \n                    </g>                    \n                </g>',
    },
    annotations: [
      {
        content: "t3 + n",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 20,
        },
      },
    ],
    constraints: 4753134,
    height: 250,
    width: 30,
  },
  {
    id: "fourthTime",
    addInfo: [
      {
        title: "Fourth Time",
        toolTip: "Identify The Fourth Time",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <g>\n                        <rect width="5" height="10" fill="transparent" stroke-width="0"/>\n                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dasharray="10 5" d="M 2.5 0 L 2.5 10"/> \n                    </g>                    \n                </g>',
    },
    annotations: [
      {
        content: "t4",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 20,
        },
      },
    ],
    constraints: 4753134,
    height: 250,
    width: 30,
  },
  {
    id: "fourthTimePlus",
    addInfo: [
      {
        title: "Time 4 plus number",
        toolTip: "Time After Fourth Time",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <g>\n                        <rect width="5" height="10" fill="transparent" stroke-width="0"/>\n                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dasharray="10 5" d="M 2.5 0 L 2.5 10"/> \n                    </g>                    \n                </g>',
    },
    annotations: [
      {
        content: "t4 + n",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 20,
        },
      },
    ],
    constraints: 4753134,
    height: 250,
    width: 30,
  },
  {
    id: "timePrime",
    addInfo: [
      {
        title: "Time Prime",
        toolTip: "Denote The Time Prime",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <g>\n                        <rect width="5" height="10" fill="transparent" stroke-width="0"/>\n                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dasharray="10 5" d="M 2.5 0 L 2.5 10"/> \n                    </g>                    \n                </g>',
    },
    annotations: [
      {
        content: "time prime",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 20,
        },
      },
    ],
    constraints: 4753134,
    height: 250,
    width: 30,
  },
  {
    id: "t[0]",
    addInfo: [
      {
        title: "t[0]",
        toolTip: "Denote An Initial Time",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <g>\n                        <rect width="5" height="10" fill="transparent" stroke-width="0"/>\n                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dasharray="10 5" d="M 2.5 0 L 2.5 10"/> \n                    </g>                    \n                </g>',
    },
    annotations: [
      {
        content: "t0",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 20,
        },
      },
    ],
    constraints: 4753134,
    height: 250,
    width: 30,
  },
  {
    id: "t[1]",
    addInfo: [
      {
        title: "t[1]",
        toolTip: "Denote The First Time",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <g>\n                        <rect width="5" height="10" fill="transparent" stroke-width="0"/>\n                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dasharray="10 5" d="M 2.5 0 L 2.5 10"/> \n                    </g>                    \n                </g>',
    },
    annotations: [
      {
        content: "t1",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 20,
        },
      },
    ],
    constraints: 4753134,
    height: 250,
    width: 30,
  },
  {
    id: "t[2]",
    addInfo: [
      {
        title: "t[2]",
        toolTip: "Denote The Second Time",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <g>\n                        <rect width="5" height="10" fill="transparent" stroke-width="0"/>\n                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dasharray="10 5" d="M 2.5 0 L 2.5 10"/> \n                    </g>                    \n                </g>',
    },
    annotations: [
      {
        content: "t2",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 20,
        },
      },
    ],
    constraints: 4753134,
    height: 250,
    width: 30,
  },
  {
    id: "t[3]",
    addInfo: [
      {
        title: "t[3]",
        toolTip: "Denote The Third Time",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <g>\n                        <rect width="5" height="10" fill="transparent" stroke-width="0"/>\n                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dasharray="10 5" d="M 2.5 0 L 2.5 10"/> \n                    </g>                    \n                </g>',
    },
    annotations: [
      {
        content: "t3",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 20,
        },
      },
    ],
    constraints: 4753134,
    height: 250,
    width: 30,
  },
  {
    id: "t[4]",
    addInfo: [
      {
        title: "t[4]",
        toolTip: "Denote The Fourth Time",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <g>\n                        <rect width="5" height="10" fill="transparent" stroke-width="0"/>\n                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dasharray="10 5" d="M 2.5 0 L 2.5 10"/> \n                    </g>                    \n                </g>',
    },
    annotations: [
      {
        content: "t4",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 20,
        },
      },
    ],
    constraints: 4753134,
    height: 250,
    width: 30,
  },
  {
    id: "t'",
    addInfo: [
      {
        title: "t'",
        toolTip: "Denote The Time Prime",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <g>\n                        <rect width="5" height="10" fill="transparent" stroke-width="0"/>\n                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dasharray="10 5" d="M 2.5 0 L 2.5 10"/> \n                    </g>                    \n                </g>',
    },
    annotations: [
      {
        content: "t4",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 20,
        },
      },
    ],
    constraints: 4753134,
    height: 250,
    width: 30,
  },
  {
    id: "generationTime",
    addInfo: [
      {
        title: "Generation Time",
        toolTip: "Identify Our Generation Time",
      },
    ],
    type: "Straight",
    annotations: [
      {
        content: "generation time",
        alignment: "Before",
      },
    ],
    targetDecorator: {
      shape: "Arrow",
      style: {},
    },
    sourceDecorator: {
      shape: "Arrow",
    },
    style: {},
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "qTime",
    addInfo: [
      {
        title: "Q Time",
        toolTip: "Identify Our Generation Time",
      },
    ],
    type: "Straight",
    annotations: [
      {
        content: "Q time",
        alignment: "Before",
      },
    ],
    targetDecorator: {
      shape: "Arrow",
      style: {},
    },
    sourceDecorator: {
      shape: "Arrow",
    },
    style: {},
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "Q",
    addInfo: [
      {
        title: "Q",
        toolTip: "Identify Our Generation Time",
      },
    ],
    type: "Straight",
    annotations: [
      {
        content: "Q",
        alignment: "Before",
      },
    ],
    targetDecorator: {
      shape: "Arrow",
      style: {},
    },
    sourceDecorator: {
      shape: "Arrow",
    },
    style: {},
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "continuityStability",
    addInfo: [
      {
        title: "Continuity",
        toolTip: "Show Continuity Of Entity",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2, 2)">\n                    <rect width="10" height="5" fill="transparent" vector-effect="non-scaling-stroke" stroke="black" stroke-width="0" stroke-dasharray = "" />\n                    <circle vector-effect="non-scaling-stroke" cx="3.5" cy="2.5" r="0.4"/>\n                    <circle vector-effect="non-scaling-stroke" cx="5.0" cy="2.5" r="0.4"/>\n                    <circle vector-effect="non-scaling-stroke" cx="6.5" cy="2.5" r="0.4"/>\n                    </g>',
    },
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: [],
    width: 210,
    height: 100,
  },
  {
    id: "linkednodestablility",
    addInfo: [
      {
        title: "Linked Node",
        toolTip: "Linked Node",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="12" width="10" stroke="none" fill="none"/>\n                    <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="none" cx="5" cy="5" r="5"/>\n                    <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="none" d="M 2 11 L 8 11 M 2 12 L 8 12"/>     \n                </g>',
    },
    annotations: [
      {
        content: "1",
        offset: {
          x: 0.5,
          y: 0.45,
        },
      },
    ],
    height: 60,
    width: 50,
  },
  {
    id: "label",
    addInfo: [
      {
        title: "Label",
        toolTip: "Information Label",
      },
    ],
    type: "Bezier",
    annotations: [
      {
        content: "label",
        alignment: "After",
      },
    ],
    targetDecorator: {
      shape: "Arrow",
      style: {},
    },
    sourceDecorator: {
      shape: "None",
    },
    style: {},
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "label1",
    addInfo: [
      {
        title: "Label",
        toolTip: "Information Label",
      },
    ],
    type: "Bezier",
    annotations: [
      {
        content: "label",
        alignment: "After",
      },
    ],
    targetDecorator: {
      shape: "None",
      style: {},
    },
    sourceDecorator: {
      shape: "Arrow",
    },
    style: {},
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "label2",
    addInfo: [
      {
        title: "Label",
        toolTip: "Information Label",
      },
    ],
    type: "Bezier",
    annotations: [
      {
        content: "label",
        alignment: "Before",
      },
    ],
    targetDecorator: {
      shape: "None",
      style: {},
    },
    sourceDecorator: {
      shape: "Arrow",
    },
    style: {},
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "label3",
    addInfo: [
      {
        title: "Label",
        toolTip: "Information Label",
      },
    ],
    type: "Bezier",
    annotations: [
      {
        content: "label",
        alignment: "Before",
      },
    ],
    targetDecorator: {
      shape: "Arrow",
      style: {},
    },
    sourceDecorator: {
      shape: "None",
    },
    style: {},
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "label4",
    addInfo: [
      {
        title: "Label",
        toolTip: "Information Label",
      },
    ],
    type: "Bezier",
    annotations: [
      {
        content: "label",
        alignment: "Before",
      },
    ],
    targetDecorator: {
      shape: "None",
      style: {},
    },
    sourceDecorator: {
      shape: "Arrow",
    },
    style: {},
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "label5",
    addInfo: [
      {
        title: "Label",
        toolTip: "Information Label",
      },
    ],
    type: "Bezier",
    annotations: [
      {
        content: "label",
        alignment: "After",
      },
    ],
    targetDecorator: {
      shape: "None",
      style: {},
    },
    sourceDecorator: {
      shape: "Arrow",
    },
    style: {},
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "expandTo",
    addInfo: [
      {
        title: "Expand To",
        toolTip: "Information Label",
      },
    ],
    type: "Bezier",
    annotations: [
      {
        content: "label",
        alignment: "Before",
      },
    ],
    targetDecorator: {
      shape: "Arrow",
      style: {},
    },
    sourceDecorator: {
      shape: "None",
    },
    style: {},
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "expandTo1",
    addInfo: [
      {
        title: "Expand To",
        toolTip: "Information Label",
      },
    ],
    type: "Bezier",
    annotations: [
      {
        content: "label",
        alignment: "After",
      },
    ],
    targetDecorator: {
      shape: "Arrow",
      style: {},
    },
    sourceDecorator: {
      shape: "None",
    },
    style: {},
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "allocate",
    addInfo: [
      {
        title: "Allocate",
        toolTip: "Allocate Theorem in Theory",
      },
    ],
    type: "Straight",
    annotations: [],
    targetDecorator: {
      shape: "None",
      style: {},
    },
    sourceDecorator: {
      shape: "Arrow",
    },
    style: {},
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "allocate1",
    addInfo: [
      {
        title: "Allocate",
        toolTip: "Allocate Theorem in Theory",
      },
    ],
    type: "Straight",
    annotations: [],
    targetDecorator: {
      shape: "Arrow",
      style: {},
    },
    sourceDecorator: {
      shape: "None",
    },
    style: {},
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "label123",
    addInfo: [
      {
        title: "Label",
        toolTip: "Symbol Identification Label",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transfrom="translate(2, 2)">\n                    <rect height="50" width="200" stroke-width="0" fill="transparent"/>\n                    <path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d = "M 30 50 L 200 50 M 30 50 L 30 15"/>\n                    <polygon vector-effect="non-scaling-stroke" fill="black" stroke="black" stroke-width="1" points="25,15 35,15 30,10"/>\n                    <foreignObject class="symbol-text-container" x="25" y="25" width="150" height="25" visibility="hidden">\n                    <div style="height: 25px" class="flex-container">\n                        <div width="150" class="symbol-text-element">\n                            label\n                        </div>\n                    </div>\n                    </foreignObject> \n                </g>',
    },
    annotations: [
      {
        content: "label",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 10,
        },
      },
    ],
    height: 50,
    width: 200,
  },
  {
    id: "label",
    addInfo: [
      {
        title: "Label",
        toolTip: "Symbol Identification Label",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g>\n                    <rect height="50" width="200" stroke-width="0" fill="transparent"/>\n                    <path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 30 50 L 200 50 L 200 15"/>\n                    <polygon vector-effect="non-scaling-stroke" fill="black" stroke="black" stroke-width="1" points="195,15 205,15 200 ,10" />\n                    <foreignObject class="symbol-text-container" x="25" y="25" width="150" height="25" visibility="hidden">\n                    <div style="height: 25px" class="flex-container">\n                        <div width="150" class="symbol-text-element">\n                            label\n                        </div>\n                    </div>\n                    </foreignObject> \n                </g>',
    },
    annotations: [
      {
        content: "label",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 10,
        },
      },
    ],
    height: 50,
    width: 200,
  },
  {
    id: "directionLeft",
    addInfo: [
      {
        title: "DirectionLeft",
        toolTip: "Identify Left Direction",
      },
    ],
    type: "Straight",
    annotations: [],
    targetDecorator: {
      shape: "None",
      style: {},
    },
    sourceDecorator: {
      shape: "Arrow",
    },
    style: {},
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "directionRight",
    addInfo: [
      {
        title: "Direction Right",
        toolTip: "Identify Right Direction",
      },
    ],
    type: "Straight",
    annotations: [],
    targetDecorator: {
      shape: "Arrow",
      style: {},
    },
    sourceDecorator: {
      shape: "None",
    },
    style: {},
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "crossoutlabel",
    addInfo: [
      {
        title: "Cross Out",
        toolTip: "To Cross Out an Entity",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="10" width="10" stroke="none" fill="none"/>\n                    <path vector-effect="non-scaling-stroke" stroke="red" stroke-width="1" fill="none" d="M 0 0 L 10 10 M 0 10 L 10 0"/> \n                </g>',
    },
    height: 50,
    width: 50,
  },
  {
    id: "leftCurlBrace",
    addInfo: [
      {
        title: "Left Curl Brace",
        toolTip: "Use to Group Theorem",
      },
    ],
    annotations: [
      {
        content: "Text",
        offset: {
          x: 0,
          y: 0.5,
        },
        margin: {
          right: 15,
        },
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2,2)">\n                    <rect height="120" width="30" stroke-width="1" stroke="1" fill="transparent"/>\n                    <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" d="M 30 0 A 15 20 0 0 0 15 20 L 15 50 A 15 10 0 0 1 0 60 A 15 10 0 0 1 15 70 L 15 100 A 15 20 0 0 0 30 120"/>\n                </g>',
    },
    height: 120,
    width: 40,
  },
  {
    id: "rightCurlBraces",
    addInfo: [
      {
        title: "Right Curl Braces",
        toolTip: "Use to Group Theorem",
      },
    ],
    annotations: [
      {
        content: "Text",
        offset: {
          x: 1,
          y: 0.5,
        },
        margin: {
          left: 15,
        },
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect height="120" width="30" stroke-width="1" stroke="1" fill="transparent"/>\n                    <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="transparent" d="M 0 0 A 15 20 0 0 1 15 20 L 15 50 A 15 10 0 0 0 30 60 A 15 10 0 0 0 15 70 L 15 100 A 15 20 0 0 1 0 120" />\n                </g>',
    },
    height: 120,
    width: 40,
  },
  {
    id: "#",
    shape: {
      type: "Native",
      content:
        '<g>\n                    <rect height="30" width="100" fill="transparent" stroke-width="0"/>\n                    <foreignObject class="symbol-text-container" x="0" y="25" width="100" height="30" visibility="hidden">\n                    <div style="height: 30px" class="flex-container">\n                        <div width="100" class="symbol-text-element">\n                            #1\n                        </div>\n                    </div>\n                    </foreignObject>     \n                </g>',
    },
    addInfo: [
      {
        title: "#",
        toolTip: "Use for Identification",
      },
    ],
    annotations: [
      {
        content: "#1",
        style: {
          bold: true,
          fontSize: 15,
          italic: true,
        },
      },
    ],
    height: 30,
    width: 100,
  },
  {
    id: "node",
    addInfo: [
      {
        title: "Node",
        toolTip: "Using for Identification",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g   transform="translate(2, 2)">\n                        <rect height="30" width="30" fill="transparent" stroke-width="0" /> \n                        <circle vector-effect="non-scaling-stroke" cx="15" cy="15" r="15" fill="White" stroke="black" stroke-width="1"/>\n                        <foreignObject class="symbol-text-container" x="3.75" width="22.5" height="30" visibility="hidden">\n                        <div style="height: 30px" class="flex-container">\n                            <div width="22.5" class="symbol-text-element">\n                                1\n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
    },
    annotations: [
      {
        content: "1",
      },
    ],
    style: {
      fill: "none",
      fontSize: 10,
    },
    ports: null,
    height: 30,
    width: 30,
  },
  {
    id: "nodeTable",
    addInfo: [
      {
        title: "Node Table",
        toolTip: "Represents a Table of Node",
      },
    ],
    annotations: [
      {
        content: "Node Number",
        width: 100,
        offset: {
          x: 0.25,
          y: 0.25,
        },
      },
      {
        content: "Information",
        width: 100,
        offset: {
          x: 0.25,
          y: 0.75,
        },
      },
      {
        content: "",
        width: 100,
        offset: {
          x: 0.75,
          y: 0.25,
        },
      },
      {
        width: 100,
        offset: {
          x: 0.75,
          y: 0.75,
        },
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                            <rect height="100" width="200" fill="transparent" stroke-width="0"/>\n                            undefined<g transform="translate(0)">\n            <rect vector-effect="non-scaling-stroke" fill="white" stroke-width="1" stroke="black" height="100" width="100"/>\n            <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" d="M 0 50 L 100 50"/>\n            <text class="symbol-text-container" visibility="hidden" lengthAdjust="spacingAndGlyphs" font-size="10px" font-weight="bold"><tspan x="20" y="30">Title</tspan></text>\n            <text class="symbol-text-container" visibility="hidden" lengthAdjust="spacingAndGlyphs" font-size="10px" font-weight="bold"><tspan x="20" y="80">Value</tspan></text> \n            </g><g transform="translate(100)">\n            <rect vector-effect="non-scaling-stroke" fill="white" stroke-width="1" stroke="black" height="100" width="100"/>\n            <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" d="M 0 50 L 100 50"/>\n            <text class="symbol-text-container" visibility="hidden" lengthAdjust="spacingAndGlyphs" font-size="10px" font-weight="bold"><tspan x="20" y="30">Title</tspan></text>\n            <text class="symbol-text-container" visibility="hidden" lengthAdjust="spacingAndGlyphs" font-size="10px" font-weight="bold"><tspan x="20" y="80">Value</tspan></text> \n            </g>\n                        </g>',
    },
    height: 100,
    width: 200,
  },
  {
    id: "separationLine",
    addInfo: [
      {
        title: "Separation Line",
        toolTip: "Use to Show Separation",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g  transform="translate(2, 2)">\n                    <g>\n                        <rect width="5" height="10" fill="transparent" stroke-width="0"/>\n                        <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dasharray="10 5" d="M 2.5 0 L 2.5 10"/> \n                    </g>                    \n                </g>',
    },
    constraints: 4753134,
    height: 400,
    width: 30,
  },
  {
    id: "pushUp",
    addInfo: [
      {
        title: "Push Up",
        toolTip: "Selected to Apply",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect height="100" width="100" stroke-width="0" fill="transparent"/>\n                    <path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 50 100 L 100 100 L 100 0"/>\n                    <polygon vector-effect="non-scaling-stroke" fill="black" stroke="black" stroke-width="1" points="95,5 105,5 100,0"/>\n                    <foreignObject class="symbol-text-container" x="40" y="25" width="75" height="75" visibility="hidden">\n                    <div style="height: 75px" class="flex-container">\n                        <div width="75" class="symbol-text-element">\n                            push up\n                        </div>\n                    </div>\n                    </foreignObject> \n                </g>',
    },
    annotations: [
      {
        content: "push up",
        offset: {
          x: 1,
          y: 0.5,
        },
        margin: {
          left: 30,
        },
      },
    ],
    height: 100,
    width: 100,
  },
  {
    id: "pushUp1",
    addInfo: [
      {
        title: "Push Up",
        toolTip: "Selected to Apply",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect height="100" width="100" stroke-width="0" fill="transparent"/>\n                    <path vector-effect="non-scaling-stroke" fill="transparent" stroke="black" stroke-width="1" d="M 55 100 L 5 100 L 5 0"/>\n                    <polygon vector-effect="non-scaling-stroke" fill="black" stroke="black" stroke-width="1" points=" 0,5 10,5 5,0"/>\n                    <foreignObject class="symbol-text-container" x="2" y="25" width="75" height="75" visibility="hidden">\n                    <div style="height: 75px" class="flex-container">\n                        <div width="75" class="symbol-text-element">\n                            push up\n                        </div>\n                    </div>\n                    </foreignObject> \n                </g>',
    },
    annotations: [
      {
        content: "push up",
        offset: {
          x: 0,
          y: 0.5,
        },
        margin: {
          right: 30,
        },
      },
    ],
    height: 100,
    width: 100,
  },
  {
    id: "up",
    addInfo: [
      {
        title: "Up",
        toolTip: "Position Up",
      },
    ],
    type: "Straight",
    annotations: [
      {
        content: "up",
        alignment: "before",
      },
    ],
    targetDecorator: {
      shape: "None",
      style: {},
    },
    sourceDecorator: {
      shape: "Arrow",
    },
    style: {},
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "down",
    addInfo: [
      {
        title: "Down",
        toolTip: "Position Down",
      },
    ],
    type: "Straight",
    annotations: [
      {
        content: "down",
        alignment: "before",
      },
    ],
    targetDecorator: {
      shape: "Arrow",
      style: {},
    },
    sourceDecorator: {
      shape: "None",
    },
    style: {},
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "up1",
    addInfo: [
      {
        title: "Up",
        toolTip: "Position Up",
      },
    ],
    type: "Straight",
    annotations: [
      {
        content: "up",
        alignment: "before",
      },
    ],
    targetDecorator: {
      shape: "None",
      style: {},
    },
    sourceDecorator: {
      shape: "Arrow",
    },
    style: {},
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "down1",
    addInfo: [
      {
        title: "Down",
        toolTip: "Position Down",
      },
    ],
    type: "Straight",
    annotations: [
      {
        content: "down",
        alignment: "before",
      },
    ],
    targetDecorator: {
      shape: "Arrow",
      style: {},
    },
    sourceDecorator: {
      shape: "None",
    },
    style: {},
    sourcePoint: {
      x: 0,
      y: 0,
    },
    targetPoint: {
      x: 400,
      y: 400,
    },
  },
  {
    id: "continuityLabel",
    addInfo: [
      {
        title: "Continuity",
        toolTip: "Denote a Continuity",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g>\n                    <rect vector-effect="non-scaling-stroke" height="60" width="120" stroke-width="1" fill="none" stroke="black"/>\n                    <circle vector-effect="non-scaling-stroke" stroke-width="1" fill="black" stroke="black" cx="60" cy="15" r="3.5"/>\n                    <circle vector-effect="non-scaling-stroke" stroke-width="1" fill="black" stroke="black" cx="60" cy="30" r="3.5"/>\n                    <circle vector-effect="non-scaling-stroke" stroke-width="1" fill="black" stroke="black" cx="60" cy="45" r="3.5"/>\n                </g>',
    },
    ports: [
      {
        id: "LeftMiddle",
        offset: {
          x: 0,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "TopCenter",
        offset: {
          x: 0.5,
          y: 0,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "RightMidlle",
        offset: {
          x: 1,
          y: 0.5,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
      {
        id: "BottomCenter",
        offset: {
          x: 0.5,
          y: 1,
        },
        visibility: 1,
        shape: "X",
        width: 4,
        height: 4,
      },
    ],
    height: 50,
    width: 100,
  },
  {
    id: "linkednodeLabel",
    addInfo: [
      {
        title: "Linked Node",
        toolTip: "Linked Node",
      },
    ],
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="12" width="10" stroke="none" fill="none"/>\n                    <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="none" cx="5" cy="5" r="5"/>\n                    <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="none" d="M 2 11 L 8 11 M 2 12 L 8 12"/>     \n                </g>',
    },
    annotations: [
      {
        content: "1",
        offset: {
          x: 0.5,
          y: 0.45,
        },
      },
    ],
    height: 60,
    width: 50,
  },
  {
    id: "itemHidden",
    shape: {
      type: "Native",
      content:
        '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="12" width="10" stroke="none" fill="none"/>\n                    <circle vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="none" cx="5" cy="5" r="5"/>\n                    <path vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" fill="none" d="M 2 11 L 8 11 M 2 12 L 8 12"/>     \n                </g>',
    },
    height: 0,
    width: 0,
  },
];

export const commLabelData = [
  {
    id: "informationlabel",
    title: "Information Label",
    annotation: {
      type: "Bezier",
      shape: {
        target: "Arrow",
      },
      content: [
        {
          content: "Label",
          alignment: "Before",
        },
      ],
    },
    menuId: "edit",
    toolTip: "Show More Entity Info",
    type: "Arrow",
  },
  {
    id: "communication12",
    title: "Communication",
    annotation: {
      type: "Bezier",
      shape: {
        target: "Arrow",
      },
      content: [
        {
          content: "Communicate",
          alignment: "Before",
        },
      ],
    },
    menuId: "edit",
    toolTip: "Communication Work Related",
    type: "Arrow",
  },
  {
    id: "toDO",
    title: "To Do",
    annotation: {
      type: "Straight",
      shape: {
        target: "Arrow",
      },
      content: [
        {
          content: "To Do",
          alignment: "Before",
        },
      ],
    },
    menuId: "edit",
    toolTip: "Use With Other Entity",
    type: "Arrow",
  },
  {
    id: "pointTo",
    title: "Point To",
    annotation: {
      type: "Straight",
      shape: {
        target: "Arrow",
      },
      content: [
        {
          content: "Point To",
          alignment: "Before",
        },
      ],
    },
    menuId: "edit",
    toolTip: "Word Point To Entity",
    type: "Arrow",
  },
  {
    id: "giveRiseTo",
    title: "Give Rise To",
    annotation: {
      type: "Straight",
      shape: {
        target: "Arrow",
      },
      content: [
        {
          content: "Give Rise To",
          alignment: "Before",
        },
      ],
    },
    menuId: "edit",
    toolTip: "Entity Give Rise to Entity",
    type: "Arrow",
  },
  {
    id: "errorToProblem",
    title: "Error to Problem",
    annotation: {
      type: "Straight",
      shape: {
        target: "Arrow",
      },
      content: [
        {
          content: "Give Rise To",
          alignment: "Before",
        },
      ],
    },
    menuId: "edit",
    toolTip: "Comm Error Rise to Problem",
    type: "Arrow",
  },
  {
    id: "relatedTo",
    title: "Related To",
    annotation: {
      type: "Straight",
      shape: {
        target: "Arrow",
      },
      content: [
        {
          content: "Related To",
          alignment: "Before",
        },
      ],
    },
    menuId: "edit",
    toolTip: "Entity Related to Entity",
    type: "Arrow",
  },
  {
    id: "by",
    title: "By",
    annotation: {
      type: "Straight",
      shape: {
        target: "Arrow",
      },
      content: [
        {
          content: "By",
          alignment: "Before",
        },
      ],
    },
    menuId: "edit",
    toolTip: "Entity Related to Entity By Entity",
    type: "Arrow",
  },
  {
    id: "depend",
    title: "Depend",
    annotation: {
      type: "Straight",
      shape: {
        target: "Arrow",
      },
      content: [
        {
          content: "Depend",
          alignment: "Before",
        },
      ],
    },
    menuId: "edit",
    toolTip: "Entity Depend on Entity",
    type: "Arrow",
  },
  {
    id: "agree",
    title: "Agree",
    annotation: {
      type: "Straight",
      shape: {
        target: "Arrow",
      },
      content: [
        {
          content: "Agree",
          alignment: "Before",
        },
      ],
    },
    menuId: "edit",
    toolTip: "Entity Agree With Entity",
    type: "Arrow",
  },
  {
    id: "match",
    title: "Match",
    annotation: {
      type: "Straight",
      shape: {
        target: "Arrow",
      },
      content: [
        {
          content: "Match",
          alignment: "Before",
        },
      ],
    },
    menuId: "edit",
    toolTip: "Entity Match With Entity",
    type: "Arrow",
  },
  {
    id: "have",
    title: "Have",
    annotation: {
      type: "Straight",
      shape: {
        target: "Arrow",
      },
      content: [
        {
          content: "Have",
          alignment: "Before",
        },
      ],
    },
    menuId: "edit",
    toolTip: "Entity Have Entity",
    type: "Arrow",
  },
  {
    id: "Interact",
    title: "Interact",
    annotation: {
      type: "Straight",
      shape: {
        target: "Arrow",
      },
      content: [
        {
          content: "Have",
          alignment: "Before",
        },
      ],
    },
    menuId: "edit",
    toolTip: "Entity Interact Entity",
    type: "Arrow",
  },
  {
    id: "Use",
    title: "Use",
    annotation: {
      type: "Straight",
      shape: {
        target: "Arrow",
      },
      content: [
        {
          content: "Use",
          alignment: "Before",
        },
      ],
    },
    menuId: "edit",
    toolTip: "Entity Use Entity",
    type: "Arrow",
  },
  {
    id: "compare",
    title: "Compare",
    annotation: {
      type: "Straight",
      shape: {
        target: "Arrow",
      },
      content: [
        {
          content: "Compare",
          alignment: "Before",
        },
      ],
    },
    menuId: "edit",
    toolTip: "Entity Compare Entity",
    type: "Arrow",
  },
  {
    id: "attach",
    title: "Attach",
    annotation: {
      type: "Straight",
      shape: {
        target: "Arrow",
      },
      content: [
        {
          content: "Attach",
          alignment: "Before",
        },
      ],
    },
    menuId: "edit",
    toolTip: "Entity Attach to Entity",
    type: "Arrow",
  },
  {
    id: "identify",
    title: "Identify",
    annotation: {
      type: "Straight",
      shape: {
        target: "Arrow",
      },
      content: [
        {
          content: "Identify",
          alignment: "Before",
        },
      ],
    },
    menuId: "edit",
    toolTip: "Entity Attach to Entity",
    type: "Arrow",
  },
  {
    id: "define",
    title: "Define",
    annotation: {
      type: "Straight",
      shape: {
        target: "Arrow",
      },
      content: [
        {
          content: "Define",
          alignment: "Before",
        },
      ],
    },
    menuId: "edit",
    toolTip: "Entity Attach to Entity",
    type: "Arrow",
  },
  {
    id: "visuallyIdentify",
    title: "Visually Identify",
    annotation: {
      type: "Straight",
      shape: {
        target: "Arrow",
      },
      content: [
        {
          content: "Visually Identify",
          alignment: "Before",
        },
      ],
    },
    menuId: "edit",
    toolTip: "Entity Attach to Entity",
    type: "Arrow",
  },
  {
    id: "curlBracesLeft1",
    title: "Curl Braces",
    annotation: {
      content: [
        {
          content: "Text",
          offset: {
            x: 0,
            y: 0.5,
          },
          margin: {
            right: 15,
          },
        },
      ],
    },
    menuId: "edit",
    toolTip: "Left Braces",
    type: "Curly",
  },
  {
    id: "curlBracesRight2",
    title: "Curl Braces",
    annotation: {
      content: [
        {
          content: "Text",
          offset: {
            x: 1,
            y: 0.5,
          },
          margin: {
            left: 15,
          },
        },
      ],
    },
    menuId: "edit",
    type: "CurlyClose",
    toolTip: "Right Braces",
  },
];

export function getItemById(id) {
  let shape = everyShape.find((x) => x.id === id);
  if (shape !== undefined) {
    return shape;
  }
  return null;
}

export function drawShape0({id, title, annotation, toolTip, type, menuId}) {
  let node;
  node = {
    id,
    addInfo: [{
      title, toolTip,
    },],
    shape: {
      type: "Native", content: `
      <g transform="translate(2, 2)">
        <circle vector-effect="non-scaling-stroke" cx="25" cy="25" r="25" fill="none" stroke="black" stroke-width="1"> </circle>                                       
      </g>
      `,
    },
    annotations: [{
      content: annotation[0], offset: {x: 0.5, y: 0.5},
    },],
    style: {
      fill: "none", fontSize: 10,
    },
    constraints: NodeConstraints.Default & NodeConstraints.Rotate,
    ports: annotation.ports !== undefined ? annotation.ports : null,
    height: 50,
    width: 50,
  };
  if (node.ports) {
    drawPortCircle(node);
  }
  node.addInfo[0].menuId = menuId;
  return node;
}