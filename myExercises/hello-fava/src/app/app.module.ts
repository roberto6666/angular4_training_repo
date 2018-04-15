import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponenteInlineComponent } from './componente-inline/componente-inline.component';
import { ProductsComponent } from './products/products.component';
import { ProductService } from './shared/product.service';


@NgModule({
  declarations: [
    AppComponent,
    ComponenteInlineComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
