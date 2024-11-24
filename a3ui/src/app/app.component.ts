import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { BookFormComponent } from "./book-form/book-form.component";
import { BookListComponent } from "./book-list/book-list.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [BookFormComponent, BookListComponent]
})
export class AppComponent {
  title = 'a3ui';
}

bootstrapApplication(AppComponent);
