import { TestBed } from '@angular/core/testing';

import { CsvService } from './csv.service';

describe('CsvService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: CsvService = TestBed.inject(CsvService);
        expect(service).toBeTruthy();
    });
});
