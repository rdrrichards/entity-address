import { Component, OnInit, Input } from '@angular/core';
import { Address } from '../address';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
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
