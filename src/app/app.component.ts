import { Component } from '@angular/core';

import { Customer } from './model';

@Component({
  moduleId: module.id,
  selector: 'my-app', // to use me, do this in html <my-app>
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent  {
    customer: Customer = {
        id: 1,
        name: 'Bruz Newton',
        address: {
          city: 'Nairobi',
          street: 'Koinage Street',
          county: 'Kakamega',
          region: 'east',
        }
    };

    hideAddress = false;
}
