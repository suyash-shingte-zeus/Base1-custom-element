import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MfeLoaderComponent } from './mfe-loader/mfe-loader.component';



@NgModule({
  declarations: [
    MfeLoaderComponent
  ],
  imports: [
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MfeContentModule { }
