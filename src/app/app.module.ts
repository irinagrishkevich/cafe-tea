import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { ProductCardComponent } from './components/common/product-card/product-card.component';
import { MainComponent } from './components/pages/main/main.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { OrderComponent } from './components/pages/order/order.component';
import { ProductComponent } from './components/pages/product/product.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ProductService} from "./services/product.service";
import { TextTransformPipe } from './pipes/text-transform.pipe';
import { IsStringDirective } from './directives/is-string.directive';
import { IsNumberDirective } from './directives/is-number.directive';
import { IsAddressDirective } from './directives/is-address.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductCardComponent,
    MainComponent,
    ProductsComponent,
    OrderComponent,
    ProductComponent,
    TextTransformPipe,
    IsStringDirective,
    IsNumberDirective,
    IsAddressDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
