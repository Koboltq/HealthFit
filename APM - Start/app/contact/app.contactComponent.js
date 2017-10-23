"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var contact_1 = require("./contact");
var contactComponent = (function () {
    function contactComponent() {
        this.listNotificationTypes = ['Dieta', 'Plan treningowy', 'Inne'];
        this.model = new contact_1.Contact(1, '', '', this.listNotificationTypes[0], '');
        this.submitted = false;
    }
    contactComponent.prototype.onSubmit = function () { this.submitted = true; };
    return contactComponent;
}());
contactComponent = __decorate([
    core_1.Component({
        selector: 'contact-form',
        templateUrl: 'app/contact/contact.html',
        styleUrls: ['app/contact/contact.css']
    })
], contactComponent);
exports.contactComponent = contactComponent;
//# sourceMappingURL=app.contactComponent.js.map