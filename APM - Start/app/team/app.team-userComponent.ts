import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../shared/models/user';
import { UserService } from '../shared/services/user.service';

@Component({
    templateUrl: 'app/team/teamuser.html',
    styleUrls: ['app/team/teamuser.css']
})


export class teamUserComponent implements OnInit{
    user: User;
    constructor(private route: ActivatedRoute, private service: UserService) {}
    
    ngOnInit() {
        let username = this.route.snapshot.params['username'];

        this.service.getUser(username).then(user => this.user = user );
        
    }
}