import { Book } from '../../models/Book';
import { BooksService } from '../../services/books.service';
import { BookFormPage } from './book-form/book-form';
import { Component, OnInit, OnDestroy} from '@angular/core';
import { IonicPage, ModalController, MenuController, NavController } from 'ionic-angular';
import { SingleBookPage } from './single-book/single-book';
import { Subscription } from 'rxjs/Subscription';

@IonicPage()
@Component({
  selector: 'page-books',
  templateUrl: 'books.html',
})
export class BooksPage implements OnInit, OnDestroy {

  booksList: Book[];
  booksSubscription: Subscription;

  constructor(private modalCtrl: ModalController,
              private booksService: BooksService,
              private menuCtrl: MenuController,
              public navCtrl: NavController) {}

  ngOnInit() {
    this.booksSubscription = this.booksService.books$.subscribe(
      (books: Book[]) => {
        this.booksList = books;
      }
    );
    this.booksService.emitBooks();
  }

  onLoadBook(index: number) {
    let modal = this.modalCtrl.create(SingleBookPage, {index: index});
    modal.present();
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }

  onNewBook() {
    this.navCtrl.push(BookFormPage);
  }

  ngOnDestroy() {
    this.booksSubscription.unsubscribe();
  }

}
