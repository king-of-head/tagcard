import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from "../../providers/database/database";
import { MyInfoPage } from '../my-info/my-info';

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
	tags: string[][];


  public yourFancyButton(){
    this.databaseProvider.myInfo.firstname = this.firstname;
    this.databaseProvider.myInfo.lastname = this.lastname;
    this.databaseProvider.myInfo.gender = this.gender;
    this.databaseProvider.myInfo.Location = this.Location;
    this.databaseProvider.myInfo.Status = this.Status;
    this.databaseProvider.myInfo.company = this.company;
    this.databaseProvider.myInfo.school = this.school;
    this.databaseProvider.myInfo.tags = this.tags;
    this.navCtrl.push(MyInfoPage);
    
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public databaseProvider: DatabaseProvider) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyInfoEditPage');
  }
  addInfo(){

  }

}
