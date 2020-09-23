import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

const baseUrl = environment.apiUrl + '/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  header = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  constructor(private http: HttpClient, public router: Router) { }

  registerUser(user: User): Observable<any> {
    return this.http.post<User>(`${baseUrl}/register`, user).pipe();
  }

  getAllUser(): Observable<any[]> {
    return this.http.get<User>(baseUrl).pipe(
      map((response: any) => response.data)
      );
  }

  getSingleUser(id:string) {
    return this.http.get<User>(`${baseUrl}/${id}`).pipe(
      map((response: any) => response.data), 
    );
  }
}
