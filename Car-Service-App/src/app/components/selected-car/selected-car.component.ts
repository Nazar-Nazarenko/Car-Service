import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-selected-car',
  templateUrl: './selected-car.component.html',
  styleUrls: ['./selected-car.component.scss']
})
export class SelectedCarComponent implements OnInit {

  public id: string | any;
  public brand: string | any;
  public model: string | any;
  public engine: string | any;
  public price: number | any;

  constructor( private activateRoute: ActivatedRoute ) {
  }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    this.brand = this.activateRoute.snapshot.params['brand'];
    this.model = this.activateRoute.snapshot.params['model'];
    this.engine = this.activateRoute.snapshot.params['engine'];
    this.price = this.activateRoute.snapshot.params['price'];
  }

}
