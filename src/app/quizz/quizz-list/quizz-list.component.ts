import {Component, OnInit} from '@angular/core';
import { QuizzService } from '../../services/quizz/quizz.service';
import { Observable } from 'rxjs';

//
import { Router, ActivatedRoute } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'iam-quizz-list',
  templateUrl: './quizz-list.component.html',
  styleUrls: ['./quizz-list.component.scss']
})
export class QuizzListComponent implements OnInit {

  quizzs$: Observable<any[]>;

  public quizzId;
  constructor(private quizzService: QuizzService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.quizzs$ = this.quizzService.getAllQuizz();
    //
    let id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.quizzId = id;
  }

  // navigate towards single Quizz
  getSingleQuizz(quizzId: number) {
    this.router.navigate(['/all', quizzId]);
  }
}

