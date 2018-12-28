import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing/landing.component';
import { CalcRoutingModule } from './calc-routing.module';
import { CalcComponent } from './landing/calc.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LandingComponent, CalcComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    CalcRoutingModule,
    SharedModule
  ]
})
export class LandingModule { }
