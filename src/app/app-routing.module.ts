import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { 
    path: 'player', 
    loadChildren: () => import('./player/player.module').then(m => m.PlayerPageModule) },
  {
    path: 'epub-player',
    loadChildren: () => import('./epub-player/epub-player.module').then( m => m.EpubPlayerPageModule)
  },
  {
    path: 'ecml-player',
    loadChildren: () => import('./ecml-player/ecml-player.module').then( m => m.EcmlPlayerPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
