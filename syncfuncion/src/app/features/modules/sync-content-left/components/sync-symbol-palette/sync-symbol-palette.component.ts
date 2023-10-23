import {Component, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  PaletteModel,
  SymbolPaletteModule,
  SymbolPreviewModel,
  MarginModel
} from '@syncfusion/ej2-angular-diagrams';
import {ExpandMode} from '@syncfusion/ej2-angular-navigations';
import {getEquationsShape} from "../constants/equation-symbol-palette"
import {getLabelShapes} from '../constants/label-symbol-palette';
import {getOtherCommunicationElementShapes} from '../constants/other-communication-element.symbol-palette';
import {getAreaAndLocationShapes} from '../constants/area-location.symbol-palette';
import {getCommunicationSignalShapes} from '../constants/communication-signal.symbol-palette';
import {getCommunicationLinksShapes} from '../constants/communication-link.symbol-palette';
import {getAnalysisShapes} from '../constants/analysis.symbol-palette';
import {getApplicationShapes} from '../constants/application.symbol-palette';
import {getCommunicationShapes} from '../constants/communication.symbol-palette';
import {getPersonShapes} from '../constants/persion.symbol-palette';
import {getQuickEntitiesShapes} from '../constants/quick.symbol-palette';
import {height, width} from '../constants/common';

@Component({
  selector: 'sync-symbol-palette',
  standalone: true,
  imports: [CommonModule, SymbolPaletteModule],
  templateUrl: './sync-symbol-palette.component.html',
  styleUrls: ['./sync-symbol-palette.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SyncSymbolPaletteComponent {
  public expandMode?: ExpandMode;
  public palettes?: PaletteModel[];
  public symbolPreview: SymbolPreviewModel[] = [{
    height,
    width
  }];
  public height: number = 80;
  public width: number = 250;
  public symbolMargin: MarginModel = {
    left: 15,
    right: 15,
    top: 15,
    bottom: 15
  };

  ngOnInit(): void {
    this.expandMode = 'Single';
    this.palettes = [
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
      },
    ];
  }

  public getSymbolInfo(symbol: any) {
    return {fill: "white", fontSize: 10, description: {text: symbol?.['addInfo']?.['tooltip']}};
  };
}
