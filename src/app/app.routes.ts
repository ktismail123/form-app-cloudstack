import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { QuestionnaireComponent } from './components/questionnaire/questionnaire.component';
import { AuthGuard } from './core/guards/auth.guard';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { NotFoundComponent } from './components/auth/not-found/not-found.component';
import { QuestionnaireResultsComponent } from './components/questionnaire-results/questionnaire-results.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'form',
        component: QuestionnaireComponent
      },
      {
        path: 'result',
        component: QuestionnaireResultsComponent
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];