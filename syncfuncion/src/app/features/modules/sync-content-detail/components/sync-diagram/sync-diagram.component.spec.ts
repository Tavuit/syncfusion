import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncDiagramComponent } from './sync-diagram.component';

describe('SyncDiagramComponent', () => {
  let component: SyncDiagramComponent;
  let fixture: ComponentFixture<SyncDiagramComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SyncDiagramComponent]
    });
    fixture = TestBed.createComponent(SyncDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
