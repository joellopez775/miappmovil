import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LunaPageRoutingModule } from './luna-routing.module';

import { LunaPage } from './luna.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LunaPageRoutingModule
  ],
  declarations: [LunaPage]
})
export class LunaPageModule {}
