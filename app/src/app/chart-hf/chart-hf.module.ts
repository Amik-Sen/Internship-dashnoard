import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChartHFPageRoutingModule } from './chart-hf-routing.module';

import { ChartHFPage } from './chart-hf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChartHFPageRoutingModule
  ],
  declarations: [ChartHFPage]
})
export class ChartHFPageModule {}
