import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PanelModule, InputTextModule, ButtonModule, DataTableModule, RadioButtonModule } from 'primeng/primeng';

import { AddressComponent } from './address/address.component';
import { AddressListComponent } from './address-list/address-list.component';

export * from './address/address.component';
export * from './address-list/address-list.component';
export * from './address';

// export * from './sample.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PanelModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    RadioButtonModule
  ],
  declarations: [
    AddressComponent,
    AddressListComponent
  ],
  exports: [
    AddressComponent,
    AddressListComponent
  ],
  entryComponents: [
    AddressComponent,
    AddressListComponent
  ]
})
export class AddressModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AddressModule,
      // providers: [SampleService]
    };
  }
}
