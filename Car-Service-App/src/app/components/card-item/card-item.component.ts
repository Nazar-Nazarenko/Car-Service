import {Component, Input, OnInit} from '@angular/core';
import {Car} from '../add-edit-form/add-edit-form.config';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {
  @Input() cardItem: Car | any;

  constructor() { }

  ngOnInit(): void {
  }

}
