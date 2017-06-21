import { Component } from '@angular/core';

@Component({
  selector: 'my-app', // to use me, do this in html <my-app>
  template: `
    <h1>{{name}}</h1>
    <p><i>{{name}} is in the {{region}} region.</i></p>
    <br/>
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

    <fieldset>
        <img [src]="image"/>
    </fieldset>
    <label [style.color]="color">Favorite Color</label>
    <button (click)="clicked()">Toggle Color</button>
    <select (change)="colorChange($event.target.value)">
        <option>red</option>
        <option>blue</option>
        <option>green</option>
    </select>
    `,
})
export class AppComponent  {
    name = 'Bruz Newton';
    image = 'favicon.ico';
    color = 'red';
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

    clicked() {
        this.color = this.color === 'red' ? 'blue' : 'red';
    }

    colorChange(color: string) {
        this.color = color;
    }

}
