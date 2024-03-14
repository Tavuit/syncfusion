import { TestBed } from '@angular/core/testing';

import { SymbolPaletteService } from './symbol-palette.service';

describe('SymbolPaletteService', () => {
  let service: SymbolPaletteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SymbolPaletteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
