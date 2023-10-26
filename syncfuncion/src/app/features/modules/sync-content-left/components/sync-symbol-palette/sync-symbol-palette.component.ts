import {Component, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  PaletteModel,
  SymbolPaletteModule,
  SymbolPreviewModel,
  MarginModel
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
export class SyncSymbolPaletteComponent {
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

  public getSymbolInfo(symbol: any) {
    return {fill: "white", fontSize: 10, description: {text: symbol?.['addInfo']?.['tooltip']}};
  };
}
