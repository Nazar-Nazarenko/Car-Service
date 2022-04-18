import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CarsService} from '../../servises/cars.service';
import {Car} from '../add-edit-form/add-edit-form.config';
import {Subscription} from 'rxjs';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-selected-car',
  templateUrl: './selected-car.component.html',
  styleUrls: ['./selected-car.component.scss']
})
export class SelectedCarComponent implements OnInit {

  get isFormChanged(): boolean {
    return this.initData === JSON.stringify( this.singleCarForm?.value);
  }

  constructor( private activateRoute: ActivatedRoute,
               private router: Router,
               private carsService: CarsService,
               private formBuilder: FormBuilder
               ) {}

  public id = 0;
  public brand = '';
  public model = '';
  public engine = '';
  public price = 0;

  public singleCarForm = new FormGroup({});
  public initData = '';
  public cars: Car[] = [];


  private mappedCars: Subscription = this.carsService.data$.pipe(
    map( cars => cars.map( car => car))
  ).subscribe(cars => {
    this.cars = cars;
    console.log('this.data service-SELECTED', this.cars);
  } );

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    this.brand = this.activateRoute.snapshot.params['brand'];
    this.model = this.activateRoute.snapshot.params['model'];
    this.engine = this.activateRoute.snapshot.params['engine'];
    this.price = this.activateRoute.snapshot.params['price'];
    this.initForm();
    this.initData = JSON.stringify( this.singleCarForm?.value);
    console.log('this.initData', this.initData);
  }

  private initForm(): void {
    this.singleCarForm = this.formBuilder.group( {
      brand: [ this.brand || ''],
      model: [ this.model || '' ],
      engine: [ this.engine || '' ],
      price: [ this.price  || '']
    });
  }

  private updateCar( selectedCar: Car ): any {
    return this.cars.push(selectedCar);
  }

  public save(): void {
    if (this.singleCarForm.invalid) {
      return;
    }
    this.updateCar(this.singleCarForm.value);
    console.log('this cars save -->', this.cars);
    this.router.navigateByUrl('/cars');
  }

}
