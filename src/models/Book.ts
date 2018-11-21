export class Book {

  description: string[];
  isLoan: boolean;
  startTime: string;
  endTime: string;
  noOneToWhomYouLentIt: string;
  imagePath: string;

  constructor(public name: string) {
    this.description = [];
    this.isLoan = false;
    this.startTime = '';
    this.endTime = '';
    this.noOneToWhomYouLentIt = '';
    this.imagePath = '';
  }
}
