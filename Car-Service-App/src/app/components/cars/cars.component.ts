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
  public searchCarName = '';

  public cars: Car[] = [];
  public receivedCarBrandName: Car = {
    brand: '',
  };

  public chosenCarModel = 'No car chosen yet...';

  public filterCar( carItems: Car []): any {
    const cars = [...carItems];
    return cars.filter( item => item.brand !== this.receivedCarBrandName.brand );
  }


  public assignName(car: string): void {
    console.log('car emitted', car);
    this.receivedCarBrandName.brand = car;
    this.filterCar(this.cars);
    console.log('cars filtered', this.cars);
  }

  ngOnInit(): void {
    this.carsService.data$.pipe(
      map( cars => cars.map( car => car))
    ).subscribe(cars => {
      this.cars = cars;
    } );
  }

  removeCar(car: Car): void {
    const index = this.cars.indexOf(car);
    if (index !== 1) {
      this.cars.splice(index, 1);
    }
  }

}
