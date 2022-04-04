import {Component, Input, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {

  @Input() title = '';
  @Input() description = '';
  @Output() closeModal = new EventEmitter();
  @Output() confirmModal = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public close(): void {
    console.log('cancel delete');
    this.closeModal.emit();
  }

  public delete(): void {
    console.log('confirm delete');
    this.confirmModal.emit();
  }

  ngOnDestroy(): void {
    console.log(' Modal destroyed');
  }

}
