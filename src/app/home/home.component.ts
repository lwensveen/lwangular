import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service';
import { Observable } from 'rxjs';
import { Content } from '../services/content';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    $content: Observable<Content[]>;

    constructor(private contentService: ContentService) {
    }

    ngOnInit() {
        this.getContent();
    }


    getContent(): void {
        this.$content = this.contentService.getContent();
    }
}
