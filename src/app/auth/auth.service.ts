import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;

  constructor(
    private router: Router
  ) { }

  signupUser(email: string, password: 'string') {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        console.log(error);
      });
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.token = token
            );
        }
      )
      .catch((err) => {
        console.log(err);
      });
  }

  logout() {
    firebase.auth().signOut();
    this.router.navigate(['/']);
    this.token = null;
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  isAuth() {
    return this.token != null;
  }
}
