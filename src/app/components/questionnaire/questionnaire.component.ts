import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { ProgressBarComponent } from '../../shared/components/progress-bar/progress-bar.component';

// Step Components
import { MovieGenreStepComponent } from '../step-components/movie-genre-step/movie-genre-step.component';
import { AngularExperienceStepComponent } from '../step-components/angular-experience-step/angular-experience-step.component';
import { FavoriteMovieStepComponent } from '../step-components/favorite-movie-step/favorite-movie-step.component';
import { MovieSnackStepComponent } from '../step-components/movie-snack-step/movie-snack-step.component';
import { AddressStepComponent } from '../step-components/address-step/address-step.component';
import { QuestionnaireService } from '../../service/questionnaire.service';
import { LandingComponent } from '../step-components/landing/landing.component';
import { CompletedComponent } from '../step-components/completed/completed.component';

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
    AddressStepComponent,
    LandingComponent,
    CompletedComponent,
  ],
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss'],
})
export class QuestionnaireComponent implements OnInit {
  questionnaireForm: FormGroup;
  currentStep = 1;
  totalSteps = 6;

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private questionnaireService = inject(QuestionnaireService);
  private route = inject(ActivatedRoute);

  constructor() {
    this.questionnaireForm = this.fb.group({});
  }

  ngOnInit(): void {
    this.currentStep = this.questionnaireService.getCurrentStep();
    this.totalSteps = this.questionnaireService.getTotalSteps();

    // Subscribe to changes in the current step
    this.questionnaireService.currentStep$.subscribe((step) => {
      console.log(step);
      
      this.currentStep =  step;
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
    this.questionnaireService.resetForm();
  }

  completed(){
    this.questionnaireService.resetForm();
  }

  updateQueryParams() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { step: this.currentStep },
      queryParamsHandling: 'merge', // merge with existing params
    });
  }

  onSubmit(): void {
    console.log('Form submitted:', this.questionnaireService.getFormData());
    this.currentStep = 6;
  }
}
