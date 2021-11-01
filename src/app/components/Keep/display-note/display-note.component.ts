import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotesService } from 'src/app/services/notes.service';
import { DialogboxComponent } from 'src/app/components/Keep/dialogbox/dialogbox.component';


@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {

  @Input() allNotes: any = [];
  tokenId = localStorage.getItem("token");

  colorData: string = '';

  constructor(public note: NotesService, public dialog: MatDialog) { }

  ngOnInit(): void {

  }

  receiveToUpdate = ($colorData: string) => {
    this.colorData = $colorData;
    console.log("display " + this.colorData)
  }

  openDialog(note: any): void {
    const dialogRef = this.dialog.open(DialogboxComponent, {

      // width: '600px', height: '180px'
      // data: {title: note.title, description : note.description}
      data: note
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });

  }
}