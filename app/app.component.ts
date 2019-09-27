import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:any = "Form parent";
  heading:string = "Fluid jumbotron";

  receiver($event){
    this.heading = $event;
  }
}
