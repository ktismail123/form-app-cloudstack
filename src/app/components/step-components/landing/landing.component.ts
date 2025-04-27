import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-landing',
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  @Output() next = new EventEmitter<void>();

  onNext(): void {
    this.next.emit();
  }
}
