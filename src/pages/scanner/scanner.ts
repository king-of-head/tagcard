import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
//import { ScannerPage } from './scanner';
import { QRScanner , QRScannerStatus } from '@ionic-native/qr-scanner';

/**
 * Generated class for the ScannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scanner',
  templateUrl: 'scanner.html',
})
export class ScannerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private qrScanner: QRScanner) {
  }

  ionViewDidLoad(){
  //Optionally request the permission early
  this.qrScanner.prepare()
    .then((status:QRScannerStatus) => {
       if (status.authorized){
         //camera permission was granted



         //start scanning 
         let scanSub = this.qrScanner.scan().subscribe((text:string)=> {
           console.log('Scanned something',text);

           this.qrScanner.hide(); //hide camera preview
           scanSub.unsubscribe(); //stop scanning
       });

     } else if (status.denied) {
         //camera permission was permanently denied
         //you must use QRScanner.openSettings() methos to guide the user to the settings page
         //then they can grant the permissio from there
     } else {
         //permission was denied, but not permanently. You can ask for permission again at a later time. 
     }
   })
   .catch((e:any)=>console.log('Error is', e));

    console.log('ionViewDidLoad ScannerPage');
  }

}
