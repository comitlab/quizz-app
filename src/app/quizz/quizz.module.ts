import {NgModule} from '@angular/core';
import {QuizzListComponent} from './quizz-list';
import {QuizzDetailComponent} from './quizz-detail';
import {RouterModule} from '@angular/router';
import {QUIZZ_ROUTES} from './quizz-routes';

// For using the directive *ngFor
import { CommonModule } from '@angular/common';
import {QuizzService} from '../services/quizz/quizz.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    RouterModule.forChild(QUIZZ_ROUTES),
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    QuizzListComponent, 
    QuizzDetailComponent
  ],
  providers: [
    QuizzService
  ],
})
export class QuizzModule {}
