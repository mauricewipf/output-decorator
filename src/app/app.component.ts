import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      Text: {{ searchString }}
    </div>
    <app-counter
      (change)="onChange($event)">
    </app-counter>
  `
})
export class AppComponent {

  public searchString: string;

  onChange(event) {
    // console.log(event);
    // console.log(event.text);
    this.searchString = event.text;
  }

}
