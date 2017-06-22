import { Component } from '@angular/core';

@Component({
  selector: 'my-app', // to use me, do this in html <my-app>
  template: `
    <h1>{{name}}</h1>

    <p><i>{{name}} is at {{street}} in {{city}} in the {{region}} region.</i></p>
    <br/>

    <fieldset>
        <label>Name: <input [(ngModel)]="name"></label>
    </fieldset>

    <label><input type="checkbox" [(ngModel)]="hideAddress">Hide Address</label>

    <div [hidden]="hideAddress">
      <fieldset>
        <label>Street: <input [(ngModel)]="street"></label>
      </fieldset>
      <fieldset>
        <label>City: <input [(ngModel)]="city"></label>
      </fieldset>
      <fieldset>
        <label>Region: </label>
        <select [(ngModel)]="region">
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
    name = 'Bruz Newton';
    city = 'Nairobi';
    street = 'Koinage Street';
    hideAddress = false;
    region = 'east';
}
