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
  qrData: string;
  constructor(public navCtrl: NavController, public databaseProvider: DatabaseProvider) {  
    this.qrData = `https://github.com/king-of-head/tagcard`
  }


  public gotoScanner() {
    this.navCtrl.push(ScannerPage);
  }

  public gotoMyInfo() {
    this.navCtrl.push(MyInfoPage);
  }

  public gotoMyInfoEdit() {
    this.navCtrl.push(MyInfoEditPage);
  }

  public gotoFriends() {
    this.navCtrl.push(FriendsPage);
  }

  public async f() {
  }

  // If first time, goto myInfoEdit page
  async ngOnInit() {
    // if(!this.databaseProvider.myInfo) {
    //   this.navCtrl.push(MyInfoEditPage);
    // }
  }
}
