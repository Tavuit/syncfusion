import { NodeConstraints, NodeModel, PortVisibility } from '@syncfusion/ej2-angular-diagrams';
import { getShapeByType } from 'src/app/utils/constants';

export function getPersonShapes() {
  let personShapes = [
    {
      ...getShapeByType('Person', 'person', { menuId: "personShapes", title: 'Person', tooltip: 'Person' }, ["Person Name", "No Title"]),
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
      ...getShapeByType('PersonNoFrame', 'personNoframe', { menuId: "personShapes", title: 'Person', tooltip: 'Person' }, ["Person Name", "No Title"]),
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
      ...getShapeByType('Person', 'employee', { menuId: "personShapes", title: 'Employee', tooltip: 'Employee' }, ["Person Name", "Employee"]),
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
      ...getShapeByType('Person', 'manager', { menuId: "personShapes", title: 'Manager', tooltip: 'Manager' }, ["Person Name", "Manager"]),
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
      ...getShapeByType('Person', 'teamLead', { menuId: "personShapes", title: 'Team Lead', tooltip: 'Team Lead' }, ["Person Name", "Team Lead"]),
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
      ...getShapeByType('Person', 'customer', { menuId: "personShapes", title: 'Customer', tooltip: 'Customer' }, ["Person Name", "Customer"]),
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
      ...getShapeByType('Person', 'client', { menuId: "personShapes", title: 'Client', tooltip: 'Client' }, ["Person Name", "Client"]),
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
      ...getShapeByType('Person', 'contractor', { menuId: "personShapes", title: 'Contractor', tooltip: 'Contractor' }, ["Person Name", "Contractor"]),
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
      ...getShapeByType('Person', 'salePerson', { menuId: "personShapes", title: 'Sale Person', tooltip: 'Sale Person' }, ["Person Name", "Sale Person"]),
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
      ...getShapeByType('Person', 'servicePerson', { menuId: "personShapes", title: 'Service Person', tooltip: 'Service Person' }, ["Person Name", "Service Person"]),
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
      ...getShapeByType('Person', 'supportPerson', { menuId: "personShapes", title: 'Support Person', tooltip: 'Support Person' }, ["Person Name", "Support Person"]),
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
      ...getShapeByType('Person', 'inspector', { menuId: "personShapes", title: 'Inspector', tooltip: 'Inspector' }, ["Person Name", "Inspector"]),
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
      ...getShapeByType('Person', 'agent', { menuId: "personShapes", title: 'Test Person', tooltip: 'Test Person' }, ["Person Name", "Agent"]),
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
      ...getShapeByType('Person', 'user', { menuId: "personShapes", title: 'User', tooltip: 'User' }, ["Person Name", "User"]),
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
      ...getShapeByType('Person', 'other', { menuId: "personShapes", title: 'Other', tooltip: 'Other' }, ["Person Name", "Other"]),
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
      ...getShapeByType('PersonGroup', 'groupOfPeople', { menuId: "groupPeople", title: 'Group of People', tooltip: 'Group of People' }, "Group of People"),
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
      ...getShapeByType(null, 'communicationHolder', { menuId: "communicationHolder", title: 'Communication Holder', tooltip: 'Communication Holder' }, 'Communication Holder'),
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Hold Person Communication',
        position: 'TopRight'
      },
    },
    {
      ...getShapeByType(null, 'externalCommunicationHolder', { menuId: "communicationHolder", title: 'External Communication Holder', tooltip: 'External Communication Holder' }, 'External Communication Holder'),
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Hold Person Communication',
        position: 'TopRight'
      },
    },
    {
      ...getShapeByType('NaturalObserver', 'communicationNaturalObserver', { menuId: "communicationNaturalObserver", title: 'Natural Observer', tooltip: 'Natural Observer' }, ""),
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Show Entity is Naturally Identified',
        position: 'TopRight'
      }
    },
    {
      ...getShapeByType(null, 'communicationMixturePerson1', { menuId: "commMix", title: 'Communication Mixture', tooltip: 'Communication Mixture' }, {
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
      ...getShapeByType(null, 'communicationMixturePerson2', { menuId: "commMix", title: 'Communication Mixture', tooltip: 'Communication Mixture' }, {
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
      ...getShapeByType(null, 'personAspect', { menuId: "personAspect", title: 'Person Aspect', tooltip: 'Person Aspect' }, {
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
      ...getShapeByType(null, 'groupPerson1', { menuId: "commMix", title: 'Group', tooltip: 'Group' }, {
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
      ...getShapeByType('Overlap', 'commHolderGroup', { menuId: "communicationHolder", title: 'Comm Holder Group', tooltip: 'Comm Holder Group' }, 'Communication Holder'),
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Group of Communication Holder',
        position: 'TopRight'
      }
    },
    {
      ...getShapeByType('Overlap', 'externalCommHolderGroup', { menuId: "communicationHolder", title: 'External Comm Holder Group', tooltip: 'External Comm Holder Group' }, 'External Communication Holder'),
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Group of External Communication Holder',
        position: 'TopRight'
      }
    },
    {
      ...getShapeByType('cover', 'coverPerson', { menuId: "cover", title: 'Cover', tooltip: 'Cover' }, ''),
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Use to Cover a Person',
        position: 'TopRight'
      }
    },
    {
      ...getShapeByType('mobility', 'mobilityPerson', { menuId: "personShapes", title: 'Mobility', tooltip: 'Mobility' }, ''),
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Movement of a Person',
        position: 'TopRight'
      }
    },
    {
      ...getShapeByType('Continuity', 'continuityPerson', { menuId: "empty", title: 'Continuity', tooltip: 'Continuity' }, {
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
      ...getShapeByType('PersonNoFrame', 'personWithNumber', { menuId: "personShapes", title: 'P[n]', tooltip: 'P[n]' }, ["Pn"]),
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Denote Person With Number',
        position: 'TopRight'
      }
    },
    {
      ...getShapeByType('Person', 'PersonWithNumberAndFrame123', { menuId: "personShapes", title: 'x[n]', tooltip: 'x[n]' }, ["x[n]"]),
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Denote Person With Number',
        position: 'TopRight'
      }
    },
  ];
  return personShapes;
}

export function getTheoryPersonShapes(): any {
  const theoryPerson = [
    {
      ...getShapeByType(
        'Person',
        'physicalSystem',
        { menuId: "system", title: 'Physical System', tooltip: 'Physical System' },
        ['System']
      ),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate,
      tooltip: {
        content: 'Identify a Person',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType(
        'PersonNoFrame',
        'physicalSystem1',
        { menuId: "system", title: 'Physical System', tooltip: 'Physical System' },
        ['System']
      ),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate,
      tooltip: {
        content: 'Identify a Person',
        position: 'TopRight',
      },
    },
    {
      ...getShapeByType(
        '',
        'physicalSystem2',
        { menuId: "system", title: 'Physical System', tooltip: 'Physical System' },
        ['System']
      ),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate,
      tooltip: {
        content: 'Identify a Person',
        position: 'TopRight',
      },
    },
    {
      ...getShapeByType(
        'PersonGroup',
        'groupPhysicalSystem',
        { menuId: "groupSystem", title: 'Group Physical System', tooltip: 'Group Physical System' },
        'Change Shape'
      ),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate,
      tooltip: {
        content: 'Identify Group of Person',
        position: 'TopRight',
      },
    },
    {
      ...getShapeByType(
        'Overlap',
        'groupPhysicalSystem1',
        { menuId: "system", title: 'Group Physical System', tooltip: 'Group Physical System' },
        'Systems'
      ),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate,
      tooltip: {
        content: 'Identify Group of Person',
        position: 'TopRight',
      },
    },
    {
      ...getShapeByType(
        'DottedGroup',
        'groupPhysicalSyste2',
        { menuId: "system", title: 'Group Physical System', tooltip: 'Group Physical System' },
        'Change Shape'
      ),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate,
      tooltip: {
        content: 'Identify Group of Person',
        position: 'TopRight',
      },
    },
    {
      ...getShapeByType(
        '',
        'constantCharacteristics',
        {
          menuId: "constantCharaceristic",
          title: 'Constant Characteristics',
          tooltip: 'Constant Characteristics',
        },
        'Constant Characteristics'
      ),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate,
      tooltip: {
        content: 'Physical System Constant Characteristics  ',
        position: 'TopRight',
      },
    },
    {
      ...getShapeByType(
        'mobility',
        'mobilitySystem',
        { menuId: "system", title: 'Mobility', tooltip: 'Mobility' },
        'Identify Our Mobility'
      ),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate,
      tooltip: {
        content: 'Identify Group of Person',
        position: 'TopRight',
      },
    },
    {
      ...getShapeByType(
        '',
        'groupSystem',
        { menuId: "commMix", title: 'Group', tooltip: 'Group' },
        {
          content: [
            {
              content: 'Group',
            },
          ],
          ports: [
            {
              id: 'left-1',
              offset: { x: 0, y: 0.25 },
              visibility: PortVisibility.Visible,
              shape: 'X',
              width: 4,
              height: 4,
            },
            {
              id: 'left-2',
              offset: { x: 0, y: 0.75 },
              visibility: PortVisibility.Visible,
              shape: 'X',
              width: 4,
              height: 4,
            },
            {
              id: 'right',
              offset: { x: 1, y: 0.5 },
              visibility: PortVisibility.Visible,
              shape: 'X',
              width: 4,
              height: 4,
            },
          ],
          height: 75,
          width: 50,
        }
      ),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate,
      tooltip: {
        content: 'Use to Group or Add Entities',
        position: 'TopRight',
      },
    },
    {
      ...getShapeByType(
        'Continuity',
        'continuity',
        { title: 'Continuity', tooltip: 'Continuity' },
        {
          strokeWidth: 0,
          strokeDashArray: "",
          fill: "transparent",
          ports: [],
        }
      ),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate,
      tooltip: {
        content: 'Show Continuity of Entity',
        position: 'TopRight',
      },
    },
    {
      ...getShapeByType(
        'linkednode',
        'linkedNodeSystem',
    
      { menuId: "linkedNode",title: 'Linked Node', tooltip: 'Linked Node' },
        ''
      ),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate,
      tooltip: {
        content: 'Linked Node',
        position: 'TopRight',
      },
    },
    {
      ...getShapeByType(
        '',
        'sn2',
        { menuId: "system", title: 'S[n]', tooltip: 'S[n]' },
        'Sn'
      ),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate,
      tooltip: {
        content: 'Represents The Physical System',
        position: 'TopRight',
      },
    },
    {
      ...getShapeByType(
        'Text',
        'sn3',
        { menuId: "system", title: 'S[n]', tooltip: 'S[n]' },
        'Sn'
      ),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate,
      tooltip: {
        content: 'Represents The Physical System',
        position: 'TopRight',
      },
    },
    {
      ...getShapeByType(
        'Person',
        'sn',
        { menuId: "system", title: 'S[n]', tooltip: 'S[n]' },
        ['Sn']
      ),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate,
      tooltip: {
        content: 'Identify a Person',
        position: 'TopRight',
      },
    },
    {
      ...getShapeByType(
        'PersonNoFrame',
        'sn1',
        { menuId: "system", title: 'S[n]', tooltip: 'S[n]' },
        ['Sn']
      ),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate,
      tooltip: {
        content: 'Identify a Person',
        position: 'TopRight',
      },
    },
    {
      ...getShapeByType(
        'Person',
        'xn',
        { menuId: "system", title: 'x[n]', tooltip: 'x[n]' },
        ['Xn']
      ),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate,
      tooltip: {
        content: 'Identify a Person',
        position: 'TopRight',
      },
    },
    {
      ...getShapeByType(
        'PersonNoFrame',
        'xn1',
        { menuId: "system", title: 'x[n]', tooltip: 'x[n]' },
        ['Xn']
      ),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate,
      tooltip: {
        content: 'Identify a Person',
        position: 'TopRight',
      },
    },
    {
      ...getShapeByType(
        'StrokeRect',
        's',
        { menuId: "system", title: 'S', tooltip: 'S' },
        'S'
      ),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate,
      tooltip: {
        content: 'Identify a Person',
        position: 'TopRight',
      },
    },
    {
      ...getShapeByType(
        'DottedOverlap',
        'S',
        { menuId: "system", title: 'S', tooltip: 'S' },
        'S'
      ),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop |
        NodeConstraints.Rotate,
      tooltip: {
        content: 'Identify a Person',
        position: 'TopRight',
      },
    },
  ];
  return theoryPerson;
}
