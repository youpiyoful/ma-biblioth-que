import { Book } from '../models/Book';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable()
export class BooksService {

  books$ = new Subject<Book[]>();

  constructor(private storage: Storage) {}

  booksList: Book[] = [
    {
      name: 'Programmer en s\'amusant avec Python',
      description: [
        'Auteur : Brendan Scott',
        'Edition : Pour Les Nuls',
        'Genre : Educatif'
      ],
      isLend: false,
      startTime: '',
      endTime: '',
      noOneToWhomYouLentIt: '',
      imageUrl: ''
    },
    {
      name: 'L\'essentiel du Japon',
      description: [
        'Auteur : Chris Rowthorn',
        'Edition : lonely planet',
        'Genre : Voyage et Culture',
      ],
      isLend: false,
      startTime: '',
      endTime: '',
      noOneToWhomYouLentIt: '',
      imageUrl: ''
    },
    {
      name: 'Vegan',
      description: [
        'Auteur : Karen Chevalier',
        'Edition : Hachette Cuisine',
        'Genre : Cuisine'
      ],
      isLend: true,
      startTime: '',
      endTime: '',
      noOneToWhomYouLentIt: '',
      imageUrl: ''
    }
  ];

  addBook(book: Book) {
  this.booksList.push(book);
  // this.saveImages();
  this.emitBooks();
  }

  emitBooks() {
    this.books$.next(this.booksList.slice());
  }

  saveData() {
    return new Promise((resolve, reject) => {
      firebase.database().ref('books').set(this.booksList).then(
        (data: DataSnapshot) => {
          resolve(data);
        }
      ).catch(
        (error) => {
          reject(error);
        }
      );
    });
  }

  retrieveData() {
    return new Promise((resolve, reject) => {
      firebase.database().ref('books').once('value').then(
        (data: DataSnapshot) => {
          this.booksList = data.val();
          this.emitBooks();
          resolve("Données récupérées avec succès !")
        }
      ).catch(
        (error) => {
          reject(error);
        }
      );
    });
  }

  // saveImages() {
  //   this.storage.set('images', this.booksList);
  // }
  //
  // fetchImages() {
  //   this.storage.get('images').then(
  //     (books) => {
  //       if (books && books.length) {
  //         this.booksList= books.slice();
  //       }
  //       this.emitBooks();
  //     }
  //   );
  // }

}
