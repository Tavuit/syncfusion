import {getQuickEntitiesShapes, getTheoryQuickEntitiesShapes} from "./communication/quick.symbol-palette";
import {getPersonShapes, getTheoryPersonShapes} from "./communication/persion.symbol-palette";
import {getCommunicationShapes} from "./communication/communication.symbol-palette";
import {getApplicationShapes} from "./communication/application.symbol-palette";
import {getCommunicationLinksShapes} from "./communication/communication-link.symbol-palette";
import {getAnalysisShapes} from "./communication/analysis.symbol-palette";
import {getCommunicationSignalShapes, getTheoryCommunicationSignalShapes} from "./communication/communication-signal.symbol-palette";
import {getAreaAndLocationShapes} from "./communication/area-location.symbol-palette";
import {getOtherCommunicationElementShapes} from "./communication/other-communication-element.symbol-palette";
import {getLabelShapes, getTheoryLabelShapes} from "./communication/label-symbol-palette";
import {getEquationsShape} from "./communication/equation-symbol-palette";
import {PaletteModel} from "@syncfusion/ej2-angular-diagrams";
import { getOperatorShapes } from "src/app/features/modules/sync-content-left/components/constants/communication/operator-palette";
import { getStabilityShapes } from "src/app/features/modules/sync-content-left/components/constants/communication/stability.symbol-palette";
import { getTheoryFunctionShapes } from "src/app/features/modules/sync-content-left/components/constants/communication/theory-function.symbol-palette";
import { getTheoryInstrumentShapes } from "src/app/features/modules/sync-content-left/components/constants/communication/theory-instrument.symbol-palette";
import { getTheoryInterfaceShapes } from "src/app/features/modules/sync-content-left/components/constants/communication/theory-interface.symbol-palette";
import { getTheoryFundamentalShapes } from "src/app/features/modules/sync-content-left/components/constants/communication/theory-fundalmental.symbol-palette";
import { getTheoryShapes } from "src/app/features/modules/sync-content-left/components/constants/communication/theory.symbol-palette";

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
    symbols: getTheoryQuickEntitiesShapes(),
    title: 'Quick Entities',
    iconCss: 'e-ddb-icons e-flow',
  },
  {
    id: 'system',
    expanded: false,
    symbols: getTheoryPersonShapes(),
    title: 'System',
    iconCss: 'e-ddb-icons e-flow',
  },
  {
    id: 'theory',
    expanded: false,
    symbols: getTheoryShapes(),
    title: 'Theory',
    iconCss: 'e-ddb-icons e-flow',
  },
  {
    id: 'fundamental',
    expanded: false,
    symbols: getTheoryFundamentalShapes(),
    title: 'Fundamental',
    iconCss: 'e-ddb-icons e-flow',
  },
  {
    id: 'interface',
    expanded: false,
    symbols: getTheoryInterfaceShapes(),
    title: 'Interface',
    iconCss: 'e-ddb-icons e-flow',
  },
  {
    id: 'signal',
    expanded: false,
    symbols: getTheoryCommunicationSignalShapes(),
    title: 'Signal',
    iconCss: 'e-ddb-icons e-flow',
  },
  {
    id: 'instrument',
    expanded: false,
    symbols: getTheoryInstrumentShapes(),
    title: 'Instrument',
    iconCss: 'e-ddb-icons e-flow',
  },
  {
    id: 'function',
    expanded: false,
    symbols: getTheoryFunctionShapes(),
    title: 'Function',
    iconCss: 'e-ddb-icons e-flow',
  },
  {
    id: 'stability',
    expanded: false,
    symbols: getStabilityShapes(),
    title: 'Stability',
    iconCss: 'e-ddb-icons e-flow',
  },
  {
    id: 'label',
    expanded: false,
    symbols: getTheoryLabelShapes(),
    title: 'Label',
    iconCss: 'e-ddb-icons e-flow',
  },
  {
    id: 'operator',
    expanded: false,
    symbols: getOperatorShapes(),
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
