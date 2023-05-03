import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { SignUpComponent } from './pages/signup.component';



@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports : [
    SignUpComponent
  ]
})
export class SignupModule { }
