"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var usersPromise = Promise.resolve([
    {
        id: 1,
        name: 'Chris',
        username: 'sevilayha',
        avatar: 'http://www.hotstarz.info/wp-content/uploads/2015/08/kevin-bacon.jpg',
        descriptionsabout: "Mgr Rafa\u0142 Piwowar. Jestem trenerem personalnym z d\u0142ugim sta\u017Cem treningowym, by\u0142ym zawodnikiem tr\u00F3jboju si\u0142owego oraz kulturystyki IFBB. \nSport i dietetyka to nie tylko moje pasje, ale przede wszystkim s\u0105 sposobem na \u017Cycie.",
        descriptionawards: " 3 miejsce w og\u00F3lnopolskich zawodach kulturystyczny Hi\n Tech Body Show, oraz 2 miejsce w Og\u00F3lnopolskich Mistrzostwach \u015Al\u0105ska w tr\u00F3jboju si\u0142owym."
    },
    {
        id: 2,
        name: 'Nick',
        username: 'whatnicktweets',
        avatar: 'http://www.nbc.com/the-tonight-show/content/sites/nbcutsjf/files/styles/bit_stacked_resized/public/images/2015/11/11/michaelbjordan.jpg?itok=rexEEP8j',
        descriptionsabout: ''
    },
    {
        id: 3,
        name: 'Olivia',
        username: 'hollylawly',
        avatar: 'https://s-media-cache-ak0.pinimg.com/originals/9e/e7/09/9ee70904290dd780111be1feff7e7f03.jpg',
        descriptionsabout: ''
    }
]);
var UserService = (function () {
    function UserService() {
    }
    UserService.prototype.getUsers = function () {
        return usersPromise;
    };
    UserService.prototype.getUser = function (username) {
        return usersPromise.then(function (users) { return users.find(function (user) { return user.username === username; }); });
        // let user = usersPromise.then(users=> {
        //     return users.find(user => {
        //         return user.username === username;
        //     });
        // });
        // return user;
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map