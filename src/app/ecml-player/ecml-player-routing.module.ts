import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EcmlPlayerPage } from './ecml-player.page';

const routes: Routes = [
  {
    path: '',
    component: EcmlPlayerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EcmlPlayerPageRoutingModule {}
