import {Component, OnInit} from '@angular/core';
import { QuizzService } from '../../services/quizz/quizz.service';
import { Observable } from 'rxjs';
import { Quizz } from 'src/app/services/models/quizz.model';

@Component({
  selector: 'iam-quizz-list',
  templateUrl: './quizz-list.component.html',
  styleUrls: ['./quizz-list.component.scss']
})
export class QuizzListComponent implements OnInit {

  quizzs$: Observable<Quizz[]>;

  constructor(private quizzService: QuizzService) { }

  ngOnInit() {
    this.quizzs$ = this.quizzService.getAllQuizz();
  }

}

