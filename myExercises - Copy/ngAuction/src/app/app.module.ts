import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { StarsComponent } from './stars/stars.component';
import { ProductService } from './shared/product.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { SellerInfoComponent } from './seller-info/seller-info.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    CarouselComponent,
    FooterComponent,
    NavbarComponent,
    ProductItemComponent,
    ProductDetailComponent,
    StarsComponent,
    NotFoundComponent,
    SellerInfoComponent,
    ProductDescriptionComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  providers: [ProductService, {provide: LocationStrategy, useClass: HashLocationStrategy}, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
