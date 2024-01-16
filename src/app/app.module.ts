import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MfeContentModule } from './mfe-content/mfe-content.module';
import { MfeLoaderComponent } from './mfe-content/mfe-loader/mfe-loader.component';
import { MfeLoaderService } from './services/mfe-loader.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MfeContentModule
  ],
  providers: [
    MfeLoaderService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
