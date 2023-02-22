import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { ThankingComponent } from './components/thanking/thanking.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ThankingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
