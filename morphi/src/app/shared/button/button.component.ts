import { Component, Input, OnInit } from '@angular/core';
import { ButtonType } from 'src/app/enums/button-type';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() label: string = 'Button';
  @Input() enabled: boolean = true;
  @Input() type: string = ButtonType.Filled;
  
  constructor() { }

  ngOnInit(): void {
  }

}
