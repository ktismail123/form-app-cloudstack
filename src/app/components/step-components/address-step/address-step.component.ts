import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavigationButtonsComponent } from '../../../shared/components/navigation-buttons/navigation-buttons.component';
import { QuestionnaireService } from '../../../service/questionnaire.service';

@Component({
  selector: 'app-address-step',
  standalone: true,
  imports: [ReactiveFormsModule, NavigationButtonsComponent],
  templateUrl: './address-step.component.html',
  styleUrls: ['./address-step.component.scss']
})
export class AddressStepComponent implements OnInit {
  @Output() next = new EventEmitter<void>();
  @Output() previous = new EventEmitter<void>();
  
  addressForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private questionnaireService: QuestionnaireService
  ) {
    this.addressForm = this.fb.group({
      address1: ['', Validators.required],
      address2: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Load saved data if available
    const formData = this.questionnaireService.getFormData();
    if (formData.address1) {
      this.addressForm.patchValue({
        address1: formData.address1,
        address2: formData.address2,
        city: formData.city,
        state: formData.state,
        zipCode: formData.zipCode
      });
    }
  }

  onNext(): void {
    if (this.addressForm.valid) {
      // Save form data to service
      this.questionnaireService.updateFormData({
        address1: this.addressForm.get('address1')?.value,
        address2: this.addressForm.get('address2')?.value,
        city: this.addressForm.get('city')?.value,
        state: this.addressForm.get('state')?.value,
        zipCode: this.addressForm.get('zipCode')?.value
      });
      this.next.emit();
    }
  }

  onPrevious(): void {
    this.previous.emit();
  }

  get isStepInvalid(): boolean {
    return this.addressForm.invalid;
  }
}