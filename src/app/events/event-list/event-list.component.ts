import { Component } from "@angular/core";

@Component({
    selector:'event-list',
    templateUrl:'./event-list.component.html'
})
export class EventListComponent{

    myEvent={
        name:'Test Event',
        date:'2/20/2018',
        price:599.99
    }
}