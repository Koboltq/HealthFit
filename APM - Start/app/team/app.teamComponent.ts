import { Component,OnInit } from '@angular/core';
import { User } from '../shared/models/user';
import { UserService } from '../shared/services/user.service';


@Component({
    selector: 'team',
    templateUrl: 'app/team/team.html',
    styleUrls: ['app/team/team.css']
})

export class teamComponent implements OnInit {
    users: User[];
    constructor(private service: UserService) {}

    ngOnInit() {
        this.service.getUsers().then(users => this.users = users);
    }
}