import { Component, Input } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [NgClass, NgFor],
  template: `
    <div class="progress-section">
      <div class="segmented-progress-bar">
        <div *ngFor="let step of steps; let i = index" 
            [ngClass]="{'progress-segment': true, 'active': i < currentStep, 'current': i+1 === currentStep}">
        </div>
      </div>
      <div class="progress-steps">{{ currentStep }} of {{ totalSteps }}</div>
    </div>
  `,
  styles: [`
    .progress-section {
      max-width: 1000px;
      margin: 0 auto 2rem;
      width: 100%;
    }
    
    .segmented-progress-bar {
      display: flex;
      width: 100%;
      height: 10px;
      overflow: hidden;
      background-color: transparent;
    }
    
    .progress-segment {
      flex: 1;
      height: 100%;
      background-color: #d9d9d9;
      margin: 0 2px;
      position: relative;
      border-radius: 0;
    }
    
    .progress-segment:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      margin-left: 0;
    }
    
    .progress-segment:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      margin-right: 0;
    }
    
    .progress-segment.active {
      background-color: #00AB8D; /* Green color to match the image */
    }
    
    .progress-segment.current {
      background-color: #00AB8D; /* Same green for current step */
    }
    
    .progress-steps {
      font-size: 0.875rem;
      color: #333;
      margin-top: 0.5rem;
    }
  `]
})
export class ProgressBarComponent {
  @Input() currentStep: number = 1;
  @Input() totalSteps: number = 5;
  
  get steps(): number[] {
    return Array(this.totalSteps).fill(0).map((_, i) => i + 1);
  }
}