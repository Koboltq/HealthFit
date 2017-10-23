import { Injectable } from '@angular/core';
import { PersonalityTraining } from '../../models/personality/personalitytraining';


const listPersonalityTraining: PersonalityTraining[] =[
        {
            title: "Trening Personalny",
            image: "app/assets/personality/treningpersonalny.png",
            description: `Trening personalny to najlepsza forma ćwiczeń oparta na ścisłej współpracy Trenera z Klientem. 
            Podopieczny zawsze może liczyc  na stały nadzór oraz kontrolę poprawności i bezpieczeństwa wykonywanych ćwiczeń. 
            Trener to przede wszystkim  „zastrzyk“ motywacji do działania i wsparcie niezbędne podczas treningu. 
            Każdy z nas ma  różne oczekiwania oraz cele, dlatego trening personalny jest dopasowany do wymagań i możliwości klienta, niezależnie od jego wieku, płci i sprawności fizycznej.`
        },
        { 
            title: "Zrzucenie wagi", 
            image: "app/assets/personality/zrzuceniewagi.png", 
            description: `Otyłość jest to problem, z którym ciężko sobie poradzić bez odpowiedniego wsparcia. 
            Dzięki Nam jest to o wiele prostsze  – prawidłowo wykonywane ćwiczenia i odpowiednio zbilansowana dieta to 
            najlepsze narzędzia w walce z nadwagą.`
        },
        {
            title: "Sprawność", 
            image: "app/assets/personality/sprawnosc.png", 
            description: `Sprawność fizyczna jest nieodzownym elementem prawidłowego funkcjonowania organizmu. 
            Działaj, nim będzie za późno – systematyczne ćwiczenia to gwarancja spawności i lepszego samopoczucia na co dzień..`
        },
        {
            title: "Zdrowie", 
            image: "app/assets/personality/zdrowie.png", 
            description: `Jak pokazują liczne badania naukowe  aktywność fizyczna wpływa pozytywnie na ośrodkowy układ 
            nerwowy oraz wspomaga pracę układu immunologicznego.  Poprawa pracy serca, układu naczyniowo-krwionośnego, 
            obniżenie poziomu cholesterolu oraz lepsze funkcjonowanie  narządów wewnętrznych to tylko niektóre z pozytywych 
            aspektów treningu siłowo-oporowego.`
        },
        {
            title: "Sylwetka na medal",
            image: "app/assets/personality/sylwetkanamedal.png",
            description: `Sylwetka na medal.
            Elementy treningu siłowego są niezbędne do osiągnięcia mistrzowskiego wyniku.
            Nasza oferta skierowana jest także do zawodników startujących w rożnych dziedzinach sportowych.
            Jeśli marzysz o karierze w sportach sylwetkowych – możemy Ci pomóc.`
        },
        {
            title: "Współpraca",
            image:"app/assets/personality/wspolpraca.png",
            description: `Skuteczną realizację wyznaczonych celów,
            Indywidualne podejście i trening dostosowany  do Twoich  możliwości fizycznych,
            Pewność, że wykonywane ćwiczenia są dla Ciebie  bezpieczne,
            Brak monotonii poprzez zastosowanie innowacyjnych metod treningowych,
            Opiekę doświadczonego trenera, który skutecznie zmotywuje Cię do efektywnej pracy,
            Stałe monitorowanie postępów treningowych,
            Przyjazną atmosferę podczas treningu`,
        }
];


@Injectable()

export class PersonalityTrainingService {
    public getPersonalityTrainingist() {
        return listPersonalityTraining;
    }
} 