// import { AlertifyMessageService } from './alertify-message.service';
// CORE
import { Injectable, OnInit } from '@angular/core';

// Api icin
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

// RxJS
import { Observable, catchError, map, tap, throwError } from 'rxjs';
// UserRegister
import { UserRegister } from './login-register/userRegister';

@Injectable({
  providedIn: 'root'
})
// Export
export class UserRegisterService implements OnInit {
  // Field
  // Api Path
  path: string = 'http://localhost:2222/user';
  pathMongo: string = 'http://localhost:1111/user/register';
  // Constructor
  // Api istegi icin: httpClient
  constructor(
    private httpClient: HttpClient,
    // private alertifyMessageService: AlertifyMessageService
  ) { }

  // ngOnInit
  ngOnInit(): void {

  }


  // NOT: Serviste sadece Observable nesnesini instance yaptım.
  // API LIST
  // getUserRegisterObservabler():Observable<any> {
  // Bu fonksiyon: Observable dönecek ve türü UserRegister olacaktır.
  userListRegisterObservable(): Observable<UserRegister[]> {
    //this.alertifyMessageService.alertSuccess('User List Success');
    // Listeleme
    return this.httpClient.get<UserRegister[]>(this.path).pipe(
      tap((response) => {
        console.log(JSON.stringify(response));
      }),
      catchError(this.observableUserRegisterCatchErrorHandling)
    );
  } //end User Register List Api


  // CREATE
  createUserRegisterObservable(userRegister: UserRegister): Observable<UserRegister> {
    // HEADERS
    const headerHttpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this.httpClient.post<UserRegister>(this.path, userRegister).pipe(
      tap((response) => {
        console.log(response);
        console.log(JSON.stringify(response));
      }),
      catchError(this.observableUserRegisterCatchErrorHandling)
    );
  } // createUserRegisterObservable


  // Error Handling
  observableUserRegisterCatchErrorHandling(err: HttpErrorResponse) {
    //throw new Error('Function not implemented.');
    let httpErrorData = '';
    // err.error nesnesi ErrorEvent'in bir akrabasıysa
    if (err.error instanceof ErrorEvent) {
      httpErrorData = 'Genel Bir Hatamız var' + err.error.message;
      console.error(httpErrorData);
    } else {
      httpErrorData =
        "Json-server veya NodeJs'den veri gelmiyor ne yaptında gelmiyor :) ";
      console.error(httpErrorData);
    }
    return throwError(httpErrorData);
  }
} //end UserRegisterService

