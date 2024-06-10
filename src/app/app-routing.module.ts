import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'epub-player',
    loadChildren: () => import('./epub-player/epub-player.module').then( m => m.EpubPlayerPageModule)
  },
  {
    path: 'ecml-player',
    loadChildren: () => import('./ecml-player/ecml-player.module').then( m => m.EcmlPlayerPageModule)
  },
  // { 
  //   path: 'player', 
  //   loadChildren: () => import('./player/player.module').then(m => m.PlayerPageModule) 
  // },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
