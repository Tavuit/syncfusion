import {TDiagramComponent} from "../services/diagram.service";
import {EDiagramModel} from "../enums/diagram.enum";

export interface IDiagramModel {
  COMMUNICATION?: {
    LABEL: EDiagramModel;
    DATA: TDiagramComponent
  }[],
  THEORY?: {
    LABEL: EDiagramModel;
    DATA: TDiagramComponent
  }[]
}

export interface IDiagramProject {
  COMMUNICATION?: EDiagramModel[],
  THEORY?: EDiagramModel[]
}
