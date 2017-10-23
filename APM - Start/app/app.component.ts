import { Component } from '@angular/core';

import { navComponent } from './nav/app.navComponent';

import { contentAreaComponent} from './contentArea/app.contentAreaComponent';

import { footerComponent} from './footer/app.footerComponent';

import { teamComponent } from './team/app.teamComponent';

import { teamUserComponent } from './team/app.team-userComponent';

import { contactComponent }  from './contact/app.contactComponent';

import { googleMapComponent } from './googleMap/app.googleMapComponent';

import { carouselComponent } from './carousel/app.carouselComponent';

import { aboutComponent } from './about/app.aboutcomponent';

import { personalityComponent } from './about/personality/app.personalityComponent'; 

import { metamorphosisComponent } from './metamorphosis/app.metamorphosisComponent';

import { FilterPipe } from  './metamorphosis/filter.pipe';

import { statisticsComponent } from './statistics/app.statisticsComponent';


@Component({
    selector: 'pm-app',
    templateUrl: 'app/main.html',
    styleUrls: ['app/main.css']
    
})

export class AppComponent {
    pageTitle: string = 'Acm Product Management';
}