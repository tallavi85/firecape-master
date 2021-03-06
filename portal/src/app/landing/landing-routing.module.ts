import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { CalcComponent } from './landing/calc.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'pricing',
    component: CalcComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
