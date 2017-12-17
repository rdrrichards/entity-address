export class Address {
  addressId: string;
  entityId: string;
  entityType: EntityType = new EntityType();
  addressType: AddressType = new AddressType();
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  addressLine4: string;
  addressCity: string;
  addressState: string;
  addressCounty: string;
  addressCountry: string;
  addressPostalCode: string;
  addressNotes: string;
  addressDefaultFlag: boolean;
  addressActiveFlag: boolean;
}

export class AddressType {
  addressTypeId: string;
  addressDataTypeKey: QIQOAddressDataType;
  addressDefaultFormat: string;
  addressTypeCode: string;
  addressTypeCategory: string;
  addressTypeName: string;
  addressTypeDesc: string;
}

export class EntityType {
  entityTypeId: string;
  entityTypeCode: string;
  entityTypeCategory: string;
  entityTypeName: string;
  entityTypeDesc: string;
}

export enum QIQOAddressDataType {
  number = 1,
  string = 2,
  money = 3
}
