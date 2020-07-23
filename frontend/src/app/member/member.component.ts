import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member.model';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  isShowLogin = true;

  positions = ['Admin', 'Cashier'];

  member: Member = new Member();

  constructor() { }

  ngOnInit(): void {
  }

  onClickLogin() {

  }

  onClickShowLogin() {
    this.isShowLogin = !this.isShowLogin;
  }

  onClickRegister() {

  }

}
