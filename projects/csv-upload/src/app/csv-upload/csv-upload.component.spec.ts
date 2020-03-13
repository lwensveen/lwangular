import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvUploadComponent } from './csv-upload.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

describe('CsvUploadComponent', () => {
    let component: CsvUploadComponent;
    let fixture: ComponentFixture<CsvUploadComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                MatButtonModule,
                MatCardModule,
            ],
            declarations: [CsvUploadComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CsvUploadComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
