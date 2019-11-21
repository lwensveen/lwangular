import { Component, OnInit } from '@angular/core';
import { PhonesService } from '../services/phones.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

    constructor(
        private $phonesService: PhonesService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        const id = +this.route.snapshot.paramMap.get('id');

        this.$phonesService.getPhonesbyId(id).subscribe(data => console.log(data));
    }

}
