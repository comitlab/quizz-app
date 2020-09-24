import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators  } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'iam-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  //  loginUserData: {};

  constructor(private authService:  AuthService, 
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onLoginUser(form: NgForm) {
    const formValue = this.loginForm.value;
  //  console.log(formValue);

  this.authService.loginUser(formValue)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token)
        },
        err => console.log(err),
    )

    this.router.navigate(['/quizzs'])
  }

}
