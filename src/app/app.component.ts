import { Component } from '@angular/core';

@Component({
  selector: 'my-app', // to use me, do this in html <my-app>
  template: `
    <h1>{{name}}</h1>
    <p><i>{{name}} is in the {{region}} region.</i></p>
    <br/>

    <input [value]="name"><br/>
    <input [value]="name" (input)="name=$event.target.value"><br/>
    <input [value]="name" (keyup)="name=$event.target.value"><br/>
    <input [value]="name" (keyup.enter)="name=$event.target.value"
                          (blur)="name=$event.target.value"><br/>


    <button (click)="addressClick()">Show/Hide Address</button>
    <div [hidden]="hideAddress">
      <fieldset>
        <label>Street: </label>{{street}}
      </fieldset>
      <fieldset>
        <label>City: </label>{{city}}
      </fieldset>
      <fieldset>
        <label>Region: </label>
        <select (change)="regionChange($event.target.value)">
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

    addressClick() {
        this.hideAddress = !this.hideAddress;

    }

    regionChange(region: string) {
        this.region = region;
    }

}
