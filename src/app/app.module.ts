import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { AddQuizComponent } from './add-quiz/add-quiz.component';
import { QuizComponent } from './quiz/quiz.component';
import { AuthComponent } from './auth/auth.component';
import { from } from 'rxjs';

import { AuthService } from './services/auth.service';

const appRoutes: Routes = [
  {  path: 'add-quiz', component: AddQuizComponent },
  {  path: 'quiz-list', component: QuizListComponent },
  {  path: 'quiz-list/:id', component: QuizComponent },
  {  path: 'auth', component: AuthComponent },
  {  path: '', component: QuizListComponent },
  {  path: '**', redirectTo: '/quiz-list' }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuizListComponent,
    AddQuizComponent,
    QuizComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, { 
      enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
