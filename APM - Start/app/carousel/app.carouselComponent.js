"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var animations_1 = require("@angular/animations");
var Rx_1 = require("rxjs/Rx");
var carouselComponent = (function () {
    function carouselComponent() {
        var _this = this;
        this.images = IMAGES;
        this.showDiv = true;
        Rx_1.Observable.interval(3000).subscribe(function (x) {
            _this.showDiv = _this.showDiv ? false : true;
        });
        Rx_1.Observable.interval(2600).subscribe(function (x) {
            //if(this.showDiv == false)
            //this.showDiv = true;
        });
    }
    return carouselComponent;
}());
carouselComponent = __decorate([
    core_1.Component({
        selector: 'carousel',
        templateUrl: 'app/carousel/carousel.html',
        styleUrls: ['app/carousel/carousel.css', 'app/carousel/carouselcalendar.css'],
        animations: [
            animations_1.trigger('flyInOut', [
                animations_1.state('in', animations_1.style({ transform: 'translateX(0)' })),
                animations_1.transition('void => *', [
                    animations_1.style({ transform: 'translateX(-100%)' }),
                    animations_1.animate('0.1s')
                ]),
                animations_1.transition('* => void', [
                    animations_1.animate('0.1s', animations_1.style({ transform: 'translateX(100%)' }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], carouselComponent);
exports.carouselComponent = carouselComponent;
//IMAGES array implementing Image interface
var IMAGES = [
    {
        "title": "Health Fit",
        "url": "app/assets/images/709.jpg",
    },
    {
        "title": "Generation Gap",
        "url": "app/assets/images/679.jpg"
    }
];
//# sourceMappingURL=app.carouselComponent.js.map