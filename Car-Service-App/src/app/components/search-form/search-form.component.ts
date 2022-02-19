import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {SearchFormConfig} from "./search-form.config";

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  readonly CONTROL_NAMES = SearchFormConfig;

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
