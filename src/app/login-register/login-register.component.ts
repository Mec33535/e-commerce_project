import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-register',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
  ],
  templateUrl: './login-register.component.html',
  styleUrl: './login-register.component.scss'
})

export class LoginRegisterComponent {
  x: number = 5;
  login: {
    a: string,
    order: string
  } = {
      a: "a",
      order: "order-12",
    };

  register: {
    b: string,
    order: string
  } = {
      b: "b",
      order: "order-5"
    };

  display = {

  }
  isVisible: boolean = false;
  makeVisible() {
    this.isVisible = !this.isVisible;
  }
}
