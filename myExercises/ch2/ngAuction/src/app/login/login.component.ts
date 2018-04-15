import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nga-login',
  template: '<h1 class="home">Please login here</h1>',
  styles: ['.home {background: greenyellow}']
  })
  export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
