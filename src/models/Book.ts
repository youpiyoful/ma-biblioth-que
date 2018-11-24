export class Book {

  description: string[];
  isLoan: boolean;
  startTime: string;
  endTime: string;
  noOneToWhomYouLentIt: string;
  // imageUrl: string;

  constructor(public name: string,
              public imageUrl: string) {
    this.description = [];
    this.isLoan = false;
    this.startTime = '';
    this.endTime = '';
    this.noOneToWhomYouLentIt = '';
    // this.imageUrl = '';
  }
}
