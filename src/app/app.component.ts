import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  view = 'recipe';

  setView(view: string) {
    console.log(view);
    this.view = view;
  }
}
