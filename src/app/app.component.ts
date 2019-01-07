import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  componentTitle = 'I am a component, but just a title';

  clickHandler() {
    alert('I WAS CLICKED gachiBASS');
  }
}
