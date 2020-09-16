import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms'
import { Router } from '@angular/router';
import { User } from 'src/app/services/models/user.model';
import { AuthService } from 'src/app/services/user/user.service';

@Component({
  selector: 'iam-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  defaultSerie = "L2";

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
      birthDate: ['', [Validators.required]],
      birthplace: ['', [Validators.required]],
      telephone: ['', [Validators.required]],
      addTelephone: ['', [Validators.required]],
      cni: ['', [Validators.required, Validators.minLength(13)]],
      serie: ['', [Validators.required]],
      homeInstitution: ['', [Validators.required]],
      average: ['', [Validators.required], Validators.max(20)]
    })
  }

  onSubmitForm(){
    const formValue = this.registerForm.value;
    const newUser = new User(
      formValue['firstName'],
      formValue['lastName'],
      formValue['email'],
      formValue['birthDate'],
      formValue['birthplace'],
      formValue['telephone'],
      formValue['addTelephone'],
      formValue['cni'],
      formValue['serie'],
      formValue['homeInstitution'],
      formValue['average'],
    );
    this.authService.addUser(newUser);
    this.router.navigate(['/users'])
  }
}
