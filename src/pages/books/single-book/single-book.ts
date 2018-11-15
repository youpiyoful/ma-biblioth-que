import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-single-book',
  templateUrl: 'single-book.html',
})
export class SingleBookPage implements OnInit {

  book: {
    name: string;
    description: string[];
  };

  constructor(public navParams: NavParams, private viewCtrl: ViewController) {
  }

  ngOnInit() {
    this.book = this.navParams.get('book');
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

}
