import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { TypeaheadSearchBoxComponent } from './typeahead-search-box.component';




@NgModule({
  declarations: [TypeaheadSearchBoxComponent],
  imports: [
    FormsModule
  ],
  exports: [TypeaheadSearchBoxComponent]
})
export class TypeaheadSearchBoxModule { }
