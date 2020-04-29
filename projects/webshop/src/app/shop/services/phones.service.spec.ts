import { TestBed } from '@angular/core/testing';

import { PhonesService } from './phones.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Data } from '@angular/router';
import { environment } from '../../../environments/environment';

describe('PhonesService', () => {
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    let service: PhonesService;

    const baseUrl = `${environment.backendUrl}`;
    const testUrl = baseUrl + '/api/phones';

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        });

        service = TestBed.inject(PhonesService);
        httpClient = TestBed.inject(HttpClient);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('can test HttpClient.get', () => {
        const testData: Data = {name: 'Test Data'};

        // Make an HTTP GET request
        httpClient.get<Data>(testUrl)
            .subscribe(data =>
                // When observable resolves, result should match test data
                expect(data).toEqual(testData)
            );

        // The following `expectOne()` will match the request's URL.
        // If no requests or multiple requests matched that URL
        // `expectOne()` would throw.
        const req = httpTestingController.expectOne(testUrl);

        // Assert that the request is a GET.
        expect(req.request.method).toEqual('GET');

        // Respond with mock data, causing Observable to resolve.
        // Subscribe callback asserts that correct data was returned.
        req.flush(testData);

        // Finally, assert that there are no outstanding requests.
        httpTestingController.verify();
    });

    it('can test for 404 error', () => {
        const emsg = 'deliberate 404 error';

        httpClient.get<Data[]>(testUrl).subscribe(
            data => fail('should have failed with the 404 error'),
            (error: HttpErrorResponse) => {
                expect(error.status).toEqual(404, 'status');
                expect(error.error).toEqual(emsg, 'message');
            }
        );

        const req = httpTestingController.expectOne(testUrl);

        // Respond with mock error
        req.flush(emsg, {status: 404, statusText: 'Not Found'});
    });

    afterEach(() => {
        // After every test, assert that there are no more pending requests.
        httpTestingController.verify();
    });
});
