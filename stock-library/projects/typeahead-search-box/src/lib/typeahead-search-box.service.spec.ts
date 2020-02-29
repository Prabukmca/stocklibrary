import { TestBed } from '@angular/core/testing';

import { TypeaheadSearchBoxService } from './typeahead-search-box.service';

describe('TypeaheadSearchBoxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypeaheadSearchBoxService = TestBed.get(TypeaheadSearchBoxService);
    expect(service).toBeTruthy();
  });
});
