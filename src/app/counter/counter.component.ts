import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div>
      <input type="text" #myInput (keyup)="change.emit({text: myInput.value})">
    </div>
  `
})
export class CounterComponent {

  @Output()
  change: EventEmitter<any> = new EventEmitter<any>();

}

/*
Put an object in emit() since it takes only one argument.
*/
