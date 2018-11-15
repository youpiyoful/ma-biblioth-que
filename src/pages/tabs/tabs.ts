import { Component } from '@angular/core';
import { BooksPage } from '../books/books';
import { SettingsPage } from '../settings/settings';
import { DressingPage } from '../dressing/dressing';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  booksPage = BooksPage;
  settingsPage = SettingsPage;
  dressingPage = DressingPage;

}
