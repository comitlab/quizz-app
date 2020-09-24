import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'iam-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  userCreated = new EventEmitter();

  //  registerUserData = {};

  constructor(private authService:  AuthService, 
              private router: Router,
              private formBuilder: FormBuilder) { 
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      birthDate: ['', [Validators.required]],
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      cni: ['', [Validators.required, Validators.minLength(13)]],
      pathway: ['', [Validators.required]],
      homeInstitution: ['', [Validators.required]],
      average: ['', [Validators.required], Validators.max(20)]
    })
  }

  onRegisterUser(){
    const formValue = this.registerForm.value;

    const newUser = {
      firstName: formValue.firstName,
      lastName: formValue.lastName,
      email: formValue.email,
      password: formValue.password,
      birthDate: formValue.birthDate,
      city: formValue.city,
      country: formValue.country,
      phone: formValue.phone,
      cni: formValue.cni,
      homeInstitution: formValue.homeInstitution,
      pathway: formValue.pathway,
      average: formValue.average
    }

    this.userCreated.emit(newUser);
  //  console.log(newUser);

    this.authService.registerUser(formValue)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token)
        },
        err => console.log(err),
    )

  //  this.router.navigate(['/users'])
  }
}
