import { Component, OnInit } from '@angular/core';
import {CarsService} from '../../servises/cars.service';
import {interval, Observable} from 'rxjs';
import {filter, map, scan, take} from 'rxjs/operators';
import {Car} from '../add-edit-form/add-edit-form.config';

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
  public carBrands: string | undefined;


  public btn: BtnValue[] = [
    {
      id: 0,
      name: 'Show all'
    },
    {
      id: 1,
      name: 'German vehicles'
    },
    {
      id: 2,
      name: 'Japanese vehicles'
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

  private actualIndex = '';

  constructor(private carsService: CarsService) { }

  ngOnInit(): void {
    this.carsSelected = this.cars;
  }

  private runBrands(): void {
    interval(500).pipe(
      take(this.cars.length),
      filter( index => this.cars[index].country === this.actualIndex),
      map( (index) => this.cars[index].brand),
    )
      .subscribe( result => {
        this.carBrands = result;
      }, error => null, () => console.log('complete'));
  }

  public showCard(value: BtnValue): void {

    if (value.id === this.germCar) {
      new Observable<Car[]>( observer => observer.next(this.cars)).pipe(
        map( (value) => {
          this.actualIndex = '1';
          return  value.filter( items => items.country === '1');
        })
      ).subscribe( items => {
        this.carsSelected = items;
        this.runBrands();
      });
    }
    if (value.id === this.jpnCar) {
      new Observable<Car[]>( observer => observer.next(this.cars)).pipe(
        map( (value) => {
          this.actualIndex = '2';
          return value.filter( items => items.country === '2');
        })
      ).subscribe( items => {
        this.carsSelected = items;
        this.runBrands();
      });
    }
    if (value.id === this.amerCar) {
      new Observable<Car[]>( observer => observer.next(this.cars)).pipe(
        map( (value) => {
          this.actualIndex = '3';
          return value.filter( items => items.country === '3');
        })
      ).subscribe( items => {
        this.carsSelected = items;
        this.runBrands();
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
