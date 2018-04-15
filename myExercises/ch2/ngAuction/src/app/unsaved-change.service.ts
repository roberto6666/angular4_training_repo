import { Injectable } from '@angular/core';
import { CanDeactivate, Router } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@Injectable()
export class UnsavedChangeService implements CanDeactivate <ProductDetailComponent> {

  constructor(private _router: Router) {}
  canDeactivate(component: ProductDetailComponent) {
  if (component.name.dirty) {
  return window.confirm('You have unsaved changes. Still want to leave?');
  } else {
  return true;
  }
  }

}
