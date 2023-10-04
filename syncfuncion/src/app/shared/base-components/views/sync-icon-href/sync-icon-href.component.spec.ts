import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncIconHrefComponent } from './sync-icon-href.component';

describe('SyncIconHrefComponent', () => {
  let component: SyncIconHrefComponent;
  let fixture: ComponentFixture<SyncIconHrefComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SyncIconHrefComponent]
    });
    fixture = TestBed.createComponent(SyncIconHrefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
