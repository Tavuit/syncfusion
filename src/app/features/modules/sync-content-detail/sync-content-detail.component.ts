import {Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewContainerRef} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  SyncDiagramComponent
} from 'src/app/features/modules/sync-content-detail/components/sync-diagram/sync-diagram.component';
import {DiagramService} from 'src/app/shared/services/diagram.service';
import {distinctUntilChanged, map, Subject, switchMap} from "rxjs";
import {CoreService} from 'src/app/shared/services/core.service';
import {isEqual} from 'lodash';
import {IDiagramModel, IDiagramProject} from "../../../shared/interfaces/diagram.interface";
import {EDomain} from "../../../shared/enums/core.enum";
import {DiagramComponent} from "@syncfusion/ej2-angular-diagrams";
import {contextMenuSettings, rulerSettings, tooltipSettings} from "./constants/diagram.constant";

@Component({
  selector: 'sync-content-detail',
  standalone: true,
  imports: [CommonModule, SyncDiagramComponent],
  templateUrl: './sync-content-detail.component.html',
  styleUrls: ['./sync-content-detail.component.scss']
})
export class SyncContentDetailComponent implements OnInit, OnDestroy {
  private _destroyed: Subject<void> = new Subject<void>();

  constructor(
    private diagramService: DiagramService,
    private coreService: CoreService,
    private vcf: ViewContainerRef,
    private resolver: ComponentFactoryResolver
  ) {
  }

  ngOnInit() {
    this.diagramService.getModel().pipe(
      distinctUntilChanged(isEqual),
      switchMap((diagramModel: IDiagramModel) => this.coreService.getModel().pipe(
        switchMap((diagramProject: IDiagramProject) => this.coreService.getDomain().pipe(
          map((domain: EDomain) => {
            return {
              diagramModel,
              diagramProject,
              domain
            }
          })
        )),
      )))
      .subscribe(({diagramModel, diagramProject}) => {
        const factory = this.resolver.resolveComponentFactory(DiagramComponent);
        const diagram = this.vcf.createComponent(factory)
        diagram.instance.width = '100%';
        diagram.instance.height = '100%';
        diagram.instance.contextMenuSettings = contextMenuSettings;
        diagram.instance.rulerSettings = rulerSettings;
        diagram.instance.tooltip = tooltipSettings;
        const updatedDiagramModel = {...diagramModel};
        for (const objDomain of Object.keys(diagramProject)) {
          for (const project of diagramProject[objDomain]) {
            const dataExists = updatedDiagramModel[objDomain].find((model) => model.LABEL === project)
            if (!dataExists) {
              updatedDiagramModel[objDomain] = [...updatedDiagramModel[objDomain], {
                LABEL: project,
                DATA: diagram
              }]
            }
          }
        }
        this.vcf.clear();
        this.diagramService.setModel(updatedDiagramModel);
      })
  }

  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }
}
