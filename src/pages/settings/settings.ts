import { Component } from '@angular/core';
import {  AlertController, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public alertCtrl: AlertController,
              private menuCtrl: MenuController) {}

  onPrivateList() {
    let alert = this.alertCtrl.create({
      title: 'Êtes-vous certain de vouloir rendre cette liste privée ?',
      subTitle: 'Cette action rendra votre liste invisible aux yeux des autres utilisateurs...',
      buttons: [
        {
          text: 'Annulé',
          role: 'cancel'
        },
        {
          text: 'Confirmer',
          handler: () => console.log('Confirmé !')
        }
      ]
    });
    alert.present();
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }

}
