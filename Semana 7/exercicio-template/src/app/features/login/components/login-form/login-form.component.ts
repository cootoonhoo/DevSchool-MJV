import { UsersService } from './../../../../shared/services/users.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginInfo } from '../../models/loginInfo.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  loginForm = new FormGroup({
    user : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required),
  })
  hasUserFailedAuthentication : boolean = false;

  constructor(private usersService: UsersService,
    private router : Router) {

  }

  authenticate() {
    const loginData = this.loginForm.value as LoginInfo;
    const AuthenticatedUser = this.usersService.getUsersByUserAndEmail(loginData.user, loginData.password);

    if(AuthenticatedUser){
      sessionStorage.setItem('username', JSON.stringify(AuthenticatedUser))
      this.router.navigateByUrl(`store`);
     }
     else this.hasUserFailedAuthentication = true;
  }
}
