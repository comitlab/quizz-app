import { NgModule } from '@angular/core';
import { QuizzListComponent } from './quizz-list';
import { QuizzDetailComponent } from './quizz-detail';
import { RouterModule } from '@angular/router';
import { QUIZZ_ROUTES } from './quizz-routes';

// For using the directive *ngFor
import { CommonModule } from '@angular/common';
import { QuizzService } from '../services/quizz/quizz.service';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from '../services/user/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    RouterModule.forChild(QUIZZ_ROUTES),
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    QuizzListComponent, 
    QuizzDetailComponent,
    LoginComponent, 
    RegisterComponent,
    UserComponent
  ],
  providers: [
    QuizzService,
    AuthService
  ],
})
export class QuizzModule {}
