// not-found.component.ts
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
  constructor(
    private router: Router,
    private location: Location
  ) {}

  goBack(): void {
    // Try to go back in history if possible
    this.location.back();
  }
}