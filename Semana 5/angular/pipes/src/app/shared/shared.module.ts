import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonesPipe } from './pipes/phones.pipe';

@NgModule({
  declarations: [
    PhonesPipe
  ],
  imports: [
    CommonModule
  ],
  exports : [
    PhonesPipe
  ]
})
export class SharedModule { }
