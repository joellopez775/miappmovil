import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LunaPage } from './luna.page';

const routes: Routes = [
  {
    path: '',
    component: LunaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LunaPageRoutingModule {}
