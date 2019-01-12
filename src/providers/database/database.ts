// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';






/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


class MyData {
  name: string;
  gender: string;
  location: {
    state: string;
    city: string;
  }
  status: string;
  company: string;
  tag: Object;
}

class FriendData extends MyData {
  id: number;
}

// Lifecycle:
// Construct -> Load(async) -> Add/Remove/Fill/Clear

@Injectable()
export class DatabaseProvider {


  public friends: FriendData[];
  public myInfo: MyData;
  public friendsId: number;

  // get friends() {
  //   return this._friends;
  // }

  constructor(private storage: Storage) {
    console.log('Hello DatabaseProvider Provider');
  }
  public async load() {
    // this.storage.get('friends').then((val) => {
    //   this.friends = val;
    // })
    // this.storage.get('friendsId').then((val) => {
    //   this.friendsId = val;
    // })
    // this.storage.get('myInfo').then((val) => {
    //   this.myInfo = val;
    // })
    this.friends = await this.storage.get('friends')
    if(this.friends == null) this.friends = []
    this.friendsId = await this.storage.get('friendsId')
    if(this.friendsId == null) this.friendsId = 0
    this.myInfo = await this.storage.get('myInfo')
  }

  public addFriend(newFriend) {
    newFriend.id = this.friendsId;
    this.friends.push(newFriend);
    this.friendsId += 1;
    this.storage.set('friends', this.friends);
    this.storage.set('friendsId', this.friendsId);
  }

  public removeFriend(id) {
    this.friends = this.friends.filter(x => x.id != id);
    this.storage.set('friends', this.friends);
  } 

  public updateMyInfo(newInfo) {
    this.myInfo = newInfo;
    this.storage.set('myInfo', this.myInfo);
  }


  public fillFriend() {
    console.log('FILL')
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
      name: 'A',
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
    this.addFriend({name: 'Ara1', gender: 'male', location: {state: 'CA', city: 'Santa Barbara',}, status: 'single', company: 'UCSB', tag: {'ACG': ['school', 'days'],},});
    this.addFriend({name: 'Ara2', gender: 'male', location: {state: 'CA', city: 'Santa Barbara',}, status: 'single', company: 'UCSB', tag: {'ACG': ['school', 'days'],},});
    this.addFriend({name: 'Ara3', gender: 'male', location: {state: 'CA', city: 'Santa Barbara',}, status: 'single', company: 'UCSB', tag: {'ACG': ['school', 'days'],},});
    this.addFriend({name: 'Ara4', gender: 'male', location: {state: 'CA', city: 'Santa Barbara',}, status: 'single', company: 'UCSB', tag: {'ACG': ['school', 'days'],},});
    this.addFriend({name: 'Ara5', gender: 'male', location: {state: 'CA', city: 'Santa Barbara',}, status: 'single', company: 'UCSB', tag: {'ACG': ['school', 'days'],},});
    this.addFriend({name: 'Ara6', gender: 'male', location: {state: 'CA', city: 'Santa Barbara',}, status: 'single', company: 'UCSB', tag: {'ACG': ['school', 'days'],},});
    this.addFriend({name: 'Ara7', gender: 'male', location: {state: 'CA', city: 'Santa Barbara',}, status: 'single', company: 'UCSB', tag: {'ACG': ['school', 'days'],},});
    this.addFriend({name: 'Ara8', gender: 'male', location: {state: 'CA', city: 'Santa Barbara',}, status: 'single', company: 'UCSB', tag: {'ACG': ['school', 'days'],},});
    this.addFriend({name: 'Ara9', gender: 'male', location: {state: 'CA', city: 'Santa Barbara',}, status: 'single', company: 'UCSB', tag: {'ACG': ['school', 'days'],},});
  }

  public async clear(){
    this.friends = null;
    await this.storage.set('friends', this.friends);
    this.updateMyInfo(null);
  }

  public toString() {
    var str= '';
    for(var i of this.friends) {
      str += i.name + ' / '
    }
    return str

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
