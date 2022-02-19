import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Car} from '../search-form/search-form.config';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  @Input() carItem: Car | any;
  @Output() carObj: EventEmitter<Car> = new  EventEmitter<Car>();

  constructor() { }

  ngOnInit(): void {
  }

  removeCar(): void {
    this.carObj.emit();
  }

}
