import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimestampService {
  timestampArray: Date[] = [];

  constructor() { }

  recordCurrentTime() {
    this.timestampArray.push(new Date());
  }
}
