import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider}from '../../providers/database/database';
import {MyInfoEditPage} from '../../pages/my-info-edit/my-info-edit';
/**
 * Generated class for the MyInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-info',
  templateUrl: 'my-info.html',
})
export class MyInfoPage {
  public jsonObject: any;
  public gotoMyInfoEdit() {
    this.navCtrl.push(MyInfoEditPage);
  }
 // private retrieveJson(){
 //   let jsonData: string = this.MyInfoPage.getJsonString();
//		this.jsonObject = JSON.parse(jsonData);
 // }
  constructor(public navCtrl: NavController, public databaseProvider: DatabaseProvider) {
    databaseProvider.setMyInfo();
    console.log(databaseProvider);
    //console.log(object1.keys)
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyInfoPage');
  }

}
