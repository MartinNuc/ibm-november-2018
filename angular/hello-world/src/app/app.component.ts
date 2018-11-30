import { Component } from '@angular/core';
import { TimestampService } from './timestamp.service';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JokeService } from './joke.service';
import { Joke } from './joke';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  happy = true;
  counter = 0;
  show = false;

  dynamicClass = {
    big: true,
    red: true
  }
  myObservable$: Observable<Date>;
  joke: Joke;

  email: string;

  constructor(public timestampService: TimestampService,
              public jokeService: JokeService) {

                jokeService.loadJoke().subscribe(response => {
                  this.joke = response;
                })

              }

  toggleBig() {
    this.dynamicClass.big = !this.dynamicClass.big;
  }

  toggleRed() {
    this.dynamicClass.red = !this.dynamicClass.red;
  }



  increment() {
    // this.timestampArray.push(new Date());
    this.timestampService.recordCurrentTime();
    this.counter = this.counter + 1;
  }

  toggle() {
    this.show = !this.show;
  }

  switchMood() {
    this.happy = !this.happy;
  }

  consoleLog(text: string) {
    console.log('event received ' + text);
  }

  createObservable() {
    this.myObservable$ = interval(2000)
      .pipe(
        map(value => new Date())
      );
  }

  save() {

  }
}
