import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider}from '../../providers/database/database'

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

 // private retrieveJson(){
 //   let jsonData: string = this.MyInfoPage.getJsonString();
//		this.jsonObject = JSON.parse(jsonData);
 // }
  constructor(public navCtrl: NavController, public databaseProvider: DatabaseProvider) {
    console.log(databaseProvider);
    const object1 = databaseProvider.myInfo.tag;
    console.log(Object.keys(object1));
    console.log(Object.values(object1));
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyInfoPage');
  }

}
