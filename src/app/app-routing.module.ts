import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MfeLoaderComponent } from './mfe-content/mfe-loader/mfe-loader.component';
import { WordCardDeckMfeLoaderComponent } from './word-card-deck-mfe-wrapper/word-card-deck-mfe-loader/word-card-deck-mfe-loader.component';
import { FlashCardDeckMfeLoaderComponent } from './flash-card-deck-mfe-wrapper/flash-card-deck-mfe-loader/flash-card-deck-mfe-loader.component';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player/player.component';

const routes: Routes = [
  {path: '', component: PlayerComponent},
  {path: 'mfe-content', component: MfeLoaderComponent},
  {path: 'word-card', component: WordCardDeckMfeLoaderComponent},
  {path: 'flash-card', component: FlashCardDeckMfeLoaderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
