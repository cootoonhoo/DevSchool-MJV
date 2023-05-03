import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreComponent } from './pages/store/store.component';



@NgModule({
  declarations: [
    StoreComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    StoreComponent
  ]
})
export class StoreModule { }
