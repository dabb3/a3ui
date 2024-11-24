import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { BookListComponent } from './app/book-list/book-list.component';
import { BookFormComponent } from './app/book-form/book-form.component';
import { UserListComponent } from './app/user-list/user-list.component';
import { UserFormComponent } from './app/user-form/user-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    importProvidersFrom(FormsModule),
    importProvidersFrom(BookListComponent),
    importProvidersFrom(BookFormComponent),
    importProvidersFrom(UserListComponent),
    importProvidersFrom(UserFormComponent)
  ]
}).catch(err => console.error(err));
