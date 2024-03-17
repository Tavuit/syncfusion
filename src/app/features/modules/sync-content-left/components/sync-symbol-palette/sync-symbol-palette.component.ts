import {Component, OnDestroy, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  PaletteModel,
  SymbolPaletteModule,
  SymbolPreviewModel,
  MarginModel,
  NodeModel,
  SymbolInfo,
  IPaletteExpandArgs
} from '@syncfusion/ej2-angular-diagrams';
import {ExpandMode} from '@syncfusion/ej2-angular-navigations';
import {height, width} from '../constants/communication/common';
import { CoreService } from 'src/app/shared/services/core.service';
import {map, Subject, takeUntil, tap} from "rxjs";
import { EDomain } from 'src/app/shared/enums/core.enum';
import { palettesCommunication, palettesTheory } from '../constants/symbol-palette.constant';
import { SymbolPaletteService } from 'src/app/features/modules/sync-content-left/services/symbol-palette.service';

@Component({
  selector: 'sync-symbol-palette',
  standalone: true,
  imports: [CommonModule, SymbolPaletteModule],
  templateUrl: './sync-symbol-palette.component.html',
  styleUrls: ['./sync-symbol-palette.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SyncSymbolPaletteComponent implements OnDestroy{
  private _destroyed: Subject<void> = new Subject<void>();
  public expandMode?: ExpandMode;
  public palettes?: PaletteModel[];
  public symbolPreview: SymbolPreviewModel[] = [{
    height,
    width
  }];
  public height: number = 80;
  public width: number = 250;
  public symbolMargin: MarginModel = {
    left: 15,
    right: 15,
    top: 15,
    bottom: 15
  };
  private openedPlatteIds = [];
  constructor(
    private coreService: CoreService,
    private symbolPaletteService: SymbolPaletteService,
  ) {
    
  }

  ngOnInit(): void {
    this.expandMode = 'Single';
    this.coreService.getDomain()
      .pipe(
        tap(() => {
          this.openedPlatteIds = [];
        }),
        map((domain: EDomain) => {
          if (domain === EDomain.COMMUNICATION) {
            return palettesCommunication;
          }
          return palettesTheory;
        }),
        takeUntil(this._destroyed)
      )
      .subscribe((palettes)=> this.palettes = palettes)
  }

  public paletteExpanding(event: IPaletteExpandArgs) {
    if (event.isExpanded) {
      if (this.openedPlatteIds.includes(event.palette.id)) {
        return;
      } else {
        this.openedPlatteIds.push(event.palette.id);
        const equation = event.element.querySelector(`#${event.palette.id || ''}`);
        const symbolDraggable = equation.querySelectorAll(
          '.e-symbol-draggable > svg'
        );
        const canvasSymbols = equation.querySelectorAll(".e-symbol-draggable > canvas");
        this.symbolPaletteService.transformSymbolPalette(symbolDraggable);
        this.symbolPaletteService.convertCanvasToSvg(canvasSymbols);
      }
    }
  }

  public getSymbolInfo(symbol: NodeModel): SymbolInfo {
    return {
      fit: true,
      tooltip:
        symbol.addInfo !== null && symbol.addInfo !== undefined
          ? symbol?.addInfo?.['toolTip']
          : symbol.id,
      description: {
        overflow: "Wrap",
        text:
          symbol?.addInfo !== null && symbol?.addInfo !== undefined
            ? symbol?.addInfo?.['title']
            : symbol.id,
        wrap: "WrapWithOverflow",
      },
    };
  };

  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }
}
