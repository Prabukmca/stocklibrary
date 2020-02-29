import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TypeaheadSearchBoxModule } from 'typeahead-search-box';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TypeaheadSearchBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
