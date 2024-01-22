import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncHeaderComponent } from './sync-header.component';

describe('SyncHeaderComponent', () => {
  let component: SyncHeaderComponent;
  let fixture: ComponentFixture<SyncHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SyncHeaderComponent]
    });
    fixture = TestBed.createComponent(SyncHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
