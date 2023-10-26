import {getQuickEntitiesShapes} from "./communication/quick.symbol-palette";
import {getPersonShapes} from "./communication/persion.symbol-palette";
import {getCommunicationShapes} from "./communication/communication.symbol-palette";
import {getApplicationShapes} from "./communication/application.symbol-palette";
import {getCommunicationLinksShapes} from "./communication/communication-link.symbol-palette";
import {getAnalysisShapes} from "./communication/analysis.symbol-palette";
import {getCommunicationSignalShapes} from "./communication/communication-signal.symbol-palette";
import {getAreaAndLocationShapes} from "./communication/area-location.symbol-palette";
import {getOtherCommunicationElementShapes} from "./communication/other-communication-element.symbol-palette";
import {getLabelShapes} from "./communication/label-symbol-palette";
import {getEquationsShape} from "./communication/equation-symbol-palette";
import {PaletteModel} from "@syncfusion/ej2-angular-diagrams";

export const palettesCommunication: PaletteModel[] = [
  {
    id: 'quickEntities',
    expanded: false,
    symbols: getQuickEntitiesShapes(),
    title: 'Quick Entities',
    iconCss: 'e-ddb-icons e-flow',
  },
  {
    id: 'person',
    expanded: false,
    symbols: getPersonShapes(),
    title: 'Person',
    iconCss: 'e-ddb-icons e-basic',
  },
  {
    id: 'communication',
    expanded: false,
    symbols: getCommunicationShapes(),
    title: 'Communication',
    iconCss: 'e-ddb-icons e-connector',
  },
  {
    id: 'application',
    expanded: false,
    symbols: getApplicationShapes(),
    title: 'Application',
    iconCss: 'e-ddb-icons e-basic',
  },
  {
    id: 'communicationLink',
    expanded: false,
    symbols: getCommunicationLinksShapes(),
    title: 'Communication Link',
    iconCss: 'e-ddb-icons e-basic',
  },
  {
    id: 'analysis',
    expanded: false,
    symbols: getAnalysisShapes(),
    title: 'Analysis',
    iconCss: 'e-ddb-icons e-basic',
  },
  {
    id: 'communicationSignal',
    expanded: false,
    symbols: getCommunicationSignalShapes(),
    title: 'Communication Signal',
    iconCss: 'e-ddb-icons e-basic',
  },
  {
    id: 'areAndLocation',
    expanded: false,
    symbols: getAreaAndLocationShapes(),
    title: 'Area and Location',
    iconCss: 'e-ddb-icons e-basic',
  },
  {
    id: 'otherCommunicationElement',
    expanded: false,
    symbols: getOtherCommunicationElementShapes(),
    title: 'Other Communication Element',
    iconCss: 'e-ddb-icons e-basic',
  },
  {
    id: 'label',
    expanded: false,
    symbols: getLabelShapes(),
    title: 'Label',
    iconCss: 'e-ddb-icons e-basic',
  },
  {
    id: 'equation',
    expanded: false,
    symbols: getEquationsShape(),
    title: 'Equations',
    iconCss: 'e-ddb-icons e-basic',
  }
];

export const palettesTheory: PaletteModel[] = [
  {
    id: 'quickEntities',
    expanded: false,
    symbols: getQuickEntitiesShapes(),
    title: 'Quick Entities',
    iconCss: 'e-ddb-icons e-flow',
  },
  {
    id: 'system',
    expanded: false,
    symbols: getQuickEntitiesShapes(),
    title: 'System',
    iconCss: 'e-ddb-icons e-flow',
  },
  {
    id: 'theory',
    expanded: false,
    symbols: getQuickEntitiesShapes(),
    title: 'Theory',
    iconCss: 'e-ddb-icons e-flow',
  },
  {
    id: 'fundalmental',
    expanded: false,
    symbols: getQuickEntitiesShapes(),
    title: 'Fundalmental',
    iconCss: 'e-ddb-icons e-flow',
  },
  {
    id: 'interface',
    expanded: false,
    symbols: getQuickEntitiesShapes(),
    title: 'Interface',
    iconCss: 'e-ddb-icons e-flow',
  },
  {
    id: 'signal',
    expanded: false,
    symbols: getQuickEntitiesShapes(),
    title: 'Signal',
    iconCss: 'e-ddb-icons e-flow',
  },
  {
    id: 'instrument',
    expanded: false,
    symbols: getQuickEntitiesShapes(),
    title: 'Instrument',
    iconCss: 'e-ddb-icons e-flow',
  },
  {
    id: 'function',
    expanded: false,
    symbols: getQuickEntitiesShapes(),
    title: 'Function',
    iconCss: 'e-ddb-icons e-flow',
  },
  {
    id: 'stability',
    expanded: false,
    symbols: getQuickEntitiesShapes(),
    title: 'Stability',
    iconCss: 'e-ddb-icons e-flow',
  },
  {
    id: 'label',
    expanded: false,
    symbols: getQuickEntitiesShapes(),
    title: 'Label',
    iconCss: 'e-ddb-icons e-flow',
  },
  {
    id: 'operator',
    expanded: false,
    symbols: getQuickEntitiesShapes(),
    title: 'Operator',
    iconCss: 'e-ddb-icons e-flow',
  },
  {
    id: 'equation',
    expanded: false,
    symbols: getEquationsShape(),
    title: 'Equations',
    iconCss: 'e-ddb-icons e-basic',
  }
];
