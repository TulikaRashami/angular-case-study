import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import { ListingPageComponent } from './listing-page/listing-page.component';


@NgModule({
  declarations: [
    ListingPageComponent
  ],
  imports: [
    CommonModule,
    ProductListRoutingModule
  ]
})
export class ProductListModule { }
