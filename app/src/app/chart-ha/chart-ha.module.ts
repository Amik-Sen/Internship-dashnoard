import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChartHAPageRoutingModule } from './chart-ha-routing.module';

import { ChartHAPage } from './chart-ha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChartHAPageRoutingModule
  ],
  declarations: [ChartHAPage]
})
export class ChartHAPageModule {}
