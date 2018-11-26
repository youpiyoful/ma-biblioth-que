export class Book {

  description: string[];
  isLend: boolean;
  startTime: string;
  endTime: string;
  noOneToWhomYouLentIt: string;
  // imageUrl: string;

  constructor(public name: string,
              public imageUrl: string) {
    this.description = [];
    this.isLend = false;
    this.startTime = '';
    this.endTime = '';
    this.noOneToWhomYouLentIt = '';
    // this.imageUrl = '';
  }
}
