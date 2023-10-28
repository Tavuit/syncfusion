import {Injectable} from "@angular/core";
import {TDiagramComponent, TDiagramAction} from "./diagram.service";

@Injectable({
  providedIn: 'root'
})
export class DiagramActionService {
  constructor() {
  }

  public actionHandler(action: TDiagramAction, diagram: TDiagramComponent): void {
    console.log(action, diagram)
  }
}
