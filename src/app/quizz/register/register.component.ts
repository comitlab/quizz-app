import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms'
import { Router } from '@angular/router';
import { User } from 'src/app/services/models/user.model';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'iam-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private userService:  UserService, 
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
      birthDate: ['', [Validators.required]],
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      cni: ['', [Validators.required, Validators.minLength(13), Validators.maxLength(13)]],
      pathway: ['', [Validators.required]],
      homeInstitution: ['', [Validators.required]],
      average: ['', [Validators.required], Validators.max(20)]
    })
  }

  onSubmitForm(){
    const formValue = this.registerForm.value;
    const newUser = new User();

    const firstName = formValue.firstName;
    const lastName = formValue.lastName;
    const email = formValue.email;
    const password = formValue.password;
    const birthDate = formValue.birthDate;
    const city = formValue.city;
    const country = formValue.country;
    const phone = formValue.phone;
    const cni = formValue.cni;
    const homeInstitution = formValue.homeInstitution;
    const pathway = formValue.pathway;
    const average = formValue.average;

    this.userService.registerUser(formValue).subscribe(data => {
      console.log(data);
      console.log(formValue);
    })
  //  this.router.navigate(['/users'])
  }
}
