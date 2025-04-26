// src/app/shared/components/progress-bar/progress-bar.component.ts
import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

@Component({
  selector: 'app-progress-bar',
  imports: [ProgressbarModule],
  template: `
    <div class="progress-section">
      <progressbar [value]="value" [type]="'success'" [animate]="true"></progressbar>
      <div class="progress-steps">{{ currentStep }} of {{ totalSteps }}</div>
    </div>
  `,
  styles: [`
    .progress-section {
      max-width: 1000px;
      margin: 0 auto 2rem;
      width: 100%;
    }
    
    .progress-steps {
      font-size: 0.875rem;
      color: #333;
      margin-top: 0.5rem;
    }
  `]
})
export class ProgressBarComponent {
  @Input() value: number = 0;
  @Input() currentStep: number = 1;
  @Input() totalSteps: number = 5;
}