import { UsersService } from '../../../shared/services/users.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignUpComponent {
  signUpForm: FormGroup = new FormGroup({
    name : new FormControl('',Validators.required),
    email : new FormControl('',[Validators.required, Validators.email]),
    username : new FormControl('',Validators.required),
    password : new FormControl('',[Validators.required, Validators.minLength(8)])
  });

  constructor(private router : Router, private usersService:UsersService) {
  }

  onSubmit(){
    const formData = this.signUpForm.value as User;
    this.usersService.createUser(formData);
    this.router.navigateByUrl('login');
  }
}
