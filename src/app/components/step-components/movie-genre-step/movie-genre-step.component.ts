import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { NavigationButtonsComponent } from '../../../shared/components/navigation-buttons/navigation-buttons.component';
import { QuestionnaireService } from '../../../service/questionnaire.service';

@Component({
  selector: 'app-movie-genre-step',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NavigationButtonsComponent],
  templateUrl: './movie-genre-step.component.html',
  styleUrls: ['./movie-genre-step.component.scss']
})
export class MovieGenreStepComponent implements OnInit {
  @Output() next = new EventEmitter<void>();
  @Output() exit = new EventEmitter<void>();
  
  genreForm: FormGroup;
  
  movieGenres = [
    'Action',
    'Horror',
    'Drama',
    'Thriller',
    'Science Fiction',
    'Fantasy',
    'Western',
    'Romantic',
    'Comedy',
    'Kevin Hart Buddy Comedy',
    'Noir',
    'None of the above',
  ];

  constructor(
    private fb: FormBuilder,
    private questionnaireService: QuestionnaireService
  ) {
    this.genreForm = this.fb.group({
      movieGenres: this.fb.array([])
    });
  }

  ngOnInit(): void {
    // Load saved data if available
    const formData = this.questionnaireService.getFormData();
    if (formData.movieGenres && formData.movieGenres.length > 0) {
      formData.movieGenres.forEach(genre => {
        this.movieGenresFormArray.push(this.fb.control(genre));
      });
    }
  }

  get movieGenresFormArray(): FormArray {
    return this.genreForm.get('movieGenres') as FormArray;
  }

  onCheckboxChange(genre: string, event: any): void {
    const movieGenres = this.movieGenresFormArray;

    if (event.target.checked) {
      movieGenres.push(this.fb.control(genre));
    } else {
      const index = movieGenres.controls.findIndex(x => x.value === genre);
      if (index >= 0) {
        movieGenres.removeAt(index);
      }
    }
  }

  isGenreSelected(genre: string): boolean {
    return this.movieGenresFormArray.controls.some(
      control => control.value === genre
    );
  }

  onNext(): void {
    // Save form data to service
    this.questionnaireService.updateFormData({
      movieGenres: this.movieGenresFormArray.value
    });
    this.next.emit();
  }

  onExit(): void {
    this.exit.emit();
  }

  get isStepInvalid(): boolean {
    return this.movieGenresFormArray.length === 0;
  }
}