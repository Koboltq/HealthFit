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
var router_1 = require("@angular/router");
var support_service_1 = require("../../shared/services/support/support.service");
var personalityTrainingComponent = (function () {
    function personalityTrainingComponent(route, service) {
        this.route = route;
        this.service = service;
    }
    personalityTrainingComponent.prototype.ngOnInit = function () {
        var moduleName = this.route.snapshot.params['title'];
        this.service.getSupport(moduleName);
    };
    return personalityTrainingComponent;
}());
personalityTrainingComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/about/modulepersonality/modulepersonality.html',
        styleUrls: ['app/about/modulepersonality/modulepersonality.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, support_service_1.SupportService])
], personalityTrainingComponent);
exports.personalityTrainingComponent = personalityTrainingComponent;
//# sourceMappingURL=app.personalityTrainingComponent.js.map