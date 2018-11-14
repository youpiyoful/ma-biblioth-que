import { Component } from '@angular/core';
import { BooksPage } from '../books/books';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  booksPage = BooksPage;
  settingsPage = SettingsPage;

}
