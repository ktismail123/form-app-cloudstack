// src/app/shared/shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { NavigationButtonsComponent } from './components/navigation-buttons/navigation-buttons.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProgressbarModule.forRoot()
  ],
  declarations: [],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    ProgressbarModule,
  ]
})
export class SharedModule {}