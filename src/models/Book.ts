export class Book {

  name: string;
  description: string[];
  isLoan: boolean;

  constructor(public name: string) {
    this.isLoan = false;
  }
}
