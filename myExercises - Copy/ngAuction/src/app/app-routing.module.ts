import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './/product-detail//product-detail.component';
import { ProductItemComponent } from './/product-item//product-item.component';
import { NotFoundComponent } from './/not-found//not-found.component';
import { SellerInfoComponent } from './seller-info/seller-info.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { LoginService } from './login.service';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:pid/:cid', component: ProductDetailComponent, canActivate: [LoginService],
    children: [
      {path: '', component: ProductDescriptionComponent},
      {path: 'seller/:sid', component: SellerInfoComponent}
    ]
  },
  {path: 'login', component: LoginComponent},
  { path: '**', component: NotFoundComponent }
  // {path: 'product', component: ProductDetailComponent, canActivate: [LoginService]},



];

@NgModule({
//  imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
