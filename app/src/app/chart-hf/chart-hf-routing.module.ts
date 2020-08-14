import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartHFPage } from './chart-hf.page';

const routes: Routes = [
  {
    path: '',
    component: ChartHFPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartHFPageRoutingModule {}
