import { Component } from '@angular/core';

import { Customer } from './model';

@Component({
  selector: 'my-app', // to use me, do this in html <my-app>
  template: `
    <h1>{{customer.name}}</h1>

    <p><i>{{customer.name}} is at {{customer.address.street}} in
      {{customer.address.city}} City in
      {{customer.address.county}} County
      in the {{customer.address.region}} region.</i></p>
    <br/>

    <fieldset>
        <label>Name: <input [(ngModel)]="customer.name"></label>
    </fieldset>

    <label><input type="checkbox" [(ngModel)]="hideAddress">Hide Address</label>

    <div [hidden]="hideAddress">
      <fieldset>
        <label>Street: <input [(ngModel)]="customer.address.street"></label>
      </fieldset>
      <fieldset>
        <label>City: <input [(ngModel)]="customer.address.city"></label>
      </fieldset>
      <fieldset>
        <label>County: </label>
        <select [(ngModel)]="customer.address.county">
          <option>Kakamega</option>
          <option>Kiambu</option>
          <option>Kilifi</option>
          <option>Turkana</option>
        </select>
      </fieldset>
      <fieldset>
        <label>Region: </label>
        <select [(ngModel)]="customer.address.region">
          <option>north</option>
          <option>south</option>
          <option>east</option>
          <option>west</option>
        </select>
      </fieldset>
    </div>
    `,
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
