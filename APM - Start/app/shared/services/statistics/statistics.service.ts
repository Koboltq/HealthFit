import { Injectable } from '@angular/core';
import { Statistics } from '../../models/statistics/statistics';


const listStatisticsPromise: Statistics[] = [
    {
        id: 1,
        tick: false,
        tickStart: '',
        tickEnd: 4000,
        image: 'app/assets/statistic/customer.png',
        description: 'Klienci'
    },
    {
        id: 2,
        tick: false,
        tickStart: '',
        tickEnd: 470,
        image: 'app/assets/statistic/metamorphosis.png',
        description: 'Przemiany'
    },
    {
        id: 3,
        tick: false,
        tickStart: '',
        tickEnd: 10,
        image: 'app/assets/statistic/year.png',
        description: 'Lata'
    },
    {
        id: 4,
        tick: false,
        tickStart: '',
        tickEnd: 8000,
        image: 'app/assets/statistic/kg.png',
        description: 'Kg'
    }
];


@Injectable()

export class StatisticsService {
    getStatisticss() {
        return listStatisticsPromise;
    }


    setStatisticsTick() {
    }


}