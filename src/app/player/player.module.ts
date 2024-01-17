import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player/player.component';
import { WordCardDeckMfeWrapperModule } from '../word-card-deck-mfe-wrapper/word-card-deck-mfe-wrapper.module';
import { FlashCardDeckMfeWrapperModule } from '../flash-card-deck-mfe-wrapper/flash-card-deck-mfe-wrapper.module';



@NgModule({
  declarations: [
    PlayerComponent
  ],
  imports: [
    CommonModule,
    WordCardDeckMfeWrapperModule,
    FlashCardDeckMfeWrapperModule
  ]
})
export class PlayerModule { }
