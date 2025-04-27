import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { NavigationButtonsComponent } from '../../../shared/components/navigation-buttons/navigation-buttons.component';
import { QuestionnaireService } from '../../../service/questionnaire.service';

@Component({
  selector: 'app-favorite-movie-step',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf, NavigationButtonsComponent],
  templateUrl: './favorite-movie-step.component.html',
  styleUrls: ['./favorite-movie-step.component.scss']
})
export class FavoriteMovieStepComponent implements OnInit {
  @Output() next = new EventEmitter<void>();
  @Output() previous = new EventEmitter<void>();
  
  movieForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private questionnaireService: QuestionnaireService
  ) {
    this.movieForm = this.fb.group({
      favoriteMovies: this.fb.array([this.createMovieFormGroup()])
    });
  }

  ngOnInit(): void {
    // Load saved data if available
    const formData = this.questionnaireService.getFormData();
    if (formData.favoriteMovies && formData.favoriteMovies.length > 0) {
      // Clear default form array
      (this.movieForm.get('favoriteMovies') as FormArray).clear();
      
      // Add each saved movie
      formData.favoriteMovies.forEach(movie => {
        this.favoriteMoviesFormArray.push(this.fb.group({
          title: [movie.title, Validators.required],
          year: [movie.year, Validators.required]
        }));
      });
    }
  }

  createMovieFormGroup(): FormGroup {
    return this.fb.group({
      title: ['', Validators.required],
      year: ['', Validators.required]
    });
  }

  get favoriteMoviesFormArray(): FormArray {
    return this.movieForm.get('favoriteMovies') as FormArray;
  }

  addFavoriteMovie(): void {
    this.favoriteMoviesFormArray.push(this.createMovieFormGroup());
  }

  removeFavoriteMovie(index: number): void {
    if (this.favoriteMoviesFormArray.length > 1) {
      this.favoriteMoviesFormArray.removeAt(index);
    }
  }

  onNext(): void {
    if (this.movieForm.valid) {
      // Save form data to service
      this.questionnaireService.updateFormData({
        favoriteMovies: this.favoriteMoviesFormArray.value
      });
      this.next.emit();
    }
  }

  onPrevious(): void {
    this.previous.emit();
  }

  get isStepInvalid(): boolean {
    return this.movieForm.invalid;
  }
}