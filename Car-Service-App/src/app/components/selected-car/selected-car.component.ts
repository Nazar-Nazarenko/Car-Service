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

  constructor( private activateRoute: ActivatedRoute ) {
  }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    this.brand = this.activateRoute.snapshot.params['brand'];
  }

}
