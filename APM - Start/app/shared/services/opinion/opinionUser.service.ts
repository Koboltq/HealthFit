import { Injectable } from '@angular/core';
import { UserOpinion } from '../../models/opinion/userOpinion';


const listUserOpinion: UserOpinion[] =[
    {
        image: 'https://s-media-cache-ak0.pinimg.com/originals/9e/e7/09/9ee70904290dd780111be1feff7e7f03.jpg',
        title: 'Lepiej być nie może',
        description: 'Jeśli zależy Ci na poprawie zdrowia, sylwetki i samopoczucia to chyba nie znam lepszej siłowni (a dużo ich zwiedzilem). Klimat i atmosfera to coś co wyróżnia tą siłownię na tle konkurencji. Plus oczywiście instruktorzy z naprawdę serdecznym i profesjonalnym podejściem do klienta.!',
        name: 'Kamil'
    },
    {
        image: 'http://www.hotstarz.info/wp-content/uploads/2015/08/kevin-bacon.jpg',
        title: 'Świetnie!',
        description: 'Fantastyczne miejsce dla osób, które chcą w miłej atmosferze "zawalczyć" o lepsze samopoczucie i sylwetkę. Jak już przyjdziesz raz to już zawsze będziesz wracać -to jest jak nałóg :-) Polecam serdecznie Rafała i Tomka oczywiście nie zapominając o jedynej kobiecie w tej załodze- Klaudii :-)',
        name: 'Nick'
    },
    {
        image: 'http://www.nbc.com/the-tonight-show/content/sites/nbcutsjf/files/styles/bit_stacked_resized/public/images/2015/11/11/michaelbjordan.jpg?itok=rexEEP8j',
        title: 'Super!',
        description: 'Atmosfera niesamowita, Cudowni ludzie - TEAM na najwyższym poziomie z mega pozytywnym nastawieniem do życia i do drugiego człowieka... Gorąco Polecam!!!',
        name: 'Mike'
    }
];


@Injectable()

export class UserOpinionService {
    public getUserOpinionList() {
        return listUserOpinion;
    }
} 