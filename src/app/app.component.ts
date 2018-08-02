import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    ngOnInit() {
      firebase.initializeApp({
        apiKey: 'AIzaSyD1VhLyYUj8BH5q1BdsOhx0VO__QJEg_0U',
        authDomain: 'recipebook-75f8e.firebaseapp.com',
      });
    }
}
