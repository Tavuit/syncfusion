import { NodeConstraints, NodeModel, PortVisibility } from '@syncfusion/ej2-angular-diagrams';
import { rectPorts } from 'src/app/features/modules/sync-content-left/components/constants/communication/common';
import { getShapeByType } from 'src/app/utils/constants';

export function getApplicationShapes() {
  const applicationShapes = [
    {
      ...getShapeByType(null, 'application', { title: 'Application', tooltip: 'Application' }, 'Application'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represents an Actual Application',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType(null, 'communicationFunction', { title: 'Communication Function', tooltip: 'Communication Function' }, 'Communication Function'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Communication Function',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType(null, 'communicationResult', { title: 'Communication Result', tooltip: 'Communication Result' }, 'Communication Result'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Result of an Application',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Text', 'communicationFunction1', { title: 'Communication Function', tooltip: 'Communication Function' }, 'Communication Function'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represent Communication Function',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Circle', 'commAppMixture', { title: 'Comm App Mixture', tooltip: 'Comm App Mixture' }, {
        fill: "white",
        radius: 35,
        content: [
          {
            content: "Comm & App Mixture",
          },
        ],
        ports: rectPorts,
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Communication Application Mixture',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'commAppMixture1', { title: 'Comm App Mixture', tooltip: 'Comm App Mixture' }, {
        content: [
          {
            content: "Communication Application Mixture",
          },
        ],
        height: 80,
        width: 80,
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Multi Inputs Comm & App Mixture',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('CommunicationGrouped', 'communicationFunctionGrouped', { title: 'Communication Function', tooltip: 'Communication Function' }, [
        "Communication Function",
        "Communication Function",
        "Communication Function",
      ]),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'What We Do as Entity',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('WhatWeDo', 'whatWeDo', { title: 'What We Do', tooltip: 'What We Do' }, ["Communication", "Application", "What We Do"]),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'What We Do as Entity',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('DualBox', 'DualBox', { title: 'What We Do', tooltip: 'What We Do' }, 'What We Do'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represent Things That We Do',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'action', { title: 'Action', tooltip: 'Action' }, 'Action'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'An Action That We Take',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'reason', { title: 'Reason', tooltip: 'Reason' }, 'Reason'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Reason For an Action',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'work1234', { title: 'Work', tooltip: 'Work' }, 'Work'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Work That we Do',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Text', 'application1', { title: 'Application', tooltip: 'Application' }, 'Application'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represent Application',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('emptycontainer', 'emptycontainer', { title: 'Empty Container', tooltip: 'Empty Container' }, null),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'A Container to Add Part to',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Circle', 'work', { title: 'Work', tooltip: 'Work' }, {
        fill: "white",
        radius: 40,
        content: [
          {
            content: "Work",
          },
        ],
        ports: rectPorts,
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'People Work Together',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Sub', 'subFunction', { title: 'Sub Function', tooltip: 'Sub Function' }, 'Sub Communication Function'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Function Inside Function',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Sub', 'subApplication', { title: 'Sub Application', tooltip: 'Sub Application' }, 'Sub Application'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Application Inside Application',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Sub', 'subResult', { title: 'Sub Result', tooltip: 'Sub Result' }, 'Sub Result'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Result Inside Result',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Group', 'groupFunction', { title: 'Group Function', tooltip: 'Group Function' }, 'Group Function'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Group Function',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Group', 'groupApplication', { title: 'Group Application', tooltip: 'Group Application' }, 'Group Application'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Denote Group of Application',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Group', 'groupResult', { title: 'Group Result', tooltip: 'Group Result' }, 'Group Communication Result'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Group Communication Result',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'group1', { title: 'Group', tooltip: 'Group' }, {
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
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Use to Group or Add Entities',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Continuity', 'continuityApplication', { title: 'Continuity', tooltip: 'Continuity' }, {
        strokeWidth: 1,
        strokeDashArray: "10 5",
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Show Continuity of Entity',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'a', { title: 'A', tooltip: 'A' }, 'A'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represents an Actual Application',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Text', 'a1', { title: 'A', tooltip: 'A' }, 'A'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represents Application',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'functionx', { title: 'f(x)', tooltip: 'f(x)' }, 'f(x)'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Function of Our Communication',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Text', 'functionx1', { title: 'f(x)', tooltip: 'f(x)' }, 'f(x)'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represent Communication Function',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'function0', { title: 'f()', tooltip: 'f()' }, 'f()'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Function of Our Communication',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Text', 'communicationFunction12', { title: 'Communication Function', tooltip: 'Communication Function' }, 'communication function'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represent Communication Function',
        position: 'TopRight',
      }
    },
  ];
  return applicationShapes;
}
