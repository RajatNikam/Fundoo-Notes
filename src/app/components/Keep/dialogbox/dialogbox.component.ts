import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotesService } from 'src/app/services/notes.service';
import { RoutesService } from '../../../services/routes.service'



@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.scss']
})
export class DialogboxComponent implements OnInit {
  public title: any
  public description: any

  constructor(private noteService: NotesService,  public RoutesService: RoutesService,
    public dialogRef: MatDialogRef<DialogboxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    console.log(data);
    this.title = data.title
    this.description = data.description

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

  updateNote() {

    let request = {
      noteId: this.data.id,
      title: this.title,
      description: this.description
    }

    this.noteService.updateNoteService(request).subscribe((result) => {
      console.log(result);
      this.dialogRef.close();
      // window.location.reload()
    })
    this.RoutesService.redirectTo("/dashboard/get-notes")
  }

}
