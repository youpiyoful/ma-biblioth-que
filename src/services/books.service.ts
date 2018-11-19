import { Book } from '../models/Book';

export class BooksService {
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
      noOneToWhomYouLentIt: ''
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
      noOneToWhomYouLentIt: ''
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
      noOneToWhomYouLentIt: ''
    }
  ];

  addBook(book: Book) {
  this.booksList.push(book);
  }

}
