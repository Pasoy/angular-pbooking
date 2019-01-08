import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'pasoy-rental-list-item',
    templateUrl: './rental-list-item.component.html',
    styleUrls: ['./rental-list-item.component.scss']
})

export class RentalListItemComponent implements OnInit {

    @Input() currentRental: any;

    constructor() {
    }

    ngOnInit() {
    }

}
