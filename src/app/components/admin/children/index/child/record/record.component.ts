import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/components/admin/services/title.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {

  constructor(private title: TitleService) { }

  ngOnInit() {
    this.title.changeTitle('Upload student record');
  }

}
