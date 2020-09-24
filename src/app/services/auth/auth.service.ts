import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

const baseUrl = environment.apiUrl + '/user';
const registerUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  header = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  constructor(private http: HttpClient, public router: Router) { }

  registerUser(user) {
    return this.http.post<any>(`${registerUrl}/register`, user);
  }

  loginUser(user) {
    return this.http.post<any>(`${registerUrl}/login`, user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logoutUser(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
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
