import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'toString'})
export class ToStringPipe implements PipeTransform {
  transform(friends: any): string {
    if(!friends) {
      return 'empty friends'
    }
    let str = '' + friends.length + '\n';
    for(let i of friends) {
      str += i.id + ':' + i.name + ' / '
    }
    return str

  }
}