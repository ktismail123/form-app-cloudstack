import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularExperienceStepComponent } from './angular-experience-step.component';

describe('AngularExperienceStepComponent', () => {
  let component: AngularExperienceStepComponent;
  let fixture: ComponentFixture<AngularExperienceStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularExperienceStepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularExperienceStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
