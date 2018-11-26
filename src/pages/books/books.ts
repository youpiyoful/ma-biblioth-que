import { Book } from '../../models/Book';
import { BooksService } from '../../services/books.service';
import { BookFormPage } from './book-form/book-form';
import { Component, OnInit, OnDestroy} from '@angular/core';
import { IonicPage, ModalController, MenuController, NavController } from 'ionic-angular';
import { SingleBookPage } from './single-book/single-book';
import { Subscription } from 'rxjs/Subscription';
import { LoadingController, ToastController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-books',
  templateUrl: 'books.html',
})
export class BooksPage implements OnInit, OnDestroy {

  booksList: Book[];
  booksSubscription: Subscription;
  bookFormPage = BookFormPage;

  constructor(private modalCtrl:    ModalController,
              private booksService: BooksService,
              private menuCtrl:     MenuController,
              public  navCtrl:      NavController,
              private toastCtrl:    ToastController,
              private loadingCtrl:  LoadingController) {}

  ngOnInit() {
    this.booksSubscription = this.booksService.books$.subscribe(
      (books: Book[]) => {
        this.booksList = books;
      }
    );
    this.booksService.emitBooks();
    this.onFetchList();
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

  onSaveList() {
    let loader = this.loadingCtrl.create({
      content: 'Sauvegarde en cours'
    });
    loader.present();
    this.booksService.saveData().then(
      () => {
        loader.dismiss();
        this.toastCtrl.create({
          message: 'Données sauvegardées !',
          duration: 3000,
          position: 'bottom'
        }).present();
      }
    ).catch(
      (error) => {
        loader.dismiss();
        this.toastCtrl.create({
          message: error,
          duration: 3000,
          position: 'bottom'
        }).present();
      }
    );
  }
  onFetchList() {
    let loader = this.loadingCtrl.create({
      content: 'Récupération en cours'
    });
    loader.present();
    this.booksService.retrieveData().then(
      () => {
        loader.dismiss();
        this.toastCtrl.create({
          message: 'Données récupérées !',
          duration: 3000,
          position: 'bottom'
        }).present();
      }
    ).catch(
      (error) => {
        loader.dismiss();
        this.toastCtrl.create({
          message: error,
          duration: 10000,
          position: 'bottom'
        }).present();
      }
    );
  }

  ngOnDestroy() {
    this.booksSubscription.unsubscribe();
  }

}
