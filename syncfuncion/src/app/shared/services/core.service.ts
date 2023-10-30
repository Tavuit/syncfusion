import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {EDomain} from "../enums/core.enum";
import {IDiagramProject} from "../interfaces/diagram.interface";
import {EDiagramModel} from "../enums/diagram.enum";

export type TDiagramModel = IDiagramProject;

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  private _domain: BehaviorSubject<EDomain> = new BehaviorSubject<EDomain>(EDomain.COMMUNICATION);
  private _model: BehaviorSubject<TDiagramModel> = new BehaviorSubject<TDiagramModel>({
    COMMUNICATION: [EDiagramModel.COMM_MAIN_PROJECT_MODEL],
    THEORY: [EDiagramModel.THEORY_MAIN_APPLICATION_MODEL]
  });
  private _currentModel: BehaviorSubject<EDiagramModel> = new BehaviorSubject<EDiagramModel>(EDiagramModel.COMM_MAIN_PROJECT_MODEL)

  constructor() {
  }

  public getCurrentModel(): Observable<EDiagramModel> {
    return this._currentModel.asObservable();
  }

  public setCurrentModel(model: EDiagramModel): void {
    this._currentModel.next(model);
  }

  public setModel(model: TDiagramModel): void {
    this._model.next(model);
  }

  public getModel(): Observable<TDiagramModel> {
    return this._model.asObservable();
  }

  public getDomain(): Observable<EDomain> {
    return this._domain.asObservable();
  }

  public setDomain(value: EDomain) {
    this._domain.next(value);
  }
}
