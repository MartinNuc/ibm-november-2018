import { Injectable } from '@angular/core';
import { Joke } from './joke';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(public http: HttpClient) { }

  loadJoke() {
    return this.http.get<Joke>('https://api.chucknorris.io/jokes/random');
  }
}
