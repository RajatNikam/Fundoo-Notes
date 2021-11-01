import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-notes',
  templateUrl: './get-notes.component.html',
  styleUrls: ['./get-notes.component.scss']
})

export class GetNotesComponent implements OnInit {

  token: any;
  notesArray: any = [];

  constructor(private note: NotesService) { }

  ngOnInit(): void {

    this.note.GetallNotes(this.token).subscribe((notes: any) => {
      this.notesArray = notes.data.data.reverse();
      console.log("the reverse", this.notesArray);
      this.notesArray=this.notesArray.filter((noteData:any)=>{
        return noteData.isDeleted === false && noteData.isArchived === false;
       });
       console.log("the data",this.notesArray);

    })
  }
}