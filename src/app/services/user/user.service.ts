import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';
import { Subject } from 'rxjs';

const baseUrl = environment.apiUrl + '/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

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

  private users: User[]= [
    {
      firstName: 'Mohamed', 
      lastName: 'SOW',
      email: 'sowmohamed96@gmail.com',
      birthDate: '20/11/1996', // date
      birthplace: 'Mbour',
      telephone: 781756385,
      addTelephone: 767552226,
      cni: 125478563214,
      serie: 'L2',
      homeInstitution: 'Lycée de Saly',
      average: 14.35,
    }
  ];
  userSubject =new Subject<User[]>();

  emitUser() {
  //  this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUser();
  }
}
