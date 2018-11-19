export class Book {

  description: string[];
  isLoan: boolean;
  startTime: string;
  endTime: string;

  constructor(public name: string) {
    this.isLoan = false;
    this.startTime = '';
    this.endTime = '';
  }
}
