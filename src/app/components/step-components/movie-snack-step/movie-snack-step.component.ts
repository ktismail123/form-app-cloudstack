import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass, NgFor } from '@angular/common';
import { NavigationButtonsComponent } from '../../../shared/components/navigation-buttons/navigation-buttons.component';
import { QuestionnaireService } from '../../../service/questionnaire.service';

@Component({
  selector: 'app-movie-snack-step',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgClass, NavigationButtonsComponent],
  templateUrl: './movie-snack-step.component.html',
  styleUrls: ['./movie-snack-step.component.scss']
})
export class MovieSnackStepComponent implements OnInit {
  @Output() next = new EventEmitter<void>();
  @Output() previous = new EventEmitter<void>();
  
  snackForm: FormGroup;
  
  favoriteSnack = [
    'Popcorn',
    'Junior Mints',
    'Skittles',
    'Nachos',
    'Milk Duds',
    'I only watch Criterion Collection films at Arthouses that disallow snacks because there might be a crinkling sound that disrupts other patrons.',
  ];

  constructor(
    private fb: FormBuilder,
    private questionnaireService: QuestionnaireService
  ) {
    this.snackForm = this.fb.group({
      movieSnack: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Load saved data if available
    const formData = this.questionnaireService.getFormData();
    if (formData.movieSnack) {
      this.snackForm.patchValue({
        movieSnack: formData.movieSnack
      });
    }
  }

  onNext(): void {
    if (this.snackForm.valid) {
      // Save form data to service
      this.questionnaireService.updateFormData({
        movieSnack: this.snackForm.get('movieSnack')?.value
      });
      this.next.emit();
    }
  }

  onPrevious(): void {
    this.previous.emit();
  }

  isLongOption(option: string): boolean {
    return option.length > 50;
  }

  get isStepInvalid(): boolean {
    return this.snackForm.invalid;
  }
}