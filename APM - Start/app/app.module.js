"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var core_2 = require("@agm/core");
var app_component_1 = require("./app.component");
var product_list_component_1 = require("./products/product-list.component");
var app_navComponent_1 = require("./nav/app.navComponent");
var app_contentAreaComponent_1 = require("./contentArea/app.contentAreaComponent");
var app_footerComponent_1 = require("./footer/app.footerComponent");
var app_teamComponent_1 = require("./team/app.teamComponent");
var app_team_userComponent_1 = require("./team/app.team-userComponent");
var app_contactComponent_1 = require("./contact/app.contactComponent");
var app_googleMapComponent_1 = require("./googleMap/app.googleMapComponent");
var app_carouselComponent_1 = require("./carousel/app.carouselComponent");
var app_opinionComponent_1 = require("./opinion/app.opinionComponent");
//about
var app_aboutComponent_1 = require("./about/app.aboutComponent");
var app_about_moduleComponent_1 = require("./about/app.about-moduleComponent");
//about-modules
var app_personalityComponent_1 = require("./about/personality/app.personalityComponent");
var app_rehabilitationComponent_1 = require("./about/rehabilitation/app.rehabilitationComponent");
var app_dietComponent_1 = require("./about/diet/app.dietComponent");
var app_trainingPlanComponent_1 = require("./about/trainingplan/app.trainingPlanComponent");
//
var app_metamorphosisComponent_1 = require("./metamorphosis/app.metamorphosisComponent");
var app_statisticsComponent_1 = require("./statistics/app.statisticsComponent");
var filter_pipe_1 = require("./metamorphosis/filter.pipe");
var angular2_masonry_1 = require("angular2-masonry");
var user_service_1 = require("./shared/services/user.service");
var support_service_1 = require("./shared/services/support/support.service");
var metamorphosis_service_1 = require("./shared/services/metamorphosis/metamorphosis.service");
var statistics_service_1 = require("./shared/services/statistics/statistics.service");
var opinionUser_service_1 = require("./shared/services/opinion/opinionUser.service");
var personalityTraining_service_1 = require("./shared/services/personalityservice/personalityTraining.service");
var animations_1 = require("@angular/platform-browser/animations");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            animations_1.BrowserAnimationsModule,
            core_2.AgmCoreModule.forRoot({ apiKey: 'AIzaSyDYZvkztJcwZHYP-QJI_rc_ss2pFIPRoGg' }),
            router_1.RouterModule.forRoot([
                { path: 'team', component: app_teamComponent_1.teamComponent },
                { path: 'team/:username', component: app_team_userComponent_1.teamUserComponent },
                { path: 'about', component: app_aboutComponent_1.aboutComponent },
                { path: 'personality', component: app_personalityComponent_1.personalityComponent },
                { path: 'rehabilitation', component: app_rehabilitationComponent_1.rehabilitationComponent },
                { path: 'diet', component: app_dietComponent_1.dietComponent },
                { path: 'trainingPlan', component: app_trainingPlanComponent_1.trainingPlanComponent },
                { path: 'contact', component: app_contactComponent_1.contactComponent },
                { path: 'metamorphosis', component: app_metamorphosisComponent_1.metamorphosisComponent },
                { path: '', component: app_contentAreaComponent_1.contentAreaComponent }
            ]),
            angular2_masonry_1.MasonryModule
        ],
        providers: [
            user_service_1.UserService,
            support_service_1.SupportService,
            metamorphosis_service_1.MetamorphosisService,
            statistics_service_1.StatisticsService,
            opinionUser_service_1.UserOpinionService,
            personalityTraining_service_1.PersonalityTrainingService
        ],
        declarations: [
            app_component_1.AppComponent,
            product_list_component_1.ProductListComponent,
            app_navComponent_1.navComponent,
            app_contentAreaComponent_1.contentAreaComponent,
            app_footerComponent_1.footerComponent,
            app_teamComponent_1.teamComponent,
            app_team_userComponent_1.teamUserComponent,
            app_contactComponent_1.contactComponent,
            app_googleMapComponent_1.googleMapComponent,
            app_carouselComponent_1.carouselComponent,
            app_aboutComponent_1.aboutComponent,
            app_rehabilitationComponent_1.rehabilitationComponent,
            app_dietComponent_1.dietComponent,
            app_trainingPlanComponent_1.trainingPlanComponent,
            app_personalityComponent_1.personalityComponent,
            app_about_moduleComponent_1.aboutModuleComponent,
            app_metamorphosisComponent_1.metamorphosisComponent,
            filter_pipe_1.FilterPipe,
            app_statisticsComponent_1.statisticsComponent,
            app_opinionComponent_1.opinionComponent
        ],
        bootstrap: [app_component_1.AppComponent],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map