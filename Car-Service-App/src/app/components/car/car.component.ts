import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild, ViewContainerRef} from '@angular/core';
import { Car } from '../add-edit-form/add-edit-form.config';
import { ModalService } from '../../servises/modal/modal.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit, OnDestroy {

  @Input() carItem: Car | any;
  @Output() carObj: EventEmitter<Car> = new  EventEmitter<Car>();

  constructor( private modalService: ModalService) { }

  @ViewChild('modal', { read: ViewContainerRef })

  entryPoint!: ViewContainerRef;
  subscription!: Subscription;

  ngOnInit(): void {
  }

  delete(): void {
    this.subscription = this.modalService
      .openModal(this.entryPoint, 'Are you sure you want to delete this car ?', 'click confirm or close')
      .subscribe( ( value: any) => {
        console.log('value:', value);
        if (value === 'confirm') {
          this.removeCar();
        }
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) { this.subscription.unsubscribe(); }
  }


  removeCar(): void {
    this.carObj.emit();
  }

}
