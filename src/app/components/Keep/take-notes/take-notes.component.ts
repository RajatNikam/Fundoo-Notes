import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { RoutesService } from '../../../services/routes.service'


@Component({
  selector: 'app-take-notes',
  templateUrl: './take-notes.component.html',
  styleUrls: ['./take-notes.component.scss']
})
export class TakeNotesComponent implements OnInit {
  fullEdit: boolean = false;
  pin: boolean = false;
  title = '';
  description = '';
  token: any;

  constructor(private note: NotesService, public RoutesService: RoutesService) { }


  ngOnInit(): void {

  }

  addNote() {
    let data = {
      title: this.title,
      description: this.description,
    }
    console.log(data)
    this.token = localStorage.getItem('token');
    console.log(" add note data ", data, this.token);
    if (this.title && this.description) {
      this.note.createNote(this.token, data).subscribe((response: any) => {
        console.log(response);
        let message = "note created successfull";
        console.log(message);

        this.title = " ";
        this.description = "";

        // window.location.reload()
        this.RoutesService.redirectTo("/dashboard/get-notes")


      }, error => {
        console.log("error in register", error);
      })
    } else {
      this.fullEdit = false;
    }
  }


  togglePin() {
    this.pin = !this.pin;
  }
  displayFull() {
    this.fullEdit = true;
  }

}