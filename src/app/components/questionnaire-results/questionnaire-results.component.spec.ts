import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireResultsComponent } from './questionnaire-results.component';

describe('QuestionnaireResultsComponent', () => {
  let component: QuestionnaireResultsComponent;
  let fixture: ComponentFixture<QuestionnaireResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionnaireResultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionnaireResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
