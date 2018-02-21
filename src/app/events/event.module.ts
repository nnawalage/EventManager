import { NgModule } from "@angular/core";
import { EventListComponent } from "./event-list/event-list.component";
import { EventThumbnail } from "./event-thumbnail/event-thumbnail.component";

@NgModule({
    declarations:[
        EventListComponent,
        EventThumbnail
    ],
    exports:[EventListComponent]
})
export class EventModule
{

}