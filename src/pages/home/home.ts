import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyInfoPage } from '../my-info/my-info';
import { MyInfoEditPage } from '../my-info-edit/my-info-edit';
import { FriendsPage } from '../friends/friends';
import { DatabaseProvider } from "../../providers/database/database";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})
export class HomePage {

  constructor(public navCtrl: NavController, public databaseProvider: DatabaseProvider) {  
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

    
}
