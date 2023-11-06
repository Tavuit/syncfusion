import { NodeConstraints, NodeModel, PortVisibility } from '@syncfusion/ej2-angular-diagrams';
import { getShapeByType } from 'src/app/utils/constants';

export function getPersonShapes() {
  let personShapes = [
    {
      ...getShapeByType('Person', 'person', { title: 'Person', tooltip: 'Person' }, ["Person Name", "No Title"]),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'A Person Without Title',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('PersonNoFrame', 'personNoframe', { title: 'Person', tooltip: 'Person' }, ["Person Name", "No Title"]),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Sketched Without Frame',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Person', 'employee', { title: 'Employee', tooltip: 'Employee' }, ["Person Name", "Employee"]),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'A Person as Employee',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Person', 'manager', { title: 'Manager', tooltip: 'Manager' }, ["Person Name", "Manager"]),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'A Person as Manager',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Person', 'teamLead', { title: 'Team Lead', tooltip: 'Team Lead' }, ["Person Name", "Team Lead"]),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'A Person as Team Lead',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Person', 'customer', { title: 'Customer', tooltip: 'Customer' }, ["Person Name", "Customer"]),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'A Person as Customer',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Person', 'client', { title: 'Client', tooltip: 'Client' }, ["Person Name", "Client"]),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'A Person as Client',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Person', 'contractor', { title: 'Contractor', tooltip: 'Contractor' }, ["Person Name", "Contractor"]),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'A Person as Contractor',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Person', 'salePerson', { title: 'Sale Person', tooltip: 'Sale Person' }, ["Person Name", "Sale Person"]),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'A Person as Sale Rep',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Person', 'servicePerson', { title: 'Service Person', tooltip: 'Service Person' }, ["Person Name", "Service Person"]),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'A Person as Service Rep',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Person', 'supportPerson', { title: 'Support Person', tooltip: 'Support Person' }, ["Person Name", "Support Person"]),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'A Person as Service Rep',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Person', 'inspector', { title: 'Inspector', tooltip: 'Inspector' }, ["Person Name", "Inspector"]),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'A Person as Inspector',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Person', 'agent', { title: 'Test Person', tooltip: 'Test Person' }, ["Person Name", "Agent"]),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'A Person as Agent',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Person', 'user', { title: 'User', tooltip: 'User' }, ["Person Name", "User"]),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'A Person as User',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Person', 'other', { title: 'Other', tooltip: 'Other' }, ["Person Name", "Other"]),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Other Person Not Listed',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('PersonGroup', 'groupOfPeople', { title: 'Group of People', tooltip: 'Group of People' }, "Group of People"),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represents a Group of People',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType(null, 'communicationHolder', { title: 'Communication Holder', tooltip: 'Communication Holder' }, 'Communication Holder'),
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Hold Person Communication',
        position: 'TopRight'
      },
    },
    {
      ...getShapeByType(null, 'externalCommunicationHolder', { title: 'External Communication Holder', tooltip: 'External Communication Holder' }, 'External Communication Holder'),
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Hold Person Communication',
        position: 'TopRight'
      },
    },
    {
      ...getShapeByType('NaturalObserver', 'communicationNaturalObserver', { title: 'Natural Observer', tooltip: 'Natural Observer' }, ""),
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Show Entity is Naturally Identified',
        position: 'TopRight'
      }
    },
    {
      ...getShapeByType(null, 'communicationMixturePerson1', { title: 'Communication Mixture', tooltip: 'Communication Mixture' }, {
        content: [
          {
            content: "Comm Mix",
          },
        ],
        ports: [
          {
            id: "top-port",
            offset: {x: 0.5, y: 0},
            visibility: PortVisibility.Visible,
            shape: "X",
            width: 4,
            height: 4,
          },
          {
            id: "right-port",
            offset: {x: 1, y: 0.5},
            visibility: PortVisibility.Visible,
            shape: "X",
            width: 4,
            height: 4,
          },
          {
            id: "bottom-port",
            offset: {x: 0.5, y: 1},
            visibility: PortVisibility.Visible,
            shape: "X",
            width: 4,
            height: 4,
          },
        ],
        height: 50,
        width: 50,
      }),
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Two Input Communication',
        position: 'TopRight'
      }
    },
    {
      ...getShapeByType(null, 'communicationMixturePerson2', { title: 'Communication Mixture', tooltip: 'Communication Mixture' }, {
        content: [
          {
            content: "Comm Mix",
          },
        ],
        ports: [
          {
            id: "top-port",
            offset: {x: 0.5, y: 0},
            visibility: PortVisibility.Visible,
            shape: "X",
            width: 4,
            height: 4,
          },
          {
            id: "right-port",
            offset: {x: 1, y: 0.5},
            visibility: PortVisibility.Visible,
            shape: "X",
            width: 4,
            height: 4,
          },
          {
            id: "bottom-port",
            offset: {x: 0.5, y: 1},
            visibility: PortVisibility.Visible,
            shape: "X",
            width: 4,
            height: 4,
          },
        ],
        height: 50,
        width: 50,
      }),
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Multi Input Communication',
        position: 'TopRight'
      }
    },
    {
      ...getShapeByType(null, 'personAspect', { title: 'Person Aspect', tooltip: 'Person Aspect' }, {
        content: [
          {
            content: 'Person Aspect',
          },
        ]
      }),
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Identify Aspect of a Person',
        position: 'TopRight'
      }
    },
    {
      ...getShapeByType(null, 'groupPerson1', { title: 'Group', tooltip: 'Group' }, {
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
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Use to Group or Add Entities',
        position: 'TopRight'
      }
    },
    {
      ...getShapeByType('Overlap', 'commHolderGroup', { title: 'Comm Holder Group', tooltip: 'Comm Holder Group' }, 'Communication Holder'),
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Group of Communication Holder',
        position: 'TopRight'
      }
    },
    {
      ...getShapeByType('Overlap', 'externalCommHolderGroup', { title: 'External Comm Holder Group', tooltip: 'External Comm Holder Group' }, 'External Communication Holder'),
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Group of External Communication Holder',
        position: 'TopRight'
      }
    },
    {
      ...getShapeByType('cover', 'coverPerson', { title: 'Cover', tooltip: 'Cover' }, ''),
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Use to Cover a Person',
        position: 'TopRight'
      }
    },
    {
      ...getShapeByType('mobility', 'mobilityPerson', { title: 'Mobility', tooltip: 'Mobility' }, ''),
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Movement of a Person',
        position: 'TopRight'
      }
    },
    {
      ...getShapeByType('Continuity', 'continuityPerson', { title: 'Continuity', tooltip: 'Continuity' }, {
        strokeWidth: 0,
        strokeDashArray: "",
        fill: "transparent",
        ports: [],
      }),
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Show Continuity of Entity',
        position: 'TopRight'
      }
    },
    {
      ...getShapeByType('PersonNoFrame', 'personWithNumber', { title: 'P[n]', tooltip: 'P[n]' }, ["Pn"]),
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Denote Person With Number',
        position: 'TopRight'
      }
    },
    {
      ...getShapeByType('Person', 'PersonWithNumberAndFrame123', { title: 'x[n]', tooltip: 'x[n]' }, ["x[n]"]),
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Denote Person With Number',
        position: 'TopRight'
      }
    },
  ];
  return personShapes;
}
