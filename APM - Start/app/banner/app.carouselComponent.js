"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var bannerComponent = (function () {
    function bannerComponent() {
        this.images = IMAGES;
    }
    return bannerComponent;
}());
bannerComponent = __decorate([
    core_1.Component({
        selector: 'banner',
        templateUrl: 'app/banner/banner.html',
        styleUrls: ['app/banner/banner.css']
    })
], bannerComponent);
exports.bannerComponent = bannerComponent;
//IMAGES array implementing Image interface
var IMAGES = [
    { "title": "We are covered", "url": "images/covered.jpg" },
    { "title": "Generation Gap", "url": "images/generation.jpg" },
    { "title": "Potter Me", "url": "images/potter.jpg" },
    { "title": "Pre-School Kids", "url": "images/preschool.jpg" },
    { "title": "Young Peter Cech", "url": "images/soccer.jpg" }
];
//# sourceMappingURL=app.carouselComponent.js.map