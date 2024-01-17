import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlashCardDeckMfeLoaderComponent } from './flash-card-deck-mfe-loader/flash-card-deck-mfe-loader.component';



@NgModule({
  declarations: [
    FlashCardDeckMfeLoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FlashCardDeckMfeLoaderComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FlashCardDeckMfeWrapperModule { }
