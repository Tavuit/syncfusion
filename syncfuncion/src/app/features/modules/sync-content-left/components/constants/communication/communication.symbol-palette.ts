import { NodeConstraints, NodeModel, PortVisibility } from '@syncfusion/ej2-angular-diagrams';
import { rectPorts } from 'src/app/features/modules/sync-content-left/components/constants/communication/common';
import { getShapeByType } from 'src/app/utils/constants';

export function getCommunicationShapes() {
  const communicationShapes = [
    {
      ...getShapeByType('', 'communicationEntity', { title: 'Communication Entity', tooltip: 'Communication Entity' }, 'Communication Entity'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represents a Communication',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Text', 'commText', { title: 'Communication', tooltip: 'Communication' }, 'Communication'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represents a Communication',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'word', { title: 'Word', tooltip: 'Word' }, 'Word'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represents an Actual Word',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'sentence', { title: 'Sentence', tooltip: 'Sentence' }, 'Sentence'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represents an Actual Sentence',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'paragraph', { title: 'Paragraph', tooltip: 'Paragraph' }, 'Paragraph'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represents an Actual Paragraph',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'communicationElement', { title: 'Communication Element', tooltip: 'Communication Element' }, 'Communication Element'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represent a Communication Element',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'communicationProcess', { title: 'Communication Process', tooltip: 'Communication Process' }, 'Communication Process'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represents a Process of Communication',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'information', { title: 'Information', tooltip: 'Information' }, 'Information'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represents an actual Information',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'entity', { title: 'Entity', tooltip: 'Entity' }, 'Entity'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represents an Actual Entity',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'question', { title: 'Question', tooltip: 'Question' }, 'Question'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represent an Actual Question',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'answer', { title: 'Answer', tooltip: 'Answer' }, 'Answer'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represents an Actual Sentence',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'unkownEntity', { title: 'Unknown Entity', tooltip: 'Unknown Entity' }, 'Unknown Entity'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represents an Unknown Entity',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'blankEntity', { title: 'Blank Entity', tooltip: 'Blank Entity' }, '?'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Existed Whether or Not',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'function', { title: 'Function', tooltip: 'Function' }, 'Function'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Entity as Function',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'aspect', { title: 'Aspect', tooltip: 'Aspect' }, 'Aspect'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Entity as Aspect',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'test', { title: 'Test', tooltip: 'Test' }, 'Test'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Entity as Test',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'functionStatus', { title: 'Function Status', tooltip: 'Function Status' }, 'Function Status'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Entity as Function Status',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'entityUsage', { title: 'Entity Usage', tooltip: 'Entity Usage' }, 'Entity Usage'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Entity as Entity Usage',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'picture', { title: 'Picture', tooltip: 'Picture' }, 'Picture'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represents an actual Picture',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'video', { title: 'Video', tooltip: 'Video' }, 'Video'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represents an Actual Video',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'audio', { title: 'Audio', tooltip: 'Audio' }, 'Audio'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represents an actual Audio',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Circle', 'dictionary', { title: 'Dictionary', tooltip: 'Dictionary' }, {
        radius: 50,
        fill: "none",
        content: [
          {
            offset: {x: 0.5, y: 1},
            margin: {top: 8},
            content: "Dictionary",
          },
        ],
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represent a Dictionary of Words',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Circle', 'wordCommunication', { title: 'Word', tooltip: 'Word' }, {
        fill: "none",
        radius: 25,
        content: [
          {
            content: "Word",
          },
        ],
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represent a Word',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Circle', 'collection', { title: 'Collection', tooltip: 'Collection' }, {
        radius: 50,
        fill: "none",
        content: [
          {
            offset: {x: 0.5, y: 1},
            margin: {top: 8},
            content: "Collection",
          },
        ],
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represent a Collection of Entity',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Circle', 'entityCommunication', { title: 'Entity', tooltip: 'Entity' }, {
        fill: "none",
        radius: 25,
        content: [
          {
            content: "Entity",
          },
        ],
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represents an Entity',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Circle', 'relationship123', { title: 'Relationship', tooltip: 'Relationship' }, {
        content: [
          {
            content: "Relates",
          },
        ],
        fill: "white",
        radius: 35,
        ports: rectPorts,
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Use to Show a Relationship',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Circle', 'comparison', { title: 'Comparison', tooltip: 'Comparison' }, {
        content: [
          {
            content: "Compare",
          },
        ],
        fill: "white",
        radius: 35,
        ports: rectPorts,
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Use to Show a Comparison',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'communicationMixtureCommunication1', { title: 'Communication Mixture', tooltip: 'Communication Mixture' }, {
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
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Two Input Communication',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'communicationMixtureCommunication2', { title: 'Communication Mixture', tooltip: 'Communication Mixture' }, {
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
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Multi Input Communication',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'groupCommunication', { title: 'Group', tooltip: 'Group' }, {
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
      ...getShapeByType('Continuity', 'continuityComm', { title: 'Continuity', tooltip: 'Continuity' }, {
        strokeWidth: "1",
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
      ...getShapeByType('Overlap', 'entities', { title: 'Entities', tooltip: 'Entities' }, 'Entities'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represents a Group of Entity',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Overlap', 'communicationElements', { title: 'Communication Elements', tooltip: 'Communication Elements' }, 'Communication Elements'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'A Group of Communication Element',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Overlap', 'questions', { title: 'Questions', tooltip: 'Questions' }, 'Questions'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represents a Group of Question',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Overlap', 'answers', { title: 'Answers', tooltip: 'Answers' }, 'Answers'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represents a Group of Answer',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'x', { title: 'x', tooltip: 'x' }, 'x'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represent a Communication',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Text', 'x1', { title: 'x', tooltip: 'x' }, 'x'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represent a Communication',
        position: 'TopRight',
      }
    },
  ];
  return communicationShapes;
}
