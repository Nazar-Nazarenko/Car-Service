import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TimerComponent} from "./components/timer/timer.component";
import {CarsComponent} from "./components/cars/cars.component";

const routes: Routes = [
  {
    path: 'timer',
    component: TimerComponent
  },
  {
    path: 'cars',
    component: CarsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
