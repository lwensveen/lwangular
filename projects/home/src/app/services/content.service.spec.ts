import { TestBed } from '@angular/core/testing';

import { ContentService } from './content.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ContentService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            HttpClientTestingModule
        ]
    }));

    it('should be created', () => {
        const service: ContentService = TestBed.inject(ContentService);
        expect(service).toBeTruthy();
    });
});
