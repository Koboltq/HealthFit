import { Pipe, PipeTransform,Injectable } from '@angular/core';
import { Metamorphosis } from '../shared/models/metamorphosis/metamorphosis';

@Pipe({
    name: 'MyFilterPipe',
    pure: false
})

@Injectable()

export class FilterPipe implements PipeTransform {

    transform(listMetamorphosis: Metamorphosis[], race: string ): Metamorphosis[] {

        if(race === undefined || race === 'undefined' ) return listMetamorphosis;
        return listMetamorphosis.filter(meta=>meta.race == race);
    }
}


