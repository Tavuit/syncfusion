import {
  ContextMenuSettingsModel,
  DiagramTooltipModel,
  RulerSettingsModel,
} from '@syncfusion/ej2-angular-diagrams';

export const contextMenuBaseItems = [
  {
    id: 'baseCopy',
    onClick: '',
    text: 'Copy',
    icon: 'flaticon-copy',
  },
  {
    id: 'basePaste',
    onClick: '',
    text: 'Paste',
    icon: 'flaticon-paste',
  },
  {
    id: 'baseCut',
    onClick: '',
    text: 'Cut',
    icon: 'flaticon-scissors',
  },
  {
    id: 'baseEdit',
    onClick: '',
    text: 'Edit Text',
  },
  {
    id: 'baseSelect',
    onClick: '',
    text: 'Select All',
  },
];
export const contextMenuSettings: ContextMenuSettingsModel = {
  show: true,
  items: [],
  showCustomMenuOnly: true,
};

export const rulerSettings: RulerSettingsModel = {
  showRulers: true,
  horizontalRuler: {
    interval: 8,
    segmentWidth: 100,
    thickness: 25,
    tickAlignment: 'LeftOrTop',
  },
  verticalRuler: {
    interval: 10,
    segmentWidth: 150,
    thickness: 35,
    tickAlignment: 'RightOrBottom',
  },
};

export const tooltipSettings: DiagramTooltipModel = {
  content: 'Nodes',
  position: 'TopLeft',
};

export const personShapesContext = [
  {
    id: 'replacePersonPicture',
    onClick: '',
    text: 'Replace person with picture',
  },
  {
    id: 'replacePersonSketch',
    onClick: '',
    text: 'Replace person with sketch',
  },
  {
    id: 'replacePersonVideo',
    onClick: '',
    text: 'Replace person with Video',
  },
  //   'sep',
  {
    id: 'addAudioPerson',
    onClick: '',
    text: 'Add audio for person',
  },
  {
    id: 'addVideoPerson',
    onClick: '',
    text: 'Add video for person',
  },
  {
    id: 'addTextPerson',
    onClick: '',
    text: 'Add text for person',
  },
  //   'sep',
  {
    id: 'addCommunicationPerson',
    onClick: '',
    text: 'Add Communication holder for person',
  },
  //   'sep',
  {
    id: 'relatePersonPrinciple',
    onClick: '',
    text: 'Relate person with principle',
  },
  {
    id: 'relatePersonOperatingPrinciple',
    onClick: '',
    text: 'Relate person with operating principle',
  },
  {
    id: 'relatePersonSubsetPrinciple',
    onClick: '',
    text: 'Relate person with subset of principle',
  },
  {
    id: 'relatePersonMainSetPrinciple',
    onClick: '',
    text: 'Relate person with main set of principle',
  },
  //   'sep',
  {
    id: 'relatePersonPrincipleAspect',
    onClick: '',
    text: "Relate person with principle's aspect",
  },
  {
    id: 'relatePersonPersonAspect',
    onClick: '',
    text: 'Relate person with person aspect',
  },
  //   'sep',
  {
    id: 'personSendSignal',
    onClick: 'openSubList',
    text: 'Send Signal',
    items: [
      {
        onClick: '',
        text: 'Red',
        id: 'personSendSignalRed',
      },
      {
        onClick: '',
        text: 'Green',
        id: 'personSendSignalGreen',
      },
    ],
  },
  //   'sep',
  {
    id: 'personSendAndReceiveSignal',
    onClick: 'openSubList',
    text: 'Send and receive signals',
    items: [
      {
        onClick: '',
        text: 'Send green receive green',
      },
      {
        onClick: '',
        text: 'Send green receive red',
      },
      // 'sep',
      {
        onClick: '',
        text: 'Send red receive green',
      },
      {
        onClick: '',
        text: 'Send red receive red',
      },
    ],
  },
  //   'sep',
  {
    id: 'personCover',
    onClick: '',
    text: 'Cover Person',
  },
  {
    id: 'personHide',
    onClick: '',
    text: 'Hide Person',
  },
  //   'sep',
  {
    id: 'personUncover',
    onClick: '',
    text: 'Uncover Person',
  },
  //   'sep',
  {
    id: 'personEdit',
    onClick: 'openSubList',
    text: 'Edit',
    items: [
      {
        onClick: '',
        text: 'Delete',
        icon: 'flaticon-delete',
      },
      {
        onClick: '',
        text: 'Copy',
        icon: 'flaticon-copy',
      },
      {
        onClick: '',
        text: 'Paste',
        icon: 'flaticon-paste',
      },
      {
        onClick: '',
        text: 'Cut',
        icon: 'flaticon-scissors',
      },
      //   'sep',
      {
        onClick: '',
        text: 'Edit Text',
      },
      //   'sep',
      {
        onClick: '',
        text: 'Select All',
      },
    ],
  },
];
export const groupPeopleContext = [
  {
    id: 'replaceGroupPeoplePicture',
    onClick: '',
    text: 'Replace group of people with picture',
  },
  {
    id: 'replaceGroupPeopleSketch',
    onClick: '',
    text: 'Replace group of people with sketch',
  },
  {
    id: 'replaceGroupPeopleVideo',
    onClick: '',
    text: 'Replace group of people with video',
  },
  // 'sep',
  {
    id: 'addAudioGroupPeople',
    onClick: '',
    text: 'Add audio for group of people',
  },
  {
    id: 'addVideoGroupPeople',
    onClick: '',
    text: 'Add video for group of people',
  },
  {
    id: 'addTextGroupPeople',
    onClick: '',
    text: 'Add text for group of people',
  },
  // 'sep',
  {
    id: 'addCommunicationGroupPeople',
    onClick: '',
    text: 'Add communication holder for group of people',
  },
  // 'sep',
  {
    id: 'relateGroupPeoplePrinciple',
    onClick: '',
    text: 'Relate group of people with principle',
  },
  {
    id: 'relateGroupPeopleOperatingPrinciple',
    onClick: '',
    text: 'Relate group of people with operating principle',
  },
  {
    id: 'relateGroupPeopleSubsetPrinciple',
    onClick: '',
    text: 'Relate group of people with subset of principle',
  },
  {
    id: 'relateGroupPeopleMainSetPrinciple',
    onClick: '',
    text: 'Relate group of people with main set of principle',
  },
  // 'sep',
  {
    id: 'relateGroupPeoplePrincipleAspect',
    onClick: '',
    text: "Relate group of people with principle's aspect",
  },
  {
    id: 'relateGroupPersonAspect',
    onClick: '',
    text: 'Relate group of people with person aspect',
  },
  // 'sep',
  {
    id: 'groupPeopleSendAndReceiveSignals',
    onClick: 'groupPeopleSendAndReceiveSignals',
    text: 'Send and receive signals',
    items: [
      {
        onClick: '',
        text: 'Send green receive green',
      },
      {
        onClick: '',
        text: 'Send green receive red',
      },
      {
        onClick: '',
        text: 'Send red receive green',
      },
      {
        onClick: '',
        text: 'Send red receive red',
      },
    ],
  },
  {
    id: 'groupPeopleSendSignal',
    onClick: 'openSubList',
    text: 'Send Signal',
    items: [
      {
        onClick: '',
        text: 'Red',
        id: 'groupPeopleSendSignalRed',
      },
      {
        onClick: '',
        text: 'Green',

        id: 'groupPeopleSendSignalGreen',
      },
    ],
  },
  {
    id: 'groupPeopleEdit',
    onClick: 'openSubList',
    text: 'Edit',
    items: [
      {
        onClick: '',
        text: 'Delete',
        icon: 'flaticon-delete',
      },
      {
        onClick: '',
        text: 'Copy',
        icon: 'flaticon-copy',
      },
      {
        onClick: '',
        text: 'Paste',
        icon: 'flaticon-paste',
      },
      {
        onClick: '',
        text: 'Cut',
        icon: 'flaticon-scissors',
      },
      // 'sep',
      {
        onClick: '',
        text: 'Edit Text',
      },
      // 'sep',
      {
        onClick: '',
        text: 'Select All',
      },
    ],
  },
];
export const communicationHolder = [
  {
    id: 'replaceCommunicationHolderPicture',
    onClick: '',
    text: 'Replace Communication Holder with picture',
  },
  {
    id: 'replaceCommunicationHolderVideo',
    onClick: '',
    text: 'Replace Communication Holder with video',
  },
  {
    id: 'replaceCommunicationHolderAudio',
    onClick: '',
    text: 'Replace Communication Holder with audio',
  },
  {
    id: 'replaceCommunicationHolderSketch',
    onClick: '',
    text: 'Replace Communication Holder with sketch',
  },
  // 'sep',
  {
    id: 'addAudioCommunicationHolder',
    onClick: '',
    text: 'Add Audio for Communication Holder',
  },
  {
    id: 'addVideoCommunicationHolder',
    onClick: '',
    text: 'Add Video for Communication Holder',
  },
  // 'sep',
  {
    id: 'replaceCommunicationHolderText',
    onClick: '',
    text: 'Replace Communication Holder with text',
  },
  // 'sep',
  {
    id: 'replaceCommunicationHolderPrinciple',
    onClick: '',
    text: 'Relate Communication Holder with principle',
  },
  {
    id: 'relateCommunicationHolderOperatingPrinciple',
    onClick: '',
    text: 'Relate Communication Holder with operating principle',
  },
  {
    id: 'relateCommunicationHolderSubsetPrinciple',
    onClick: '',
    text: 'Relate Communication Holder with subset of principle',
  },
  {
    id: 'relateCommunicationHolderMainSetPrinciple',
    onClick: '',
    text: 'Relate Communication Holder with main set of principle',
  },
  // 'sep',
  {
    id: 'relateCommunicationHolderPrincipleAspect',
    onClick: '',
    text: "Relate Communication Holder with Principle's Aspect",
  },
  // 'sep',
  {
    id: 'relateCommunicationHolderEdit',
    onClick: 'openSubList',
    text: 'Edit',
    items: [
      {
        onClick: '',
        text: 'Delete',
        icon: 'flaticon-delete',
      },
      {
        onClick: '',
        text: 'Copy',
        icon: 'flaticon-copy',
      },
      {
        onClick: '',
        text: 'Paste',
        icon: 'flaticon-paste',
      },
      {
        onClick: '',
        text: 'Cut',
        icon: 'flaticon-scissors',
      },
      // 'sep',
      {
        onClick: '',
        text: 'Edit Text',
      },
      // 'sep',
      {
        onClick: '',
        text: 'Select All',
      },
    ],
  },
];
export const menuItems = [
  {
    id: 'personShapes',
    list: personShapesContext,
  },
  {
    id: 'groupPeople',
    list: groupPeopleContext,
  },
  {
    id: 'communicationHolder',
    list: communicationHolder,
  },
  {
    id: 'commMix',
    list: [
      {
        onClick: '',
        text: 'Add Input',
      },
      {
        onClick: '',
        text: 'Remove Input',
      },
      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'personAspect',
    list: [
      {
        onClick: '',
        text: 'Relate person aspect with person aspect',
      },
      {
        onClick: '',
        text: 'Relate person aspect with person',
      },
      {
        onClick: '',
        text: 'Relate person aspect with group of people',
      },

      {
        onClick: '',
        text: "Relate person aspect with priciple's aspect",
      },
      {
        onClick: '',
        text: 'Relate person aspect with principle',
      },

      {
        onClick: '',
        text: 'Relate person aspect with subset of principle',
      },
      {
        onClick: '',
        text: 'Relate person aspect with main set of principle',
      },
      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'cover',
    list: [
      {
        onClick: '',
        text: 'Show Cover',
      },
      {
        onClick: '',
        text: 'Hide Cover',
      },

      {
        onClick: '',
        text: 'Show Person',
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'communication',
    list: [
      {
        onClick: '',
        text: 'Replace communication with Audio',
      },
      {
        onClick: '',
        text: 'Replace communication with video',
      },
      {
        onClick: '',
        text: 'Replace communication with sketch',
      },

      {
        onClick: '',
        text: 'Relate communication with principle',
      },
      {
        onClick: '',
        text: "Relate communication with Principle's Aspect",
      },

      {
        onClick: 'openSubList',
        text: 'Set Communication Signal',
        items: [
          {
            onClick: '',
            text: 'Red',
          },
          {
            onClick: '',
            text: 'Green',
          },
        ],
      },
      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'word',
    list: [
      {
        onClick: '',
        text: 'Point word to entity',
      },
      {
        onClick: '',
        text: 'Replace word with audio',
      },
      {
        onClick: '',
        text: 'Replace word with sketch',
      },

      {
        onClick: '',
        text: 'Define word by entity',
      },

      {
        onClick: '',
        text: 'Identify entity from word',
      },

      {
        onClick: 'openSubList',
        text: 'Set Communication Signal',
        items: [
          {
            onClick: '',
            text: 'Red',
          },
          {
            onClick: '',
            text: 'Green',
          },
        ],
      },
      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'sentence',
    list: [
      {
        onClick: '',
        text: 'Identify word in sentence',
      },
      {
        onClick: '',
        text: 'Identify part of sentence',
      },

      {
        onClick: '',
        text: 'Point sentence to entity',
      },
      {
        onClick: '',
        text: 'Point sentence to information',
      },
      {
        onClick: '',
        text: 'Point sentence to group of entities',
      },

      {
        onClick: '',
        text: 'Relate sentence with principle',
      },
      {
        onClick: '',
        text: "Relate sentence with Principle's Aspect",
      },

      {
        onClick: 'openSubList',
        text: 'Set Communication Signal',
        items: [
          {
            onClick: '',
            text: 'Red',
          },
          {
            onClick: '',
            text: 'Green',
          },
        ],
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'paragraph',
    list: [
      {
        onClick: '',
        text: 'Identify sentence in paragraph',
      },
      {
        onClick: '',
        text: 'Identify part of paragraph',
      },

      {
        onClick: '',
        text: 'Point paragraph to entity',
      },
      {
        onClick: '',
        text: 'Point paragraph to information',
      },
      {
        onClick: '',
        text: 'Point paragraph to group of entities',
      },

      {
        onClick: '',
        text: 'Relate paragraph with principle',
      },
      {
        onClick: '',
        text: "relate paragraph with Principle's Aspect",
      },

      {
        onClick: 'openSubList',
        text: 'Set Communication Signal',
        items: [
          {
            onClick: '',
            text: 'Red',
          },
          {
            onClick: '',
            text: 'Green',
          },
        ],
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'communicationElement',
    list: [
      {
        id: 'communicationElementPicture',
        onClick: '',
        text: 'Replace Communication Element with picture',
      },
      {
        onClick: '',
        text: 'Replace Communication Element with audio',
      },
      {
        onClick: '',
        text: 'Replace Communication Element with video',
      },
      {
        onClick: '',
        text: 'Replace Communication Element with sketch',
      },

      {
        id: 'relateCommunicationElementPrinciple',
        onClick: '',
        text: 'Relate Communication Element with Principle',
      },
      {
        id: 'relateCommunicationElementPrincipleAspect',
        onClick: '',
        text: "Relate Communication Element with Principle's Aspect",
      },
      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'information',
    list: [
      {
        onClick: '',
        text: 'Replace Information with Image',
      },
      {
        onClick: '',
        text: 'Relace Information with Audio',
      },
      {
        onClick: '',
        text: 'Replace Information with Video',
      },
      {
        onClick: '',
        text: 'Replace Information with Sketch',
      },

      {
        onClick: '',
        text: 'Add Audio for Information',
      },
      {
        onClick: '',
        text: 'Add Video for Information',
      },

      {
        onClick: '',
        text: 'Point Information to Entity',
      },

      {
        onClick: '',
        text: 'Relate Information with Principle',
      },
      {
        onClick: '',
        text: "Relate Information with Principle's Aspect",
      },

      {
        onClick: 'openSubList',
        text: 'Set Communication Signal',
        items: [
          {
            onClick: '',
            text: 'Red',
          },
          {
            onClick: '',
            text: 'Green',
          },
        ],
      },
      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'entity',
    list: [
      {
        id: 'entityElementPicture',
        onClick: '',
        text: 'Replace entity with picture',
      },
      {
        onClick: '',
        text: 'Replace entity with Audio',
      },
      {
        onClick: '',
        text: 'Replace entity with Video',
      },
      {
        onClick: '',
        text: 'Replace entity with Sketch',
      },

      {
        onClick: '',
        text: 'Identify entity by word',
      },

      {
        onClick: '',
        text: 'Define word from entity',
      },

      {
        onClick: '',
        text: 'Relate entity with Principle',
      },
      {
        onClick: '',
        text: 'Relate entity with operating principle',
      },
      {
        onClick: '',
        text: 'Relate entity with subset of principle',
      },
      {
        onClick: '',
        text: 'Relate entity with main set of principle',
      },

      {
        onClick: '',
        text: "Relate enity with Principle's Aspect",
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'question',
    list: [
      {
        onClick: '',
        text: 'Point question to answer',
      },
      {
        onClick: '',
        text: 'Point question to entity',
      },

      {
        onClick: 'openSubList',
        text: 'Set Communication Signal',
        items: [
          {
            onClick: '',
            text: 'Red',
          },
          {
            onClick: '',
            text: 'Green',
          },
        ],
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'answer',
    list: [
      {
        onClick: '',
        text: 'Point answer to entity',
      },
      {
        onClick: '',
        text: 'Point answer to information',
      },

      {
        onClick: 'openSubList',
        text: 'Set Communication Signal',
        items: [
          {
            onClick: '',
            text: 'Red',
          },
          {
            onClick: '',
            text: 'Green',
          },
        ],
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'function',
    list: [
      {
        onClick: '',
        text: 'Add part of function',
      },
      {
        onClick: '',
        text: 'Add sub function',
      },

      {
        onClick: '',
        text: 'Replace function with video',
      },
      {
        onClick: '',
        text: 'Replace function with audio',
      },
      {
        onClick: '',
        text: 'Replace function with sketch',
      },

      {
        onClick: '',
        text: 'Relate function with Principle',
      },
      {
        onClick: '',
        text: "Relate function with Principle's Aspect",
      },
      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'aspect',
    list: [
      {
        onClick: '',
        text: 'Add aspect or part of aspect',
      },

      {
        onClick: '',
        text: 'Relate aspect with principle',
      },
      {
        onClick: '',
        text: 'Relate aspect with person',
      },
      {
        onClick: '',
        text: 'Relate aspect with entity',
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'test',
    list: [
      {
        onClick: '',
        text: 'Add test',
      },
      {
        onClick: '',
        text: 'Add part of Test',
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'functionstatus',
    list: [
      {
        id: 'functionstatusElementPicture',
        onClick: '',
        text: 'Replace entity with Picture',
      },
      {
        onClick: '',
        text: 'Replace entity with video',
      },
      {
        onClick: '',
        //chinh may dang ra don voi tao
        text: 'Replace entity with sketch',
      },

      {
        onClick: '',
        text: 'Add part to entity',
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'picture',
    list: [
      {
        id: 'loadPicktureFromFile',
        onClick: '',
        text: 'Insert or load picture form file',
      },

      {
        onClick: '',
        text: 'Point picture to entity',
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'video',
    list: [
      {
        onClick: '',
        text: 'Insert or load video from file',
      },

      {
        onClick: '',
        text: 'Play Video',
      },

      {
        onClick: '',
        text: 'Point video to entity',
      },

      {
        onClick: 'openSubList',
        text: 'Set Communication Signal',
        items: [
          {
            onClick: '',
            text: 'Red',
          },
          {
            onClick: '',
            text: 'Green',
          },
        ],
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'audio',
    list: [
      {
        onClick: '',
        text: 'Insert or load Audio from file',
      },

      {
        onClick: '',
        text: 'Play Audio',
      },

      {
        onClick: '',
        text: 'Point Audio to entity',
      },
      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'dictionary',
    list: [
      {
        onClick: '',
        text: 'Point dictionary to collection',
      },

      {
        onClick: '',
        text: 'Add word to dictionary',
      },
      {
        onClick: '',
        text: 'Populate dictionary',
      },
      {
        onClick: '',
        text: 'Auto arrange',
      },

      {
        onClick: '',
        text: 'Remove word from dictionary',
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'wordCircle',
    list: [
      {
        onClick: '',
        text: 'Point word to entity',
      },

      {
        onClick: '',
        text: 'Define word by entity',
      },

      {
        onClick: '',
        text: 'Identify entity from word',
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'collection',
    list: [
      {
        onClick: '',
        text: 'Add entity to Collection',
      },
      {
        onClick: '',
        text: 'Identify entity in collection',
      },
      {
        onClick: '',
        text: 'Add item to collection',
      },
      {
        onClick: '',
        text: 'Populate Collection',
      },
      {
        onClick: '',
        text: 'Auto arrange',
      },

      {
        onClick: '',
        text: 'Remove item/entity from collection',
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'entitycircle',
    list: [
      {
        onClick: '',
        text: 'Point Entity to Word',
      },

      {
        onClick: '',
        text: 'Define Entity to Word',
      },

      {
        onClick: '',
        text: 'Identify Word from Entity',
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'application',
    list: [
      {
        onClick: '',
        text: 'Add Part to Application',
      },
      {
        onClick: '',
        text: 'Add Sub to Application',
      },
      {
        onClick: '',
        text: 'Add Audio for Application',
      },
      {
        onClick: '',
        text: 'Add Video for Application',
      },

      {
        onClick: '',
        text: 'Replace Application with Image',
      },
      {
        onClick: '',
        text: 'Replace Application with Audio',
      },
      {
        onClick: '',
        text: 'Replace Application with Video',
      },
      {
        onClick: '',
        text: 'Replace Application with Sketch',
      },

      {
        onClick: '',
        text: 'Relate Application with Principle',
      },
      {
        onClick: '',
        text: 'Relate Application with operating principle',
      },
      {
        onClick: '',
        text: 'Relate Application with subset of principle',
      },
      {
        onClick: '',
        text: 'Relate Application with main set of principle',
      },
      {
        onClick: '',
        text: "Relate Application with Principle's aspect",
      },
      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'commFunction',
    list: [
      {
        onClick: '',
        text: 'Add part of function',
      },
      {
        onClick: '',
        text: 'Add sub function',
      },
      {
        onClick: '',
        text: 'Add Audio for function',
      },
      {
        onClick: '',
        text: 'Add Video for function',
      },

      {
        onClick: '',
        text: 'Replace function with video',
      },
      {
        onClick: '',
        text: 'Replace fuction with audio',
      },
      {
        onClick: '',
        text: 'Replace function with sketch',
      },

      {
        onClick: '',
        text: 'Relate function with Principle',
      },
      {
        onClick: '',
        text: 'Relate function with operating principle',
      },
      {
        onClick: '',
        text: 'Relate function with subset of principle',
      },
      {
        onClick: '',
        text: 'Relate function with main set of principle',
      },

      {
        onClick: '',
        text: "Relate function with Principle's aspect",
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'commResult',
    list: [
      {
        onClick: '',
        text: 'Add part to result',
      },
      {
        onClick: '',
        text: 'Add sub application result',
      },

      {
        onClick: '',
        text: 'Replace result with video',
      },
      {
        onClick: '',
        text: 'Replace result with audio',
      },

      {
        onClick: '',
        text: 'Relate result with operating principle',
      },
      {
        onClick: '',
        text: 'Relate result with subset of principle',
      },
      {
        onClick: '',
        text: 'Relate result with main set of principle',
      },

      {
        onClick: '',
        text: "Relate result with Principle's Aspect",
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'functionx',
    list: [
      {
        onClick: '',
        text: 'Add part of function',
      },
      {
        onClick: '',
        text: 'Add sub function',
      },
      {
        onClick: '',
        text: 'Add Audio for function',
      },
      {
        onClick: '',
        text: 'Add Video for function',
      },

      {
        onClick: '',
        text: 'Replace function with video',
      },
      {
        onClick: '',
        text: 'Replace fuction with audio',
      },
      {
        onClick: '',
        text: 'Replace function with sketch',
      },

      {
        onClick: '',
        text: 'Relate function with Principle',
      },
      {
        onClick: '',
        text: "Relate function with Principle's aspect",
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'action',
    list: [
      {
        onClick: '',
        text: 'Replace Action with Video',
      },
      {
        onClick: '',
        text: 'Replace Action with Audio',
      },
      {
        onClick: '',
        text: 'Replace Action with Sketch',
      },

      {
        onClick: '',
        text: 'Add Part to Action',
      },

      {
        onClick: '',
        text: 'Relate Action with Principle',
      },
      {
        onClick: '',
        text: 'Relate Action with operating principle',
      },
      {
        onClick: 'Relate Action with subset of principle',
      },
      {
        onClick: '',
        text: 'Telate Action with main set of principle',
      },

      {
        onClick: '',
        text: "Relate Action with Principle's Aspect",
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'reason',
    list: [
      {
        onClick: '',
        text: 'Add Part to Reason',
      },

      {
        onClick: '',
        text: 'Replace Reason with video',
      },
      {
        onClick: '',
        text: 'Replace Reason with Sketch',
      },

      {
        onClick: '',
        text: 'Relate Reason with Principle',
      },
      {
        onClick: '',
        text: 'Relate Reason with operating principle',
      },
      {
        onClick: '',
        text: 'Relate Reason with subset of principle',
      },
      {
        onClick: '',
        text: 'Relate Reason with main set of principle',
      },

      {
        onClick: '',
        text: "Relate Reason with Principle's Aspect",
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'work',
    list: [
      {
        onClick: '',
        text: 'Replace Work with Audio',
      },
      {
        onClick: '',
        text: 'Replace Work with Video',
      },
      {
        onClick: '',
        text: 'Replace Work with Sketch',
      },

      {
        onClick: '',
        text: 'Add Part to Work',
      },
      {
        onClick: '',
        text: 'Relate Work with Principle',
      },
      {
        onClick: '',
        text: 'Relate Work with operating principle',
      },
      {
        onClick: '',
        text: 'relate Work with subset of principle',
      },
      {
        onClick: '',
        text: 'Relate Wotk with main set of principle',
      },

      {
        onClick: '',
        text: "Relate Work with Principle's Aspect",
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'emptyContainer',
    list: [
      {
        onClick: '',
        text: 'Add Part to Entity',
      },
    ],
  },
  {
    id: 'workinput',
    list: [
      {
        onClick: '',
        text: 'Add input',
      },

      {
        onClick: '',
        text: 'Remove input',
      },

      {
        onClick: '',
        text: 'Replace Work with Audio',
      },
      {
        onClick: '',
        text: 'Replace Work with Video',
      },
      {
        onClick: '',
        text: 'Replace Work with Sketch',
      },

      {
        onClick: '',
        text: 'Relate Work with Principle',
      },
      {
        onClick: '',
        text: 'Relate Work with opeating principle',
      },
      {
        onClick: '',
        text: 'Relate Work with subset of principle',
      },
      {
        onClick: '',
        text: 'Relate Work with main set of principle',
      },

      {
        onClick: '',
        text: "Relate Work with Principle' Aspect",
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'subFunction',
    list: [
      {
        onClick: '',
        text: 'Open Sub Function',
      },

      {
        onClick: '',
        text: 'Link Sub Function',
      },

      {
        onClick: '',
        text: 'Replace Sub Function with Image',
      },
      {
        onClick: '',
        text: 'Replace Sub Function with Audio',
      },
      {
        onClick: '',
        text: 'Replace Sub Function with Video',
      },
      {
        onClick: '',
        text: 'Replace Sub Function with Sketch',
      },

      {
        onClick: '',
        text: 'Relate Sub Function with Principle',
      },
      {
        onClick: '',
        text: 'Relate Sub Function with operating principle',
      },
      {
        onClick: '',
        text: 'Relate Sub Function with subset of principle',
      },
      {
        onClick: '',
        text: 'Relate Sub Function with main set of prinicple',
      },

      {
        onClick: '',
        text: "Relate Sub Function with Principle's Aspect",
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'subApplication',
    list: [
      {
        onClick: '',
        text: 'Open Sub Application',
      },

      {
        onClick: '',
        text: 'Link Sub Application',
      },

      {
        onClick: '',
        text: 'Replace Sub Application with Image',
      },
      {
        onClick: '',
        text: 'Replace Sub Application with Audio',
      },
      {
        onClick: '',
        text: 'Replace Sub Application with Video',
      },
      {
        onClick: '',
        text: 'Replace Sub Application with Sketch',
      },

      {
        onClick: '',
        text: 'Relate Sub Application with Principle',
      },
      {
        onClick: '',
        text: 'Relate Sub Application with operating principle',
      },
      {
        onClick: '',
        text: 'Relate Sub Application with subset of principle',
      },
      {
        onClick: '',
        text: 'Relate Sub Application with main set of principle',
      },

      {
        onClick: '',
        text: "Relate Sub Application with Principle's Aspect",
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'subResult',
    list: [
      {
        onClick: '',
        text: 'Open Sub Result',
      },

      {
        onClick: '',
        text: 'Link Sub Result',
      },

      {
        onClick: '',
        text: 'Replace Sub Result with Image',
      },
      {
        onClick: '',
        text: 'Replace Sub Result with Audio',
      },
      {
        onClick: '',
        text: 'Replace Sub Result with Video',
      },
      {
        onClick: '',
        text: 'Replace Sub Result with Sketch',
      },

      {
        onClick: '',
        text: 'Relate Sub Result with Principle',
      },
      {
        onClick: '',
        text: 'Relate Sub Result with operating Principle',
      },
      {
        onClick: '',
        text: 'Relate Sub Result with subset of Principle',
      },
      {
        onClick: '',
        text: 'Relate Sub Result with main set of Principle',
      },

      {
        onClick: '',
        text: "Relate Sub Result with Principle's Aspect",
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'groupFunction',
    list: [
      {
        onClick: '',
        text: 'Replace Group Function with Image',
      },
      {
        onClick: '',
        text: 'Replace Group Function with Audio',
      },
      {
        onClick: '',
        text: 'Replace Group Function with Video',
      },
      {
        onClick: '',
        text: 'Replace Group Function with Sketch',
      },

      {
        onClick: '',
        text: 'Relate Group Function with Principle',
      },
      {
        onClick: '',
        text: 'Relate Group Function with operating principle',
      },
      {
        onClick: '',
        text: 'Relate Group Funciton with subset of principle',
      },
      {
        onClick: '',
        text: 'Relate Group Function with main set of principle',
      },

      {
        onClick: '',
        text: "Relate Group Function with Principle's Aspect",
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'groupApplication',
    list: [
      {
        onClick: '',
        text: 'Replace Group Application with Image',
      },
      {
        onClick: '',
        text: 'Replace Group Application with Audio',
      },
      {
        onClick: '',
        text: 'Replace Group Application with Video',
      },
      {
        onClick: '',
        text: 'Replace Group Application witch Sketch',
      },

      {
        onClick: '',
        text: 'Relate Group Application with Principle',
      },
      {
        onClick: '',
        text: 'Relate Group Application with operating principle',
      },
      {
        onClick: '',
        text: 'Relate Group Application with subset of principle',
      },
      {
        onClick: '',
        text: 'Relate Group Application with main set of principle',
      },

      {
        onClick: '',
        text: "Relate Group Application with Principle's Aspect",
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'groupResult',
    list: [
      {
        onClick: '',
        text: 'Replace Group Result with Image',
      },
      {
        onClick: '',
        text: 'Replace Group Result with Audio',
      },
      {
        onClick: '',
        text: 'Replace Group Result with Video',
      },
      {
        onClick: '',
        text: 'Replace Group Result with Sketch',
      },

      {
        onClick: '',
        text: 'Relate Group Result with Principle',
      },
      {
        onClick: '',
        text: 'Relate Group Result with operating principle',
      },
      {
        onClick: '',
        text: 'Relate Group Result with subset of principle',
      },
      {
        onClick: '',
        text: 'Relate Group Result with main set of principle',
      },

      {
        onClick: '',
        text: "Relate Group Result with Principle's Aspect",
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'principle',
    list: [
      {
        onClick: '',
        text: 'Identify Part of Principle',
      },

      {
        onClick: '',
        text: 'Relate Principle with Person',
      },
      {
        onClick: '',
        text: 'Relate Principle with Principle',
      },
      {
        onClick: '',
        text: "Relate Principle with Principle's Aspect",
      },
      {
        onClick: '',
        text: 'Relate Principle with Person Aspect',
      },

      {
        onClick: '',
        text: 'Relate Principle with Subset of Principle',
      },
      {
        onClick: '',
        text: 'Relate Principle with Main Set of Principle',
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'reference',
    list: [
      {
        onClick: '',
        text: 'View linked document',
      },

      {
        onClick: '',
        text: 'Add linked document',
      },
      {
        onClick: '',
        text: 'Add Part of Reference',
      },

      {
        onClick: '',
        text: 'Identify Principle in Reference',
      },

      {
        onClick: '',
        text: 'Relate Reference with priciple',
      },
      {
        onClick: '',
        text: "Relate Reference with principle's Aspect",
      },
      {
        onClick: '',
        text: 'Relate Reference with Person',
      },
      {
        onClick: '',
        text: "Relate Reference with Person's Aspect",
      },

      {
        onClick: '',
        text: 'Relate Reference with Subset of Principle',
      },
      {
        onClick: '',
        text: 'Relate Reference with Main Set of Principle',
      },

      // {
      //   onClick: "openSubList",
      //   text: "Edit",
      //   items: [
      //     {
      //       onClick: "",
      //       text: "Delete",
      //       icon: "flaticon-delete",
      //     },
      //     {
      //       onClick: "",
      //       text: "Copy",
      //       icon: "flaticon-copy",
      //     },
      //     {
      //       onClick: "",
      //       text: "Paste",
      //       icon: "flaticon-paste",
      //     },
      //     {
      //       onClick: "",
      //       text: "Cut",
      //       icon: "flaticon-scissors",
      //     },
      //
      //     {
      //       onClick: "",
      //       text: "Edit Text",
      //     },
      //
      //     {
      //       onClick: "",
      //       text: "Select All",
      //     },
      //   ],
      // },
    ],
  },
  {
    id: 'sentenceAnalysis',
    list: [
      {
        onClick: '',
        text: 'Identify Part of Analysis',
      },

      {
        onClick: '',
        text: 'Relate Sentence Analysis with Principle',
      },
      {
        onClick: '',
        text: "Relate Analysis with Principle's Aspect",
      },

      {
        onClick: '',
        text: 'Relate Analysis with Subset of Principle',
      },
      {
        onClick: '',
        text: 'Relate Analysis with Main set of Principle',
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'feedback',
    list: [
      {
        onClick: '',
        text: 'Identify Part of Feedback',
      },
      {
        onClick: '',
        text: 'Relate Feedback with Principle',
      },
      {
        onClick: '',
        text: "Relate Feedback with Principle's Aspect",
      },
      {
        onClick: '',
        text: 'Relate Feedback with Person',
      },
      {
        onClick: '',
        text: 'Relate Feedback with Person Aspect',
      },

      {
        onClick: '',
        text: 'Relate Feedback with Subset of Priciple',
      },
      {
        onClick: '',
        text: 'Relate Feedback with Mainset of Principle',
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'operatingPrinciple',
    list: [
      {
        onClick: '',
        text: 'Identify part of principle',
      },

      {
        onClick: '',
        text: 'Relate principle with person',
      },
      {
        onClick: '',
        text: 'Relate main set with principle',
      },
      {
        onClick: '',
        text: 'Relate main set with subset',
      },
      {
        onClick: '',
        text: 'Realte main set with aspect',
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'error',
    list: [
      {
        onClick: '',
        text: 'Idenitify part of Error',
      },

      {
        onClick: '',
        text: 'Error gives rise to Problem',
      },

      {
        onClick: '',
        text: 'Show Problem produce',
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'compensator',
    list: [
      {
        onClick: '',
        text: 'Identify part of compensator',
      },

      {
        onClick: '',
        text: 'Relate Compensator with Principle',
      },
      {
        onClick: '',
        text: "Relate Compensator with Principle's Aspect",
      },

      {
        onClick: '',
        text: 'Relate Compensator with Subset of Principle',
      },
      {
        onClick: '',
        text: 'Relate Compensator with Main set of Principle',
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'problem',
    list: [
      {
        onClick: '',
        text: 'Identify part of problem',
      },

      {
        onClick: '',
        text: 'Show Error produced from',
      },
      {
        onClick: '',
        text: 'Show Error derrived from',
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'problemStatement',
    list: [
      {
        onClick: '',
        text: 'Identify part of problem',
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'mainSetofPrinciple',
    list: [
      {
        onClick: '',
        text: 'Identify set in principle',
      },
      {
        onClick: '',
        text: 'Identify part of principle',
      },

      {
        onClick: '',
        text: 'Relate main set with principle',
      },
      {
        onClick: '',
        text: 'Relate main set with subset',
      },
      {
        onClick: '',
        text: "Relate main set with Principle's Aspect",
      },

      {
        onClick: '',
        text: 'Relate main set with person',
      },
      {
        onClick: '',
        text: 'Relate main set with person aspect',
      },
      {
        onClick: '',
        text: 'Relate main set set with group of people',
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'subSetofPrinciple',
    list: [
      {
        onClick: '',
        text: 'Identify set in principle',
      },
      {
        onClick: '',
        text: 'Identify part of principle',
      },

      {
        onClick: '',
        text: 'Relate subset with subset',
      },
      {
        onClick: '',
        text: 'Relate subset with main set',
      },
      {
        onClick: '',
        text: 'Relate subset with principle',
      },
      {
        onClick: '',
        text: "Relate subset with Principle's Aspect",
      },

      {
        onClick: '',
        text: 'Relate subset with person',
      },
      {
        onClick: '',
        text: 'Relate subset with person aspect',
      },
      {
        onClick: '',
        text: 'Relate subset with group of people',
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'analysisWindow',
    list: [
      {
        onClick: '',
        text: 'Identify Part of Analysis',
      },

      {
        onClick: '',
        text: 'Relate Analysis with Principle',
      },
      {
        onClick: '',
        text: "Relate Analysis with Principle's Aspect",
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'ecf',
    list: [
      {
        onClick: '',
        text: 'Identify part of entity',
      },

      {
        onClick: '',
        text: 'Relate ECF with Principle',
      },
      {
        onClick: '',
        text: "Relate ECF with Principle's Aspect",
      },

      {
        onClick: '',
        text: 'Relate ECF with Subset of Principle',
      },
      {
        onClick: '',
        text: 'Relate ECF with Mainset of Principle',
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'problemDevelopment',
    list: [
      {
        onClick: '',
        text: 'Add Error',
      },
      {
        onClick: '',
        text: 'Add problem',
      },

      {
        onClick: '',
        text: 'Show error',
      },
      {
        onClick: '',
        text: 'Show problem',
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'principleAspect',
    list: [
      {
        onClick: '',
        text: 'Relate Principle Aspect with Priciple Aspect',
      },
      {
        onClick: '',
        text: 'Realte Pricniple Aspect with Pricniple',
      },

      {
        onClick: '',
        text: 'Relate Principle Aspect with Person Aspect',
      },
      {
        onClick: '',
        text: 'Relate Principle Aspect with Person',
      },
      {
        onClick: '',
        text: 'Relate Principle Aspect with Group of people',
      },

      {
        onClick: '',
        text: 'Relate Principle Aspect with Subset of Principle',
      },
      {
        onClick: '',
        text: 'Relate Principle Aspect with Mainset of Princple',
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'solution',
    list: [
      {
        onClick: '',
        text: 'Show problem solved',
      },

      {
        onClick: '',
        text: 'Identify part of solution',
      },

      {
        onClick: '',
        text: 'Relate solution with principle',
      },
      {
        onClick: '',
        text: 'Relate solution with operating principle',
      },
      {
        onClick: '',
        text: "Relate solution with Principle's Aspect",
      },

      {
        onClick: '',
        text: 'Related solution iwth Subset of Principle',
      },
      {
        onClick: '',
        text: 'Relate solution with Mainset of Principle',
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'location',
    list: [
      {
        onClick: '',
        text: 'Replace location with map',
      },
      {
        onClick: '',
        text: 'Replace area with image',
      },

      {
        onClick: '',
        text: 'Identify part in location',
      },

      {
        onClick: '',
        text: 'Show location as house',
      },
      {
        onClick: '',
        text: 'Replace location with house',
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'system',
    list: [
      {
        onClick: '',
        text: 'Associate system with theory',
      },
      {
        onClick: '',
        text: 'Associate system with utilization theory',
      },

      {
        onClick: '',
        text: 'Replace system with image',
      },
      {
        onClick: '',
        text: 'Replace system with sketch',
      },

      {
        onClick: '',
        text: 'Guide system with theory',
      },
      {
        onClick: '',
        text: 'Guide system with utilization theory',
      },

      {
        onClick: '',
        text: 'Relate system with theory',
      },
      {
        onClick: '',
        text: 'Relate system with utilization thoery',
      },
      {
        onClick: '',
        text: 'Relate system with theorem',
      },
      {
        onClick: '',
        text: 'Relate system with system',
      },

      {
        onClick: '',
        text: 'Relate system with system characteristics',
      },
      {
        onClick: '',
        text: 'Relate system with theory characteristics',
      },

      {
        onClick: 'openSubList',
        text: 'Send and receive signals',
        items: [
          {
            onClick: '',
            text: 'Send Green receive green',
          },
          {
            onClick: '',
            text: 'Send green receive red',
          },

          {
            onClick: '',
            text: 'Send red receive green',
          },
          {
            onClick: '',
            text: 'Send red receive red',
          },
        ],
      },

      {
        onClick: 'openSubList',
        text: 'Send Signal',
        items: [
          {
            onClick: '',
            text: 'Red',
            id: 'openSubListRed',
          },
          {
            onClick: '',
            text: 'Green',
            id: 'openSubListGreen',
          },
        ],
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'groupSystem',
    list: [
      {
        onClick: '',
        text: 'Associate group of systems with theory',
      },
      {
        onClick: '',
        text: 'Associate group of systems with utilization theory',
      },

      {
        onClick: '',
        text: 'Replace group of systems with image',
      },
      {
        onClick: '',
        text: 'Replace group of system with sketch',
      },

      {
        onClick: '',
        text: ' Guide group of systems with theory',
      },
      {
        onClick: '',
        text: 'Guide group of systems with utilization theory',
      },

      {
        onClick: '',
        text: 'Relate group of systems with theory',
      },
      {
        onClick: '',
        text: 'Relate group of systems with utilization theory',
      },
      {
        onClick: '',
        text: 'Relate group of systems with theorem',
      },
      {
        onClick: '',
        text: 'Relate group of systems with system',
      },

      {
        onClick: '',
        text: 'Relate group of systems with system characteristic',
      },
      {
        onClick: '',
        text: 'Relate group of systems with theory characteristic',
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'constantCharaceristic',
    list: [
      {
        onClick: '',
        text: 'Relate Constant Characteristic with Constant Characteristic',
      },
      {
        onClick: '',
        text: 'Relate Constant Characteristic with System',
      },
      {
        onClick: '',
        text: 'Relate Constant Characteristic with Theory Characteristic',
      },

      {
        onClick: '',
        text: 'Relate Constant Characteristic with Theory',
      },
      {
        onClick: '',
        text: 'Relate Constant Characteritic with utilization theory',
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'linkedNode',
    list: [
      {
        onClick: '',
        text: 'Link Model',
      },
      {
        onClick: '',
        text: 'Open Model',
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'theory',
    list: [
      {
        onClick: '',
        text: 'Identify theorem in theory',
      },

      {
        onClick: '',
        text: 'Expand selected theory',
      },
      {
        onClick: '',
        text: 'Remove theorem in theory',
      },

      {
        onClick: '',
        text: 'Interpret slected theory',
      },
      {
        onClick: '',
        text: 'View theory horizontally',
      },
      {
        onClick: '',
        text: 'Group theorems in theory',
      },

      {
        onClick: '',
        text: 'Relate theory with theory',
      },
      {
        onClick: '',
        text: 'Relate theory with fundamental',
      },
      {
        onClick: '',
        text: 'Relate theory with system',
      },
      {
        onClick: '',
        text: 'Related therory with Utilization Theory',
      },

      {
        onClick: '',
        text: 'Relate theory with theory characteristic',
      },
      {
        onClick: '',
        text: 'Relate theory with system characteristic',
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'theorem',
    list: [
      {
        onClick: '',
        text: 'Interpret selected theorem',
      },

      {
        onClick: '',
        text: 'Apply selected theorem',
      },

      {
        onClick: '',
        text: 'Relate theorem with system',
      },
      {
        onClick: '',
        text: 'Relate theorem with theory',
      },
      {
        onClick: '',
        text: 'Relate theorem with Utilization Theory',
      },
      {
        onClick: '',
        text: 'Relate theorem with Fundamental of Theory',
      },

      {
        onClick: '',
        text: 'Relate theorem with Theory Characteristic',
      },
      {
        onClick: '',
        text: 'Relate theorem with System Characteristic',
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'reference',
    list: [
      {
        onClick: '',
        text: 'Identify theory in reference',
      },

      {
        onClick: '',
        text: 'View theory in reference',
      },

      {
        onClick: '',
        text: 'Add theory to reference',
      },
      {
        onClick: '',
        text: 'Add theorem to reference',
      },

      {
        onClick: '',
        text: 'Show theory in reference as set',
      },
      {
        onClick: '',
        text: 'Show theory in reference with number',
      },

      {
        onClick: '',
        text: 'Apply theory in reference',
      },
      {
        onClick: '',
        text: 'Hide theory in reference',
      },
      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'theoryCharacteristic',
    list: [
      {
        onClick: '',
        text: 'Relate thoery characteristic with theory characteristic',
      },

      {
        onClick: '',
        text: 'Relate theory characteristic with theory',
      },

      {
        onClick: '',
        text: 'Relate theory characteristic with system characteristic',
      },
      {
        onClick: '',
        text: 'Relate theory characteristic with system',
      },

      {
        onClick: '',
        text: 'Relate theory characteristic with fundamental theory',
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'addedFunction',
    list: [
      {
        onClick: '',
        text: 'Replace function with video',
      },
      {
        onClick: '',
        text: 'Replace function with picture',
      },
      {
        onClick: '',
        text: 'Replace function with sketch',
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'functionSystem',
    list: [
      {
        onClick: '',
        text: 'Add added function',
      },
      {
        onClick: '',
        text: 'Add existing function',
      },

      {
        onClick: '',
        text: 'Identify existing function',
      },
      {
        onClick: '',
        text: 'Identify added function',
      },

      {
        onClick: '',
        text: 'Show added function area or region',
      },
      {
        onClick: '',
        text: 'Show existing function area or region',
      },

      {
        onClick: '',
        text: 'Hide added function area or region',
      },
      {
        onClick: '',
        text: 'Hide existing function area or region',
      },

      {
        onClick: '',
        text: 'Remove added function',
      },
      {
        onClick: '',
        text: 'Remove existing function',
      },

      {
        onClick: '',
        text: 'Replace with Map',
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'life',
    list: [
      {
        onClick: '',
        text: 'Identify existing function',
      },
      {
        onClick: '',
        text: 'Identify added function',
      },

      {
        onClick: '',
        text: 'Show added function area or region',
      },
      {
        onClick: '',
        text: 'Show existing function area or region',
      },

      {
        onClick: '',
        text: 'Hide added function area or region',
      },
      {
        onClick: '',
        text: 'Hide existing function area or region',
      },

      {
        onClick: '',
        text: 'Remove added function',
      },
      {
        onClick: '',
        text: 'Remove existing function',
      },

      {
        onClick: '',
        text: 'Replace with Map',
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'l(t)',
    list: [
      {
        onClick: '',
        text: 'Identify existing function',
      },
      {
        onClick: '',
        text: 'Identify added function',
      },

      {
        onClick: '',
        text: 'Replace function with video',
      },
      {
        onClick: '',
        text: 'Replace function with picture',
      },
      {
        onClick: '',
        text: 'Replace function with sketch',
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'instrument',
    list: [
      {
        onClick: '',
        text: 'Replace instrument with picture',
      },
      {
        onClick: '',
        text: 'Replace instrument with video',
      },
      {
        onClick: '',
        text: 'Replace instrument with sketch',
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'method',
    list: [
      {
        onClick: '',
        text: 'Add audio for method',
      },
      {
        onClick: '',
        text: 'Add Video for method',
      },

      {
        onClick: '',
        text: 'Replace method with picture',
      },
      {
        onClick: '',
        text: 'Replace method with video',
      },
      {
        onClick: '',
        text: 'Replace method with audio',
      },
      {
        onClick: '',
        text: 'Replace method with sketch',
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'inputElement',
    list: [
      {
        onClick: '',
        text: 'Replace input element with photo',
      },
      {
        onClick: '',
        text: 'Replace input element with video',
      },
      {
        onClick: '',
        text: 'Replace input element with sketch',
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'derrivative',
    list: [
      {
        onClick: '',
        text: 'Replace with photo',
      },
      {
        onClick: '',
        text: 'Replace with video',
      },
      {
        onClick: '',
        text: 'Replace with sketch',
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'naturalElement',
    list: [
      {
        onClick: '',
        text: 'Add Element',
      },

      {
        onClick: '',
        text: 'Remove Element',
      },

      {
        onClick: '',
        text: 'Replace natural element with photo',
      },
      {
        onClick: '',
        text: 'Replace natural element with video',
      },
      {
        onClick: '',
        text: 'Replace natural element with sketch',
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'exchangableElement',
    list: [
      {
        onClick: '',
        text: 'Replace element with photo',
      },
      {
        onClick: '',
        text: 'Replace element with video',
      },
      {
        onClick: '',
        text: 'Replace element with sketch',
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'methodFunction',
    list: [
      {
        onClick: '',
        text: 'Replace function with photo',
      },
      {
        onClick: '',
        text: 'Replace function with video',
      },
      {
        onClick: '',
        text: 'Replace function with sketch',
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'emptyContainer',
    list: [
      {
        onClick: '',
        text: 'View element horizontally',
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'fundamentalTheory',
    list: [
      {
        onClick: '',
        text: 'Associate fundamental with system',
      },
      {
        onClick: '',
        text: 'Associate fundmental with theory',
      },

      {
        onClick: '',
        text: 'Relate fundamental with system',
      },
      {
        onClick: '',
        text: 'Relate fundamental with theory',
      },
      {
        onClick: '',
        text: 'Relate fundamental with fundamental',
      },

      {
        onClick: '',
        text: 'Relate fundamental with system characteristic',
      },
      {
        onClick: '',
        text: 'Relate fundamental with theory characterisitic',
      },

      {
        onClick: 'openSubList',
        text: 'Edit',
        items: [
          {
            onClick: '',
            text: 'Delete',
            icon: 'flaticon-delete',
          },
          {
            onClick: '',
            text: 'Copy',
            icon: 'flaticon-copy',
          },
          {
            onClick: '',
            text: 'Paste',
            icon: 'flaticon-paste',
          },
          {
            onClick: '',
            text: 'Cut',
            icon: 'flaticon-scissors',
          },

          {
            onClick: '',
            text: 'Edit Text',
          },

          {
            onClick: '',
            text: 'Select All',
          },
        ],
      },
    ],
  },
  {
    id: 'edit',
    list: [
      {
        onClick: '',
        text: 'Cut',
        icon: 'flaticon-scissors',
      },
      {
        onClick: '',
        text: 'Copy',
        icon: 'flaticon-copy',
      },
      {
        onClick: '',
        text: 'Paste',
        icon: 'flaticon-paste',
      },

      {
        onClick: '',
        text: 'Edit Text',
      },
    ],
  },
];
