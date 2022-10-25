import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-edit-form',
  templateUrl: './add-edit-form.component.html',
  styleUrls: ['./add-edit-form.component.scss']
})
export class AddEditFormComponent implements OnInit {
  @Input() public carBrand: string | undefined;
  @Input() public carModel: string | undefined;
  @Output() public carNameTriggered: EventEmitter<string> = new EventEmitter();
  @Output() public carNameValue: EventEmitter<string> = new EventEmitter();
  public carName: string | undefined;

  public form: FormGroup = this.initForm();

  constructor(private readonly formBuilder: FormBuilder) { }

  ngOnInit(): void {
    console.log('carName', this.carName);
  }
  public save(): void {
    this.carNameValue.emit(this.form.value);
    this.carNameTriggered.emit();
  }

  initForm(): FormGroup {
    return this.formBuilder.group( {
      carName: ''
    });
  }

}
