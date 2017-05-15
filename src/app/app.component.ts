import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { UsersService } from './users.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AngularFireAuth, UsersService, AngularFireDatabase]
})
export class AppComponent {
  user: Observable<firebase.User>;
  constructor(public afAuth: AngularFireAuth, private router: Router, private usersService: UsersService) {
    this.user = afAuth.authState;
  }

  login() {
    var provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.auth.signInWithPopup(provider);
  }

  signup(email, password) {
   if (email.length < 4) {
     alert('Please enter an email address.');
     return;
   }
   if (password.length < 4) {
     alert('Please enter a password.');
     return;
   }
   firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
     var errorMessage = error.message;
     if (errorMessage) {
       alert(errorMessage);
     }
   });
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  twitterLogin() {
    var provider = new firebase.auth.TwitterAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      console.log(result);
    });
  }

}
