"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var listStatisticsPromise = [
    {
        id: 1,
        tick: false,
        tickStart: '',
        tickEnd: 4000,
        image: 'app/assets/statistic/customer.png',
        description: 'Klienci'
    },
    {
        id: 2,
        tick: false,
        tickStart: '',
        tickEnd: 470,
        image: 'app/assets/statistic/metamorphosis.png',
        description: 'Przemiany'
    },
    {
        id: 3,
        tick: false,
        tickStart: '',
        tickEnd: 10,
        image: 'app/assets/statistic/year.png',
        description: 'Lata'
    },
    {
        id: 4,
        tick: false,
        tickStart: '',
        tickEnd: 8000,
        image: 'app/assets/statistic/kg.png',
        description: 'Kg'
    }
];
var StatisticsService = (function () {
    function StatisticsService() {
    }
    StatisticsService.prototype.getStatisticss = function () {
        return listStatisticsPromise;
    };
    StatisticsService.prototype.setStatisticsTick = function () {
    };
    return StatisticsService;
}());
StatisticsService = __decorate([
    core_1.Injectable()
], StatisticsService);
exports.StatisticsService = StatisticsService;
//# sourceMappingURL=statistics.service.js.map