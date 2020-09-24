import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QUIZZ_ROUTES } from './quizz-routes';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Services
import { QuizzService } from '../services/quizz/quizz.service';
import { AuthService } from '../services/auth/auth.service';
import { CounterService } from '../services/counter/counter.service';

// Components
import { QuizzListComponent } from './quizz-list';
import { QuizzDetailComponent } from './quizz-detail';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CountdownComponent } from './countdown/countdown.component';
import { AuthGuard } from '../services/authGuard/auth.guard';
import { TokenInterceptorService } from '../services/interceptor/token-interceptor.service';

@NgModule({
  imports: [
    RouterModule.forChild(QUIZZ_ROUTES),
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    QuizzListComponent, 
    QuizzDetailComponent,
    LoginComponent, 
    RegisterComponent,
    UserComponent,
    CountdownComponent
  ],
  providers: [
    QuizzService,
    AuthService,
    AuthGuard,
    CounterService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
})
export class QuizzModule {}
