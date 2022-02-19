import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';
import {CarsService} from '../../servises/cars.service';
import {Subscription} from 'rxjs';
import {Car} from '../search-form/search-form.config';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  constructor(private carsService: CarsService) { }

  public data: Car[] = [];
  public chosenCarModel = 'No car chosen yet...';

  public mappedCars: Subscription = this.carsService.data$.pipe(
    map( cars => cars.map( car => car))
  ).subscribe(cars => this.data = cars);

  public updateCar(): string {
    console.log('here!)');
    return this.chosenCarModel = 'Changed';
  }

  ngOnInit(): void {
  }

  removeCar(car: Car): void {
    const index = this.data.indexOf(car);
    if (index !== 1) {
      this.data.splice(index, 1);
    }
  }

  clearAll(): void {
    this.data = [];
  }

  reload(): void {
  }

}
