import { Component } from '@angular/core';

import { Customer } from './model';

@Component({
  moduleId: module.id,
  selector: 'my-app', // to use me, do this in html <my-app>
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent  {
    regions = ['North', 'South', 'East', 'West', 'NorthEast'];

    customers: Customer[] = [
    {
      id: 1,
      name: 'Alex Smith',
      address: {
        street: '123 Main Street',
        city: 'Anytown',
        county: 'Kakamega',
        region: 'West'
      }
    },
    {
      id: 2,
      name: 'Pierre Pasmal',
      address: {
        street: '456 Rue de Main',
        city: 'Quebec City',
        county: 'Kiambu',
        region: 'East'
      }
    },
    {
      id: 3,
      name: 'Margarita Nadie',
      address: {
        street: '789 Calle Principal',
        city: 'Guadalajara',
        county: 'Kilifi',
        region: 'South'
      }
    },
    {
      id: 4,
      name: 'Katie O\'Leary',
      address: {
        street: '137 DeKoven Street',
        city: 'Chicago',
        county: 'Turkana',
        region: 'NorthEast'
      }
    },
  ];

  customer: Customer; // = this.customers[0];

    hideAddress = false;
}
