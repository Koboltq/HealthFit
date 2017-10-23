import { Component, OnInit } from '@angular/core';


@Component({
    //selector: 'agm-map',
    //TO DO: Add html
    templateUrl: 'app/googleMap/googleMap.html'
})

export class googleMapComponent implements OnInit {
    title: string = "My first AGM project";
    lat: number = 51.65;
    lng: number = 7.8;

    ngOnInit() {
    }
}