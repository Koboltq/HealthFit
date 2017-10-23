"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var googleMapComponent = (function () {
    function googleMapComponent() {
        this.title = "My first AGM project";
        this.lat = 51.65;
        this.lng = 7.8;
    }
    googleMapComponent.prototype.ngOnInit = function () {
    };
    return googleMapComponent;
}());
googleMapComponent = __decorate([
    core_1.Component({
        //selector: 'agm-map',
        //TO DO: Add html
        templateUrl: 'app/googleMap/googleMap.html'
    })
], googleMapComponent);
exports.googleMapComponent = googleMapComponent;
//# sourceMappingURL=app.googleMapComponent.js.map