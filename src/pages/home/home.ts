import { Component } from '@angular/core';
import { BooksPage } from '../books/books';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  booksPage = BooksPage;

}
