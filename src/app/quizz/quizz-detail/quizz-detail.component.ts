import {Component, OnInit} from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import{QuizzService} from '../../services/quizz/quizz.service';
import { Observable } from 'rxjs';
import {Location} from '@angular/common';
import { Quizz } from 'src/app/services/models/quizz.model';

@Component({
  selector: 'iam-quizz-detail',
  templateUrl: './quizz-detail.component.html',
  styleUrls: ['quizz-detail.component.scss']
})
export class QuizzDetailComponent implements OnInit {
  quizz$: Observable<Quizz>;

  constructor(private route: ActivatedRoute,
              private quizzService: QuizzService,
              private location: Location) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.quizz$ = this.quizzService.getSingleQuizz(id);
  }

  // Go Back
  onGoBack(){
    this.location.back;
  }
}
