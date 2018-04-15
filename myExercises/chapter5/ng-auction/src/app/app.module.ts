import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
// import {MATERIAL_COMPATIBILITY_MODE} from '@angular/material/core';
import {ProductService} from './shared/services';
import {RouterModule} from '@angular/router';
import { routes } from './app.routing';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    FlexLayoutModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
//  providers: [{provide: MATERIAL_COMPATIBILITY_MODE, useValue: true}],
  providers: [ProductService],

  bootstrap: [AppComponent]
})
export class AppModule { }
