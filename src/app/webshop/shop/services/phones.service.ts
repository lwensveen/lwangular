import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Phone } from './phones';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class PhonesService {
    baseUrl = `${environment.backendUrl}`;

    constructor(private http: HttpClient) {
    }

    getPhones(): Observable<Phone[]> {
        return this.http.get<Phone[]>(this.baseUrl + '/api/phones').pipe(
            map(response => response),
        );
    }

    getPhonebyId(title, id): Observable<Phone> {
        return this.http.get<Phone>(this.baseUrl + '/api/phones/' + title + '/' + id).pipe(
            map(response => response),
        );
    }
}
