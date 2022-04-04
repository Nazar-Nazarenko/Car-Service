import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './components/cars/cars.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { TimerComponent } from './components/timer/timer.component';
import {ReactiveFormsModule} from "@angular/forms";
import { CarComponent } from './components/car/car.component';
import { SelectedCarComponent } from './components/selected-car/selected-car.component';
import { TooltipDirective } from './directives/tooltip.directive';
import { ModalDirective } from './directives/modal.directive';
import { ModalComponent } from './components/modal/modal.component';
import { StopPropagationDirective } from './directives/stop-propagation.directive';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    SearchFormComponent,
    TimerComponent,
    CarComponent,
    SelectedCarComponent,
    TooltipDirective,
    ModalDirective,
    ModalComponent,
    StopPropagationDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    Document
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
