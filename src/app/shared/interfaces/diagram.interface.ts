import {TDiagramComponent} from "../services/diagram.service";
import {EDiagramModel} from "../enums/diagram.enum";
import { EDomain } from "src/app/shared/enums/core.enum";


export interface IProjectDiagramModel {
  [EDomain.COMMUNICATION] : IDiagramModel[],
  [EDomain.THEORY] : IDiagramModel[]
}

export interface IDiagramProject {
  COMMUNICATION?: EDiagramModel[],
  THEORY?: EDiagramModel[]
}


export interface IDiagramModel {
  LABEL: EDiagramModel,
  DATA: Object
}