import { ConnectorConstraints, ConnectorModel, NodeConstraints, NodeModel } from '@syncfusion/ej2-angular-diagrams';
import { rectPorts } from 'src/app/features/modules/sync-content-left/components/constants/communication/common';
import { getShapeByType } from 'src/app/utils/constants';

export function getCommunicationSignalShapes() {
  let communicationSignal = [
    {
      ...getShapeByType('Circle', 'greenCommSignal', { title: 'Green Comm Signal', tooltip: 'Green Comm Signal' }, {
        fill: "LimeGreen",
        radius: 12.5,
        isPoint: true,
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate,
      tooltip: {
        content: 'Represents a Comm Without Error',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Circle', 'redCommSignal', { title: 'Red Comm Signal', tooltip: 'Red Comm Signal' }, {
        fill: "Red",
        radius: 12.5,
        isPoint: true,
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate,
      tooltip: {
        content: 'Represents a Comm Without Error',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Circle', 'blueCommSignal', { title: 'Blue Comm Signal', tooltip: 'Blue Comm Signal' }, {
        fill: "Blue",
        radius: 12.5,
        isPoint: true,
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate,
      tooltip: {
        content: 'Represents a Comm as Feedback',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Arrow', 'greenSignalPath', { title: 'Green Signal Path', tooltip: 'Green Signal Path' }, {
        shape: {
          target: "Arrow",
        },
        style: {
          fill: "LimeGreen",
          strokeColor: "LimeGreen",
          strokeWidth: 1,
        },
      }),
      sourcePoint: {
        x: 30,
        y: 40,
      },
      targetPoint: {
        x: 50,
        y: 40,
      },
      constraints:
        ConnectorConstraints.Default |
        ConnectorConstraints.Tooltip |
        ConnectorConstraints.AllowDrop,
      tooltip: {
        content: 'Show Green Communication Flow',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Arrow', 'redSignalPath', { title: 'Red Signal Path', tooltip: 'Red Signal Path' }, {
        shape: {
          target: "Arrow",
        },
        style: {
          fill: "red",
          strokeColor: "Red",
          strokeWidth: 1,
        },
      }),
      constraints:
        ConnectorConstraints.Default |
        ConnectorConstraints.Tooltip |
        ConnectorConstraints.AllowDrop,
      tooltip: {
        content: 'Show Red Communication Flow',
        position: 'TopRight',
      },
      sourcePoint: {
        x: 30,
        y: 40,
      },
      targetPoint: {
        x: 50,
        y: 40,
      },
    },
    {
      ...getShapeByType('Arrow', 'blueSignalPath', { title: 'Blue Signal Path', tooltip: 'Blue Signal Path' }, {
        shape: {
          target: "Arrow",
        },
        style: {
          fill: "Blue",
          strokeColor: "Blue",
          strokeWidth: 1,
        },
      }),
      constraints:
        ConnectorConstraints.Default |
        ConnectorConstraints.Tooltip |
        ConnectorConstraints.AllowDrop,
      tooltip: {
        content: 'Show Blue Communication Flow',
        position: 'TopRight',
      },
      sourcePoint: {
        x: 30,
        y: 40,
      },
      targetPoint: {
        x: 50,
        y: 40,
      },
    },
  ];
  return communicationSignal;
}
