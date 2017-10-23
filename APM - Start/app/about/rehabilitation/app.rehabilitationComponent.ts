import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component ({
    selector: 'rehabilitation',
    templateUrl: 'app/about/rehabilitation/rehabilitation.html',
    styleUrls: [
        'app/about/rehabilitation/rehabilitation.css',
        'app/about/iconImageCircle.css'
    ]
})

export class rehabilitationComponent implements OnInit {

    pageTitle = "Trening Rehabilitacyjny";
    pageDescription = "Niektórzy kilka razy szybciej wracają do sprawności po urazach- zastanawiałeś się dlaczego?";

    pageTitleIndividual = "Trening indywidualny"
    pageDescriptionIndividual = "Indywidualnie dopasowany trening rehabilitacyjny pozwala na utrwalenie efektów terapii i zmniejsza ryzyko nawrotu dolegliwości lub odniesienia kontuzji.";
    pageImageIndividual = "app/assets/rehabilitation/pageImageIndividual.png";

    pageTitleEndIndividual = "Zakończenie rehabilitacji";
    pageDescriptionEndIndividual = "Po zakończonej rehabilitacji, zalecane jest utrwalenie efektów terapii w trakcie indywidualnego treningu porehabilitacyjnego.";
    pageImageEndIndividual = "app/assets/rehabilitation/pageImageEndIndividual.png";

    pageTitlePatientProblems = "Częste błędy";
    pageDescriptionPatientProblems = "Zazwyczaj pacjenci zapominają w jaki sposób poprawnie wykonywać ćwiczenia lub nie dysponują odpowiednim sprzętem. W większości przypadków spada motywacja do samodzielnego wykonywania ćwiczeń.";
    pageImagePatientProblems = "app/assets/rehabilitation/pageImagePatientProblems.png";

    pageTitleIdeaGym = "Pomysł na siłownię";
    pageDescriptionIdeaGym = "Dlatego też stworzyliśmy siłownię porehabilitacyjną, gdzie każdy z pacjentów pod opieką trenera personalnego może kontynuować ćwiczenia. Wykorzystujemy wszelkie niezbędne przyrządy treningowe oraz metody terapeutyczne takie jak elementy stabilizacji kręgosłupa, wzmocnienie propriorecepcji (czucia głębokiego) czy treningu siłowego i wytrzymałościowego.";
    pageImageIdeaGym = "app/assets/rehabilitation/pageImageIdeaGym.png";

    ngOnInit() {
    }
}