import { NodeConstraints, NodeModel, PortVisibility } from '@syncfusion/ej2-angular-diagrams';
import { getShapeByType } from 'src/app/utils/constants';

export function getPersonShapes() {
  let personShapes = [
    {
      ...getShapeByType('Person', 'person', { title: 'Person', tooltip: 'A Person Without Title' }, ["Person Name", "No Title"]),
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
      ...getShapeByType('PersonNoFrame', 'personNoframe', { title: 'Person', tooltip: 'Sketched Without Frame' }, ["Person Name", "No Title"]),
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
      ...getShapeByType('Person', 'employee', { title: 'Employee', tooltip: 'A Person as Employee' }, ["Person Name", "Employee"]),
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
      ...getShapeByType('Person', 'manager', { title: 'Manager', tooltip: 'A Person as Manager' }, ["Person Name", "Manager"]),
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
      ...getShapeByType('Person', 'teamLead', { title: 'Team Lead', tooltip: 'A Person as Team Lead' }, ["Person Name", "Team Lead"]),
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
      ...getShapeByType('Person', 'customer', { title: 'Customer', tooltip: 'A Person as Customer' }, ["Person Name", "Customer"]),
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
      ...getShapeByType('Person', 'client', { title: 'Client', tooltip: 'A Person as Client' }, ["Person Name", "Client"]),
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
      ...getShapeByType('Person', 'contractor', { title: 'Contractor', tooltip: 'A Person as Contractor' }, ["Person Name", "Contractor"]),
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
      ...getShapeByType('Person', 'salePerson', { title: 'Sale Person', tooltip: 'A Person as Sale Person' }, ["Person Name", "Sale Person"]),
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
      ...getShapeByType('Person', 'servicePerson', { title: 'Service Person', tooltip: 'A Person as Service Person' }, ["Person Name", "Service Person"]),
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
      ...getShapeByType('Person', 'supportPerson', { title: 'Support Person', tooltip: 'A Person as Support Person' }, ["Person Name", "Support Person"]),
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
      ...getShapeByType('Person', 'inspector', { title: 'Inspector', tooltip: 'A Person as Inspector' }, ["Person Name", "Inspector"]),
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
      ...getShapeByType('Person', 'agent', { title: 'Test Person', tooltip: 'A Person as Agent' }, ["Person Name", "Agent"]),
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
      ...getShapeByType('Person', 'user', { title: 'User', tooltip: 'A Person as User' }, ["Person Name", "User"]),
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
      ...getShapeByType('Person', 'other', { title: 'Other', tooltip: 'Other Person Not Listed' }, ["Person Name", "Other"]),
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
      ...getShapeByType('PersonGroup', 'groupOfPeople', { title: 'Group of People', tooltip: 'Represents a Group of People' }, "Group of People"),
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
      ...getShapeByType(null, 'communicationHolder', { title: 'Communication Holder', tooltip: 'Hold Person Communication' }, 'Communication Holder'),
    },
    {
      ...getShapeByType(null, 'externalCommunicationHolder', { title: 'External Communication Holder', tooltip: 'Hold Person Communication' }, 'External Communication Holder'),
    },
    {
      ...getShapeByType('NaturalObserver', 'communicationNaturalObserver', { title: 'Natural Observer', tooltip: 'Show Entity is Naturally Identified' }, "")
    },
    {
      ...getShapeByType(null, 'communicationMixturePerson1', { title: 'Communication Mixture', tooltip: 'Two Input Communication' }, {
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
    },
    {
      ...getShapeByType(null, 'communicationMixturePerson2', { title: 'Communication Mixture', tooltip: 'Multi Input Communication' }, {
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
    },

  ];
  return personShapes;
}
