import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Quizz } from '../models/quizz.model';

const baseUrl = environment.apiUrl + '/quizz';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  constructor(private http: HttpClient) { }

  getAllQuizz(): Observable<any[]> {
    return this.http.get<Quizz>(baseUrl + '/all').pipe(
      map((response: any) => response.data)
      );
  }

}
