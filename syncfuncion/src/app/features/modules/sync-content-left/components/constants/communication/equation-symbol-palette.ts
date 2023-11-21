import {NodeConstraints, NodeModel, PointPortModel, PortVisibility} from "@syncfusion/ej2-angular-diagrams";
import { height, rectPorts, width } from "./common";


export function getEquationsShape(): NodeModel[] {
  let equationsShape: NodeModel[] = [
    {
      id: "Equation with border",
      addInfo: {title: "Equation with border", tooltip: "Equation with border"},
      shape: {
        type: "Native",
        content: `
            <g transform="translate(2,2)">
              <rect vector-effect="non-scaling-stroke" height="${height}" width="${width}" stroke="black" stroke-width="1" fill="transparent" />
            </g>`,
      },
      width: width,
      height: height,
      ports: rectPorts,
      annotations: [
        {
          content: '',
        },
      ],
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop
    },
    {
      id: "Equation with no border",
      addInfo: {title: "Equation with no border", tooltip: "Equation with no border"},
      shape: {
        type: "Native",
        content: `
            <g transform="translate(2,2)">
              <rect vector-effect="non-scaling-stroke" height="${height}" width="${width}" fill="transparent" />
            </g>`,
      },
      width: width,
      height: height,
      annotations: [
        {
          content: '',
        },
      ],
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop
    }
  ];
  return equationsShape;
}
