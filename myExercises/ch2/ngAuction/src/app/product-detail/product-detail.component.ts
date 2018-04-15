import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'nga-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productID: string;
  configurationID: string;
  productCategory: string;
  sellerId: string;
  name: FormControl = new FormControl();

  constructor(private _router: Router, route: ActivatedRoute) {
    this.productID = route.snapshot.paramMap.get('pid');
    this.configurationID = route.snapshot.paramMap.get('cid');
    this.productCategory = route.snapshot.queryParamMap.get('category');
    this.sellerId = '888';
   }

   navigateToProductSeller () {
    this._router.navigate(['/product/666/999/seller/111']);
    }

  ngOnInit() {
  }


}
