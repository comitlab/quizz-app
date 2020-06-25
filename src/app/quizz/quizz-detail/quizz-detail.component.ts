import {Component, OnInit} from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import{QuizzService} from '../../services/quizz/quizz.service';
import { Observable } from 'rxjs';
import {Location} from '@angular/common';

@Component({
  selector: 'iam-quizz-detail',
  templateUrl: './quizz-detail.component.html',
  styleUrls: ['quizz-detail.component.scss']
})
export class QuizzDetailComponent implements OnInit {
  quizz$: Observable<any>;

  constructor(private route: ActivatedRoute,
              private quizzService: QuizzService,
              private location: Location) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.quizz$ = this.quizzService.getSingleQuizz(id);

    /*
    let id = this.route.snapshot.params['id'];
    this.quizzService.getSingleQuizz(id).subscribe(quizzDetails => {
      this.quizz$ = quizzDetails;
    })
    */
  }

  // Go Back
  onGoBack(){
    this.location.back;
  }
}
