import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpService } from './HTTPservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  token: any;
  url = environment.BaseUrl;

  constructor(private http: HttpService) {
    this.token = localStorage.getItem("token");
  }

  createNote(token: any, data: any) {
    console.log(token, data);
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    }
    console.log(options);
    return this.http.PostService('/notes/addNotes', data, true, options);

  }

  GetallNotes(url: any) {
    this.token = localStorage.getItem('token');
    let options = {
      headers: new HttpHeaders({
        'Authorization': this.token,
        'Content-Type': 'application/json'
      })
    }
    console.log("given data is", url);
    console.log(options);
    return this.http.Getservice('/notes/getNotesList', options);
  }

  updateNoteService(data: any) {
    console.log("hi", data);
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    };

    return this.http.PostService('/notes/updateNotes', data, true, options);

  }

  deleteNotes(deleteData: any) {
    this.token = localStorage.getItem('token')
    let options = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': this.token
      })
    }
    console.log("options", options);
    return this.http.PostService('/notes/trashNotes/', deleteData, true, options)
  }

  archiveNotes(deleteData: any) {
    this.token = localStorage.getItem('token')
    let options = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': this.token
      })
    }
    console.log("options", options);
    return this.http.PostService('/notes/archiveNotes', deleteData, true, options)
  }

  deleteForever(data: any) {
    this.token = localStorage.getItem('token')
    let options = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': this.token
      })
    }
    console.log("options", options);
    return this.http.PostService('/notes/deleteForeverNotes', data, true, options)
  }

  deleteForevere(data: any) {
    this.token = localStorage.getItem('token')
    let options = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': this.token
      })
    }
    console.log("options", options);
    return this.http.PostService('/notes/dada/user/notes', data, true, options)
  }

  changeColor(data: any) {
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    };
    return this.http.PostService('/notes/changesColorNotes', data, true, httpAuthOptions);
  }
}