import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonalityTraining } from '../../shared/models/personality/personalitytraining';
import { PersonalityTrainingService } from '../../shared/services/personalityservice/personalityTraining.service';
//C:\Angular2\LearningAngular\APM - Start\app\shared\models\personality\personalitytraining.ts
@Component ({
    selector: 'personality',
    templateUrl: 'app/about/personality/personality.html',
    styleUrls: [
        'app/about/personality/personality.css',
        'app/about/personality/personalitypoints.css'
    ]
})


export class personalityComponent  implements OnInit{

    pageTitle : string = "Trening Personalny";
    personalityList : PersonalityTraining[];

    constructor(private PersonalityTrainingService : PersonalityTrainingService) {

    }
    
    ngOnInit() {
        this.personalityList = this.PersonalityTrainingService.getPersonalityTrainingist();
    }   
}