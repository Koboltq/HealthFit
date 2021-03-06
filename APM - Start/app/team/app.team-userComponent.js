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
var user_service_1 = require("../shared/services/user.service");
var teamUserComponent = (function () {
    function teamUserComponent(route, service) {
        this.route = route;
        this.service = service;
    }
    teamUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        var username = this.route.snapshot.params['username'];
        this.service.getUser(username).then(function (user) { return _this.user = user; });
    };
    return teamUserComponent;
}());
teamUserComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/team/teamuser.html',
        styleUrls: ['app/team/teamuser.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, user_service_1.UserService])
], teamUserComponent);
exports.teamUserComponent = teamUserComponent;
//# sourceMappingURL=app.team-userComponent.js.map