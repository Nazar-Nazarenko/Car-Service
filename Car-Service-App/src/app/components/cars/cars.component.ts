import { Component, OnInit } from '@angular/core';
import {CarsService} from '../../servises/cars.service';
import {Car} from '../add-edit-form/add-edit-form.config';
import {Subscription} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  constructor(private carsService: CarsService) { }

  public cars: Car[] = [];

  public chosenCarModel = 'No car chosen yet...';
  public mappedCars: Subscription = this.carsService.data$.pipe(
    map( cars => cars.map( car => car))
  ).subscribe(cars => {
    this.cars = cars;
    console.log('this.data service', this.cars);
  } );

  public updateCar(): string {
    console.log('here!)');
    return this.chosenCarModel = 'Changed';
  }

  ngOnInit(): void {
  }

  removeCar(car: Car): void {
    const index = this.cars.indexOf(car);
    if (index !== 1) {
      this.cars.splice(index, 1);
    }
  }

  clearAll(): void {
    this.cars = [];
  }

  reload(): void {
  }

}
