import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductCardComponent} from "./components/product-card/product-card.component";
import {IsAddressDirective} from "./directives/is-address.directive";
import {IsNumberDirective} from "./directives/is-number.directive";
import {IsStringDirective} from "./directives/is-string.directive";
import {TextTransformPipe} from "./pipes/text-transform.pipe";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    ProductCardComponent,
    IsAddressDirective,
    IsNumberDirective,
    IsStringDirective,
    TextTransformPipe

  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    ProductCardComponent,
    IsAddressDirective,
    IsNumberDirective,
    IsStringDirective,
    TextTransformPipe
  ]
})
export class SharedModule { }
