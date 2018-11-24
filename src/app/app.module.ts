import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AuthPage } from '../pages/auth/auth';
import { AuthService } from '../services/auth.service';
import { BookFormPage } from '../pages/books/book-form/book-form';
import { BooksPage } from '../pages/books/books';
import { BooksService } from '../services/books.service';
import { Camera } from '@ionic-native/camera';
import { DressingPage } from '../pages/dressing/dressing';
import { HomePage } from '../pages/home/home';
import { MyApp } from './app.component';
import { OptionsPage } from '../pages/options/options';
import { SingleBookPage } from '../pages/books/single-book/single-book';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';


@NgModule({
  declarations: [
    AuthPage,
    BookFormPage,
    BooksPage,
    DressingPage,
    HomePage,
    MyApp,
    OptionsPage,
    SettingsPage,
    SingleBookPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AuthPage,
    BookFormPage,
    BooksPage,
    DressingPage,
    HomePage,
    MyApp,
    OptionsPage,
    SettingsPage,
    SingleBookPage,
    TabsPage
  ],
  providers: [
    AuthService,
    BooksService,
    Camera,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
