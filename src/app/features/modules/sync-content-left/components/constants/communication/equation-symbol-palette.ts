import {NodeConstraints, NodeModel, PointPortModel, PortVisibility} from "@syncfusion/ej2-angular-diagrams";
import { height, rectPorts, width } from "./common";


export function getEquationsShape(): NodeModel[] {
  let equationsShape: NodeModel[] = [
    {
      id: "equationWithBorder",
      addInfo: {title: "Equation with border", tooltip: 'Equation with border', menuId: "equation", },

      shape: {
        type: "HTML",
        content: `<div class='input-wrapper' style='border: 1px solid black; height:100%; width: 100%; position: relative'><math-field style="border: unset;background: transparent; z-index:1" id="mathquill-mathquill-input-border" contenteditable='true' style='height:100%; width: 100%;'></math-field></div>`,
      },
      width: width,
      height: height,
      ports: rectPorts,


      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop
    },
    {
      id: "equationWithNoBorder",
      addInfo: {title: "Equation with no border", tooltip: "Equation with no border", menuId: "equation",},
      shape: {
        type: "HTML",
        content:`<div class='input-wrapper' style='height:100%; width: 100%'><math-field style=";border: unset;background: transparent;" id="mathquill-mathquill-input-border" style='height:100%; width: 100%;'></math-field></div>`,
      },
      width: width,
      height: height,
      constraints: NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.AllowDrop
    }
  ];
  return equationsShape;
}
