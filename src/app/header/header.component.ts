import { AuthService } from '../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { ServerService } from '../shared/server.service';
import { Response } from '@angular/http';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private serverService: ServerService,
    private authService: AuthService
  ) { }

  saveData() {
    this.serverService.storeRecipes()
      .subscribe((resp: Response) => {
        console.log(resp);
      });
  }

  onLogout() {
    this.authService.logout();
  }

  getData() {
    this.serverService.getRecipes();
  }

  ngOnInit() {
  }

}
