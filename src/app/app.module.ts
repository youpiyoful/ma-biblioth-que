import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BooksPage } from '../pages/books/books';
import { SingleBookPage } from '../pages/books/single-book/single-book';
import { SettingsPage } from '../pages/settings/settings';
import { DressingPage } from '../pages/dressing/dressing';
import { TabsPage } from '../pages/tabs/tabs';
import { BooksService } from '../services/books.service';
import { OptionsPage } from '../pages/options/options';
import { BookFormPage } from '../pages/books/book-form/book-form';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BooksPage,
    SingleBookPage,
    SettingsPage,
    DressingPage,
    TabsPage,
    OptionsPage,
    BookFormPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BooksPage,
    SingleBookPage,
    SettingsPage,
    DressingPage,
    TabsPage,
    OptionsPage,
    BookFormPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BooksService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
