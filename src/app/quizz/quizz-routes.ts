import {  RouterModule, Routes} from '@angular/router';
import { QuizzListComponent } from './quizz-list';
import { QuizzDetailComponent } from './quizz-detail';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { routes } from '../app-routing.module';
import { NgModule } from '@angular/core';
import { AuthGuard } from '../services/authGuard/auth.guard';

export const QUIZZ_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'quizzs', component: QuizzListComponent, canActivate: [AuthGuard] },
  { path: 'quizz/:id', component: QuizzDetailComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },  
  { path: 'register', component: RegisterComponent},
  { path: 'users', component: UserComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class QuizzRoute { }