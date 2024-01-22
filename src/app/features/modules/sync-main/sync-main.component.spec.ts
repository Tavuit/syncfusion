import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncMainComponent } from './sync-main.component';

describe('SyncMainComponent', () => {
  let component: SyncMainComponent;
  let fixture: ComponentFixture<SyncMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SyncMainComponent]
    });
    fixture = TestBed.createComponent(SyncMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
