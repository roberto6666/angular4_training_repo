import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-inline',
  template: `
    <p>
      componente-inline works!
    </p>
    <h1>All Products</h1>
    <ul>
    <li *ngFor="let product of products">
    {{product.name|uppercase}}
    </li>
    </ul>

    <input type='text' placeholder="Enter shipping address">

  `,
  styles: []
})


export class ComponenteInlineComponent implements OnInit {

  // products: string[] = ['pere', 'mele', 'banane'];
  shippingAddress = 'prova';
   products: { name: string, type: string }[] = [
    {name: 'pere', type: 'frutta'},
    {name: 'mele', type: 'frutta'},
    {name: 'banane', type: 'frutta'}];
  constructor() { }

  ngOnInit() {
  }

}
