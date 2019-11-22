import { Component, OnInit, Input } from '@angular/core';
import { IRecord } from '../search.component';

@Component({
  selector: 'app-single-record',
  templateUrl: './single-record.component.html',
  styleUrls: ['./single-record.component.css']
})
export class SingleRecordComponent implements OnInit {

  @Input() records: IRecord[] = [];

  constructor() { }

  ngOnInit() {
  }

}
