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
import {map, Subject, takeUntil} from "rxjs";
import { EDomain } from 'src/app/shared/enums/core.enum';
import { palettesCommunication, palettesTheory } from '../constants/symbol-palette.constant';

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

  constructor(
    private coreService: CoreService,
  ) {
    this.coreService.getDomain()
      .pipe(
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

  ngOnInit(): void {
    this.expandMode = 'Single';
  }

  public paletteExpanding(event: IPaletteExpandArgs) {
    if (event.isExpanded) {
      const equation = event.element.querySelector(`#${event.palette.id || ''}`);
      const symbolDraggable = equation.querySelectorAll(
        '.e-symbol-draggable > svg'
      );
      for (let i = 0; i < symbolDraggable.length; i++) {
        let titleText = symbolDraggable[i].querySelector(':scope > g > text');
        let toolTip = symbolDraggable[i].parentElement.getAttribute('title');
        let native_element = symbolDraggable[i].querySelector(':scope > g > g');

        let sizeRect = native_element.querySelector('rect');
        let x = parseInt(sizeRect.getAttribute('width'));
        let y = parseInt(sizeRect.getAttribute('height'));
        let ratio = x / y;
        let _x, _y;

        if (x >= y) {
          _x = 85;
          _y = 105 / ratio;
        } else {
          _y = 85;
          _x = 105 * ratio;
        }

        let sx = _x / x;
        let sy = _y / y;

        let tx = -sx * 60;
        let ty = -sy * 2 + 5;

        let transform = native_element.getAttribute('transform');
        let arr = transform?.split(' ') || [];
        transform = '';
        for (let j = 0; j < arr.length; j++) {
          if (!arr[j].includes('translate') && !arr[j].includes('scale')) {
            transform += arr[j] + ' ';
          }
        }
        transform += `translate(${tx}, ${ty}) scale(${sx}, ${sy})`;
        // native_element.setAttribute('transform', transform);
        const translate = 'translate(-65, 0)';
        native_element.setAttribute('transform', translate);

        // Translating Text
        let textSpan = titleText.querySelector('tspan');
        let text = textSpan.innerHTML;
        let foreignElement = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'foreignObject'
        );
        foreignElement.setAttribute('x', '110');
        foreignElement.setAttribute('y', '5');
        foreignElement.setAttribute('height', '26px');
        foreignElement.setAttribute('width', '200px');

        let titleDiv = document.createElement('div');
        titleDiv.style.height = '20px';
        titleDiv.style.width = '180px';
        titleDiv.style.fontSize = '12px';
        titleDiv.style.fontWeight = 'bold';
        titleDiv.style.lineHeight = '13px';
        titleDiv.innerHTML = text;
        foreignElement.appendChild(titleDiv);

        let toolTipElement = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'foreignObject'
        );
        toolTipElement.setAttribute('x', '70');
        toolTipElement.setAttribute('y', '35');
        toolTipElement.setAttribute('width', '200px');
        toolTipElement.setAttribute('height', '40px');
        let toolTipDiv = document.createElement('div');
        toolTipDiv.style.height = '40px';
        toolTipDiv.style.width = '200px';
        toolTipDiv.style.fontSize = '12px';
        toolTipDiv.style.lineHeight = '13px';
        toolTipDiv.innerHTML = toolTip;
        toolTipElement.appendChild(toolTipDiv);
        titleText.parentElement.appendChild(foreignElement);
        titleText.parentElement.appendChild(toolTipElement);
        titleText.remove();
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
