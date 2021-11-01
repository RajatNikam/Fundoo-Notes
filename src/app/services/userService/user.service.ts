import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../HTTPservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: any;
  BaseUrl = environment.BaseUrl;

  constructor(private httpService: HttpService) {
    localStorage.getItem('token')
  }


  registrationService(data: any) {
    // console.log("given data is", data);

    this.token = localStorage.getItem('Token');
    let options = {
      headers: new HttpHeaders({
        'Authorization': this.token,
        'Content Type': 'application/json'
      })
    }
    return this.httpService.PostService("/user/userSignUp", data, false, options)
  }

  loginService(data: any) {
     console.log("given data is", data);
     this.token = localStorage.getItem('Token');
    let options = {
      headers: new HttpHeaders({
        'Authorization': this.token,
        'Content Type': 'application/json'
      })
    }
    return this.httpService.PostService("/user/login", data, false, options)

  }

  forgotEmailService(data: any) {
    console.log("given data is", data);
    this.token = localStorage.getItem('Token');
   let options = {
     headers: new HttpHeaders({
       'Authorization': this.token,
       'Content Type': 'application/json'
     })
   }
   return this.httpService.PostService("/user/reset", data, false, options)

 }

 resetPasswordService(data: any) {
  console.log("given data is", data);
  this.token = localStorage.getItem('Token');
 let options = {
   headers: new HttpHeaders({
     'Authorization': this.token,
     'Content Type': 'application/json'
   })
 }
 return this.httpService.PostService("/user/reset-password", data, false, options)

}
}