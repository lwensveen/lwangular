import { TestBed } from '@angular/core/testing';

import { OperatingSystemService } from './operating-system.service';

describe('OperatingSystemService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: OperatingSystemService = TestBed.inject(OperatingSystemService);
        expect(service).toBeTruthy();
    });
});
