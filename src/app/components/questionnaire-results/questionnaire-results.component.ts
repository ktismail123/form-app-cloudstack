// questionnaire-results.component.ts
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { QuestionnaireService } from '../../service/questionnaire.service';

interface QuestionnaireData {
  movieGenres: string[];
  angularExperience: string;
  favoriteMovies: Array<{
    title: string;
    year: string;
  }>;
  movieSnack: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zipCode: string;
}

@Component({
  selector: 'app-questionnaire-results',
  imports: [NgFor, NgIf],
  templateUrl: './questionnaire-results.component.html',
  styleUrls: ['./questionnaire-results.component.scss']
})
export class QuestionnaireResultsComponent implements OnInit {

  private router = inject(Router);
  private questionnaireService = inject(QuestionnaireService);

  userData!: QuestionnaireData;


  ngOnInit(): void {
    // In a real application, you would load this data from a service
    this.userData = this.questionnaireService.getFormData() as QuestionnaireData;
  }

  home(): void {
    // Navigate back to the questionnaire
    this.router.navigate(['/']);
    this.questionnaireService.resetForm();

  }

 
}