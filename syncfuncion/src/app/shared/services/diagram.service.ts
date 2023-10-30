import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {DiagramComponent} from "@syncfusion/ej2-angular-diagrams";
import {EDiagramAction} from "../enums/diagram.enum";
import {IDiagramModel} from "../interfaces/diagram.interface";

export type TDiagramComponent = DiagramComponent | null;
export type TDiagramAction = EDiagramAction | null;

@Injectable({
  providedIn: 'root'
})
export class DiagramService {
  private _model: BehaviorSubject<IDiagramModel> = new BehaviorSubject<IDiagramModel>(
    {
      COMMUNICATION: [],
      THEORY: []
    }
  );
  private _diagram: BehaviorSubject<TDiagramComponent> = new BehaviorSubject<TDiagramComponent>(null);
  private _action: BehaviorSubject<TDiagramAction> = new BehaviorSubject<TDiagramAction>(null);

  constructor() {
  }

  public setModel(model: IDiagramModel): void {
    this._model.next(model);
  }

  public getModel(): Observable<IDiagramModel> {
    return this._model.asObservable();
  }


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
}
