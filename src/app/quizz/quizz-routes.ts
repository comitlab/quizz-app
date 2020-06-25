import {Routes} from '@angular/router';
import {QuizzListComponent} from './quizz-list';
import {QuizzDetailComponent} from './quizz-detail';

export const QUIZZ_ROUTES: Routes = [
  {
    path: '',
    component: QuizzListComponent
  }, {
    path: 'quizz/:id', // :idQuizz
    component: QuizzDetailComponent
  }
];
