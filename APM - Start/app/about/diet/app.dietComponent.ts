import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component ({
    selector: 'diet',
    templateUrl: 'app/about/diet/diet.html',
    styleUrls: [
        'app/about/diet/diet.css'
    ]
})

export class dietComponent implements OnInit {


    pageTitle = "Poradnia Dietetyczna";
    pageDescription = "";

    pageTitleTheory = "Cel poradnii dietetycznej";
    pageDescriptionTheory = "Powszechnie wiadomo, że odpowiednie odżywianie jest niezbędne do prawidłowego funkcjonowania organizmu. Pomimo szerokiego dostępu do informacji na temat odżywiania otyłość jest nadal globalnym problemem. Nie trać czasu na błędne próby i zgłoś się do Nas!.";
    pageImageTheory = "app/assets/diet/pageImageTheory.png";

    pageTitleExperience = "Doświadczenie";
    pageDescriptionExperience = "Dietetycy ” HEALTH FIT” posiadają odpowiednie kwalifikacje oraz wieloletnie doświadczenie. To doskonali specjaliści w  zakresie odżywiania pojętym bardzo szeroko.";
    pageImageExperience = "app/assets/diet/pageImageExperience.png";

    pageTitleMainDiet = "Dieta ogólna";
    pageDescriptionMainDiet = "Dietetykę ogólna- skierowaną dla osób zdrowych, które chcą poprawić sylwetkę i zmienić nawyki żywieniowe. Pamiętajmy, że dieta to nie tylko odchudzanie, ale przede wszystkim sposób odżywiania i podstawa dobrego zdrowia, również psychicznego. Jednak aby dieta służyła zdrowiu i smukłej sylwetce, musi być prawidłowo zbilansowana tzn.  pełnowartościowa pod względem składników odżyw­czych potrzebnych do prawidłowego funkcjonowania organizmu.";
    pageImageMainDiet = "app/assets/diet/pageImageMainDiet.png";

    pageTitleSportDiet ="Dieta sportowa";
    pageDescriptionSportDiet = "Dietetykę sportowa- ofertę skierowana dla osób aktywnych fizycznie oraz zawodników wszystkich dyscyplin sportowych. Liczne badania potwierdzają, iż odpowiedni plan żywieniowy wpływa na maksymalizację  osiągów sportowych.";
    pageImageSportDiet = "app/assets/diet/pageImageSportDiet.png";

    pageContent = `Niektórzy kilka razy szybciej wracają do sprawności po urazach- zastanawiałeś się dlaczego?

Indywidualnie dopasowany trening rehabilitacyjny pozwala na utrwalenie efektów terapii i zmniejsza ryzyko nawrotu dolegliwości lub odniesienia kontuzji.

Po zakończonej rehabilitacji, zalecane jest utrwalenie efektów terapii w trakcie indywidualnego treningu porehabilitacyjnego.

Zazwyczaj pacjenci zapominają w jaki sposób poprawnie wykonywać ćwiczenia lub nie dysponują odpowiednim sprzętem. W większości przypadków spada motywacja do samodzielnego wykonywania ćwiczeń.

Dlatego też stworzyliśmy siłownię porehabilitacyjną, gdzie każdy z pacjentów pod opieką trenera personalnego może kontynuować ćwiczenia. Wykorzystujemy wszelkie niezbędne przyrządy treningowe oraz metody terapeutyczne takie jak elementy stabilizacji kręgosłupa, wzmocnienie propriorecepcji (czucia głębokiego) czy treningu siłowego i wytrzymałościowego.

Trening rehabilitacyjny daje większe szanse powrotu do zdrowia.

Dla kogo jest trening rehabilitacyjny:

dla osób które chciałyby uniknąć operacji;
dla osób po zabiegach operacyjnych;
dla osób po zakończonej rehabilitacji u fizjoterapeuty;
dla osób z wadami postawy;
dla osób po urazach traumatologicznych;
dla osób z atrofią mięśniową;
dla wszystkich osób borykającymi się z problemami kostno-stawowymi;`;

    ngOnInit() {
    }
}