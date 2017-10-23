"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var supportsPromise = Promise.resolve([
    {
        id: 1,
        title: 'Trening Personalny',
        image: 'app/assets/about/bicepsNew.png',
        url: '/personality',
        description: ''
    },
    {
        id: 2,
        title: 'Trening Rehabilitacyjny',
        image: 'app/assets/about/rehabilitationNew.png',
        url: '/rehabilitation',
        description: ''
    },
    {
        id: 3,
        title: 'Plan Treningowy',
        image: 'app/assets/about/school-calendarNew.png',
        url: '/trainingPlan',
        description: ''
    },
    {
        id: 4,
        title: 'Poradnia Dietetyczna',
        image: 'app/assets/about/weight-lossNew.png',
        url: '/diet',
        description: ''
    }
]);
var SupportService = (function () {
    function SupportService() {
    }
    SupportService.prototype.getSupports = function () {
        return supportsPromise;
    };
    SupportService.prototype.getSupport = function (title) {
        return supportsPromise.then(function (support) { return support.find(function (support) { return support.title === title; }); });
    };
    return SupportService;
}());
SupportService = __decorate([
    core_1.Injectable()
], SupportService);
exports.SupportService = SupportService;
//# sourceMappingURL=support.service.js.map