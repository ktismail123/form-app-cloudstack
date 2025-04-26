// src/app/components/step-components/angular-experience-step/angular-experience-step.component.ts
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgFor } from '@angular/common';
import { NavigationButtonsComponent } from '../../../shared/components/navigation-buttons/navigation-buttons.component';
import { QuestionnaireService } from '../../../service/questionnaire.service';

@Component({
  selector: 'app-angular-experience-step',
  imports: [ReactiveFormsModule, NgFor, NavigationButtonsComponent],
  templateUrl: './angular-experience-step.component.html',
  styleUrls: ['./angular-experience-step.component.scss']
})
export class AngularExperienceStepComponent implements OnInit {
  @Output() next = new EventEmitter<void>();
  @Output() previous = new EventEmitter<void>();
  
  experienceForm: FormGroup;
  
  angularExperienceOptions = ['0-3 years', '4-6 years', '7 or more years'];

  constructor(
    private fb: FormBuilder,
    private questionnaireService: QuestionnaireService
  ) {
    this.experienceForm = this.fb.group({
      angularExperience: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Load saved data if available
    const formData = this.questionnaireService.getFormData();
    if (formData.angularExperience) {
      this.experienceForm.patchValue({
        angularExperience: formData.angularExperience
      });
    }
  }

  onNext(): void {
    if (this.experienceForm.valid) {
      // Save form data to service
      this.questionnaireService.updateFormData({
        angularExperience: this.experienceForm.get('angularExperience')?.value
      });
      this.next.emit();
    }
  }

  onPrevious(): void {
    this.previous.emit();
  }

  get isStepInvalid(): boolean {
    return this.experienceForm.invalid;
  }
}