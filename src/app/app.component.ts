import { Component, OnInit } from '@angular/core';
import { MenuService } from 'pmmg-library';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  menuHTML;
  loggedIn;
  title = 'pmmg-library';

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.gerarMenuPMMG().subscribe(menu => {
      this.menuHTML = menu;
      this.loggedIn = true;
    }, error => {
      console.error(error);
      this.loggedIn = false;
    });
  }

}
