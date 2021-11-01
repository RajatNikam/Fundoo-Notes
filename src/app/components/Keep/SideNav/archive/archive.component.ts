import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../../../services/notes.service'


@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  notesArray: any;
  token = localStorage.getItem('token')

  constructor(private NotesService: NotesService) { }

  ngOnInit(): void {
    this.getTrashNotes()
  }

  getTrashNotes() {
    this.NotesService.GetallNotes(this.token).subscribe((notes: any) => {
      this.notesArray = notes.data.data.reverse();
      console.log("the reverse", this.notesArray);
      this.notesArray = this.notesArray.filter((noteData: any) => {
        return noteData.isArchived === true && noteData.isDeleted === false;
      });
      console.log("the data", this.notesArray);
    })
  }

}