import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordCardDeckMfeLoaderComponent } from './word-card-deck-mfe-loader/word-card-deck-mfe-loader.component';

@NgModule({
  declarations: [
    WordCardDeckMfeLoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WordCardDeckMfeLoaderComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WordCardDeckMfeWrapperModule { }
