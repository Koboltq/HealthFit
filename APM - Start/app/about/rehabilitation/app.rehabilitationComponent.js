"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rehabilitationComponent = (function () {
    function rehabilitationComponent() {
        this.pageTitle = "Trening Rehabilitacyjny";
        this.pageDescription = "Niektórzy kilka razy szybciej wracają do sprawności po urazach- zastanawiałeś się dlaczego?";
        this.pageTitleIndividual = "Trening indywidualny";
        this.pageDescriptionIndividual = "Indywidualnie dopasowany trening rehabilitacyjny pozwala na utrwalenie efektów terapii i zmniejsza ryzyko nawrotu dolegliwości lub odniesienia kontuzji.";
        this.pageImageIndividual = "app/assets/rehabilitation/pageImageIndividual.png";
        this.pageTitleEndIndividual = "Zakończenie rehabilitacji";
        this.pageDescriptionEndIndividual = "Po zakończonej rehabilitacji, zalecane jest utrwalenie efektów terapii w trakcie indywidualnego treningu porehabilitacyjnego.";
        this.pageImageEndIndividual = "app/assets/rehabilitation/pageImageEndIndividual.png";
        this.pageTitlePatientProblems = "Częste błędy";
        this.pageDescriptionPatientProblems = "Zazwyczaj pacjenci zapominają w jaki sposób poprawnie wykonywać ćwiczenia lub nie dysponują odpowiednim sprzętem. W większości przypadków spada motywacja do samodzielnego wykonywania ćwiczeń.";
        this.pageImagePatientProblems = "app/assets/rehabilitation/pageImagePatientProblems.png";
        this.pageTitleIdeaGym = "Pomysł na siłownię";
        this.pageDescriptionIdeaGym = "Dlatego też stworzyliśmy siłownię porehabilitacyjną, gdzie każdy z pacjentów pod opieką trenera personalnego może kontynuować ćwiczenia. Wykorzystujemy wszelkie niezbędne przyrządy treningowe oraz metody terapeutyczne takie jak elementy stabilizacji kręgosłupa, wzmocnienie propriorecepcji (czucia głębokiego) czy treningu siłowego i wytrzymałościowego.";
        this.pageImageIdeaGym = "app/assets/rehabilitation/pageImageIdeaGym.png";
    }
    rehabilitationComponent.prototype.ngOnInit = function () {
    };
    return rehabilitationComponent;
}());
rehabilitationComponent = __decorate([
    core_1.Component({
        selector: 'rehabilitation',
        templateUrl: 'app/about/rehabilitation/rehabilitation.html',
        styleUrls: [
            'app/about/rehabilitation/rehabilitation.css',
            'app/about/iconImageCircle.css'
        ]
    })
], rehabilitationComponent);
exports.rehabilitationComponent = rehabilitationComponent;
//# sourceMappingURL=app.rehabilitationComponent.js.map