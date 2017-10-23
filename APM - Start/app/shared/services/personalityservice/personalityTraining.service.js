"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var listPersonalityTraining = [
    {
        title: "Trening Personalny",
        image: "app/assets/personality/treningpersonalny.png",
        description: "Trening personalny to najlepsza forma \u0107wicze\u0144 oparta na \u015Bcis\u0142ej wsp\u00F3\u0142pracy Trenera z Klientem. \n            Podopieczny zawsze mo\u017Ce liczyc  na sta\u0142y nadz\u00F3r oraz kontrol\u0119 poprawno\u015Bci i bezpiecze\u0144stwa wykonywanych \u0107wicze\u0144. \n            Trener to przede wszystkim  \u201Ezastrzyk\u201C motywacji do dzia\u0142ania i wsparcie niezb\u0119dne podczas treningu. \n            Ka\u017Cdy z nas ma  r\u00F3\u017Cne oczekiwania oraz cele, dlatego trening personalny jest dopasowany do wymaga\u0144 i mo\u017Cliwo\u015Bci klienta, niezale\u017Cnie od jego wieku, p\u0142ci i sprawno\u015Bci fizycznej."
    },
    {
        title: "Zrzucenie wagi",
        image: "app/assets/personality/zrzuceniewagi.png",
        description: "Oty\u0142o\u015B\u0107 jest to problem, z kt\u00F3rym ci\u0119\u017Cko sobie poradzi\u0107 bez odpowiedniego wsparcia. \n            Dzi\u0119ki Nam jest to o wiele prostsze  \u2013 prawid\u0142owo wykonywane \u0107wiczenia i odpowiednio zbilansowana dieta to \n            najlepsze narz\u0119dzia w walce z nadwag\u0105."
    },
    {
        title: "Sprawność",
        image: "app/assets/personality/sprawnosc.png",
        description: "Sprawno\u015B\u0107 fizyczna jest nieodzownym elementem prawid\u0142owego funkcjonowania organizmu. \n            Dzia\u0142aj, nim b\u0119dzie za p\u00F3\u017Ano \u2013 systematyczne \u0107wiczenia to gwarancja spawno\u015Bci i lepszego samopoczucia na co dzie\u0144.."
    },
    {
        title: "Zdrowie",
        image: "app/assets/personality/zdrowie.png",
        description: "Jak pokazuj\u0105 liczne badania naukowe  aktywno\u015B\u0107 fizyczna wp\u0142ywa pozytywnie na o\u015Brodkowy uk\u0142ad \n            nerwowy oraz wspomaga prac\u0119 uk\u0142adu immunologicznego.  Poprawa pracy serca, uk\u0142adu naczyniowo-krwiono\u015Bnego, \n            obni\u017Cenie poziomu cholesterolu oraz lepsze funkcjonowanie  narz\u0105d\u00F3w wewn\u0119trznych to tylko niekt\u00F3re z pozytywych \n            aspekt\u00F3w treningu si\u0142owo-oporowego."
    },
    {
        title: "Sylwetka na medal",
        image: "app/assets/personality/sylwetkanamedal.png",
        description: "Sylwetka na medal.\n            Elementy treningu si\u0142owego s\u0105 niezb\u0119dne do osi\u0105gni\u0119cia mistrzowskiego wyniku.\n            Nasza oferta skierowana jest tak\u017Ce do zawodnik\u00F3w startuj\u0105cych w ro\u017Cnych dziedzinach sportowych.\n            Je\u015Bli marzysz o karierze w sportach sylwetkowych \u2013 mo\u017Cemy Ci pom\u00F3c."
    },
    {
        title: "Współpraca",
        image: "app/assets/personality/wspolpraca.png",
        description: "Skuteczn\u0105 realizacj\u0119 wyznaczonych cel\u00F3w,\n            Indywidualne podej\u015Bcie i trening dostosowany  do Twoich  mo\u017Cliwo\u015Bci fizycznych,\n            Pewno\u015B\u0107, \u017Ce wykonywane \u0107wiczenia s\u0105 dla Ciebie  bezpieczne,\n            Brak monotonii poprzez zastosowanie innowacyjnych metod treningowych,\n            Opiek\u0119 do\u015Bwiadczonego trenera, kt\u00F3ry skutecznie zmotywuje Ci\u0119 do efektywnej pracy,\n            Sta\u0142e monitorowanie post\u0119p\u00F3w treningowych,\n            Przyjazn\u0105 atmosfer\u0119 podczas treningu",
    }
];
var PersonalityTrainingService = (function () {
    function PersonalityTrainingService() {
    }
    PersonalityTrainingService.prototype.getPersonalityTrainingist = function () {
        return listPersonalityTraining;
    };
    return PersonalityTrainingService;
}());
PersonalityTrainingService = __decorate([
    core_1.Injectable()
], PersonalityTrainingService);
exports.PersonalityTrainingService = PersonalityTrainingService;
//# sourceMappingURL=personalityTraining.service.js.map