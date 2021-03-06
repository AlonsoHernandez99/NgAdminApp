import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/shared/sidebar.service';
import { UserService } from '../../services/user/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  public user: User;

  constructor(
    public _ss: SidebarService,
    private _us: UserService
  ) { }

  ngOnInit(): void {
    this.user = this._us.user;
  }

  public logout(): void {
    this._us.logout();
  }

}
