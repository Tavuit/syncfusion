import {
  NodeConstraints,
  NodeModel,
  PortVisibility,
  ConnectorConstraints
} from '@syncfusion/ej2-angular-diagrams';
import { rectPorts } from 'src/app/features/modules/sync-content-left/components/constants/communication/common';
import { getShapeByType } from 'src/app/utils/constants';

export function getStabilityShapes() {
  let stabilityShapes = [
    {
      ...getShapeByType('HorizontalLine', 'basis', { title: 'Basis', tooltip: 'Basis' }, {
        content: [
          {
            content: "k",
            offset: {x: 0, y: 0.5},
            margin: {right: 10},
          },
        ],
        length: 400,
        style: {strokeDashArray: "10 5"},
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate |
        NodeConstraints.Tooltip,
      tooltip: {
        content: 'Identify Our Basis',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Basis', 'basis1', { title: 'Basis', tooltip: 'Basis' }, 'k'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate |
        NodeConstraints.Tooltip,
      tooltip: {
        content: 'Identify Our Basis',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('HorizontalLine', 'stabilityLine', { title: 'Stability Line', tooltip: 'Stability Line' }, {
        style: {strokeDashArray: "10 5"},
        length: 400,
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate |
        NodeConstraints.Tooltip,
      tooltip: {
        content: 'Identify Our Stability Line',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('HorizontalLine', 'stabilityLine1', { title: 'Stability Line', tooltip: 'Stability Line' }, {
        length: 600,
        style: {},
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate |
        NodeConstraints.Tooltip,
      tooltip: {
        content: 'Stability Line With Connector',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'k', { title: 'k', tooltip: 'k' }, {
        height: 50,
        width: 50,
        content: [
          {
            content: "k",
            style: {
              italic: true,
              bold: true,
              fontSize: "12",
            },
          },
        ],
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate |
        NodeConstraints.Tooltip,
      tooltip: {
        content: 'Identify Our Basis',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Text', 'k1', { title: 'k', tooltip: 'k' }, {
        style: {strokeDashArray: "10 5"},
        length: 400,
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate |
        NodeConstraints.Tooltip,
      tooltip: {
        content: 'Identify Out Stability',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('House1', 'destination', { title: 'Destination', tooltip: 'Destination' }, 'k'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate |
        NodeConstraints.Tooltip,
      tooltip: {
        content: 'Identify Our Destination',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Direction', 'direction', { title: 'Destination', tooltip: 'Destination' }, null),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate |
        NodeConstraints.Tooltip,
      tooltip: {
        content: 'Identify Our Destination',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Direction', 'direction', { title: 'Destination', tooltip: 'Destination' }, null),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate |
        NodeConstraints.Tooltip,
      tooltip: {
        content: 'Identify Our Destination',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('mobility', 'mobilitystability', { title: 'Mobility', tooltip: 'Mobility' }, null),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate |
        NodeConstraints.Tooltip,
      tooltip: {
        content: 'Identify Our Mobility',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('VerticalLine', 'roadMark', { title: 'Road Mark', tooltip: 'Road Mark' }, {
        content: [
          {
            content: "Mark #",
            offset: {x: 0.5, y: 1},
            margin: {top: 20},
          },
        ],
        length: 150,
        style: {},
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate |
        NodeConstraints.Tooltip,
      tooltip: {
        content: 'Identify Specific Location',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Arrow', 'distance', { title: 'Distance', tooltip: 'Distance' }, {
        shape: {
          target: "Arrow",
          source: "Arrow",
        },
        content: [
          {
            content: "distance",
            alignment: "Before",
          },
        ],
        style: {},
      }),
      constraints:
        ConnectorConstraints.Default |
        ConnectorConstraints.AllowDrop |
        ConnectorConstraints.Tooltip,
      tooltip: {
        content: 'Identify Specific Distance',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Arrow', 'route', { title: 'Route', tooltip: 'Route' }, {
        shape: {
          target: "Arrow",
          source: "Arrow",
        },
        content: [
          {
            content: "Route",
            alignment: "Before",
          },
        ],
        style: {},
      }),
      constraints:
        ConnectorConstraints.Default |
        ConnectorConstraints.AllowDrop |
        ConnectorConstraints.Tooltip,
      tooltip: {
        content: 'Identify Specific Route',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Arrow', 'interroute', { title: 'Inter-Route', tooltip: 'Inter-Route' }, {
        shape: {
          target: "Arrow",
          source: "Arrow",
        },
        content: [
          {
            content: "Inter-Route",
            alignment: "Before",
          },
        ],
        style: {},
      }),
      constraints:
        ConnectorConstraints.Default |
        ConnectorConstraints.AllowDrop |
        ConnectorConstraints.Tooltip,
      tooltip: {
        content: 'Identify Specific Route',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('TheoryScale', 'theoryScale', { title: 'Theory Scale', tooltip: 'Theory Scale' }, 'Hello'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.AllowDrop |
        NodeConstraints.Tooltip,
      tooltip: {
        content: 'Identify The Theory Scale Distance',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('VerticalLine', 'scaleMark', { title: 'Scale Mark', tooltip: 'Scale Mark' }, {
        content: [
          {
            content: "#",
            offset: {x: 0.5, y: 1},
            margin: {top: 10},
          },
        ],
        length: 50,
        style: {},
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.AllowDrop |
        NodeConstraints.Tooltip,
      tooltip: {
        content: 'Use to Put Mark On Scale',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Arrow', 'upHill', { title: 'Uphill', tooltip: 'Uphill' }, {
        type: "Bezier",
        style: {},
        shape: {},
      }),
      constraints:
        ConnectorConstraints.Default |
        ConnectorConstraints.AllowDrop |
        ConnectorConstraints.Tooltip,
      tooltip: {
        content: 'Identify The Uphill Path',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Arrow', 'downHill', { title: 'Downhill', tooltip: 'Downhill' }, {
        type: "Bezier",
        style: {},
        shape: {},
      }),
      constraints:
        ConnectorConstraints.Default |
        ConnectorConstraints.AllowDrop |
        ConnectorConstraints.Tooltip,
      tooltip: {
        content: 'Identify The DownHill Path',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('VerticalLine', 'timeMark', { title: 'Time Mark', tooltip: 'Time Mark' }, {
        length: 150,
        content: [
          {
            content: "time #",
            offset: {x: 0.5, y: 1},
            margin: {top: 20},
          },
        ],
        style: {},
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.AllowDrop |
        NodeConstraints.Tooltip,
      tooltip: {
        content: 'Identify a Time Mark',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Arrow', 'progressTime', { title: 'Progress Time', tooltip: 'Progress Time' }, {
        shape: {
          target: "Arrow",
          source: "Arrow",
        },
        content: [
          {
            content: "progress Time",
            alignment: "Before",
          },
        ],
        style: {},
      }),
      constraints:
        ConnectorConstraints.Default |
        ConnectorConstraints.AllowDrop |
        ConnectorConstraints.Tooltip,
      tooltip: {
        content: 'Identify Progress Time',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Arrow', 'declineTime', { title: 'Decline Time', tooltip: 'Decline Time' }, {
        shape: {
          target: "Arrow",
          source: "Arrow",
        },
        content: [
          {
            content: "decline time",
            alignment: "Before",
          },
        ],
        style: {},
      }),
      constraints:
        ConnectorConstraints.Default |
        ConnectorConstraints.AllowDrop |
        ConnectorConstraints.Tooltip,
      tooltip: {
        content: 'Identify Decline Time',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('HorizontalLine', 'lostLine', { title: 'Lost Line', tooltip: 'Lost Line' }, {
        length: 400,
        style: {strokeDashArray: "10 5"},
        content: [
          {
            content: "Lost #",
            offset: {x: 1, y: 0.5},
            margin: {left: 20},
          },
        ],
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.AllowDrop |
        NodeConstraints.Tooltip,
      tooltip: {
        content: 'Identify Point of Lost',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('HorizontalLine', 'gainLine', { title: 'Gain Line', tooltip: 'Gain Line' }, {
        length: 400,
        style: {strokeDashArray: "10 5"},
        content: [
          {
            content: "Gain #",
            offset: {x: 1, y: 0.5},
            margin: {left: 20},
          },
        ],
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.AllowDrop |
        NodeConstraints.Tooltip,
      tooltip: {
        content: 'Identify Point of Gain',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Arrow', 'lost', { title: 'Lost', tooltip: 'Lost' }, {
        shape: {
          target: "Arrow",
          source: "Arrow",
        },
        content: [
          {
            content: "Lost",
            alignment: "After",
          },
        ],
      }),
      constraints:
        ConnectorConstraints.Default |
        ConnectorConstraints.AllowDrop |
        ConnectorConstraints.Tooltip,
      tooltip: {
        content: 'Identify Specific Lost',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Arrow', 'Gain', { title: 'Gain', tooltip: 'Gain' }, {
        shape: {
          target: "Arrow",
          source: "Arrow",
        },
        content: [
          {
            content: "Gain",
            alignment: "After",
          },
        ],
      }),
      constraints:
        ConnectorConstraints.Default |
        ConnectorConstraints.AllowDrop |
        ConnectorConstraints.Tooltip,
      tooltip: {
        content: 'Identify Specific Gain',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Circle', 'stabilityPoint', { title: 'Stability Point', tooltip: 'Stability Point' }, {
        radius: 10,
        fill: "black",
        isPoint: true,
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.AllowDrop |
        NodeConstraints.Tooltip,
      tooltip: {
        content: 'Identify a Point Of Stability',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Arrow', 'functionExecution', { title: 'Function Execution', tooltip: 'Function Execution' }, {
        type: "Straight",
        shape: {
          source: "Circle",
        },
        style: {},
      }),
      constraints:
        ConnectorConstraints.Default |
        ConnectorConstraints.AllowDrop |
        ConnectorConstraints.Tooltip,
      tooltip: {
        content: 'Function Execute At Specific Time',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('DomainLeft', 'domainLeft', { title: 'Domain Left', tooltip: 'Domain Left' }, {
        orientation: "Left",
        content: [
          {
            content: "Domain Name",
          },
        ],
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.AllowDrop |
        NodeConstraints.Tooltip,
      tooltip: {
        content: 'Identify Domain To The Left',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('DomainRight', 'domainRight', { title: 'Domain Right', tooltip: 'Domain Right' }, {
        orientation: "Right",
        content: [
          {
            content: "Domain Name",
          },
        ],
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.AllowDrop |
        NodeConstraints.Tooltip,
      tooltip: {
        content: 'Identify Domain To The Right',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('DomainTop', 'domainTop', { title: 'Domain Top', tooltip: 'Domain Top' }, {
        orientation: "Top",
        content: [
          {
            content: "Domain Name",
          },
        ],
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.AllowDrop |
        NodeConstraints.Tooltip,
      tooltip: {
        content: 'Identify Domain Above',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('DomainBottom', 'domainBottom', { title: 'Domain Bottom', tooltip: 'Domain Bottom' }, {
        orientation: "Bottom",
        content: [
          {
            content: "Domain Name",
          },
        ],
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.AllowDrop |
        NodeConstraints.Tooltip,
      tooltip: {
        content: 'Identify Domain Bottom',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Arrow', 'inline', { title: 'Inline', tooltip: 'Inline' }, {
        shape: {
          target: "Arrow",
          source: "Arrow",
        },
        content: {
          content: "Inline",
          alignment: "Before",
        },
      }),
      constraints:
        ConnectorConstraints.Default |
        ConnectorConstraints.AllowDrop |
        ConnectorConstraints.Tooltip,
      tooltip: {
        content: 'Inline to Each Other',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Text', 'ontop', { title: 'On Top', tooltip: 'On Top' }, 'On Top'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.AllowDrop |
        NodeConstraints.Tooltip,
      tooltip: {
        content: 'Identify an Entity On Top',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Text', 'below', { title: 'Below', tooltip: 'Below' }, 'Below'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.AllowDrop |
        NodeConstraints.Tooltip,
      tooltip: {
        content: 'Identify an Entity On Below',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Graph', 'graphAxis', { title: 'Graph Axis', tooltip: 'Graph Axis' }, ["Label Name", "Label Name"]),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.AllowDrop |
        NodeConstraints.Tooltip,
      tooltip: {
        content: 'Use for Data Representation',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Ellipse', 'philosophy', { title: 'Philosophy', tooltip: 'Philosophy' }, 'Philosophy'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.AllowDrop |
        NodeConstraints.Tooltip,
      tooltip: {
        content: 'Identify Philosophy',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Circle', 'changeOfPhilosophy', { title: 'Change Of Philosophy', tooltip: 'Change Of Philosophy' }, {
        content: [{content: "Δx"}],
        radius: 35,
        fill: "White",
        ports: rectPorts,
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.AllowDrop |
        NodeConstraints.Tooltip,
      tooltip: {
        content: 'Represent Change Of Philosophy',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Circle', 'changeOfPhilosophy1', { title: 'Change Of Philosophy', tooltip: 'Change Of Philosophy' }, {
        content: [{content: "ΔPh"}],
        radius: 35,
        fill: "White",
        ports: rectPorts,
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.AllowDrop |
        NodeConstraints.Tooltip,
      tooltip: {
        content: 'Represent Change Of Philosophy',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Circle', 'philosophy1', { title: 'Philosophy', tooltip: 'Philosophy' }, {
        content: [{content: "yn"}],
        radius: 15,
        fill: "White",
        ports: rectPorts,
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.AllowDrop |
        NodeConstraints.Tooltip,
      tooltip: {
        content: 'Identify Philosophy',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Circle', 'philosophy2', { title: 'Philosophy', tooltip: 'Philosophy' }, {
        content: [{content: "Phn"}],
        radius: 15,
        fill: "White",
        ports: rectPorts,
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.AllowDrop |
        NodeConstraints.Tooltip,
      tooltip: {
        content: 'Identify Philosophy',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Circle', 'deltaPhilosophy', { title: 'Delta Philosophy', tooltip: 'Delta Philosophy' }, {
        content: [{content: "Delta Philosophy"}],
        radius: 35,
        fill: "White",
        ports: rectPorts,
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.AllowDrop |
        NodeConstraints.Tooltip,
      tooltip: {
        content: 'Identify Change of Philosophy',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Arrow', 'inheritArrow', { title: 'Inherit Arrow', tooltip: 'Inherit Arrow' }, {
        shape: {
          source: "Arrow",
        },
        content: [
          {
            content: "Inherited",
            alignment: "Before",
          },
        ],
        style: {},
      }),
      constraints:
        ConnectorConstraints.Default |
        ConnectorConstraints.AllowDrop |
        ConnectorConstraints.Tooltip,
      tooltip: {
        content: 'Show Inherited Philosophy',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Arrow', 'passThroughArrow', { title: 'Pass Through Arrow', tooltip: 'Pass Through Arrow' }, {
        shape: {
          source: "Arrow",
        },
        content: [
          {
            content: "Pass Through",
            alignment: "Before",
          },
        ],
        style: {},
      }),
      constraints:
        ConnectorConstraints.Default |
        ConnectorConstraints.AllowDrop |
        ConnectorConstraints.Tooltip,
      tooltip: {
        content: 'Show Pass Through Philosophy',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Arrow', 'directionArrow', { title: 'Direction Arrow', tooltip: 'Direction Arrow' }, {
        shape: {
          target: "Arrow",
        },
        style: {},
      }),
      constraints:
        ConnectorConstraints.Default |
        ConnectorConstraints.AllowDrop |
        ConnectorConstraints.Tooltip,
      tooltip: {
        content: 'Show A Direction',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Arrow', 'deltaT', { title: 'Delta T', tooltip: 'Delta T' }, {
        shape: {
          target: "Arrow",
          source: "Arrow",
        },
        content: [
          {
            content: "Δt",
          },
        ],
        style: {},
      }),
      constraints:
        ConnectorConstraints.Default |
        ConnectorConstraints.AllowDrop |
        ConnectorConstraints.Tooltip,
      tooltip: {
        content: 'Change Of Time',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Arrow', 'deltaL', { title: 'Delta L', tooltip: 'Delta L' }, {
        shape: {target: "Arrow", source: "Arrow"},
        content: [
          {
            content: "ΔL",
          },
        ],
        style: {},
      }),
      constraints:
        ConnectorConstraints.Default |
        ConnectorConstraints.AllowDrop |
        ConnectorConstraints.Tooltip,
      tooltip: {
        content: 'Change of Loss',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Arrow', 'deltaG', { title: 'Delta G', tooltip: 'Delta G' }, {
        shape: {target: "Arrow", source: "Arrow"},
        content: [
          {
            content: "ΔG",
          },
        ],
        style: {},
      }),
      constraints:
        ConnectorConstraints.Default |
        ConnectorConstraints.AllowDrop |
        ConnectorConstraints.Tooltip,
      tooltip: {
        content: 'Change of Gain',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Arrow', 'generationTime', { title: 'Generation Time', tooltip: 'Generation Time' }, {
        content: [
          {
            content: "generation time",
            alignment: "Before",
          },
        ],
        shape: {
          target: "Arrow",
          source: "Arrow",
        },
        style: {},
      }),
      constraints:
        ConnectorConstraints.Default |
        ConnectorConstraints.AllowDrop |
        ConnectorConstraints.Tooltip,
      tooltip: {
        content: 'Identify Our Generation Time',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Arrow', 'qTime', { title: 'Q Time', tooltip: 'Q Time' }, {
        content: [
          {
            content: "Q time",
            alignment: "Before",
          },
        ],
        shape: {
          target: "Arrow",
          source: "Arrow",
        },
        style: {},
      }),
      constraints:
        ConnectorConstraints.Default |
        ConnectorConstraints.AllowDrop |
        ConnectorConstraints.Tooltip,
      tooltip: {
        content: 'Identify Our Generation Time',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Arrow', 'Q', { title: 'Q', tooltip: 'Q' }, {
        content: [
          {
            content: "Q",
            alignment: "Before",
          },
        ],
        shape: {
          target: "Arrow",
          source: "Arrow",
        },
        style: {},
      }),
      constraints:
        ConnectorConstraints.Default |
        ConnectorConstraints.AllowDrop |
        ConnectorConstraints.Tooltip,
      tooltip: {
        content: 'Identify Our Generation Time',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Continuity', 'continuityStability', { title: 'Continuity', tooltip: 'Continuity' }, {
        strokeWidth: "0",
        fill: "transparent",
        ports: [],
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.AllowDrop |
        NodeConstraints.Tooltip,
      tooltip: {
        content: 'Show Continuity Of Entity',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('linkednode', 'linkednodestablility', { title: 'Linked Node', tooltip: 'Linked Node' }, null),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.AllowDrop |
        NodeConstraints.Tooltip,
      tooltip: {
        content: 'Linked Node',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('VerticalLine', 'initialTimeplus', { title: 'Time 0 plus', tooltip: 'Time 0 plus' }, {
        content: [
          {
            content: "t0+",
            offset: {x: 0.5, y: 1},
            margin: {top: 20},
          },
        ],
        length: 250,
        style: {strokeDashArray: "10 5"},
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.AllowDrop |
        NodeConstraints.Tooltip,
      tooltip: {
        content: 'Time After Initial Time',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('VerticalLine', 'initialTimeplusplus', { title: 'Time 0 plus plus', tooltip: 'Time 0 plus plus' }, {
        content: [
          {
            content: "t0++",
            offset: {x: 0.5, y: 1},
            margin: {top: 20},
          },
        ],
        length: 250,
        style: {strokeDashArray: "10 5"},
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.AllowDrop |
        NodeConstraints.Tooltip,
      tooltip: {
        content: 'More time after initial time',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('VerticalLine', 'firstTime', { title: 'Time 1', tooltip: 'Time 1' }, {
        content: [
          {
            content: "t1",
            offset: {x: 0.5, y: 1},
            margin: {top: 20},
          },
        ],
        length: 250,
        style: {strokeDashArray: "10 5"},
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.AllowDrop |
        NodeConstraints.Tooltip,
      tooltip: {
        content: 'First Time',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('VerticalLine', 'firstTimePlus', { title: 'Time 1 plus number', tooltip: 'Time 1 plus number' }, {
        content: [
          {
            content: "t1 + n",
            offset: {x: 0.5, y: 1},
            margin: {top: 20},
          },
        ],
        length: 250,
        style: {strokeDashArray: "10 5"},
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.AllowDrop |
        NodeConstraints.Tooltip,
      tooltip: {
        content: 'Time After Time 1',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('VerticalLine', 'secondTime', { title: 'Time 2', tooltip: 'Time 2' }, {
        content: [
          {
            content: "t2",
            offset: {x: 0.5, y: 1},
            margin: {top: 20},
          },
        ],
        length: 250,
        style: {strokeDashArray: "10 5"},
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.AllowDrop |
        NodeConstraints.Tooltip,
      tooltip: {
        content: 'Second Time',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('VerticalLine', 'secondTimePlus', { title: 'Time 2 plus number', tooltip: 'Time 2 plus number' }, {
        content: [
          {
            content: "t2 + n",
            offset: {x: 0.5, y: 1},
            margin: {top: 20},
          },
        ],
        length: 250,
        style: {strokeDashArray: "10 5"},
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.AllowDrop |
        NodeConstraints.Tooltip,
      tooltip: {
        content: 'Time After Second Time',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('VerticalLine', 'thirdTime', { title: 'Time 3', tooltip: 'Time 3' }, {
        content: [
          {
            content: "t3",
            offset: {x: 0.5, y: 1},
            margin: {top: 20},
          },
        ],
        length: 250,
        style: {strokeDashArray: "10 5"},
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.AllowDrop |
        NodeConstraints.Tooltip,
      tooltip: {
        content: 'Third Time',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('VerticalLine', 'thirdTimePlus', { title: 'Time 3 plus number', tooltip: 'Time 3 plus number' }, {
        content: [
          {
            content: "t3 + n",
            offset: {x: 0.5, y: 1},
            margin: {top: 20},
          },
        ],
        length: 250,
        style: {strokeDashArray: "10 5"},
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.AllowDrop |
        NodeConstraints.Tooltip,
      tooltip: {
        content: 'Time After Third Time',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('VerticalLine', 'fourthTime', { title: 'Fourth Time', tooltip: 'Fourth Time' }, {
        content: [
          {
            content: "t4",
            offset: {x: 0.5, y: 1},
            margin: {top: 20},
          },
        ],
        length: 250,
        style: {strokeDashArray: "10 5"},
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.AllowDrop |
        NodeConstraints.Tooltip,
      tooltip: {
        content: 'Identify The Fourth Time',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('VerticalLine', 'fourthTimePlus', { title: 'Time 4 plus number', tooltip: 'Time 4 plus number' }, {
        content: [
          {
            content: "t4 + n",
            offset: {x: 0.5, y: 1},
            margin: {top: 20},
          },
        ],
        length: 250,
        style: {strokeDashArray: "10 5"},
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.AllowDrop |
        NodeConstraints.Tooltip,
      tooltip: {
        content: 'Time After Fourth Time',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('VerticalLine', 'timePrime', { title: 'Time Prime', tooltip: 'Time Prime' }, {
        content: [
          {
            content: "time prime",
            offset: {x: 0.5, y: 1},
            margin: {top: 20},
          },
        ],
        length: 250,
        style: {strokeDashArray: "10 5"},
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.AllowDrop |
        NodeConstraints.Tooltip,
      tooltip: {
        content: 'Denote The Time Prime',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('VerticalLine', 't[0]', { title: 't[0]', tooltip: 't[0]' }, {
        content: [
          {
            content: "t0",
            offset: {x: 0.5, y: 1},
            margin: {top: 20},
          },
        ],
        length: 250,
        style: {strokeDashArray: "10 5"},
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.AllowDrop |
        NodeConstraints.Tooltip,
      tooltip: {
        content: 'Denote An Initial Time',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('VerticalLine', 't[1]', { title: 't[1]', tooltip: 't[1]' }, {
        content: [
          {
            content: "t1",
            offset: {x: 0.5, y: 1},
            margin: {top: 20},
          },
        ],
        length: 250,
        style: {strokeDashArray: "10 5"},
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.AllowDrop |
        NodeConstraints.Tooltip,
      tooltip: {
        content: 'Denote The First Time',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('VerticalLine', 't[2]', { title: 't[2]', tooltip: 't[2]' }, {
        content: [
          {
            content: "t2",
            offset: {x: 0.5, y: 1},
            margin: {top: 20},
          },
        ],
        length: 250,
        style: {strokeDashArray: "10 5"},
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.AllowDrop |
        NodeConstraints.Tooltip,
      tooltip: {
        content: 'Denote The Second Time',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('VerticalLine', 't[3]', { title: 't[3]', tooltip: 't[3]' }, {
        content: [
          {
            content: "t3",
            offset: {x: 0.5, y: 1},
            margin: {top: 20},
          },
        ],
        length: 250,
        style: {strokeDashArray: "10 5"},
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.AllowDrop |
        NodeConstraints.Tooltip,
      tooltip: {
        content: 'Denote The Third Time',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('VerticalLine', 't[4]', { title: 't[4]', tooltip: 't[4]' }, {
        content: [
          {
            content: "t4",
            offset: {x: 0.5, y: 1},
            margin: {top: 20},
          },
        ],
        length: 250,
        style: {strokeDashArray: "10 5"},
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.AllowDrop |
        NodeConstraints.Tooltip,
      tooltip: {
        content: 'Denote The Fourth Time',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('VerticalLine', 't', { title: 't', tooltip: 't' }, {
        content: [
          {
            content: "t4",
            offset: {x: 0.5, y: 1},
            margin: {top: 20},
          },
        ],
        length: 250,
        style: {strokeDashArray: "10 5"},
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.AllowDrop |
        NodeConstraints.Tooltip,
      tooltip: {
        content: 'Denote The Time Time',
        position: 'TopRight',
      }
    },
  ];
  return stabilityShapes;
}
