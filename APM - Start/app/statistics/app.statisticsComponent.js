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
var Rx_1 = require("rxjs/Rx");
var statistics_service_1 = require("../shared/services/statistics/statistics.service");
var statisticsComponent = (function () {
    function statisticsComponent(service) {
        this.service = service;
        this.value = 0;
    }
    statisticsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listStatistics = this.service.getStatisticss();
        //this.listStatistics = this.service.getStatisticss(;//.then(stat => this.listStatistics = stat);
        this.listStatistics.forEach(function (element) {
            _this.observableCountUp(element);
        });
    };
    statisticsComponent.prototype.observableCountUp = function (element) {
        this.subscriptionStatistics = Rx_1.Observable.interval(1).subscribe(function (x) {
            if (element.tickEnd >= 0 && element.tick) {
                element.tickEnd--;
                if (element.tickEnd <= 0)
                    element.tick = true;
                element.tickStart = (Number(element.tickStart) + 5).toString();
                return;
            }
            else {
                element.tick = true;
                //this.subscriptionStatistics.unsubscribe();
            }
        });
    };
    statisticsComponent.prototype.coutUp = function () {
        //this.value++;
    };
    return statisticsComponent;
}());
statisticsComponent = __decorate([
    core_1.Component({
        selector: 'statistics',
        templateUrl: 'app/statistics/statistics.html',
        styleUrls: ['app/statistics/statistics.css', 'app/statistics/statisticsbottom.css']
    }),
    __metadata("design:paramtypes", [statistics_service_1.StatisticsService])
], statisticsComponent);
exports.statisticsComponent = statisticsComponent;
//# sourceMappingURL=app.statisticsComponent.js.map