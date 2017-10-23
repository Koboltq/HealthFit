import { Component, OnInit } from '@angular/core';
import { Support } from '../shared/models/support/support';
import { SupportService } from '../shared/services/support/support.service';

@Component({
    selector: 'about',
    templateUrl: 'app/about/about.html',
    styleUrls: ['app/about/about.css']
})


export class aboutComponent  {
    supports: Support[];

    constructor(private service: SupportService) {}

    ngOnInit() {
        this.service.getSupports().then(supports => this.supports = supports);
    }

}