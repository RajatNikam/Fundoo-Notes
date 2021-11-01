import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../../../services/notes.service'
import { RoutesService } from '../../../../services/routes.service'



@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  notesArray: any;
  token=localStorage . getItem('token' )

  constructor(private NotesService: NotesService, public RoutesService: RoutesService) { }

  ngOnInit(): void {
    this.getTrashNotes()
  }

  getTrashNotes(){
    this.NotesService.GetallNotes(this.token).subscribe((notes: any) => {
      this.notesArray = notes.data.data.reverse();
      console.log("the reverse", this.notesArray);
      this.notesArray=this.notesArray.filter((noteData:any)=>{
        return noteData.isDeleted === true;
       });
       console.log("the data",this.notesArray);
    })
  }
  
  permanentDelete() {
    // console.log(this.noteId);
    //alert(this.token_Id)
    let data = {
      isDeleted: false,
      noteIdList: [this.notesArray]
    }
    this.NotesService.deleteForevere(data).subscribe((data: any) => {
      console.log("parmanent Deleted Successfully", data);
      // window.location.reload();
    });
    this.RoutesService.redirectTo("/dashboard/trash")
  }
}