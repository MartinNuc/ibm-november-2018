import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  @Output()
  message = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  tellToParent() {
    this.message.emit('hello');
  }
}
