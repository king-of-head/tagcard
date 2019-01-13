import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyInfoPage } from '../my-info/my-info';
import { MyInfoEditPage } from '../my-info-edit/my-info-edit';
import { FriendsPage } from '../friends/friends';
import { ScannerPage } from '..//scanner/scanner';
import { DatabaseProvider } from "../../providers/database/database";
import { QRCodeModule } from 'angularx-qrcode';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  qrData: String;
  friendStr: String;

  constructor(public navCtrl: NavController, public databaseProvider: DatabaseProvider) {  
    this.qrData = `https://github.com/king-of-head/tagcard`
    databaseProvider.setMyInfo();
  }


  public gotoScanner() {
    this.navCtrl.push(ScannerPage);
  }

  public gotoMyInfo() {
    this.navCtrl.push(MyInfoPage, {identity: 'me'});
  }

  public gotoMyInfoEdit() {
    this.navCtrl.push(MyInfoEditPage);
  }

  public gotoFriends() {
    this.navCtrl.push(FriendsPage);
  }





  // If first time, goto myInfoEdit page
  async ngOnInit() {
    await this.databaseProvider.load();
    if(!this.databaseProvider.myInfo) {
      this.navCtrl.push(MyInfoEditPage);
    }
    this.friendStr = this.databaseProvider.toString();
  }
}
