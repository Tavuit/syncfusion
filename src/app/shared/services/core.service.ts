import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, switchMap } from 'rxjs';
import { EDomain } from '../enums/core.enum';
import {
  IDiagramProject,
  IProjectDiagramModel,
} from '../interfaces/diagram.interface';
import { COMM_PROJECT_MODEL, EDiagramModel } from '../enums/diagram.enum';
import { cloneDeep } from 'lodash';

export type TDiagramModel = IDiagramProject;

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  private diagramStore = {
    [EDiagramModel.COMM_MAIN_PROJECT_MODEL]: {},
    [EDiagramModel.THEORY_MAIN_APPLICATION_MODEL]: {},
  };

  private _projectDiagramModel: BehaviorSubject<IProjectDiagramModel> =
    new BehaviorSubject<IProjectDiagramModel>({
      COMMUNICATION: [
        {
          LABEL: EDiagramModel.COMM_MAIN_PROJECT_MODEL,
          DATA: this.diagramStore[EDiagramModel.COMM_MAIN_PROJECT_MODEL],
        },
      ],
      THEORY: [
        {
          LABEL: EDiagramModel.THEORY_MAIN_APPLICATION_MODEL,
          DATA: this.diagramStore[EDiagramModel.THEORY_MAIN_APPLICATION_MODEL],
        },
      ],
    });
  private _domain: BehaviorSubject<EDomain> = new BehaviorSubject<EDomain>(
    EDomain.COMMUNICATION
  );
  private _model: BehaviorSubject<TDiagramModel> =
    new BehaviorSubject<TDiagramModel>({
      COMMUNICATION: [EDiagramModel.COMM_MAIN_PROJECT_MODEL],
      THEORY: [EDiagramModel.THEORY_MAIN_APPLICATION_MODEL],
    });
  private _currentModel: BehaviorSubject<EDiagramModel> =
    new BehaviorSubject<EDiagramModel>(EDiagramModel.COMM_MAIN_PROJECT_MODEL);

  constructor() {}

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

  public saveDiagramModel(diagramModel: EDiagramModel, data: Object) {
    this.diagramStore[diagramModel] = data;
    return this.diagramStore;
  }

  public getDiagramModelByType(typeModel: EDiagramModel) {
    return this.diagramStore[typeModel];
  }

  public addModelDiagram(model: EDiagramModel) {
    const modelDiagram = this._model.value[this._domain.value];
    if (!modelDiagram.find(m => model === m)) {
      modelDiagram.push(model);
    }
    this.setModel({ ...this._model.value, [this._domain.value]: modelDiagram });
  }

  public addOrUpdateDiagramByModel(diagramType: EDiagramModel, data: Object) {
    const cloneModel = cloneDeep(this._projectDiagramModel.value);
    const domain = COMM_PROJECT_MODEL.includes(diagramType)
      ? EDomain.COMMUNICATION
      : EDomain.THEORY;
    const currentDiagram = cloneModel[domain].find(
      diagram => diagram.LABEL === diagramType
    );
    if (currentDiagram) {
      currentDiagram.DATA = data;
    } else {
      cloneModel[domain].push({
        DATA: {},
        LABEL: diagramType,
      });
      this.diagramStore[diagramType] = {};
    }
    this._projectDiagramModel.next(cloneModel);
    return cloneModel;
  }

  public getSelectedModel() {
    return this._domain.pipe(
      switchMap(currentDomain => {
        return this._currentModel.pipe(
          switchMap(currentModel => {
            return this._projectDiagramModel.pipe(
              map(currentProjectModel => {
                return currentProjectModel[currentDomain].find(
                  projectModel => projectModel.LABEL === currentModel
                );
              })
            );
          })
        );
      })
    );
  }

  public checkExistDiagramModel(diagramType: EDiagramModel) {
    return !!this.diagramStore[diagramType];
  }

  public getListProjectDiagramByDomain() {
    return this._domain.pipe(
      switchMap(domain =>
        this._projectDiagramModel.pipe(
          map(_projectDiagramModel => _projectDiagramModel[domain])
        )
      )
    );
  }

  saveCurrentDiagram() {
    this.addOrUpdateDiagramByModel(
      this._currentModel.value,
      this.getDiagramModelByType(this._currentModel.value)
    );
  }
}
