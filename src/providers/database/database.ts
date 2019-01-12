// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {
  public friends: {
    id: number,
    name: string, 
    gender: string,
    location: {
      state: string,
      city: string,
    }
    status: string,
    company: string,
    tag: Object,
  }[];

  // get friends() {
  //   return this._friends;
  // }

  public addFriend(newFriend) {
    newFriend.id = this.friendsId;
    if(!this.friends) {
      this.friends = []
    } 
    this.friends.push(newFriend);
    this.friendsId += 1;
    this.storage.set('friends', this.friends);
    this.storage.set('friendsId', this.friendsId);
  }

  public removeFriend(id) {
    this.friends = this.friends.filter(x => x.id != id);
    this.storage.set('friends', this.friends);
  }
  

  private friendsId: number;

  public myInfo: {
    name: string, 
    gender: string,
    location: {
      state: string,
      city: string,
    }
    status: string,
    company: string,
    tag: Object,
  }

  public updateMyInfo(newInfo) {
    this.myInfo = newInfo;
    this.storage.set('myInfo', this.myInfo);
  }


  // constructor(public http: HttpClient) {
  constructor(private storage: Storage) {
    console.log('Hello DatabaseProvider Provider');
    this.storage.get('friends').then((val) => {
      this.friends = val;
    })
    this.storage.get('friendsId').then((val) => {
      this.friendsId = val;
    })
    this.storage.get('myInfo').then((val) => {
      this.myInfo = val;
    })
  }


  public fill() {
    this.addFriend({
      name: 'Ara',
      gender: 'male',
      location: {
        state: 'CA',
        city: 'Santa Barbara',
      },
      status: 'single',
      company: 'UCSB',
      tag: {
        'ACG': ['school', 'days'],
      },
    });
    this.addFriend({
      name: 'Bill Gates',
      gender: 'male',
      location: {
        state: 'NY',
        city: 'New York City',
      },
      status: 'married',
      company: 'Microsoft',
      tag: {
        'Rich': ['super rich'],
      },
    });
    this.addFriend({

    })
  }

  public async clear(){
    this.friends = null;
    await this.storage.set('friends', this.friends);
    this.updateMyInfo(null);
  }

  // public findFriend(id){
  //   for(var i of this.friends) {
  //     if(i.id == id) {
  //       return i;
  //     }
  //   }
  //   return false;
  // }


  
}
