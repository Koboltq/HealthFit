"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dietComponent = (function () {
    function dietComponent() {
        this.pageTitle = "Poradnia Dietetyczna";
        this.pageDescription = "";
        this.pageTitleTheory = "Cel poradnii dietetycznej";
        this.pageDescriptionTheory = "Powszechnie wiadomo, że odpowiednie odżywianie jest niezbędne do prawidłowego funkcjonowania organizmu. Pomimo szerokiego dostępu do informacji na temat odżywiania otyłość jest nadal globalnym problemem. Nie trać czasu na błędne próby i zgłoś się do Nas!.";
        this.pageImageTheory = "app/assets/diet/pageImageTheory.png";
        this.pageTitleExperience = "Doświadczenie";
        this.pageDescriptionExperience = "Dietetycy ” HEALTH FIT” posiadają odpowiednie kwalifikacje oraz wieloletnie doświadczenie. To doskonali specjaliści w  zakresie odżywiania pojętym bardzo szeroko.";
        this.pageImageExperience = "app/assets/diet/pageImageExperience.png";
        this.pageTitleMainDiet = "Dieta ogólna";
        this.pageDescriptionMainDiet = "Dietetykę ogólna- skierowaną dla osób zdrowych, które chcą poprawić sylwetkę i zmienić nawyki żywieniowe. Pamiętajmy, że dieta to nie tylko odchudzanie, ale przede wszystkim sposób odżywiania i podstawa dobrego zdrowia, również psychicznego. Jednak aby dieta służyła zdrowiu i smukłej sylwetce, musi być prawidłowo zbilansowana tzn.  pełnowartościowa pod względem składników odżyw­czych potrzebnych do prawidłowego funkcjonowania organizmu.";
        this.pageImageMainDiet = "app/assets/diet/pageImageMainDiet.png";
        this.pageTitleSportDiet = "Dieta sportowa";
        this.pageDescriptionSportDiet = "Dietetykę sportowa- ofertę skierowana dla osób aktywnych fizycznie oraz zawodników wszystkich dyscyplin sportowych. Liczne badania potwierdzają, iż odpowiedni plan żywieniowy wpływa na maksymalizację  osiągów sportowych.";
        this.pageImageSportDiet = "app/assets/diet/pageImageSportDiet.png";
        this.pageContent = "Niekt\u00F3rzy kilka razy szybciej wracaj\u0105 do sprawno\u015Bci po urazach- zastanawia\u0142e\u015B si\u0119 dlaczego?\n\nIndywidualnie dopasowany trening rehabilitacyjny pozwala na utrwalenie efekt\u00F3w terapii i zmniejsza ryzyko nawrotu dolegliwo\u015Bci lub odniesienia kontuzji.\n\nPo zako\u0144czonej rehabilitacji, zalecane jest utrwalenie efekt\u00F3w terapii w trakcie indywidualnego treningu porehabilitacyjnego.\n\nZazwyczaj pacjenci zapominaj\u0105 w jaki spos\u00F3b poprawnie wykonywa\u0107 \u0107wiczenia lub nie dysponuj\u0105 odpowiednim sprz\u0119tem. W wi\u0119kszo\u015Bci przypadk\u00F3w spada motywacja do samodzielnego wykonywania \u0107wicze\u0144.\n\nDlatego te\u017C stworzyli\u015Bmy si\u0142owni\u0119 porehabilitacyjn\u0105, gdzie ka\u017Cdy z pacjent\u00F3w pod opiek\u0105 trenera personalnego mo\u017Ce kontynuowa\u0107 \u0107wiczenia. Wykorzystujemy wszelkie niezb\u0119dne przyrz\u0105dy treningowe oraz metody terapeutyczne takie jak elementy stabilizacji kr\u0119gos\u0142upa, wzmocnienie propriorecepcji (czucia g\u0142\u0119bokiego) czy treningu si\u0142owego i wytrzyma\u0142o\u015Bciowego.\n\nTrening rehabilitacyjny daje wi\u0119ksze szanse powrotu do zdrowia.\n\nDla kogo jest trening rehabilitacyjny:\n\ndla os\u00F3b kt\u00F3re chcia\u0142yby unikn\u0105\u0107 operacji;\ndla os\u00F3b po zabiegach operacyjnych;\ndla os\u00F3b po zako\u0144czonej rehabilitacji u fizjoterapeuty;\ndla os\u00F3b z wadami postawy;\ndla os\u00F3b po urazach traumatologicznych;\ndla os\u00F3b z atrofi\u0105 mi\u0119\u015Bniow\u0105;\ndla wszystkich os\u00F3b borykaj\u0105cymi si\u0119 z problemami kostno-stawowymi;";
    }
    dietComponent.prototype.ngOnInit = function () {
    };
    return dietComponent;
}());
dietComponent = __decorate([
    core_1.Component({
        selector: 'diet',
        templateUrl: 'app/about/diet/diet.html',
        styleUrls: [
            'app/about/diet/diet.css'
        ]
    })
], dietComponent);
exports.dietComponent = dietComponent;
//# sourceMappingURL=app.dietComponent.js.map