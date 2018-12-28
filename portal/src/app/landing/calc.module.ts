import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalcRoutingModule } from './calc-routing.module';
import { CalcComponent } from './landing/calc.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CalcComponent],
  imports: [
    CommonModule,
    CalcRoutingModule,
    SharedModule
  ]
})
export class CalcModule { }
