import { Component, OnInit } from '@angular/core';
import { PhonesService } from '../services/phones.service';
import { ActivatedRoute } from '@angular/router';
import { Phone } from '../services/phones';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
    id: string;
    myForm: FormGroup;
    phone: Phone;
    step = 0;
    title: string;

    constructor(
        private $phonesService: PhonesService,
        private fb: FormBuilder,
        private activatedRoute: ActivatedRoute,
    ) {
    }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(params => {
            this.id = params.get('id');
            this.title = params.get('title');
        });

        this.$phonesService.getPhonebyId(this.title, this.id).subscribe(phone => this.phone = phone[0]);

        this.myForm = this.fb.group({
            contractDuration: ['1'],
            contractMinutes: ['1'],
        });
    }

    setStep(index: number) {
        this.step = index;
    }

    nextStep() {
        this.step++;
    }

    prevStep() {
        this.step--;
    }
}
