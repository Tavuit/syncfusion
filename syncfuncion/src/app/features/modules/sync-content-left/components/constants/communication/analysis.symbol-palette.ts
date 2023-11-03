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
    {
      id: "analysisWindow",
      addInfo: {title: "Analysis Window", tooltip: "Analysis Window"},
      shape: {
        type: "Native",
        content: '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Analysis Window\n                            </div>\n                        </div>\n                    </foreignObject></g>',
      },
      width: 210,
      height: 100,
      annotations: [
        {
          content: "Analysis Window"
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
        content: 'Represents an Actual Analysis',
        position: 'TopRight'
      },
      style: {
        fill: "white",
        fontSize: 10,
      },
    },
    {
      id: "edfDiamond",
      addInfo: {title: "Error Correction Function", tooltip: "Error Correction Function"},
      shape: {
        type: "Native",
        content: '<g  transform="translate(2,2)">\n                        <rect height="100" width="100" fill="transparent" stroke-width="0"/>\n                        <rect x="35.35533905932737" y="-35.35533905932737" width="70.71067811865474" height="70.71067811865474" fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" transform="rotate(45)"/>\n                        <foreignObject class="symbol-text-container" x="12.5" width="75" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="75" class="symbol-text-element">\n                                Error Correction Function\n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
      },
      width: 120,
      height: 120,
      annotations: [
        {
          content: "Error Correction Function"
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
        content: 'The Error Correction Function',
        position: 'TopRight'
      },
      style: {
        fill: "none",
        fontSize: 10,
      },
    },
    {
      id: "ecfRect",
      addInfo: {title: "ECF", tooltip: "ECF"},
      shape: {
        type: "Native",
        content: '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                ECF\n                            </div>\n                        </div>\n                    </foreignObject></g>',
      },
      width: 210,
      height: 100,
      annotations: [
        {
          content: "ECF"
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
        content: 'Enable Error Correction',
        position: 'TopRight'
      },
      style: {
        fill: "white",
        fontSize: 10,
      },
    },
    {
      id: "problemDevelopment",
      addInfo: {title: "Problem Development", tooltip: "Problem Development"},
      shape: {
        type: "Native",
        content: '<g   transform="translate(2, 2)">\n                        <rect height="300" width="300" fill="transparent" stroke-width="0" /> \n                        <circle vector-effect="non-scaling-stroke" cx="150" cy="150" r="150" fill="White" stroke="black" stroke-width="1"/>\n                        <foreignObject class="symbol-text-container" x="37.5" width="225" height="300" visibility="hidden">\n                        <div style="height: 300px" class="flex-container">\n                            <div width="225" class="symbol-text-element">\n                                Problem Name Development\n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
      },
      width: 300,
      height: 300,
      annotations: [
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
      ports: null,
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Problem Development From Error',
        position: 'TopRight'
      },
      style: {
        fill: "none",
        fontSize: 10,
      }
    },
    {
      id: "principleAspect",
      addInfo: {title: "Principle Aspect", tooltip: "Principle Aspect"},
      shape: {
        type: "Native",
        content: '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Principle Aspect\n                            </div>\n                        </div>\n                    </foreignObject></g>',
      },
      width: 210,
      height: 100,
      annotations: [
        {
          content: "Principle Aspect"
        }
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
        content: 'Problem Development From Error',
        position: 'TopRight'
      },
      style: {
        fill: "white",
        fontSize: 10,
      },
    },
    {
      id: "redcrossanalysis",
      addInfo: {title: "Red Cross", tooltip: "Red Cross"},
      shape: {
        type: "Native",
        content: '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="10" width="10" stroke="none" fill="none"/>\n                    <path vector-effect="non-scaling-stroke" stroke="red" stroke-width="1" fill="none" d="M 0 0 L 10 10 M 0 10 L 10 0"/> \n                </g>',
      },
      width: 50,
      height: 50,
      annotations: null,
      ports: null,
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Use to Cross Out Entity',
        position: 'TopRight'
      }
    },
    {
      id: "solutionanalysis",
      addInfo: {title: "Solution", tooltip: "Solution"},
      shape: {
        type: "Native",
        content: '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="100" width="210" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="26.25" width="157.5" height="100" visibility="hidden">\n                        <div style="height: 100px" class="flex-container">\n                            <div width="157.5" class="symbol-text-element">\n                                Analysis\n                            </div>\n                        </div>\n                    </foreignObject></g>',
      },
      annotations: [
        {
          content: "Analysis",
        },
      ],
      width: 210,
      height: 100,
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
        content: 'Represent an Actual Solution',
        position: 'TopRight'
      },
      style: {
        fill: "white",
        fontSize: 10,
      }
    },
    {
      id: "group4",
      addInfo: {title: "Group", tooltip: "Group"},
      shape: {
        type: "Native",
        content: '<g transform="translate(2,2)">\n                    <rect vector-effect="non-scaling-stroke" height="75" width="50" stroke="black" stroke-width="1" fill="white"/>\n                    <foreignObject class="symbol-text-container" x="6.25" width="37.5" height="75" visibility="hidden">\n                        <div style="height: 75px" class="flex-container">\n                            <div width="37.5" class="symbol-text-element">\n                                Group\n                            </div>\n                        </div>\n                    </foreignObject></g>',
      },
      annotations: [
        {
          content: "Group",
        },
      ],
      width: 50,
      height: 75,
      ports: [
        {
          id: "left-1",
          offset: {
            x: 0,
            y: 0.25,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "left-2",
          offset: {
            x: 0,
            y: 0.75,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
        {
          id: "right",
          offset: {
            x: 1,
            y: 0.5,
          },
          visibility: 1,
          shape: "X",
          width: 4,
          height: 4,
        },
      ],
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop,
      tooltip: {
        content: 'Represent an Actual Solution',
        position: 'TopRight'
      },
      style: {
        fill: "white",
        fontSize: 10,
      }
    },
    {
      id: "continuity4",
      addInfo: {title: "Continuity", tooltip: "Continuity"},
      shape: {
        type: "Native",
        content: '<g transform="translate(2, 2)">\n                    <rect width="10" height="5" fill="White" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" stroke-dasharray = "10 5" />\n                    <circle vector-effect="non-scaling-stroke" cx="3.5" cy="2.5" r="0.4"/>\n                    <circle vector-effect="non-scaling-stroke" cx="5.0" cy="2.5" r="0.4"/>\n                    <circle vector-effect="non-scaling-stroke" cx="6.5" cy="2.5" r="0.4"/>\n                    </g>',
      },
      width: 210,
      height: 100,
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
        content: 'Show Continuity of Entity',
        position: 'TopRight'
      },
      style: {
        fill: "white",
        fontSize: 10,
      }
    },
    {
      id: "analyses",
      addInfo: {title: "Analyses", tooltip: "Analyses"},
      shape: {
        type: "Native",
        content: '<g  transform="translate(2, 2)">\n                    <rect x="0" y="0" height="50" width="100" fill="transparent" stroke-width="0"/>\n                    <rect width="90" height="40" fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />\n                    <rect x="10" y="10" height="40" width="90"  fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>\n                    <foreignObject class="symbol-text-container" x="12.5" width="75" height="50" visibility="hidden">\n                        <div style="height: 50px" class="flex-container">\n                            <div width="75" class="symbol-text-element">\n                                Analyses\n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
      },
      annotations: [
        {
          offset: {
            x: 0.55,
            y: 0.5,
          },
          content: "Analyses",
        },
      ],
      width: 210,
      height: 100,
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
        content: 'Represents a Group of Analysis',
        position: 'TopRight'
      },
      style: {
        fill: "white",
        fontSize: 10,
      }
    },
    {
      id: "errors",
      addInfo: {title: "Errors", tooltip: "Errors"},
      shape: {
        type: "Native",
        content: '<g  transform="translate(2, 2)">\n                    <rect x="0" y="0" height="50" width="100" fill="transparent" stroke-width="0"/>\n                    <rect width="90" height="40" fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />\n                    <rect x="10" y="10" height="40" width="90"  fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>\n                    <foreignObject class="symbol-text-container" x="12.5" width="75" height="50" visibility="hidden">\n                        <div style="height: 50px" class="flex-container">\n                            <div width="75" class="symbol-text-element">\n                                Errors\n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
      },
      annotations: [
        {
          offset: {
            x: 0.55,
            y: 0.5,
          },
          content: "Errors",
        },
      ],
      width: 210,
      height: 100,
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
        content: 'Represent a Group of Error',
        position: 'TopRight'
      },
      style: {
        fill: "white",
        fontSize: 10,
      }
    },
    {
      id: "problems",
      addInfo: {title: "Problems", tooltip: "Problems"},
      shape: {
        type: "Native",
        content: '<g  transform="translate(2, 2)">\n                    <rect x="0" y="0" height="50" width="100" fill="transparent" stroke-width="0"/>\n                    <rect width="90" height="40" fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />\n                    <rect x="10" y="10" height="40" width="90"  fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>\n                    <foreignObject class="symbol-text-container" x="12.5" width="75" height="50" visibility="hidden">\n                        <div style="height: 50px" class="flex-container">\n                            <div width="75" class="symbol-text-element">\n                                Problems\n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
      },
      annotations: [
        {
          offset: {
            x: 0.55,
            y: 0.5,
          },
          content: "Problems",
        },
      ],
      width: 210,
      height: 100,
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
        content: 'Represents a Group of Problem',
        position: 'TopRight'
      },
      style: {
        fill: "white",
        fontSize: 10,
      }
    },
    {
      id: "feedbacks",
      addInfo: {title: "Feedbacks", tooltip: "Feedbacks"},
      shape: {
        type: "Native",
        content: '<g  transform="translate(2, 2)">\n                    <rect x="0" y="0" height="50" width="100" fill="transparent" stroke-width="0"/>\n                    <rect width="90" height="40" fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />\n                    <rect x="10" y="10" height="40" width="90"  fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>\n                    <foreignObject class="symbol-text-container" x="12.5" width="75" height="50" visibility="hidden">\n                        <div style="height: 50px" class="flex-container">\n                            <div width="75" class="symbol-text-element">\n                                Feedbacks\n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
      },
      annotations: [
        {
          offset: {
            x: 0.55,
            y: 0.5,
          },
          content: "Feedbacks",
        },
      ],
      width: 210,
      height: 100,
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
        content: 'Represents a Group of Feedback',
        position: 'TopRight'
      },
      style: {
        fill: "white",
        fontSize: 10,
      }
    },
    {
      id: "compensators",
      addInfo: {title: "Compensators", tooltip: "Compensators"},
      shape: {
        type: "Native",
        content: '<g  transform="translate(2, 2)">\n                    <rect x="0" y="0" height="50" width="100" fill="transparent" stroke-width="0"/>\n                    <rect width="90" height="40" fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />\n                    <rect x="10" y="10" height="40" width="90"  fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>\n                    <foreignObject class="symbol-text-container" x="12.5" width="75" height="50" visibility="hidden">\n                        <div style="height: 50px" class="flex-container">\n                            <div width="75" class="symbol-text-element">\n                                Compenstors\n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
      },
      annotations: [
        {
          offset: {
            x: 0.55,
            y: 0.5,
          },
          content: "Compensators",
        },
      ],
      width: 210,
      height: 100,
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
        content: 'Represent a Group of Feedback',
        position: 'TopRight'
      },
      style: {
        fill: "none",
        fontSize: 10,
      }
    },
    {
      id: "solutionsanalysis",
      addInfo: {title: "Solutions", tooltip: "Solutions"},
      shape: {
        type: "Native",
        content: '<g  transform="translate(2, 2)">\n                    <rect x="0" y="0" height="50" width="100" fill="transparent" stroke-width="0"/>\n                    <rect width="90" height="40" fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" />\n                    <rect x="10" y="10" height="40" width="90"  fill="white" vector-effect="non-scaling-stroke" stroke="black" stroke-width="1"/>\n                    <foreignObject class="symbol-text-container" x="12.5" width="75" height="50" visibility="hidden">\n                        <div style="height: 50px" class="flex-container">\n                            <div width="75" class="symbol-text-element">\n                                Solutions\n                            </div>\n                        </div>\n                    </foreignObject>\n                    </g>',
      },
      annotations: [
        {
          offset: {
            x: 0.55,
            y: 0.5,
          },
          content: "Solutions",
        },
      ],
      width: 210,
      height: 100,
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
        content: 'Represent a Group of Solutions',
        position: 'TopRight'
      },
      style: {
        fill: "none",
        fontSize: 10,
      }
    }
  ]
  return analysisShapes;
}
