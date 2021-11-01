import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotesService } from '../../../services/notes.service'
import { TrashComponent } from '../SideNav/trash/trash.component'
import { DisplayNoteComponent } from '../display-note/display-note.component';
import { ActivatedRoute } from '@angular/router';
import { ArchiveComponent } from '../SideNav/archive/archive.component';
import { RoutesService } from '../../../services/routes.service'
import { Router } from '@angular/router';



@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})

export class IconsComponent implements OnInit {
  @Input() noteId: any;
  notesArray: any;
  @Input() noteData: any;
  @Input() color: any;

  token_Id = localStorage.getItem('token');

  isDisplayNoteComponent: boolean = false;
  isTrashComponent: boolean = false;
  isArchiveComponent: boolean = false;

  // @Output() colorRefresh: EventEmitter<any> = new EventEmitter();

  constructor(public RoutesService: RoutesService, public NotesService: NotesService, private route: ActivatedRoute, private Router: Router) { }

  isColor: string = '';

  ngOnInit(): void {
    let comp = this.route.snapshot.component;
    if (comp == DisplayNoteComponent) {
      this.isDisplayNoteComponent = true;
    }

    if (comp == TrashComponent) {
      this.isTrashComponent = true;
      console.log(this.isTrashComponent);
    }
    if (comp == ArchiveComponent) {
      this.isArchiveComponent = true;
      console.log(this.isArchiveComponent);
    }

  }

  colors: Array<any> = [
    { code: '#ffffff', name: 'white' },
    { code: '#FF6347', name: 'red' },
    { code: '#FF4500', name: 'orange' },
    { code: '#FFFF00', name: 'yellow' },
    { code: '#ADFF2F', name: 'green' },
    { code: '#43C6DB', name: 'teal' },
    { code: '#728FCE', name: 'Blue' },
    { code: '#2B65EC', name: 'darkblue' },
    { code: '#D16587', name: 'purple' },
    { code: '#F9A7B0', name: 'pink' },
    { code: '#E2A76F', name: 'brown' },
    { code: '#D3D3D3', name: 'grey' },
  ];

  delete() {
    console.log(this.noteId);
    let data = {
      noteIdList: [this.noteId],
      isDeleted: true
    }
    this.NotesService.deleteNotes(data).subscribe((data: any) => {
      console.log("Deleted Successfully", data);
      // window.location.reload();
    });
    // this.RoutesService.redirectTo("/dashboard/get-notes")
    this.Router.navigateByUrl('/').then(() => {
      this.Router.navigate(["/dashboard/get-notes"]);
    });
  }

  restore() {
    console.log(this.noteId);
    let data = {
      noteIdList: [this.noteId],
      isDeleted: false
    }
    this.NotesService.deleteNotes(data).subscribe((data: any) => {
      console.log("Restore Successfully", data);
      // window.location.reload();
    });
    this.RoutesService.redirectTo("/dashboard/trash")

  }

  permanentDelete() {
    console.log(this.noteId);
    //alert(this.token_Id)
    let data = {
      noteIdList: [this.noteId],
      isDeleted: false
    }
    this.NotesService.deleteForever(data).subscribe((data: any) => {
      console.log("parmanent Deleted Successfully", data);
      // window.location.reload();
    });
    this.RoutesService.redirectTo("/dashboard/trash")
  }

  archive() {
    console.log(this.noteId);
    let data = {
      noteIdList: [this.noteId],
      isArchived: true
    }
    this.NotesService.archiveNotes(data).subscribe((data: any) => {
      console.log("Archived Successfully", data);
      // window.location.reload();
    });
    this.RoutesService.redirectTo("/dashboard/get-notes")
  }

  unarchive() {
    console.log(this.noteId);
    let data = {
      noteIdList: [this.noteId],
      isArchived: false
    }
    this.NotesService.archiveNotes(data).subscribe((data: any) => {
      console.log("Unrchived Successfully", data);
      // window.location.reload();
    });
    this.RoutesService.redirectTo("/dashboard/archive")
  }

  setColor(color: any) {
    this.noteData.color = color;
    console.log('color', color);
    let data = {
      color: color,
      noteIdList: [this.noteId],
    }
    console.log(data);
    this.NotesService.changeColor(data).subscribe(
      (response: any) => {
        this.color.emit()
        console.log('Response of setColour', response);
      },
      (error: any) => {
        console.log('archive Error at icons methods', error);

      }
    );
    // window.location.reload();
  }
}