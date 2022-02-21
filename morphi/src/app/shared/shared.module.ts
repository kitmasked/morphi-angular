import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './button/button.component';
import { TextFieldComponent } from './text-field/text-field.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FooterComponent,
    ButtonComponent,
    TextFieldComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    FooterComponent,
    ButtonComponent,
    TextFieldComponent
  ]
})
export class SharedModule { }
