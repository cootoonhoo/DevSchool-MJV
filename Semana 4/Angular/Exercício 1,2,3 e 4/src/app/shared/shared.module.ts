import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlueTextDirective } from './directives/blue-text.directive';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BlueTextDirective
  ],
  imports: [
    CommonModule
  ],
  exports :[
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
