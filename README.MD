# @rdrrichards/entity-address

Address components library for usage in the Angular client applications I am building.

## Installation

To install this library, run:

```bash
$ npm install @rdrrichards/entity-address --save
```

## Consuming your library

```bash
$ npm install @rdrrichards/entity-address
```

and then from the Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import the library
import { AddressModule } from '@rdrrichards/entity-address';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify the library as an import
    AddressModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  address: Address;
}
```

Once the library is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use the library component in app.component.html -->
<h1>
  {{title}}
</h1>
<app-address *ngIf="address" [address]="address"></app-address>>
```
## License

MIT © [R Richards](mailto:rdrrichardsiii@gmail.com)
