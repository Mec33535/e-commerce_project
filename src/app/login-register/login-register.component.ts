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
  divClass: string = "form-inputs";
  spanClass: string = "inputs_required";
  labelClass: string = " user_labels";

  FormLogin: Array<any> = [
    {
      type: "email",
      name: "uLoginemail",
      id: "user-email-login",
      title: "Mailinizi Giriniz",
      labelTitle: "Email"
    },
    {
      type: "password",
      name: "uLoginpassword",
      id: "user-password-login",
      title: "Şifrenizi Giriniz",
      labelTitle: "Password"
    }

  ];
  FormRegister: Array<any> = [
    {
      type: "text",
      name: "uRegistername",
      id: "user-name-register",
      title: "İsim Giriniz",
      labelTitle: "Name"
    },
    {
      type: "email",
      name: "uRegisteremail",
      id: "user-email-register",
      title: "Mailinizi Giriniz",
      labelTitle: "Email"
    },
    {
      type: "password",
      name: "uRegisterpassword",
      id: "user-password-register",
      title: "Şifrenizi Giriniz",
      labelTitle: "Password"

    },
    {
      type: "tel",
      name: "uRegisterpassword",
      id: "user-phone-register",
      title: "Telefon Giriniz",
      labelTitle: "+90-(Phone)"
    },

  ];


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
