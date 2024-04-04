import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EpubPlayerPage } from './epub-player.page';

const routes: Routes = [
  {
    path: '',
    component: EpubPlayerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EpubPlayerPageRoutingModule {}
