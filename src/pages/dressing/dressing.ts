import { Component } from '@angular/core';
import { MenuController } from 'ionic-angular';

@Component({
  selector: 'page-dressing',
  templateUrl: 'dressing.html',
})
export class DressingPage {

  constructor(private menuCtrl: MenuController) {}

  onToggleMenu() {
    this.menuCtrl.open();
  }

}
