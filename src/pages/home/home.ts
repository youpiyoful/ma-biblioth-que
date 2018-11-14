import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BooksPage } from '../books/books';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  onGoToBooks() {
    this.navCtrl.push(BooksPage);
  }

}
