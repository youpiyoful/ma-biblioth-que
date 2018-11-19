import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { Book } from '../../../models/Book';
import { BooksService } from '../../../services/books.service';

@Component({
  selector: 'page-single-book',
  templateUrl: 'single-book.html',
})
export class SingleBookPage implements OnInit {

  index: number;
  book: Book;
  myDate: string = new Date().toISOString();

  constructor(public navParams: NavParams,
              public viewCtrl: ViewController,
              public booksService: BooksService) {}

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.book = this.booksService.booksList[this.index];
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  onToggleBook() {
    this.book.isLoan = !this.book.isLoan;
    if (this.book.isLoan === false){
      this.book.startTime = this.myDate;
    } else {
      this.book.startTime = '';
    }
  }

}
