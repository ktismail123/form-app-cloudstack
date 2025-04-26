// src/app/services/questionnaire.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface QuestionnaireData {
  movieGenres?: string[];
  angularExperience?: string;
  favoriteMovies?: {
    title: string;
    year: string;
  }[];
  movieSnack?: string;
  address1?: string;
  address2?: string;
  city?: string;
  state?: string;
  zipCode?: string;
}

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {
  private readonly totalSteps = 5;
  private currentStepSubject = new BehaviorSubject<number>(1);
  private formDataSubject = new BehaviorSubject<QuestionnaireData>({});

  // Expose observables for components to subscribe to
  currentStep$: Observable<number> = this.currentStepSubject.asObservable();
  formData$: Observable<QuestionnaireData> = this.formDataSubject.asObservable();

  constructor() {}

  getCurrentStep(): number {
    return this.currentStepSubject.value;
  }

  getTotalSteps(): number {
    return this.totalSteps;
  }

  getProgressValue(): number {
    return (this.getCurrentStep() / this.totalSteps) * 100;
  }

  nextStep(): void {
    if (this.getCurrentStep() < this.totalSteps) {
      this.currentStepSubject.next(this.getCurrentStep() + 1);
    }
  }

  previousStep(): void {
    if (this.getCurrentStep() > 1) {
      this.currentStepSubject.next(this.getCurrentStep() - 1);
    }
  }

  setStep(step: number): void {
    if (step >= 1 && step <= this.totalSteps) {
      this.currentStepSubject.next(step);
    }
  }

  updateFormData(data: Partial<QuestionnaireData>): void {
    this.formDataSubject.next({
      ...this.formDataSubject.value,
      ...data
    });
  }

  getFormData(): QuestionnaireData {
    return this.formDataSubject.value;
  }

  resetForm(): void {
    this.currentStepSubject.next(1);
    this.formDataSubject.next({});
  }
}