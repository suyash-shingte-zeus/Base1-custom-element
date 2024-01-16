import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MfeLoaderComponent } from './mfe-content/mfe-loader/mfe-loader.component';

const routes: Routes = [
  {path: '', component: MfeLoaderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
