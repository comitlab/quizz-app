import {Component, OnInit} from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import{QuizzService} from '../../services/quizz/quizz.service';
import { Observable } from 'rxjs';
import {Location} from '@angular/common';
import { Quizz } from 'src/app/services/models/quizz.model';
import { Question } from 'src/app/services/models/question.model';

@Component({
  selector: 'iam-quizz-detail',
  templateUrl: './quizz-detail.component.html',
  styleUrls: ['quizz-detail.component.scss']
})
export class QuizzDetailComponent implements OnInit {
  quizz$: Observable<Quizz>;
  questions$: Observable<Question[]>;

  constructor(private route: ActivatedRoute,
              private quizzService: QuizzService,
              private location: Location) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.quizz$ = this.quizzService.getSingleQuizz(id);
    const quizzId = this.route.snapshot.paramMap.get('id');
    this.questions$ = this.quizzService.getQuizzQuestons(quizzId);
  }

  // Go Back
  onGoBack(){
    this.location.back;
  }
}
