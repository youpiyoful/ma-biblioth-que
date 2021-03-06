import { Book } from '../../../models/Book';
import { BooksService } from '../../../services/books.service';
// import { BookFormPage } from '../book-form/book-form';
import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, NgForm } from '@angular/forms';


@Component({
  selector: 'page-single-book',
  templateUrl: 'single-book.html',
})
export class SingleBookPage implements OnInit {

  index: number;
  book: Book;
  myDate: string = new Date().toISOString();

  constructor(public navParams:     NavParams,
              public viewCtrl:      ViewController,
              public booksService:  BooksService,
              public formBuilder:   FormBuilder) {}

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.book = this.booksService.booksList[this.index];
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  onSubmitForm(form: NgForm) {
    this.book.startTime = this.myDate;
    this.book.isLend = !this.book.isLend;
    // console.log(form.value);
    this.dismissModal(); // not required, just an ux choice
  }

  onStoreBook() {
    this.book.startTime = '';
    this.book.noOneToWhomYouLentIt = '';
    this.book.isLend = !this.book.isLend;
    this.dismissModal();  // not required, just an ux choice
  }

}
