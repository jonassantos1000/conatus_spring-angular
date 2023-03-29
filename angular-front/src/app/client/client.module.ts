import { ClientComponent } from './client.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { AppMaterialModule } from '../shared';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    ClientComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    AppMaterialModule,
    FlexLayoutModule
  ]
})
export class ClientModule { }
