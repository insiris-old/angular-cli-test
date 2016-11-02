import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {DateComponentComponent} from 'date-component';
import { WibbleComponent } from './wibble/wibble.component';

@NgModule({
  declarations: [
    AppComponent,
    WibbleComponent,
    DateComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
