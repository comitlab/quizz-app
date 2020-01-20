import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authStatus: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
  }

  onSinIn() {
    this.authService.signIn().then(
      () => {
      //  console.log('Auth ok !');
        this.authStatus = this.authService.isAuth;
        this.router.navigate(['quizs-list']);
      }
    )
  }

  onSinOut() {
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }

}
