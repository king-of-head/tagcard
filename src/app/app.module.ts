import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { QRCodeModule } from 'angularx-qrcode';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { FormsModule } from '@angular/forms';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MyInfoPage } from '../pages/my-info/my-info';
import { MyInfoEditPage } from '../pages/my-info-edit/my-info-edit';
import { FriendsPage } from '../pages/friends/friends';
import { ScannerPage } from '../pages/scanner/scanner';
import { DatabaseProvider } from '../providers/database/database';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MyInfoPage,
    MyInfoEditPage,
    FriendsPage,
    ScannerPage,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    QRCodeModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MyInfoPage,
    MyInfoEditPage,
    FriendsPage,
    ScannerPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider,
    QRScanner,
  ]
})
export class AppModule {}
