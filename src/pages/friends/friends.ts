import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { DatabaseProvider} from '../../providers/database/database';
import { MyInfoPage } from '../my-info/my-info'
/**
 * Generated class for the MyInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-friends',
  templateUrl: 'friends.html',
})
export class FriendsPage {

  constructor(public navCtrl: NavController,public databaseProvider: DatabaseProvider) {
    console.log(databaseProvider)
  }
  public appeardelete(){
    
  }
  public gotoHomePage() {
    this.navCtrl.push(HomePage);
  }

  public gotoFriend(friend) {
    console.log('gotoFriend')
    console.log(friend)
    this.navCtrl.push(MyInfoPage, {
      info: friend,
      identity: 'friend'
    })
    // console.log(this.navCtrl)
    
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendsPage');
  }

}