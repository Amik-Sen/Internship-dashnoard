import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartHAPage } from './chart-ha.page';

const routes: Routes = [
  {
    path: '',
    component: ChartHAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartHAPageRoutingModule {}
