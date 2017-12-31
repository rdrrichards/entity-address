import { Component, OnInit, Input } from '@angular/core';
import { Address } from '../address';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-address',
  template: `<form [formGroup]="addressForm" class="ui-g" (ngSubmit)="onSubmit()">
    <p-panel header="Address" class="ui-g-12">
      <div class="ui-g">
        <label for="addressId" class="ui-g-12 ui-md-2">Address ID</label>
        <input pInputText id="addressId" formControlName="addressId" class="ui-g-12 ui-md-5" readonly>
      </div>
      <div class="ui-g">
        <label for="entityId" class="ui-g-12 ui-md-2">Entity ID</label>
        <input pInputText id="entityId" formControlName="entityId" class="ui-g-12 ui-md-5" readonly>
      </div>
      <div class="ui-g">
        <label for="entityType" class="ui-g-12 ui-md-2">Entity Type ID</label>
        <input pInputText id="entityType" formControlName="entityType" class="ui-g-12 ui-md-5" readonly>
      </div>
      <div class="ui-g">
        <label for="addressType" class="ui-g-12 ui-md-2">Address Type</label>
        <input pInputText id="addressType" formControlName="addressType" class="ui-g-12 ui-md-5" readonly>
      </div>
      <div class="ui-g">
        <label for="addressLine1" class="ui-g-12 ui-md-2">Address Line 1</label>
        <input pInputText id="addressLine1" formControlName="addressLine1" class="ui-g-12 ui-md-5">
      </div>
      <div class="ui-g">
        <label for="addressLine2" class="ui-g-12 ui-md-2">Address Line 2</label>
        <input pInputText id="addressLine2" formControlName="addressLine2" class="ui-g-12 ui-md-5">
      </div>
      <div class="ui-g">
        <label for="addressLine3" class="ui-g-12 ui-md-2">Address Line 3</label>
        <input pInputText id="addressLine3" formControlName="addressLine3" class="ui-g-12 ui-md-5">
      </div>
      <div class="ui-g">
        <label for="addressLine4" class="ui-g-12 ui-md-2">Address Line 4</label>
        <input pInputText id="addressLine4" formControlName="addressLine4" class="ui-g-12 ui-md-5">
      </div>
      <div class="ui-g">
        <label for="addressCity" class="ui-g-12 ui-md-2">City</label>
        <input pInputText id="addressCity" formControlName="addressCity" class="ui-g-12 ui-md-5">
      </div>
      <div class="ui-g">
        <label for="addressState" class="ui-g-12 ui-md-2">State</label>
        <input pInputText id="addressState" formControlName="addressState" class="ui-g-12 ui-md-5">
      </div>
      <div class="ui-g">
        <label for="addressPostalCode" class="ui-g-12 ui-md-2">Postal</label>
        <input pInputText id="addressPostalCode" formControlName="addressPostalCode" class="ui-g-12 ui-md-5">
      </div>
      <div class="ui-g">
        <label for="addressCounty" class="ui-g-12 ui-md-2">County</label>
        <input pInputText id="addressCounty" formControlName="addressCounty" class="ui-g-12 ui-md-5">
      </div>
      <div class="ui-g">
        <label for="addressCountry" class="ui-g-12 ui-md-2">Country</label>
        <input pInputText id="addressCountry" formControlName="addressCountry" class="ui-g-12 ui-md-5">
      </div>
      <div class="ui-g">
        <label for="addressNotes" class="ui-g-12 ui-md-2">Notes</label>
        <input pInputText id="addressNotes" formControlName="addressNotes" class="ui-g-12 ui-md-5">
      </div>
      <div class="ui-g">
        <label for="addressDefaultFlag" class="ui-g-12 ui-md-2">Default</label>
        <p-radioButton name="addressDefaultFlagGroup" formControlName="addressDefaultFlag" label="True" value="1"></p-radioButton>
        <p-radioButton name="addressDefaultFlagGroup" formControlName="addressDefaultFlag" label="False" value="0"></p-radioButton>
      </div>
      <div class="ui-g">
        <label for="addressActiveFlag" class="ui-g-12 ui-md-2">Active</label>
        <p-radioButton name="addressActiveFlagGroup" formControlName="addressActiveFlag" label="True" value="1"></p-radioButton>
        <p-radioButton name="addressActiveFlagGroup" formControlName="addressActiveFlag" label="False" value="0"></p-radioButton>
      </div>
      <button pButton type="submit" [disabled]="formHasErrors()" label="Save" icon="fa-floppy-o"></button>
    </p-panel>
  </form>`
})
export class AddressComponent implements OnInit {
  @Input() address: Address = new Address();
  @Input() readOnly = false;
  addressForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.buildForm();
  }

  ngOnInit() {
    if (this.address) {
      this.buildForm();
    }
  }

  buildForm() {
    console.log(this.address);
    this.addressForm = this.fb.group({
      addressId: [
        this.address.addressId || '00000000-0000-0000-0000-000000000000',
        [Validators.required]
      ],
      entityId: [
        this.address.entityId || '00000000-0000-0000-0000-000000000000',
        [Validators.required]
      ],
      entityType: [
        this.address.entityType.entityTypeName ||
          '00000000-0000-0000-0000-000000000000',
        [Validators.required]
      ],
      addressType: [
        this.address.addressType.addressTypeName ||
          '00000000-0000-0000-0000-000000000000',
        [Validators.required]
      ],
      addressLine1: [this.address.addressLine1 || '', [Validators.required]],
      addressLine2: [this.address.addressLine2 || ''],
      addressLine3: [this.address.addressLine3 || ''],
      addressLine4: [this.address.addressLine4 || ''],
      addressCity: [this.address.addressCity || '', [Validators.required]],
      addressState: [this.address.addressState || '', [Validators.required]],
      addressPostalCode: [
        this.address.addressPostalCode || '',
        [Validators.required]
      ],
      addressCounty: [this.address.addressCounty || ''],
      addressCountry: [this.address.addressCountry || ''],
      addressNotes: [this.address.addressNotes || ''],
      addressDefaultFlag: [this.address.addressDefaultFlag || ''],
      addressActiveFlag: [this.address.addressActiveFlag || '']
    });
  }
  formHasErrors() {
    return !this.addressForm.valid;
  }
  onSubmit() {}
}
