import { Component } from '@angular/core';

@Component({
  selector: 'my-app', // to use me, do this in html <my-app>
  template: `
    <h1>{{name}}</h1>
    <fieldset>
        <img [src]="image"/>
    </fieldset>
    <label [style.color]="color">Favorite Color</label>
    `,
})
export class AppComponent  {
    name = 'Bruz Newton';
    image = 'favicon.ico';
    color = 'red';
}
