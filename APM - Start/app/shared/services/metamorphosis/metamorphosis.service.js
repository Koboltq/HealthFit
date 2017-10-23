"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var listMetamorphosisPromise = Promise.resolve([
    {
        id: 1,
        name: 'Krystyna',
        race: 'female',
        class: 'brick-item brick-item--height1',
        avatar: 'https://s-media-cache-ak0.pinimg.com/originals/9e/e7/09/9ee70904290dd780111be1feff7e7f03.jpg'
    },
    {
        id: 2,
        name: 'Franek',
        race: 'men',
        class: 'brick-item brick-item--height1',
        avatar: 'http://www.hotstarz.info/wp-content/uploads/2015/08/kevin-bacon.jpg'
    },
    {
        id: 3,
        name: 'Magda',
        race: 'female',
        class: 'brick-item brick-item--height1',
        avatar: 'https://s-media-cache-ak0.pinimg.com/originals/9e/e7/09/9ee70904290dd780111be1feff7e7f03.jpg'
    },
    {
        id: 4,
        name: 'Magda',
        race: 'female',
        class: 'brick-item brick-item--height1',
        avatar: 'https://s-media-cache-ak0.pinimg.com/originals/9e/e7/09/9ee70904290dd780111be1feff7e7f03.jpg'
    },
    {
        id: 5,
        name: 'Magda',
        race: 'female',
        class: 'brick-item brick-item--height1',
        avatar: 'https://s-media-cache-ak0.pinimg.com/originals/9e/e7/09/9ee70904290dd780111be1feff7e7f03.jpg'
    },
    {
        id: 6,
        name: 'Magda',
        race: 'female',
        class: 'brick-item brick-item--height2',
        avatar: 'https://s-media-cache-ak0.pinimg.com/originals/9e/e7/09/9ee70904290dd780111be1feff7e7f03.jpg'
    },
    {
        id: 7,
        name: 'Magda',
        race: 'female',
        class: 'brick-item brick-item--height1',
        avatar: 'https://s-media-cache-ak0.pinimg.com/originals/9e/e7/09/9ee70904290dd780111be1feff7e7f03.jpg'
    },
    {
        id: 8,
        name: 'Chris',
        race: 'men',
        class: 'brick-item brick-item--height1',
        avatar: 'http://www.hotstarz.info/wp-content/uploads/2015/08/kevin-bacon.jpg'
    }
]);
var MetamorphosisService = (function () {
    function MetamorphosisService() {
    }
    MetamorphosisService.prototype.getMetamorphosiss = function () {
        console.log(listMetamorphosisPromise);
        return listMetamorphosisPromise;
    };
    MetamorphosisService.prototype.getFilterMetamorphosis = function (race) {
        return listMetamorphosisPromise.then(function (meta) { return meta.find(function (meta) { return meta.race === race; }); });
    };
    return MetamorphosisService;
}());
MetamorphosisService = __decorate([
    core_1.Injectable()
], MetamorphosisService);
exports.MetamorphosisService = MetamorphosisService;
//# sourceMappingURL=metamorphosis.service.js.map