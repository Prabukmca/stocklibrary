import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeaheadSearchBoxComponent } from './typeahead-search-box.component';

describe('TypeaheadSearchBoxComponent', () => {
  let component: TypeaheadSearchBoxComponent;
  let fixture: ComponentFixture<TypeaheadSearchBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeaheadSearchBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeaheadSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
