import { Component } from '@angular/core';
import { FormControl} from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: "app-root",
  template: `
       <h2>Observable events from formcontrol</h2>
      <input type="text" placeholder="Enter stock" [formControl]="searchInput">
    `
})
export class AppComponent {

  searchInput: FormControl = new FormControl('');


  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit(){

    this.searchInput.valueChanges
      .debounceTime(500)
      .subscribe(stock => this.getStockQuoteFromServer(stock));
  }

  getStockQuoteFromServer(stock: string) {

    console.log(`The price of ${stock} is ${(100*Math.random()).toFixed(4)}`);
  }
}
