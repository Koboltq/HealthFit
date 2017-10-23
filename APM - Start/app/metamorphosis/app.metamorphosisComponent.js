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
var metamorphosis_service_1 = require("../shared/services/metamorphosis/metamorphosis.service");
var metamorphosisComponent = (function () {
    function metamorphosisComponent(service) {
        this.service = service;
        this.myOptions = {
            transitionDuration: '0.8s',
            fitWidth: true
        };
    }
    metamorphosisComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getMetamorphosiss().then(function (metamorphosiss) { return _this.listMetamorphosis = metamorphosiss; });
    };
    return metamorphosisComponent;
}());
metamorphosisComponent = __decorate([
    core_1.Component({
        selector: 'metamorphosis',
        templateUrl: 'app/metamorphosis/metamorphosis.html',
        styleUrls: ['app/metamorphosis/metamorphosis.css',
            'app/metamorphosis/metamorphosismodal.css']
    }),
    __metadata("design:paramtypes", [metamorphosis_service_1.MetamorphosisService])
], metamorphosisComponent);
exports.metamorphosisComponent = metamorphosisComponent;
//# sourceMappingURL=app.metamorphosisComponent.js.map