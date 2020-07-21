import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  mailNotification = 40;
  feedNotification = 8;

  constructor() { }

  ngOnInit(): void {
  }

  onClickLogout(): void {
    alert("logout");
  }

}
