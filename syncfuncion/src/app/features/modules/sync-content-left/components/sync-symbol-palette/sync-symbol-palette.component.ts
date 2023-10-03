import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ConnectorModel,
  NodeModel,
  PaletteModel,
  SymbolPaletteModule,
} from '@syncfusion/ej2-angular-diagrams';
import { ExpandMode } from '@syncfusion/ej2-angular-navigations';

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
  public getBasicShapes(): NodeModel[] {
    let basicShapes: NodeModel[] = [
      {
        id: 'Rectangle',
        shape: {
          type: 'Basic',
          shape: 'Rectangle',
        },
      },
      {
        id: 'Ellipse',
        shape: {
          type: 'Basic',
          shape: 'Ellipse',
        },
      },
      {
        id: 'Hexagon',
        shape: {
          type: 'Basic',
          shape: 'Hexagon',
        },
      },
    ];
    return basicShapes;
  }
  public getFlowShapes(): NodeModel[] {
    let flowShapes: NodeModel[] = [
      {
        id: 'process',
        shape: {
          type: 'Flow',
          shape: 'Process',
        }
      },
      {
        id: 'event',
        shape: {
          type: 'Bpmn',
          shape: 'Event'
        }
      }
    ];
    return flowShapes;
  }

  public getConnectors(): ConnectorModel[] {
    let connectorSymbols: ConnectorModel[] = [
      {
        id: 'Link1',
        type: 'Orthogonal',
        sourcePoint: {
          x: 0,
          y: 0,
        },
        targetPoint: {
          x: 40,
          y: 40,
        },
        targetDecorator: {
          shape: 'Arrow',
        },
      },
      {
        id: 'Link21',
        type: 'Straight',
        sourcePoint: {
          x: 0,
          y: 0,
        },
        targetPoint: {
          x: 40,
          y: 40,
        },
        targetDecorator: {
          shape: 'Arrow',
        },
      },
      {
        id: 'link33',
        type: 'Bezier',
        sourcePoint: {
          x: 0,
          y: 0,
        },
        targetPoint: {
          x: 40,
          y: 40,
        },
        style: {
          strokeWidth: 2,
        },
        targetDecorator: {
          shape: 'None',
        },
      },
    ];
    return connectorSymbols;
  }
  public getSymbolInfo(symbol: any) {
    //Defines the symbol description
      return { width: 75, height: 40, description: { text: symbol.shape['shape'] } }
    };

  ngOnInit(): void {
    this.expandMode = 'Single';
    this.palettes = [
      {
        //Sets the id of the palette
        id: 'quickEntities',
        //Sets whether the palette expands/collapse its children
        expanded: true,
        //Adds the palette items to palette
        symbols: this.getFlowShapes(),
        //Sets the header text of the palette
        title: 'Quick Entities',
        iconCss: 'e-ddb-icons e-flow',
      },
      {
        id: 'person',
        expanded: true,
        symbols: this.getBasicShapes(),
        title: 'Person',
        iconCss: 'e-ddb-icons e-basic',
      },
      {
        id: 'communication',
        expanded: true,
        symbols: this.getConnectors(),
        title: 'Communication',
        iconCss: 'e-ddb-icons e-connector',
      },
      {
        id: 'application',
        expanded: true,
        symbols: this.getBasicShapes(),
        title: 'Application',
        iconCss: 'e-ddb-icons e-basic',
      },
      {
        id: 'communicationLink',
        expanded: true,
        symbols: this.getBasicShapes(),
        title: 'Communication Link',
        iconCss: 'e-ddb-icons e-basic',
      },
      {
        id: 'analysis',
        expanded: true,
        symbols: this.getBasicShapes(),
        title: 'Analysis',
        iconCss: 'e-ddb-icons e-basic',
      },
      {
        id: 'communicationSignal',
        expanded: true,
        symbols: this.getBasicShapes(),
        title: 'Communication Signal',
        iconCss: 'e-ddb-icons e-basic',
      },
      {
        id: 'areAndLocation',
        expanded: true,
        symbols: this.getBasicShapes(),
        title: 'Area and Location',
        iconCss: 'e-ddb-icons e-basic',
      },
      {
        id: 'otherCommunicationElement',
        expanded: true,
        symbols: this.getBasicShapes(),
        title: 'Other Communication Element',
        iconCss: 'e-ddb-icons e-basic',
      },
      {
        id: 'label',
        expanded: true,
        symbols: this.getBasicShapes(),
        title: 'Label',
        iconCss: 'e-ddb-icons e-basic',
      },
      {
        id: 'equation',
        expanded: true,
        symbols: this.getBasicShapes(),
        title: 'Equations',
        iconCss: 'e-ddb-icons e-basic',
      },
    ];
  }
}
