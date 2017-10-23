"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var trainingPlanComponent = (function () {
    function trainingPlanComponent() {
        this.pageTitle = "Trening Rehabilitacyjny";
        this.pageDescriptionTrainingPlan = "Plan treningowy to przepis, kt\u00F3ry wskazuje nam kolejne dzia\u0142ania jakie musimy podj\u0105\u0107, aby poprawi\u0107 swoj\u0105 sylwetk\u0119 i mo\u017Cliwo\u015Bci wysi\u0142kowe. \nOdpowiednio dobrany plan \u0107wicze\u0144 zdecydowanie przyspiesza osi\u0105gni\u0119cie zauwa\u017Calnych efekt\u00F3w, a co za tym idzie satysfakcj\u0119 i zadowolenie Klienta z siebie i swoich post\u0119p\u00F3w.";
    }
    trainingPlanComponent.prototype.ngOnInit = function () {
    };
    return trainingPlanComponent;
}());
trainingPlanComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/about/trainingplan/trainingplan.html',
        styleUrls: [
            'app/about/trainingplan/trainingplan.css'
        ]
    })
], trainingPlanComponent);
exports.trainingPlanComponent = trainingPlanComponent;
//# sourceMappingURL=app.trainingPlanComponent.js.map