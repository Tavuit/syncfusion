import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncSymbolPaletteComponent } from './sync-symbol-palette.component';

describe('SyncSymbolPaletteComponent', () => {
  let component: SyncSymbolPaletteComponent;
  let fixture: ComponentFixture<SyncSymbolPaletteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SyncSymbolPaletteComponent]
    });
    fixture = TestBed.createComponent(SyncSymbolPaletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
