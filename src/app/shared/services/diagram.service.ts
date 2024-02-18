import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { DiagramComponent } from "@syncfusion/ej2-angular-diagrams";
import { EDiagramAction, EDiagramModel } from "../enums/diagram.enum";
import { IProjectDiagramModel } from "../interfaces/diagram.interface";
import { EDomain } from "src/app/shared/enums/core.enum";
import { cloneDeep } from "lodash";
import { PROJECT_MODEL_MAP } from "src/app/features/modules/sync-content-right/constants/share-model.constant";

export type TDiagramComponent = DiagramComponent | null;
export type TDiagramAction = EDiagramAction | null;

@Injectable({
  providedIn: 'root'
})
export class DiagramService {
  private _diagram: BehaviorSubject<TDiagramComponent> = new BehaviorSubject<TDiagramComponent>(null);
  private _action: BehaviorSubject<TDiagramAction> = new BehaviorSubject<TDiagramAction>(null);

  constructor() {
  }

  // public setModel(model: IProjectDiagramModel): void {
  //   this._model.next(model);
  // }

  // public getModel(): Observable<IProjectDiagramModel> {
  //   return this._model.asObservable();
  // }


  public setDiagram(diagram: TDiagramComponent): void {
    this._diagram.next(diagram);
  }

  public getDiagram(): Observable<TDiagramComponent> {
    return this._diagram.asObservable();
  }

  public regiterAction(action: TDiagramAction): void {
    this._action.next(action);
  }

  public getAction(): Observable<TDiagramAction> {
    return this._action.asObservable();
  }

  public generateDefaultModel(diagramModel: EDiagramModel) {
    return {
      LABEL: diagramModel,
      DATA: {}
    }
  }

}
