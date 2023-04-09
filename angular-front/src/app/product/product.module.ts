import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { AppMaterialModule } from '../shared';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    AppMaterialModule,
    FlexLayoutModule
  ]
})
export class ProductModule { }
