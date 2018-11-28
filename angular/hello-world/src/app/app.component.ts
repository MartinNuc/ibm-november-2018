import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  happy = true;
  counter = 0;
  show = false;

  toggle() {
    this.show = !this.show;
  }

  increment() {
    this.counter = this.counter + 1;
  }

  switchMood() {
    this.happy = !this.happy;
  }
}
