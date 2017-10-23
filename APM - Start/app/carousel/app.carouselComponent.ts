import { Component,Input } from '@angular/core';
import { trigger,state, style,   transition, animate,keyframes,group } from '@angular/animations';
import { Image } from './image.interface'; 
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'carousel',
    templateUrl: 'app/carousel/carousel.html',
    styleUrls: ['app/carousel/carousel.css', 'app/carousel/carouselcalendar.css'],
    animations: [
    trigger('flyInOut', [
        state('in', style({transform: 'translateX(0)'})),
        transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate('0.1s')
        ]),
        transition('* => void', [
        animate('0.1s', style({transform: 'translateX(100%)'}))
        ])
    ])
    ]
})

export class carouselComponent {
    public images = IMAGES;
    private showDiv: boolean = true;
    constructor() {
        Observable.interval(3000).subscribe(x=> {
            this.showDiv = this.showDiv ? false : true;
        });

        Observable.interval(2600).subscribe(x=> {
            //if(this.showDiv == false)
                //this.showDiv = true;
        });


    }


}


//IMAGES array implementing Image interface
var IMAGES: Image[] = [
    { 
        "title": "Health Fit",  
        "url": "app/assets/images/709.jpg",
    }
    ,
    { 
        "title": "Generation Gap", 
        "url": "app/assets/images/679.jpg" 
    }
];
