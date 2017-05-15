import { Injectable } from '@angular/core';
import { User } from './user.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class UsersService {
  users: FirebaseListObservable<any[]>;
  constructor(private angularFire: AngularFireDatabase) {
    this.users = angularFire.list('users');
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
