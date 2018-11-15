import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { SingleBookPage } from './single-book/single-book';

/**
 * Generated class for the BooksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-books',
  templateUrl: 'books.html',
})
export class BooksPage {

  booksList = [
    {
      name: 'Programmer en s\'amusant avec Python',
      description: [
        'Auteur : Brendan Scott',
        'Edition : Pour Les Nuls',
        'Genre : Educatif'
      ]
    },
    {
      name: 'L\'essentiel du Japon',
      description: [
        'Auteur : Chris Rowthorn',
        'Edition : lonely planet',
        'Genre : Voyage et Culture',
      ]
    },
    {
      name: 'Vegan',
      description: [
        'Auteur : Karen Chevalier',
        'Edition : Hachette Cuisine',
        'Genre : Cuisine'
      ]
    }
  ];

  constructor(private modalCtrl: ModalController) {
  }

  onLoadBook(book: {name: string, description: string[]}) {
    let modal = this.modalCtrl.create(SingleBookPage, {book: book});
    modal.present();
  }

}
