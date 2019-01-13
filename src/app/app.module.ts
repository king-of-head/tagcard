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
import { MyInfoPageModule } from '../pages/my-info/my-info.module';
import { MyInfoEditPage } from '../pages/my-info-edit/my-info-edit';
import { MyInfoEditPageModule } from '../pages/my-info-edit/my-info-edit.module';
import { FriendsPage } from '../pages/friends/friends';
import { FriendsPageModule } from '../pages/friends/friends.module';
import { ScannerPage } from '../pages/scanner/scanner';
import { ScannerPageModule } from '../pages/scanner/scanner.module';
import { DatabaseProvider } from '../providers/database/database';
import { ToStringPipe } from '../pages/friend-string.pipe'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    // MyInfoPage,
    // MyInfoEditPage,
    // FriendsPage,
    // ScannerPage,
    ToStringPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    QRCodeModule,
    FriendsPageModule,
    MyInfoPageModule,
    MyInfoEditPageModule,
    ScannerPageModule,
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
