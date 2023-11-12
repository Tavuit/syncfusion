import {NodeConstraints, NodeModel} from "@syncfusion/ej2-angular-diagrams";
import { getShapeByType } from 'src/app/utils/constants';
import { rectPorts } from 'src/app/features/modules/sync-content-left/components/constants/communication/common';

export function getAnalysisShapes() {
  let analysisShapes = [
    {
      ...getShapeByType('', 'principle', { title: 'Principle', tooltip: 'Principle' }, 'Principle'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represent Actual Principle',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'parentPrinciple', { title: 'Parent Principle', tooltip: 'Parent Principle' }, 'Principle'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represent Parent Principle',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'referencerect', { title: 'Reference', tooltip: 'Reference' }, 'Reference'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represent an Actual Reference',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'sentenceAnalysis', { title: 'Sentence Analysis', tooltip: 'Sentence Analysis' }, 'Sentence Analysis'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represent Sentence Analysis',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'analysis', { title: 'Analysis', tooltip: 'Analysis' }, 'Analysis'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represent Actual Analysis',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'feedback', { title: 'Feedback', tooltip: 'Feedback' }, 'Feedback'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represent a Feedback',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'operatingPrinciple', { title: 'Operating Principle', tooltip: 'Operating Principle' }, 'Principle'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represent an Actual Principle',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'error', { title: 'Error', tooltip: 'Error' }, 'Error'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represent an Actual Error',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'compensator', { title: 'Compensator', tooltip: 'Compensator' }, 'Compensator'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represent an Actual Compensator',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'problem', { title: 'Problem', tooltip: 'Problem' }, 'Problem'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represent an Actual Problem',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'problemStatement', { title: 'Problem Statement', tooltip: 'Problem Statement' }, 'Problem Statement'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Problem Statement as Entity',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'principle1', { title: 'Principle', tooltip: 'Principle' }, 'Main Set of Principles'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represent a Main Set   of Principles',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'principle2', { title: 'Principle', tooltip: 'Principle' }, 'Sub Set of Principles'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represent a Subset of Principles',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'analysisWindow', { title: 'Analysis Window', tooltip: 'Analysis Window' }, 'Analysis Window'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represents an Actual Analysis',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('ECF', 'edfDiamond', { title: 'Error Correction Function', tooltip: 'Error Correction Function' }, 'Error Correction Function'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Error Correction Function',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'ecfRect', { title: 'Error Correction Function', tooltip: 'Error Correction Function' }, 'Error Correction Function'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Enable Error Correction',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Circle', 'problemDevelopment', { title: 'Problem Development', tooltip: 'Problem Development' }, {
        content: [
          {
            content: "Problem Name Development",
            offset: {
              x: 0.5,
              y: 1,
            },
            margin: {
              top: 30,
            },
          },
        ],
        radius: 150,
        fill: "White",
      }),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Problem Development From Error',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'principleAspect', { title: 'Principle Aspect', tooltip: 'Principle Aspect' }, 'Principle Aspect'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Problem Development From Error  ',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('redcross', 'redcrossanalysis', { title: 'Red Cross', tooltip: 'Red Cross' }, null),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Use to Cross Out Entity',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'solutionanalysis', { title: 'Solution', tooltip: 'Solution' }, 'Analysis'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represent an Actual Solution',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('', 'group4', { title: 'Group', tooltip: 'Group' }, {
        content: [
          {
            content: "Group",
          },
        ],
        ports: [
          {
            id: "left-1",
            offset: {x: 0, y: 0.25},
            visibility: 1,
            shape: "X",
            width: 4,
            height: 4,
          },
          {
            id: "left-2",
            offset: {x: 0, y: 0.75},
            visibility: 1,
            shape: "X",
            width: 4,
            height: 4,
          },
          {
            id: "right",
            offset: {x: 1, y: 0.5},
            visibility: 1,
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
      ...getShapeByType('Continuity', 'continuity4', { title: 'Continuity', tooltip: 'Continuity' }, {
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
      ...getShapeByType('Overlap', 'analyses', { title: 'Analyses', tooltip: 'Analyses' }, 'Analyses'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represent a Group of Analysis',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Overlap', 'errors', { title: 'Errors', tooltip: 'Errors' }, 'Errors'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represent a Group of Error',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Overlap', 'problems', { title: 'Problems', tooltip: 'Problems' }, 'Problems'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represent a Group of Problem',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Overlap', 'feedbacks', { title: 'Feedbacks', tooltip: 'Feedbacks' }, 'Feedbacks'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represent a Group of Feedback',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Overlap', 'compensators', { title: 'Compensators', tooltip: 'Compensators' }, 'Compensators'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represent a Group of Feedback',
        position: 'TopRight',
      }
    },
    {
      ...getShapeByType('Overlap', 'solutionsanalysis', { title: 'Solutions', tooltip: 'Solutions' }, 'Solutions'),
      constraints:
        NodeConstraints.Default |
        NodeConstraints.Tooltip |
        NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represent a Group of Solutions',
        position: 'TopRight',
      }
    }
  ]
  return analysisShapes;
}
