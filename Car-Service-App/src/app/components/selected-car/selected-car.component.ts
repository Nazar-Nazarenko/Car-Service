import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-selected-car',
  templateUrl: './selected-car.component.html',
  styleUrls: ['./selected-car.component.scss']
})
export class SelectedCarComponent implements OnInit {

  public id = '';
  public brand = '';
  public model = '';
  public engine = '';
  public price = '';

  public singleCarForm = new FormGroup({});
  public initData = '';

  get isFormChanged(): boolean {
    return this.initData === JSON.stringify( this.singleCarForm?.value);
  }

  constructor( private activateRoute: ActivatedRoute, private formBuilder: FormBuilder, ) {
  }

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

  public save(): void {
    if (this.singleCarForm.invalid) {
      return;
    }
  }

}
