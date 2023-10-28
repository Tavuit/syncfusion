import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {DiagramComponent} from "@syncfusion/ej2-angular-diagrams";
import {EDiagramAction} from "../enums/diagram.enum";

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
