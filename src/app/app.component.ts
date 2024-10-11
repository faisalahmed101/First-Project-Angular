import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TestComponent } from "./test/test.component";
import { AboutComponent } from "./componets/about/about.component";
import { FirstComponent } from "./componets/first/first.component";
import { ContactusComponent } from "./componets/contactus/contactus.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, TestComponent, AboutComponent, FirstComponent, ContactusComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first_project';
  name = 'Faisal'
  students = ['faisal', 'ripat', 'fahim']

  changename(){
    this.name = 'Faisal Ahmed'
  }
}
