import {ConnectorConstraints, NodeConstraints, NodeModel} from "@syncfusion/ej2-angular-diagrams";
import { getShapeByType } from "src/app/utils/constants";

export function getCommunicationLinksShapes() {
  let communicationLinks = [
    {

      id: 'communicationLink',
      addInfo: { menuId: "edit", title: 'Communication Link', tooltip: 'Communication Link' },
      type: 'Straight',
      sourcePoint: {
        x: 30,
        y: 40,
      },
      targetPoint: {
        x: -1000,
        y: 40,
      },
      targetDecorator: {
        shape: 'Arrow',
        style: {
          fill: 'black',
          strokeColor: 'black'
        }
      },
      sourceDecorator: {
        shape: "None",
      },
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
      tooltip: {
        content: 'Right Communication Flow',
        position: 'RightCenter'
      },
      style: {
        fill: 'black',
        strokeColor: 'black',
        strokeWidth: 1
      },
      constraints: ConnectorConstraints.Tooltip | ConnectorConstraints.Default | ConnectorConstraints.AllowDrop,
    },
    {
      ...getShapeByType('Arrow', 'communicationLinkLeft', { menuId: "edit", title: 'Communication Link', tooltip: 'Communication Link' }, {
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
      }),
      constraints:
        ConnectorConstraints.Tooltip | ConnectorConstraints.Default | ConnectorConstraints.AllowDrop,
      tooltip: {
        content: 'Left Communication Flow',
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
      ...getShapeByType('Arrow', 'bidirectionalCommunicationLink', { menuId: "edit", title: 'Bidirectional Communication Link', tooltip: 'Bidirectional Communication Link' }, {
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
      }),
      constraints: ConnectorConstraints.Tooltip | ConnectorConstraints.Default | ConnectorConstraints.AllowDrop,
      tooltip: {
        content: 'Left &  Right Communication Flow',
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
      ...getShapeByType('WideArrow', 'rightCommunicationLink', { menuId: "edit", title: 'Right Communication Link', tooltip: 'Right Communication Link' }, {
        content: "Information",
      }),
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Communication Link With Information',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('WideArrow', 'leftCommunicationLink', { menuId: "edit", title: 'Left Communication Link', tooltip: 'Left Communication Link' }, {
        content: "Information",
        direction: "left",
      }),
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Communication Link With Information',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('BiWideArrow', 'biDirectionalArrow', { menuId: "edit", title: 'Bidirectional Arrow', tooltip: 'Bidirectional Arrow' }, 'Information'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Communication Link With Information',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('CylinderArrow', 'communicationLink1', { menuId: "edit", title: 'Communication Link', tooltip: 'Communication Link' }, 'Information'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Communication Link With Information',
        position: 'TopRight',
      }
    }
  ]
  return communicationLinks;
}
