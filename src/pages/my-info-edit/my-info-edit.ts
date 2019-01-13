import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from "../../providers/database/database";
import {MyInfoPage} from '../my-info/my-info';

/**
 * Generated class for the MyInfoEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-info-edit',
  templateUrl: 'my-info-edit.html',
})
export class MyInfoEditPage {
	firstname: string;
	lastname: string;
	gender: string;
	Location: string;
	Status: string;
	company: string;
	school: string;
	tags= [];




  constructor(public navCtrl: NavController, public navParams: NavParams, public databaseProvider: DatabaseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyInfoEditPage');
  }
  public yourFancyButton(){
  this.navCtrl.push(MyInfoPage);
  }

}
