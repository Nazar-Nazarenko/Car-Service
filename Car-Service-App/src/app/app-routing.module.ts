import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TimerComponent} from './components/timer/timer.component';
import {CarsComponent} from './components/cars/cars.component';
import {SelectedCarComponent} from './components/selected-car/selected-car.component';
import {AuthGuard} from './servises/auth.guard';

const routes: Routes = [
  {
    path: 'timer',
    component: TimerComponent
  },
  {
    path: 'cars',
    component: CarsComponent
  },
  {
    path: 'selected-car/:id/:brand/:model/:engine/:price',
    component: SelectedCarComponent, canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
