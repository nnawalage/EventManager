import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EventModule } from './events/event.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EventModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
