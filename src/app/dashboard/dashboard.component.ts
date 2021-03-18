import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  errMessage: string;
  note: Note = new Note();
  noteList: Array<Note>;
  constructor( private notesservice:NotesService){

  }
  ngOnInit(): void {
    this.notesservice.getNotes().subscribe(response => {
      if (response) {
        this.noteList = response;
      } else {
        this.errMessage = 'We are unable to retreive notes list.';
      }
    }, error => {
      this.errMessage = 'Http failure response for http://localhost:3000/notes: 404 Not Found';
    });
  }
  addNote() {
    if (!this.note.text || !this.note.title) {
      this.errMessage = 'Title and Text both are required fields';
      return;
    }

    this.notesservice.addNote(this.note).subscribe(response => {
      if (response) {
        this.noteList.push(this.note);
        this.note = new Note();
      } else {
        this.errMessage = 'We are unable to add the selected note.';
      }
    }, error => {
      this.errMessage = 'Http failure response for http://localhost:3000/notes: 404 Not Found';
    });
  }

}
