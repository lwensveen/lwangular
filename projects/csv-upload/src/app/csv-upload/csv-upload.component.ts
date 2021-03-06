import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Person } from '../models/person';
import { CsvService } from '../services/csv.service';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
    selector: 'app-csv-upload',
    templateUrl: './csv-upload.component.html',
    styleUrls: ['./csv-upload.component.scss']
})
export class CsvUploadComponent implements OnInit, OnDestroy {
    public title = 'CSV import';
    public $csv = new Subject<Person[]>();
    public $handleCSV = new Subject<any>();
    public $handleIssueCountFilter = new Subject<any>();

    private headers: string[];
    private persons: Person[] = [];
    private subscriptions: Subscription[] = [];
    private csvData: { headers: any[]; persons: Person[] };

    constructor(private csvService: CsvService) {
    }

    orderBy() {
        this.$csv.next(this.persons.reverse());
    }

    filterBy(props) {
        this.$csv.next(this.persons.filter(person => {
            return person.issueCount === props;
        }));
    }

    ngOnInit(): void {

        this.subscriptions.push(
            this.$handleCSV.pipe(
                distinctUntilChanged(),
            ).subscribe(evt => {
                    const files = evt.target.files;
                    const file = files[0];
                    const reader = new FileReader();
                    reader.readAsText(file);

                    reader.onload = () => {
                        const csv = reader.result;
                        this.csvData = this.csvService.extractData(csv).data;
                        this.persons = this.csvData.persons;
                        this.headers = this.csvData.headers;

                        this.$csv.next(this.persons);
                    };
                }
            ));

        this.subscriptions.push(
            this.$handleIssueCountFilter.pipe(
                distinctUntilChanged(),
            ).subscribe(evt => {
                selectFiltered(evt);
            }));
    }

    ngOnDestroy() {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }
}

function selectFiltered(evt: any) {
    if (evt.data) {
        return this.filterBy(parseInt(evt.data, 10));
    }

    this.$csv.next(this.persons);
}
