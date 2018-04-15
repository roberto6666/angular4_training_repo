import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'nga-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
  title = 'favazza';
  productId = 666;
  configurationId = 777;

  constructor(private _router: Router) {
  }

  navigateToProductDetail () {
  this._router.navigate(['/product/666/999']);
  }

  navigateToSportProductDetail () {
    this._router.navigate(['/product/666/999'], {queryParams: { category: 'sports'}});
    }

}
