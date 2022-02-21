import { Component, Input, OnInit } from '@angular/core';
import { FieldState } from 'src/app/enums/field-state';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent implements OnInit {
  @Input() label: string = 'Field Label';
  @Input() fieldState: FieldState = FieldState.Editable;
  @Input() value: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  isEditable(): boolean {
    return this.fieldState === FieldState.Editable;
  }

  isReadOnly(): boolean {
    return this.fieldState === FieldState.ReadOnly;
  }

  isRedacted(): boolean {
    return this.fieldState === FieldState.Redacted;
  }

}
