import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { trigger, state, style, transition, animate,keyframes } from '@angular/animations';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { AppComponent }  from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { navComponent } from './nav/app.navComponent';
import { contentAreaComponent} from './contentArea/app.contentAreaComponent';
import { footerComponent} from './footer/app.footerComponent';
import { teamComponent } from './team/app.teamComponent';
import { teamUserComponent } from './team/app.team-userComponent';
import { contactComponent } from './contact/app.contactComponent';
import { googleMapComponent } from './googleMap/app.googleMapComponent';
import { carouselComponent } from './carousel/app.carouselComponent';
import { opinionComponent } from './opinion/app.opinionComponent';
//about
import { aboutComponent } from './about/app.aboutComponent';
import { aboutModuleComponent} from './about/app.about-moduleComponent';
//about-modules
import { personalityComponent } from './about/personality/app.personalityComponent';
import { rehabilitationComponent } from './about/rehabilitation/app.rehabilitationComponent';
import { dietComponent } from './about/diet/app.dietComponent';
import { trainingPlanComponent } from './about/trainingplan/app.trainingPlanComponent';
//
import { metamorphosisComponent } from './metamorphosis/app.metamorphosisComponent';
import { statisticsComponent } from './statistics/app.statisticsComponent';

import { FilterPipe } from  './metamorphosis/filter.pipe';

import { MasonryModule } from 'angular2-masonry';
import { MasonryOptions } from 'angular2-masonry';

import { UserService } from './shared/services/user.service';
import { SupportService } from './shared/services/support/support.service';
import { MetamorphosisService} from './shared/services/metamorphosis/metamorphosis.service';
import { StatisticsService }  from './shared/services/statistics/statistics.service';
import { UserOpinionService } from './shared/services/opinion/opinionUser.service'; 
import { PersonalityTrainingService } from './shared/services/personalityservice/personalityTraining.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyDYZvkztJcwZHYP-QJI_rc_ss2pFIPRoGg'}),
    RouterModule.forRoot ([
      { path: 'team', component: teamComponent},
      { path: 'team/:username',component: teamUserComponent},
      { path: 'about', component: aboutComponent},
      { path: 'personality', component: personalityComponent},
      { path: 'rehabilitation', component: rehabilitationComponent },
      { path: 'diet', component: dietComponent },
      { path: 'trainingPlan', component: trainingPlanComponent },
      { path: 'contact', component: contactComponent},
      { path: 'metamorphosis', component: metamorphosisComponent},
      { path: '', component: contentAreaComponent}
    ]),
    MasonryModule
  ],
  providers: [
    UserService,
    SupportService,
    MetamorphosisService,
    StatisticsService,
    UserOpinionService,
    PersonalityTrainingService
  ],
  declarations: [ 
    AppComponent,
    ProductListComponent,
    navComponent,
    contentAreaComponent,
    footerComponent,
    teamComponent,
    teamUserComponent,
    contactComponent,
    googleMapComponent,
    carouselComponent,
    aboutComponent,
    rehabilitationComponent,
    dietComponent,
    trainingPlanComponent,
    personalityComponent,
    aboutModuleComponent,
    metamorphosisComponent,
    FilterPipe,
    statisticsComponent,
    opinionComponent],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
