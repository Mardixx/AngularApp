import { Component, Input, output, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-custom-slider',
  standalone: true,
  imports: [],
  templateUrl: './custom-slider.component.html',
  styleUrl: './custom-slider.component.scss'
})
export class CustomSliderComponent {
  nameChange = output<string>();

  setNewName(newName: string) {
    this.nameChange.emit(newName);
  }

  @Input({transform: appendPx}) 
  
  get value() : string {
    return this.value;
  }
  set value(newValue: number) {
    this.value = newValue;
  };
}
  
function appendPx(value: number) {  
  return `${value}px`;
}