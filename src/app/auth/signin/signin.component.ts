import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  onSignin(form: NgForm) {
    this.authService.signinUser(form.value.email, form.value.password);
  }

  ngOnInit() {
  }

}
