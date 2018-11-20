import { Component, ViewChild } from '@angular/core';
import { MenuController, NavController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { OptionsPage } from '../pages/options/options';
// import { DressingPage } from '../pages/dressing/dressing';
// import { SettingsPage } from '../pages/settings/settings';

import * as firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  tabsPage:any = TabsPage;
  optionsPage:any = OptionsPage;
  // dressingPage:any = DressingPage;
  // settingsPage:any = SettingsPage;
  @ViewChild('content') content: NavController;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private menuCtrl: MenuController) {
    platform.ready().then(() => {
    // Initialize Firebase
      let config = {
        apiKey: "AIzaSyB5qxlUcf0euIvuuGnO2p2afSCYYlgSs_4",
        authDomain: "mon-inventaire.firebaseapp.com",
        databaseURL: "https://mon-inventaire.firebaseio.com",
        projectId: "mon-inventaire",
        storageBucket: "mon-inventaire.appspot.com",
        messagingSenderId: "1076772186256"
      };
      firebase.initializeApp(config);
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onNavigate(page: any) {
    this.content.setRoot(page);
    this.menuCtrl.close();
  }
}
