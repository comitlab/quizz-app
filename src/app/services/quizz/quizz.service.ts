import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';


import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {QuizzModel} from '../models/quizz.model';

const baseUrl = environment.apiUrl + '/quizz';

@Injectable()
export class QuizzService {

  constructor(private http: HttpClient) { }

  getAllQuizz(): Observable<QuizzModel[]> {
    return this.http.get(baseUrl + '/all').pipe(
      map((response: any) => response.data)
      );
  }

}

