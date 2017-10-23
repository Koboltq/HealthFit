import { Injectable } from '@angular/core';
import { Support } from '../../models/support/support';

const supportsPromise: Promise<Support[]> = Promise.resolve([
    {
        id: 1,
        title: 'Trening Personalny',
        image: 'app/assets/about/bicepsNew.png',
        url: '/personality',
        description: ''
    },
    {
        id: 2,
        title: 'Trening Rehabilitacyjny',
        image: 'app/assets/about/rehabilitationNew.png',
        url: '/rehabilitation',
        description: ''
    },
    {
        id: 3,
        title: 'Plan Treningowy',
        image: 'app/assets/about/school-calendarNew.png',
        url: '/trainingPlan',
        description: ''
    },
    {
        id: 4,
        title: 'Poradnia Dietetyczna',
        image: 'app/assets/about/weight-lossNew.png',
        url: '/diet',
        description: ''
    }
]);

@Injectable()

export class SupportService {
    getSupports() {
        return supportsPromise;
    }

    getSupport(title : string) {
        return supportsPromise.then(support => support.find(support=>support.title === title))
    }
}