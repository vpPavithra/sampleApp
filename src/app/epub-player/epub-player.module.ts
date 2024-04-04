import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EpubPlayerPageRoutingModule } from './epub-player-routing.module';

import { EpubPlayerPage } from './epub-player.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EpubPlayerPageRoutingModule
  ],
  declarations: [EpubPlayerPage]
})
export class EpubPlayerPageModule {}
