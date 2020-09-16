import {RouterModule, Routes} from '@angular/router';
import {QuizzListComponent} from './quizz-list';
import {QuizzDetailComponent} from './quizz-detail';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { routes } from '../app-routing.module';
import { NgModule } from '@angular/core';

export const QUIZZ_ROUTES: Routes = [
  { path: '', component: QuizzListComponent },
  { path: 'quizz/:id', component: QuizzDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'users', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class QuizzRoute { }