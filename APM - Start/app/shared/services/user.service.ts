import { Injectable } from '@angular/core';
import { User } from '../models/user';

const usersPromise: Promise<User[]> = Promise.resolve([
    {
        id: 1,
        name: 'Chris',
        username: 'sevilayha',
        avatar: 'http://www.hotstarz.info/wp-content/uploads/2015/08/kevin-bacon.jpg',
        descriptionsabout: `Mgr Rafał Piwowar. Jestem trenerem personalnym z długim stażem treningowym, byłym zawodnikiem trójboju siłowego oraz kulturystyki IFBB. 
Sport i dietetyka to nie tylko moje pasje, ale przede wszystkim są sposobem na życie.`,
        descriptionawards: ` 3 miejsce w ogólnopolskich zawodach kulturystyczny Hi
 Tech Body Show, oraz 2 miejsce w Ogólnopolskich Mistrzostwach Śląska w trójboju siłowym.`
    },
    {
        id: 2,
        name: 'Nick',
        username: 'whatnicktweets',
        avatar: 'http://www.nbc.com/the-tonight-show/content/sites/nbcutsjf/files/styles/bit_stacked_resized/public/images/2015/11/11/michaelbjordan.jpg?itok=rexEEP8j',
        descriptionsabout: ''
    },
    {
        id: 3,
        name: 'Olivia',
        username: 'hollylawly',
        avatar: 'https://s-media-cache-ak0.pinimg.com/originals/9e/e7/09/9ee70904290dd780111be1feff7e7f03.jpg',
        descriptionsabout: ''
    }
]);


@Injectable() 

export class UserService {

    getUsers() {
        return usersPromise;
    }

    getUser(username : string) {

        return usersPromise.then(users=>users.find(user=>user.username === username));

        // let user = usersPromise.then(users=> {
        //     return users.find(user => {
        //         return user.username === username;
        //     });
        // });

        // return user;
    }

}