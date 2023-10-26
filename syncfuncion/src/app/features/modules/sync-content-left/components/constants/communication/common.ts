import {PointPortModel, PortVisibility} from "@syncfusion/ej2-angular-diagrams";

export const height: number = 80;
export const width: number = 150;
export const rectPorts: PointPortModel[] = [{
  id: "LeftMiddle", offset: {
    x: 0, y: 0.5,
  }, visibility: PortVisibility.Visible, shape: "X", width: 4, height: 4,
}, {
  id: "TopCenter", offset: {
    x: 0.5, y: 0,
  }, visibility: PortVisibility.Visible, shape: "X", width: 4, height: 4,
}, {
  id: "RightMidlle", offset: {
    x: 1, y: 0.5,
  }, visibility: PortVisibility.Visible, shape: "X", width: 4, height: 4,
}, {
  id: "BottomCenter", offset: {
    x: 0.5, y: 1,
  }, visibility: PortVisibility.Visible, shape: "X", width: 4, height: 4,
}];
