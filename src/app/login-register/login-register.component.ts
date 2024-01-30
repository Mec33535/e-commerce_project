import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { UserRegister } from './userRegister';
import { UserRegisterService } from '../user-register.service';

@Component({
  selector: 'app-login-register',
  standalone: true,
  imports: [CommonModule,
    FormsModule,

  ],
  templateUrl: './login-register.component.html',
  styleUrl: './login-register.component.scss'
})

export class LoginRegisterComponent implements OnInit {

  userList: UserRegister[] = new Array<UserRegister>();

  // Create (ngForm)
  userCreate: UserRegister = new UserRegister();



  constructor(
    private userRegisterService: UserRegisterService,
  ) { }

  ngOnInit(): void {
    // Admine buradan bilgi çekilecek
    this.userRegisterService
      .userListRegisterObservable()
      .subscribe((response) => {
        // Observable
        this.userList = response;
        console.log(response);
      });
    // Observable subscribe
  }

  // Method
  registerCreate(form: NgForm) {
    // Formdan gelen verileri göstermek
    const formData =
      form.value.name + ' ' + form.value.email + ' ' + form.value.password + ' ' + form.value.number;
    console.log("Userlisti bastırdım" + JSON.stringify(this.userList))

    // Service subscribe
    this.userRegisterService
      .createUserRegisterObservable(this.userCreate)
      .subscribe((response) => {

        form.reset();
      });
  } //end registerCreate

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

  isVisible: boolean = false;
  makeVisible() {
    this.isVisible = !this.isVisible;
  }


}
