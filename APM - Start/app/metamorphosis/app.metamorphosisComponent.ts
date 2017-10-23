import {Component,OnInit } from '@angular/core';
import { Metamorphosis } from '../shared/models/metamorphosis/metamorphosis';
import { MetamorphosisService } from '../shared/services/metamorphosis/metamorphosis.service';

import { FilterPipe } from '../../app/metamorphosis/filter.pipe';

import { MasonryOptions } from 'angular2-masonry';

@Component({
    selector: 'metamorphosis',
    templateUrl: 'app/metamorphosis/metamorphosis.html',
    styleUrls: ['app/metamorphosis/metamorphosis.css',
    'app/metamorphosis/metamorphosismodal.css']
})


export class metamorphosisComponent implements OnInit {
    listMetamorphosis: Metamorphosis[];

    public myOptions: MasonryOptions = { 
        transitionDuration: '0.8s',
        fitWidth: true
    };

    constructor(private service: MetamorphosisService) {}

    ngOnInit() {
        this.service.getMetamorphosiss().then(metamorphosiss => this.listMetamorphosis = metamorphosiss);
    }

   
    
}
