import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Product, ProductService } from '../shared/services';
@Component({
  selector: 'nga-product',
  styleUrls: ['./product.component.scss'],
  templateUrl: './product.component.html'
})
export class ProductComponent {

  product$: Observable<Product>;
  suggestedProducts$: Observable<Product[]>;
  
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService) {
    this.product$ = this.route.paramMap
      .map(params => parseInt(params.get('productId') || '', 10))
      .filter(productId => !!productId)
      .switchMap(productId => this.productService.getById(productId));
      
    this.suggestedProducts$ = this.productService.getAll();
  }
}