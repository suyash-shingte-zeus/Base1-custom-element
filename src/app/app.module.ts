import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MfeContentModule } from './mfe-content/mfe-content.module';
import { MfeLoaderComponent } from './mfe-content/mfe-loader/mfe-loader.component';
import { MfeLoaderService } from './services/mfe-loader.service';
import { WordCardDeckMfeWrapperModule } from './word-card-deck-mfe-wrapper/word-card-deck-mfe-wrapper.module';
import { FlashCardDeckMfeWrapperModule } from './flash-card-deck-mfe-wrapper/flash-card-deck-mfe-wrapper.module';
import { PlayerModule } from './player/player.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MfeContentModule,
    WordCardDeckMfeWrapperModule,
    FlashCardDeckMfeWrapperModule,
    PlayerModule
  ],
  providers: [
    MfeLoaderService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
