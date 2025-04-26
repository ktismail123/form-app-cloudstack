// src/app/shared/components/navigation-buttons/navigation-buttons.component.ts
import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navigation-buttons',
  imports: [NgIf],
  template: `
    <div class="button-section">
      <ng-container *ngIf="currentStep === 1; else prevButton">
        <button type="button" class="exit-button" (click)="exit.emit()">Exit Assessment</button>
      </ng-container>
      
      <ng-template #prevButton>
        <button type="button" class="prev-button" (click)="previous.emit()">
          <span class="arrow-left">←</span> Previous Question
        </button>
      </ng-template>
      
      <button 
        type="button" 
        class="next-button" 
        (click)="currentStep === totalSteps ? submit.emit() : next.emit()"
        [disabled]="isStepInvalid"
      >
        {{ currentStep === totalSteps ? 'Submit' : 'Next' }}
      </button>
    </div>
  `,
  styles: [`
    .button-section {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: auto;
      padding-top: 2rem;
      padding-bottom: 1rem;
      width: 100%;
    }
    
    .exit-button, .prev-button {
      background-color: transparent;
      border: none;
      color: #2e74b5;
      font-size: 1rem;
      cursor: pointer;
      padding: 0.625rem;
      display: flex;
      align-items: center;
    }
    
    .arrow-left {
      margin-right: 0.5rem;
    }
    
    .exit-button:hover, .prev-button:hover {
      text-decoration: underline;
    }
    
    .next-button {
      background-color: #f5d547;
      border: none;
      padding: 0.9375rem 2.5rem;
      font-size: 1.125rem;
      font-weight: 500;
      cursor: pointer;
      border-radius: 4px;
    }
    
    .next-button:hover {
      background-color: #ecc82c;
    }
    
    .next-button:disabled {
      background-color: #f5e9a1;
      cursor: not-allowed;
    }
    
    @media (max-width: 576px) {
      .button-section {
        flex-direction: column-reverse;
        gap: 1rem;
      }
      
      .exit-button, .prev-button, .next-button {
        width: 100%;
        justify-content: center;
      }
    }
  `]
})
export class NavigationButtonsComponent {
  @Input() currentStep: number = 1;
  @Input() totalSteps: number = 5;
  @Input() isStepInvalid: boolean = false;
  
  @Output() previous = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();
  @Output() exit = new EventEmitter<void>();
  @Output() submit = new EventEmitter<void>();
}