import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { QuestionnaireComponent } from './components/questionnaire/questionnaire.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'login', pathMatch: 'full'
    },
    {
        path: 'login', component: LoginComponent
    }, 
    {
        path: 'que', component: QuestionnaireComponent
    }
];
