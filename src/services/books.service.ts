import { Book } from '../models/Book';
import { Subject } from 'rxjs/Subject';

import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

export class BooksService {

  books$ = new Subject<Book[]>();

  booksList: Book[] = [
    {
      name: 'Programmer en s\'amusant avec Python',
      description: [
        'Auteur : Brendan Scott',
        'Edition : Pour Les Nuls',
        'Genre : Educatif'
      ],
      isLoan: false,
      startTime: '',
      endTime: '',
      noOneToWhomYouLentIt: '',
      imagePath: ''
    },
    {
      name: 'L\'essentiel du Japon',
      description: [
        'Auteur : Chris Rowthorn',
        'Edition : lonely planet',
        'Genre : Voyage et Culture',
      ],
      isLoan: false,
      startTime: '',
      endTime: '',
      noOneToWhomYouLentIt: '',
      imagePath: ''
    },
    {
      name: 'Vegan',
      description: [
        'Auteur : Karen Chevalier',
        'Edition : Hachette Cuisine',
        'Genre : Cuisine'
      ],
      isLoan: true,
      startTime: '',
      endTime: '',
      noOneToWhomYouLentIt: '',
      imagePath: ''
    }
  ];

  addBook(book: Book) {
  this.booksList.push(book);
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

}
