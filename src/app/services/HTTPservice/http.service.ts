import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  BaseUrl = environment.BaseUrl;
  token: any;

  constructor(private http: HttpClient) { }

  PostService(url: any, data: any, token: boolean = false, headers: any) {

    return this.http.post(this.BaseUrl + url, data, token && headers);
  }

  Getservice(url: any, headers: any) {
    return this.http.get(this.BaseUrl + url, headers)
  }

  // DeleteService(url = '', token: boolean = false, headers: any = null) {
  //   return this.http.delete(this.BaseUrl + url, token && headers)
  // }

  // Delete(url: string, data: any, isHeaderRequired: any = false, token: any = null) {
  //   console.log(data, url);
  //   let options = { headers: new HttpHeaders({ "Authorization": token }) };
  //   return this.http.post(url, data, isHeaderRequired && options);
  // }

  //coloring notes
  // Color(url: string, data: any, isHeaderRequired: any = false, token: any = null) {
  //   console.log(data, url);
  //   let options = { headers: new HttpHeaders({ "Authorization": token }) };
  //   return this.http.post(this.BaseUrl + url, data, isHeaderRequired && options);
  // }

}