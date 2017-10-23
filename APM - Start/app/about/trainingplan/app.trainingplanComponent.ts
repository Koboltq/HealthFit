import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component ({
    templateUrl: 'app/about/trainingplan/trainingplan.html',
    styleUrls: [
        'app/about/trainingplan/trainingplan.css'
    ]
})

export class trainingPlanComponent implements OnInit {

    pageTitle = "Trening Rehabilitacyjny";

    pageDescriptionTrainingPlan = `Plan treningowy to przepis, który wskazuje nam kolejne działania jakie musimy podjąć, aby poprawić swoją sylwetkę i możliwości wysiłkowe. 
Odpowiednio dobrany plan ćwiczeń zdecydowanie przyspiesza osiągnięcie zauważalnych efektów, a co za tym idzie satysfakcję i zadowolenie Klienta z siebie i swoich postępów.`;

    ngOnInit() {
    }
}