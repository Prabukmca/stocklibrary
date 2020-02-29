import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pk-typeahead-search-box',
  templateUrl : 'typeahead-search-box.component.html',  
  styles: []
})
export class TypeaheadSearchBoxComponent implements OnInit {
searchInput : any;

  constructor() { }

  ngOnInit() {
  }

}
