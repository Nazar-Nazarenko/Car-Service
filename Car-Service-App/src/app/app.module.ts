import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './components/cars/cars.component';
import { AddEditFormComponent } from './components/add-edit-form/add-edit-form.component';
import { TimerComponent } from './components/timer/timer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CarComponent } from './components/car/car.component';
import { SelectedCarComponent } from './components/selected-car/selected-car.component';
import { TooltipDirective } from './directives/tooltip.directive';
import { ModalDirective } from './directives/modal.directive';
import { ModalComponent } from './components/modal/modal.component';
import { StopPropagationDirective } from './directives/stop-propagation.directive';
import { HomeComponent } from './components/home/home.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { SearchByNamePipe } from './pipes/search-by-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    AddEditFormComponent,
    TimerComponent,
    CarComponent,
    SelectedCarComponent,
    TooltipDirective,
    ModalDirective,
    ModalComponent,
    StopPropagationDirective,
    HomeComponent,
    CardItemComponent,
    SearchByNamePipe,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [
    Document
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
