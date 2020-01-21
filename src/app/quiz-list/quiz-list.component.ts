import { Component, OnInit, OnDestroy } from '@angular/core';
import { Quiz } from '../models/quiz.model';
import { Subscription } from 'rxjs/Subscription';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit, OnDestroy {

  quizs: Quiz[];
  quizSubscription: Subscription;

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.quizSubscription = this.quizService.quizSubject.subscribe(
      (quizs: Quiz[]) => {
        this.quizs = quizs;
      }
    );
    this.quizService.emitQuizs();
  }

  ngOnDestroy() {
    this.quizSubscription.unsubscribe();
  }

}
