import { Component } from '@angular/core';


import { Contact } from './contact';


@Component({
    selector: 'contact-form',
    templateUrl: 'app/contact/contact.html',
    styleUrls: ['app/contact/contact.css']
})

export class contactComponent {
    listNotificationTypes = [ 'Dieta', 'Plan treningowy', 'Inne'];

    model = new Contact(1, '','',this.listNotificationTypes[0], '');

    submitted = false;

    onSubmit() { this.submitted = true; }

}