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
  public info: any;
  public identity: string;
  public gotoedit(){
    this.navCtrl.push(MyInfoEditPage);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public databaseProvider: DatabaseProvider) {
    // databaseProvider.setMyInfo();
    this.identity = navParams.data.identity
    if(this.identity == 'friend') {
      console.log('navParams.data.info')
      console.log(navParams.data.info)
      this.info = navParams.data.info
    } else { 
      this.info = databaseProvider.myInfo
    }
    if(!this.info) this.info = {} // in case
    
    // console.log(databaseProvider);
    // const object1 = databaseProvider.myInfo.tag;
    // console.log('object1')
    // console.log(object1)
    // const key = console.log(Object.keys(object1));
    
    // //console.log(object1.keys)
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyInfoPage');
  }

}
