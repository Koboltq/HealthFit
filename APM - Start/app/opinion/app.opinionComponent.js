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
var core_2 = require("@angular/core");
var core_3 = require("@angular/core");
var core_4 = require("@angular/core");
var core_5 = require("@angular/core");
var core_6 = require("@angular/core");
var opinionUser_service_1 = require("../shared/services/opinion/opinionUser.service");
var Rx_1 = require("rxjs/Rx");
var opinionComponent = (function () {
    function opinionComponent(service, changeDetectorRef) {
        var _this = this;
        this.service = service;
        this.selectedUser = [];
        this.showDiv = true;
        this.changeDetectorRef = changeDetectorRef;
        this.orientation = "none";
        this.userOpinionList = this.service.getUserOpinionList();
        this.selectedUser = [];
        this.selectedUser.push(this.userOpinionList[Math.floor(Math.random() * this.userOpinionList.length)]);
        Rx_1.Observable.interval(3000).subscribe(function (x) {
            _this.showDiv = _this.showDiv ? false : true;
        });
        Rx_1.Observable.interval(2600).subscribe(function (x) {
            if (_this.showDiv == false)
                _this.showNextFriend();
        });
    }
    // I cycle to the next friend in the collection.
    opinionComponent.prototype.showNextFriend = function () {
        //setTime
        // Change the "state" for our animation trigger.
        this.orientation = "next";
        // Force the Template to apply the new animation state before we actually
        // change the rendered element view-model. If we don't force a change-detection,
        // the new [@orientation] state won't be applied prior to the "leave" transition;
        // which means that we won't be leaving from the "expected" state.
        this.changeDetectorRef.detectChanges();
        // Find the currently selected index.
        var index = this.userOpinionList.indexOf(this.selectedUser[0]);
        // Move the rendered element to the next index - this will cause the current item
        // to enter the ( "next" => "void" ) transition and this new item to enter the
        // ( "void" => "next" ) transition.
        var res = this.userOpinionList[index + 1]
            ? this.userOpinionList[index + 1]
            : this.userOpinionList[0];
        this.selectedUser = [];
        this.selectedUser.push(res);
    };
    // I cycle to the previous friend in the collection.
    opinionComponent.prototype.showPrevFriend = function () {
        // Change the "state" for our animation trigger.
        this.orientation = "prev";
        // Force the Template to apply the new animation state before we actually
        // change the rendered element view-model. If we don't force a change-detection,
        // the new [@orientation] state won't be applied prior to the "leave" transition;
        // which means that we won't be leaving from the "expected" state.
        this.changeDetectorRef.detectChanges();
        // Find the currently selected index.
        var index = this.userOpinionList.indexOf(this.selectedUser[0]);
        // Move the rendered element to the next index - this will cause the current item
        // to enter the ( "next" => "void" ) transition and this new item to enter the
        // ( "void" => "next" ) transition.
        var res = this.userOpinionList[index + 1]
            ? this.userOpinionList[index + 1]
            : this.userOpinionList[0];
        this.selectedUser = [];
        this.selectedUser.push(res);
        ;
    };
    return opinionComponent;
}());
opinionComponent = __decorate([
    core_3.Component({
        selector: 'opinion',
        templateUrl: 'app/opinion/opinion.html',
        styleUrls: ['app/opinion/opinion.css'],
        animations: [
            core_6.trigger('friendAnimation', [
                core_5.transition('void => *', [
                    core_4.style({
                        opacity: 0,
                        transform: 'translateX(-100%)'
                    }),
                    core_1.animate('0.1s')
                ]),
                core_5.transition('* => void', [
                    core_1.animate('0.1s', core_4.style({
                        opacity: 0,
                        transform: 'translateX(100%)'
                    }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [opinionUser_service_1.UserOpinionService, core_2.ChangeDetectorRef])
], opinionComponent);
exports.opinionComponent = opinionComponent;
//# sourceMappingURL=app.opinionComponent.js.map