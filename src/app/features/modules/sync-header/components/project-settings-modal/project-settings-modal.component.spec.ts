import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSettingsModalComponent } from './project-settings-modal.component';

describe('ProjectSettingsModalComponent', () => {
  let component: ProjectSettingsModalComponent;
  let fixture: ComponentFixture<ProjectSettingsModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProjectSettingsModalComponent]
    });
    fixture = TestBed.createComponent(ProjectSettingsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
