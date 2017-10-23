import { Component,OnInit, Input } from '@angular/core';
import { Subscription } from "rxjs";
import { Observable } from "rxjs/Rx"
import { BrowserModule } from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import { Statistics } from '../shared/models/statistics/statistics';
import { StatisticsService } from '../shared/services/statistics/statistics.service';


@Component({
    selector: 'statistics',
    templateUrl: 'app/statistics/statistics.html',
    styleUrls: ['app/statistics/statistics.css', 'app/statistics/statisticsbottom.css']
})


export class statisticsComponent implements OnInit {
    listStatistics: Statistics[];
    public value : number = 0;
    private subscriptionStatistics : Subscription;

    constructor(private service:StatisticsService) {}

    ngOnInit() {

        this.listStatistics = this.service.getStatisticss();
        //this.listStatistics = this.service.getStatisticss(;//.then(stat => this.listStatistics = stat);
        this.listStatistics.forEach(element => {
            this.observableCountUp(element);
        });
    }

    observableCountUp(element : Statistics)
    {

        this.subscriptionStatistics = Observable.interval(1).subscribe(x => {
        if(element.tickEnd >= 0 && element.tick)
        {
            element.tickEnd--;
            if(element.tickEnd <= 0 ) 
                element.tick = true;
            element.tickStart = (Number(element.tickStart)+5).toString();
            return;
        }
        else
        {
            element.tick = true;
            //this.subscriptionStatistics.unsubscribe();
        }
        });
    }
    
    coutUp() {
        //this.value++;
    }

}

