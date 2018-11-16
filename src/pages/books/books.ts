import { Component } from '@angular/core';
import { IonicPage, ModalController, MenuController } from 'ionic-angular';
import { SingleBookPage } from './single-book/single-book';
import { Book } from '../../models/Book';
import { BooksService } from '../../services/books.service';

@IonicPage()
@Component({
  selector: 'page-books',
  templateUrl: 'books.html',
})
export class BooksPage {

  booksList: Book[];

  constructor(private modalCtrl: ModalController,
              private booksService: BooksService,
              private menuCtrl: MenuController) {}

  ionViewWillEnter() {
    this.booksList = this.booksService.booksList.slice();
  }

  onLoadBook(index: number) {
    let modal = this.modalCtrl.create(SingleBookPage, {index: index});
    modal.present();
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }

}
