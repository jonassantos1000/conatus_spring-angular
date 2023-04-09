import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { AppMaterialModule } from '../shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EmployeeComponent } from './employee.component';


@NgModule({
  declarations: [
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    AppMaterialModule,
    FlexLayoutModule
  ]
})
export class EmployeeModule { }
