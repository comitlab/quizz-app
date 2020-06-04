import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Quizz } from '../models/quizz.model';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const baseUrl = environment.apiUrl + '/quizz';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  constructor(private http: HttpClient) { }

  getAllQuizz():Observable<any[]> {
    return this.http.get(baseUrl + '/all').pipe(
      map((response:any) => response.data) 
      );
  }

}