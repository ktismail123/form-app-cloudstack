import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-completed',
  imports: [],
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.scss'
})
export class CompletedComponent {
  @Output() next = new EventEmitter<void>();

  onNext(): void {
    this.next.emit();
  }
}
