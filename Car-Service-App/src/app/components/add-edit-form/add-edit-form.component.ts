import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AddEditFormConfig} from './add-edit-form.config';

@Component({
  selector: 'app-add-edit-form',
  templateUrl: './add-edit-form.component.html',
  styleUrls: ['./add-edit-form.component.scss']
})
export class AddEditFormComponent implements OnInit {
  readonly CONTROL_NAMES = AddEditFormConfig;

  @Input() public carBrand: string | undefined;
  @Input() public carModel: string | undefined;
  @Output() public carNameTriggered: EventEmitter<string> = new EventEmitter();
  public carName: string | undefined;

  chooseCarBrand: FormGroup = this.initForm();

  constructor(private readonly formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    console.log('carName', this.carName);
  }
  public save(): void {
    this.carNameTriggered.emit();
  }

  initForm(): FormGroup {
    return this.formBuilder.group( {
      [this.CONTROL_NAMES.carNameInput]: []
    });
  }

}
