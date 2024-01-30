import { UserRegisterService } from './../user-register.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserRegister } from '../login-register/userRegister';


@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule,
    RouterModule
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {
  userList: UserRegister[] = new Array<UserRegister>();

  // Create (ngForm)
  userCreate: UserRegister = new UserRegister();



  constructor(
    private UserRegisterService: UserRegisterService,
  ) { }

  ngOnInit(): void {
    this.UserRegisterService
      .userListRegisterObservable()
      .subscribe((response) => {
        // Observable
        this.userList = response;
      });
    // Observable subscribe
  }
}
