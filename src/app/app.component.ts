import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular Two way binding ';
  displayString : string =""

  changeCase(data:string) {
    console.log(data+"----------"+data.toUpperCase())
    this.displayString=data.toUpperCase();
  }
}
