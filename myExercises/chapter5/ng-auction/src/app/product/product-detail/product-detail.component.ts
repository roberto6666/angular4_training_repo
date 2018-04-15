import { Component, OnInit, Input } from '@angular/core';
import { Product, ProductService } from '../../shared/services';

@Component({
  selector: 'nga-product-detail',
  styleUrls: [ './product-detail.component.scss' ],
  templateUrl: './product-detail.component.html'
  })
  export class ProductDetailComponent {
  @Input() product: Product;
  }
