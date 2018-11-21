import { Component, ViewChild } from '@angular/core';
import { MenuController, NavController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AuthPage } from '../pages/auth/auth';
import { OptionsPage } from '../pages/options/options';
import { TabsPage } from '../pages/tabs/tabs';
// import { DressingPage } from '../pages/dressing/dressing';
// import { SettingsPage } from '../pages/settings/settings';

import * as firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  authPage: any = AuthPage;
  isAuth: boolean;
  optionsPage: any = OptionsPage;
  tabsPage: any = TabsPage;
  @ViewChild('content') content: NavController;
  // dressingPage:any = DressingPage;
  // settingsPage:any = SettingsPage;

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

      firebase.auth().onAuthStateChanged(
        (user) => {
          if(user) {
            this.isAuth = true;
            this.content.setRoot(TabsPage);
          } else {
            this.isAuth = false;
            this.content.setRoot(AuthPage, {mode: 'connect'});
          }
        }
      );

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onNavigate(page: any, data?: {}) {
    this.content.setRoot(page, data ? data : null);
    this.menuCtrl.close();
  }

  onDisconnect() {
    firebase.auth().signOut();
    this.menuCtrl.close();
  }
}
