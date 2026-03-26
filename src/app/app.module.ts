import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularhookComponent } from './angularhook/angularhook.component';
import { TypesafetyComponent } from './typesafety/typesafety.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularhookComponent,
    TypesafetyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
