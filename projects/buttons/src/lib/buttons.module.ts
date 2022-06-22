import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonsComponent } from './buttons.component';
import { ButtonIconComponent } from './button-icon/button-icon.component';



@NgModule({
  declarations: [
    ButtonsComponent,
    ButtonIconComponent
  ],
  imports: [CommonModule
  ],
  exports: [
    ButtonsComponent
  ]
})
export class ButtonsModule { }
