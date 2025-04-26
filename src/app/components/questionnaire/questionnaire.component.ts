// src/app/components/questionnaire/questionnaire.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { ProgressBarComponent } from '../../shared/components/progress-bar/progress-bar.component';

// Step Components
import { MovieGenreStepComponent } from '../step-components/movie-genre-step/movie-genre-step.component';
import { AngularExperienceStepComponent } from '../step-components/angular-experience-step/angular-experience-step.component';
import { FavoriteMovieStepComponent } from '../step-components/favorite-movie-step/favorite-movie-step.component';
import { MovieSnackStepComponent } from '../step-components/movie-snack-step/movie-snack-step.component';
import { AddressStepComponent } from '../step-components/address-step/address-step.component';
import { QuestionnaireService } from '../../service/questionnaire.service';

@Component({
  selector: 'app-questionnaire',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    ProgressBarComponent,
    MovieGenreStepComponent,
    AngularExperienceStepComponent,
    FavoriteMovieStepComponent,
    MovieSnackStepComponent,
    AddressStepComponent
  ],
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {
  questionnaireForm: FormGroup;
  currentStep = 1;
  totalSteps = 5;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private questionnaireService: QuestionnaireService
  ) {
    this.questionnaireForm = this.fb.group({});
  }

  ngOnInit(): void {
    this.currentStep = this.questionnaireService.getCurrentStep();
    this.totalSteps = this.questionnaireService.getTotalSteps();

    // Subscribe to changes in the current step
    this.questionnaireService.currentStep$.subscribe(step => {
      this.currentStep = step;
    });
  }

  getProgressValue(): number {
    return this.questionnaireService.getProgressValue();
  }

  nextStep(): void {
    this.questionnaireService.nextStep();
  }

  previousStep(): void {
    this.questionnaireService.previousStep();
  }

  exitAssessment(): void {
    this.router.navigate(['/']);
  }

  onSubmit(): void {
    console.log('Form submitted:', this.questionnaireService.getFormData());
    // Handle form submission logic here
    this.router.navigate(['/']);
  }
}