import { animate } from "@angular/core";
import { ChangeDetectorRef } from "@angular/core";
import { Component } from "@angular/core";
import { style,state } from "@angular/core";
import { transition } from "@angular/core";
import { trigger } from "@angular/core";
import { UserOpinion } from '../shared/models/opinion/userOpinion';
import { UserOpinionService } from '../shared/services/opinion/opinionUser.service'; 
import { Observable } from 'rxjs/Rx';

type Orientation = ( "prev" | "next" | "none" );

@Component({
    selector: 'opinion',
    templateUrl: 'app/opinion/opinion.html',
    styleUrls: ['app/opinion/opinion.css'],
    animations: [
    trigger('friendAnimation', [
        transition('void => *', [
        style({
            opacity: 0,
            transform: 'translateX(-100%)'
        }),
        animate('0.1s')
        ]),
        transition('* => void', [
        animate('0.1s', style({
            opacity: 0,
            transform: 'translateX(100%)'
        }))
        ])

        
    ])
    ]
})

export class opinionComponent {

    public orientation: Orientation;   
    public selectedUser: Array<UserOpinion> = [];
    private showDiv: boolean = true;
    private changeDetectorRef: ChangeDetectorRef;
    private userOpinionList : UserOpinion[];

    constructor(public service: UserOpinionService, changeDetectorRef: ChangeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        this.orientation = "none";
        this.userOpinionList = this.service.getUserOpinionList();
        this.selectedUser = [];
        this.selectedUser.push( this.userOpinionList[Math.floor( Math.random() * this.userOpinionList.length )  ]);

        Observable.interval(3000).subscribe(x=> {
            this.showDiv = this.showDiv ? false : true;
        });

        Observable.interval(2600).subscribe(x=> {
            if(this.showDiv == false)
                this.showNextFriend();
        });

    }


    
    // I cycle to the next friend in the collection.
    public showNextFriend() : void {

        //setTime
        // Change the "state" for our animation trigger.
        this.orientation = "next";

        // Force the Template to apply the new animation state before we actually
        // change the rendered element view-model. If we don't force a change-detection,
        // the new [@orientation] state won't be applied prior to the "leave" transition;
        // which means that we won't be leaving from the "expected" state.
        this.changeDetectorRef.detectChanges();

        // Find the currently selected index.
         var index = this.userOpinionList.indexOf( this.selectedUser[0] );

        // Move the rendered element to the next index - this will cause the current item
        // to enter the ( "next" => "void" ) transition and this new item to enter the
        // ( "void" => "next" ) transition.
        var res = this.userOpinionList[ index + 1 ]
            ? this.userOpinionList[ index + 1 ]
            : this.userOpinionList[ 0 ]
        ;

        this.selectedUser = [];
        this.selectedUser.push(res);
    }



    // I cycle to the previous friend in the collection.
    public showPrevFriend() : void {
        // Change the "state" for our animation trigger.
        this.orientation = "prev";

        // Force the Template to apply the new animation state before we actually
        // change the rendered element view-model. If we don't force a change-detection,
        // the new [@orientation] state won't be applied prior to the "leave" transition;
        // which means that we won't be leaving from the "expected" state.
        this.changeDetectorRef.detectChanges();

        // Find the currently selected index.
         var index = this.userOpinionList.indexOf( this.selectedUser[0] );

        // Move the rendered element to the next index - this will cause the current item
        // to enter the ( "next" => "void" ) transition and this new item to enter the
        // ( "void" => "next" ) transition.
        var res = this.userOpinionList[ index + 1 ]
            ? this.userOpinionList[ index + 1 ]
            : this.userOpinionList[ 0 ]
        ;

        this.selectedUser = [];
        this.selectedUser.push(res);
        ;

    }
    
}