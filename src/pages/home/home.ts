import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyInfoPage } from '../my-info/my-info';
import { MyInfoEditPage } from '../my-info-edit/my-info-edit';
import { FriendsPage } from '../friends/friends';
import { ScannerPage } from '..//scanner/scanner';
import { DatabaseProvider } from "../../providers/database/database";
// import { QRCodeModule } from 'angularx-qrcode';
import * as qr from 'qrcode-reader' // This is a function!!

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  qrData: String;
  friendStr: String;
  logging: String;
  imageModel: any;

  constructor(public navCtrl: NavController, public databaseProvider: DatabaseProvider) {  
    this.qrData = `https://github.com/king-of-head/tagcard`
    databaseProvider.setMyInfo();
    this.logging = ''
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

  public processQr(event) {
    this.logging = 'QR!'
    console.log('imageModel')
    console.log(event)
    var file = event.target.files[0]
    console.log(file)
    console.log(qr['default'])
    var qrInstance = new qr['default']()
    console.log(qrInstance)
    qrInstance.callback = (err, result) => {this.navCtrl.push(MyInfoPage, {info: result.result})}
    
    var reader = new FileReader();
    reader.addEventListener('load', function() {
      console.log('LOAD EVENTLISTENER')
      qrInstance.decode(this.result);
    }.bind(reader), false);
    reader.readAsDataURL(file);
  }



  // If first time, goto myInfoEdit page
  async ngOnInit() {
    await this.databaseProvider.load();
    if(!this.databaseProvider.myInfo) {
      this.navCtrl.push(MyInfoEditPage);
    } else {
      this.qrData = JSON.stringify(this.databaseProvider.myInfo)
    }
    this.friendStr = this.databaseProvider.toString();

  }
}
