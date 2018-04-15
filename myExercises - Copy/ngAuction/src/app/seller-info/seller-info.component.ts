import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nga-seller-info',
  templateUrl: './seller-info.component.html',
  styleUrls: ['./seller-info.component.css']
})
export class SellerInfoComponent implements OnInit {

  // constructor() { }

  sellerID: string;

  constructor(private _router: Router, route: ActivatedRoute) {
    this.sellerID = route.snapshot.paramMap.get('sid');
    console.log(`The SellerInfoComponent got the seller id ${this.sellerID}`);

   }

  ngOnInit() {
  }

}
