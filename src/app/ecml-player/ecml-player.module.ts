import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EcmlPlayerPageRoutingModule } from './ecml-player-routing.module';

import { EcmlPlayerPage } from './ecml-player.page';
import { CanvasPlayerService } from 'src/services/canvas-player.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EcmlPlayerPageRoutingModule
  ],
  declarations: [EcmlPlayerPage],
  providers: [CanvasPlayerService]
})
export class EcmlPlayerPageModule {}
