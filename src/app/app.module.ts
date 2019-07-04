import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PmmgLibraryModule } from 'pmmg-library';
import { PrincipalComponent } from './principal/principal.component';
import { SecundariaComponent } from './secundaria/secundaria.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    SecundariaComponent
  ],
  imports: [
    BrowserModule,
    PmmgLibraryModule.forRoot(environment),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
