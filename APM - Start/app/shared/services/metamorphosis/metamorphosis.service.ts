import { Injectable } from '@angular/core';
import { Metamorphosis } from '../../models/metamorphosis/metamorphosis';


const listMetamorphosisPromise: Promise<Metamorphosis[]> = Promise.resolve([
    {
        id: 1,
        name: 'Krystyna',
        race: 'female',
        class: 'brick-item brick-item--height1',
        avatar: 'https://s-media-cache-ak0.pinimg.com/originals/9e/e7/09/9ee70904290dd780111be1feff7e7f03.jpg'
    },
    {
        id: 2,
        name: 'Franek',
        race: 'men',
        class: 'brick-item brick-item--height1',
        avatar: 'http://www.hotstarz.info/wp-content/uploads/2015/08/kevin-bacon.jpg'
    },
    {
        id: 3,
        name: 'Magda',
        race: 'female',
        class: 'brick-item brick-item--height1',
        avatar: 'https://s-media-cache-ak0.pinimg.com/originals/9e/e7/09/9ee70904290dd780111be1feff7e7f03.jpg'
    },
    {
        id: 4,
        name: 'Magda',
        race: 'female',
        class: 'brick-item brick-item--height1',
        avatar: 'https://s-media-cache-ak0.pinimg.com/originals/9e/e7/09/9ee70904290dd780111be1feff7e7f03.jpg'
    },
    {
        id: 5,
        name: 'Magda',
        race: 'female',
        class: 'brick-item brick-item--height1',
        avatar: 'https://s-media-cache-ak0.pinimg.com/originals/9e/e7/09/9ee70904290dd780111be1feff7e7f03.jpg'
    }  ,
    {
        id: 6,
        name: 'Magda',
        race: 'female',
        class: 'brick-item brick-item--height2',
        avatar: 'https://s-media-cache-ak0.pinimg.com/originals/9e/e7/09/9ee70904290dd780111be1feff7e7f03.jpg'
    },
    {
        id: 7,
        name: 'Magda',
        race: 'female',
        class: 'brick-item brick-item--height1',
        avatar: 'https://s-media-cache-ak0.pinimg.com/originals/9e/e7/09/9ee70904290dd780111be1feff7e7f03.jpg'
    },
    {
        id: 8,
        name: 'Chris',
        race: 'men',
        class: 'brick-item brick-item--height1',
        avatar: 'http://www.hotstarz.info/wp-content/uploads/2015/08/kevin-bacon.jpg'
    }


]);

@Injectable()

export class MetamorphosisService {
    getMetamorphosiss() {
        console.log(listMetamorphosisPromise);
        return listMetamorphosisPromise;
    }

    getFilterMetamorphosis(race : string) {
        return listMetamorphosisPromise.then(meta => meta.find(meta=>meta.race === race))
    }
} 

