import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../services/title.service';

@Component({
  selector: 'app-uploadstudent',
  templateUrl: './uploadstudent.component.html',
  styleUrls: ['./uploadstudent.component.css']
})
export class UploadstudentComponent implements OnInit {

  constructor(private title: TitleService) { }

  ngOnInit() {
    this.title.changeTitle('Upload new student record');
    alert("Here");
  }

}
