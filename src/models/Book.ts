export class Book {

  description: string[];
  isLoan: boolean;

  constructor(public name: string) {
    this.isLoan = false;
  }
}
