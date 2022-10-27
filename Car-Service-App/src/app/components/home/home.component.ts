import { Component, OnInit } from '@angular/core';
import {CarsService} from '../../servises/cars.service';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {Car} from '../add-edit-form/add-edit-form.config';

// tslint:disable-next-line:class-name
export interface BtnValue {
 id: number;
 name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public cars = this.carsService.data;
  public carsSelected: Car[] = [];
  public isSelected = false;


  public btn: BtnValue[] = [
    {
      id: 0,
      name: 'Show all'
    },
    {
      id: 1,
      name: 'Germany vehicles'
    },
    {
      id: 2,
      name: 'Japan vehicles'
    },
    {
      id: 3,
      name: 'American vehicles'
    }
  ];

  private showAll = 0;
  private germCar = 1;
  private jpnCar = 2;
  private amerCar = 3;

  constructor(private carsService: CarsService) { }

  // tslint:disable-next-line:no-unused-expression
  ngOnInit(): void {
    this.carsSelected = this.cars;
  }

  public showCard(value: BtnValue): void {

    if (value.id === this.germCar) {
      new Observable<Car[]>( observer => observer.next(this.cars)).pipe(
        map( (value) => value.filter( items => items.country === '1'))
      ).subscribe( items => {
        this.carsSelected = items;
      });
      this.isSelected = true;
    }
    if (value.id === this.jpnCar) {
      new Observable<Car[]>( observer => observer.next(this.cars)).pipe(
        map( (value) => value.filter( items => items.country === '2'))
      ).subscribe( items => {
        this.carsSelected = items;
      });
    }
    if (value.id === this.amerCar) {
      new Observable<Car[]>( observer => observer.next(this.cars)).pipe(
        map( (value) => value.filter( items => items.country === '3'))
      ).subscribe( items => {
        this.carsSelected = items;
      });
    }

    if (value.id === this.showAll) {
      new Observable<Car[]>( observer => observer.next(this.cars)).pipe(
      ).subscribe( items => {
        this.carsSelected = items;
      });
    }
  }

}
