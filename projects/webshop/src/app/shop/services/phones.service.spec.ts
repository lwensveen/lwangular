import { TestBed } from '@angular/core/testing';

import { PhonesService } from './phones.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PhonesService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            HttpClientTestingModule
        ]
    }));

    it('should be created', () => {
        const service: PhonesService = TestBed.inject(PhonesService);
        expect(service).toBeTruthy();
    });
});
