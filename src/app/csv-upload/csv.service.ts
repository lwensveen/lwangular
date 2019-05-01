import { Injectable } from '@angular/core';
import { Person } from './models/person';

@Injectable({
    providedIn: 'root'
})
export class CsvService {
    private headers = [];
    private persons: Person[] = [];
    private person: string[];

    constructor() {
    }

    extractData(data) {
        const allTextLines = data.split(/\r\n|\n/);

        allTextLines.slice(1).map((line) => {
            this.headers = replaceQuotes(allTextLines[0].split(','));
            this.person = replaceQuotes(line.split(','));

            this.persons.push({
                firstName: this.person[0],
                surname: this.person[1],
                issueCount: parseInt(this.person[2], 10),
                dateOfBirth: new Date(this.person[3]).toLocaleDateString()
            });
        });

        this.persons.sort((a, b) => a.issueCount > b.issueCount ? 1 : -1);

        return {
            data: {
                headers: this.headers,
                persons: this.persons
            }
        };
    }
}

function replaceQuotes(text: string[]): string[] {
    return text.map((column) => column.replace(/"/g, ''));
}
