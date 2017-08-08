import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hola mundo con {{name}}</h1>`,
})
export class AppComponent  { name = 'Angular 4'; }
