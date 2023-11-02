import {NodeConstraints, NodeModel} from "@syncfusion/ej2-angular-diagrams";

export function getAnalysisShapes(): NodeModel[] {
  let analysisShapes: NodeModel[] = [
    {
      id: "principle",
      addInfo: {title: "Principle", tooltip: "Principle"},
      shape: {
        type: "Native",
        content: '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Principle\n                            </div>\n                        </div>\n                    </foreignObject></g>',
      },
      width: 210,
      height: 100,
      annotations: [
        {
          content: "Principle"
        },
      ],
      ports: [
        {
          id: "LeftMiddle",
          offset: {
            x: 0,
            y: 0.5,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "TopCenter",
          offset: {
            x: 0.5,
            y: 0,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "RightMidlle",
          offset: {
            x: 1,
            y: 0.5,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "BottomCenter",
          offset: {
            x: 0.5,
            y: 1,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
      ],
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represent Actual Principle',
        position: 'TopRight'
      },
      style: {
        fill: "white",
        fontSize: 10,
      },
    },
    {
      id: "parentPrinciple",
      addInfo: {title: "Parent Principle", tooltip: "Parent Principle"},
      shape: {
        type: "Native",
        content: '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Principle\n                            </div>\n                        </div>\n                    </foreignObject></g>',
      },
      width: 210,
      height: 100,
      annotations: [
        {
          content: "Principle"
        },
      ],
      ports: [
        {
          id: "LeftMiddle",
          offset: {
            x: 0,
            y: 0.5,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "TopCenter",
          offset: {
            x: 0.5,
            y: 0,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "RightMidlle",
          offset: {
            x: 1,
            y: 0.5,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "BottomCenter",
          offset: {
            x: 0.5,
            y: 1,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
      ],
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represent Parent Principle',
        position: 'TopRight'
      },
      style: {
        fill: "white",
        fontSize: 10,
      },
    },
    {
      id: "referencerect",
      addInfo: {title: "Reference", tooltip: "Reference"},
      shape: {
        type: "Native",
        content: '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Reference\n                            </div>\n                        </div>\n                    </foreignObject></g>',
      },
      width: 210,
      height: 100,
      annotations: [
        {
          content: "Reference"
        },
      ],
      ports: [
        {
          id: "LeftMiddle",
          offset: {
            x: 0,
            y: 0.5,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "TopCenter",
          offset: {
            x: 0.5,
            y: 0,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "RightMidlle",
          offset: {
            x: 1,
            y: 0.5,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "BottomCenter",
          offset: {
            x: 0.5,
            y: 1,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
      ],
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represent an Actual Reference',
        position: 'TopRight'
      },
      style: {
        fill: "white",
        fontSize: 10,
      },
    },
    {
      id: "sentenceAnalysis",
      addInfo: {title: "Sentence Analysis", tooltip: "Sentence Analysis"},
      shape: {
        type: "Native",
        content: '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Sentence Analysis\n                            </div>\n                        </div>\n                    </foreignObject></g>',
      },
      width: 210,
      height: 100,
      annotations: [
        {
          content: "Sentence Analysis"
        },
      ],
      ports: [
        {
          id: "LeftMiddle",
          offset: {
            x: 0,
            y: 0.5,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "TopCenter",
          offset: {
            x: 0.5,
            y: 0,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "RightMidlle",
          offset: {
            x: 1,
            y: 0.5,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "BottomCenter",
          offset: {
            x: 0.5,
            y: 1,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
      ],
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represent Parent Principle',
        position: 'TopRight'
      },
      style: {
        fill: "white",
        fontSize: 10,
      },
    },
    {
      id: "analysis",
      addInfo: {title: "Analysis", tooltip: "Analysis"},
      shape: {
        type: "Native",
        content: '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Analysis\n                            </div>\n                        </div>\n                    </foreignObject></g>',
      },
      width: 210,
      height: 100,
      annotations: [
        {
          content: "Analysis"
        },
      ],
      ports: [
        {
          id: "LeftMiddle",
          offset: {
            x: 0,
            y: 0.5,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "TopCenter",
          offset: {
            x: 0.5,
            y: 0,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "RightMidlle",
          offset: {
            x: 1,
            y: 0.5,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "BottomCenter",
          offset: {
            x: 0.5,
            y: 1,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
      ],
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represent Operating Principle',
        position: 'TopRight'
      },
      style: {
        fill: "white",
        fontSize: 10,
      },
    },
    {
      id: "feedback",
      addInfo: {title: "Feedback", tooltip: "Feedback"},
      shape: {
        type: "Native",
        content: '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Principle\n                            </div>\n                        </div>\n                    </foreignObject></g>',
      },
      width: 210,
      height: 100,
      annotations: [
        {
          content: "Feedback"
        },
      ],
      ports: [
        {
          id: "LeftMiddle",
          offset: {
            x: 0,
            y: 0.5,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "TopCenter",
          offset: {
            x: 0.5,
            y: 0,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "RightMidlle",
          offset: {
            x: 1,
            y: 0.5,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "BottomCenter",
          offset: {
            x: 0.5,
            y: 1,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
      ],
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represent a Feedback',
        position: 'TopRight'
      },
      style: {
        fill: "white",
        fontSize: 10,
      },
    },
    {
      id: "operatingPrinciple",
      addInfo: {title: "Operating Principle ", tooltip: "Operating Principle "},
      shape: {
        type: "Native",
        content: '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Principle\n                            </div>\n                        </div>\n                    </foreignObject></g>',
      },
      width: 210,
      height: 100,
      annotations: [
        {
          content: "Operating Principle"
        },
      ],
      ports: [
        {
          id: "LeftMiddle",
          offset: {
            x: 0,
            y: 0.5,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "TopCenter",
          offset: {
            x: 0.5,
            y: 0,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "RightMidlle",
          offset: {
            x: 1,
            y: 0.5,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "BottomCenter",
          offset: {
            x: 0.5,
            y: 1,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
      ],
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represent Operating Principle',
        position: 'TopRight'
      },
      style: {
        fill: "white",
        fontSize: 10,
      },
    },
    {
      id: "error",
      addInfo: {title: "Error", tooltip: "Error"},
      shape: {
        type: "Native",
        content: '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Error\n                            </div>\n                        </div>\n                    </foreignObject></g>',
      },
      width: 210,
      height: 100,
      annotations: [
        {
          content: "Error"
        },
      ],
      ports: [
        {
          id: "LeftMiddle",
          offset: {
            x: 0,
            y: 0.5,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "TopCenter",
          offset: {
            x: 0.5,
            y: 0,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "RightMidlle",
          offset: {
            x: 1,
            y: 0.5,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "BottomCenter",
          offset: {
            x: 0.5,
            y: 1,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
      ],
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represent an Actual Error',
        position: 'TopRight'
      },
      style: {
        fill: "white",
        fontSize: 10,
      },
    },
    {
      id: "compensator",
      addInfo: {title: "Compensator", tooltip: "Compensator"},
      shape: {
        type: "Native",
        content: '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Compensator\n                            </div>\n                        </div>\n                    </foreignObject></g>',
      },
      width: 210,
      height: 100,
      annotations: [
        {
          content: "Compensator"
        },
      ],
      ports: [
        {
          id: "LeftMiddle",
          offset: {
            x: 0,
            y: 0.5,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "TopCenter",
          offset: {
            x: 0.5,
            y: 0,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "RightMidlle",
          offset: {
            x: 1,
            y: 0.5,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "BottomCenter",
          offset: {
            x: 0.5,
            y: 1,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
      ],
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represent an Actual Compensator',
        position: 'TopRight'
      },
      style: {
        fill: "white",
        fontSize: 10,
      },
    },
    {
      id: "problem",
      addInfo: {title: "Problem", tooltip: "Problem"},
      shape: {
        type: "Native",
        content: '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Problem\n                            </div>\n                        </div>\n                    </foreignObject></g>',
      },
      width: 210,
      height: 100,
      annotations: [
        {
          content: "Problem"
        },
      ],
      ports: [
        {
          id: "LeftMiddle",
          offset: {
            x: 0,
            y: 0.5,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "TopCenter",
          offset: {
            x: 0.5,
            y: 0,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "RightMidlle",
          offset: {
            x: 1,
            y: 0.5,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "BottomCenter",
          offset: {
            x: 0.5,
            y: 1,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
      ],
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represent an Actual Problem',
        position: 'TopRight'
      },
      style: {
        fill: "white",
        fontSize: 10,
      },
    },
    {
      id: "problemStatement",
      addInfo: {title: "Problem Statement", tooltip: "Problem Statement"},
      shape: {
        type: "Native",
        content: '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Problem Statement\n                            </div>\n                        </div>\n                    </foreignObject></g>',
      },
      width: 210,
      height: 100,
      annotations: [
        {
          content: "Problem Statement"
        },
      ],
      ports: [
        {
          id: "LeftMiddle",
          offset: {
            x: 0,
            y: 0.5,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "TopCenter",
          offset: {
            x: 0.5,
            y: 0,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "RightMidlle",
          offset: {
            x: 1,
            y: 0.5,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "BottomCenter",
          offset: {
            x: 0.5,
            y: 1,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
      ],
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Problem Statement as Entity',
        position: 'TopRight'
      },
      style: {
        fill: "white",
        fontSize: 10,
      },
    },
    {
      id: "principle1",
      addInfo: {title: "Principle", tooltip: "Principle"},
      shape: {
        type: "Native",
        content: '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Principle\n                            </div>\n                        </div>\n                    </foreignObject></g>',
      },
      width: 210,
      height: 100,
      annotations: [
        {
          content: "Main Set of Principle"
        },
      ],
      ports: [
        {
          id: "LeftMiddle",
          offset: {
            x: 0,
            y: 0.5,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "TopCenter",
          offset: {
            x: 0.5,
            y: 0,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "RightMidlle",
          offset: {
            x: 1,
            y: 0.5,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "BottomCenter",
          offset: {
            x: 0.5,
            y: 1,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
      ],
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represent The Main Set of Principles',
        position: 'TopRight'
      },
      style: {
        fill: "white",
        fontSize: 10,
      },
    },
    {
      id: "principle2",
      addInfo: {title: "Principle", tooltip: "Principle"},
      shape: {
        type: "Native",
        content: '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Principle\n                            </div>\n                        </div>\n                    </foreignObject></g>',
      },
      width: 210,
      height: 100,
      annotations: [
        {
          content: "Subset of Principle"
        },
      ],
      ports: [
        {
          id: "LeftMiddle",
          offset: {
            x: 0,
            y: 0.5,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "TopCenter",
          offset: {
            x: 0.5,
            y: 0,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "RightMidlle",
          offset: {
            x: 1,
            y: 0.5,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "BottomCenter",
          offset: {
            x: 0.5,
            y: 1,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
      ],
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Principle a Subset of Principles',
        position: 'TopRight'
      },
      style: {
        fill: "white",
        fontSize: 10,
      },
    },
  ]
  return analysisShapes;
}
