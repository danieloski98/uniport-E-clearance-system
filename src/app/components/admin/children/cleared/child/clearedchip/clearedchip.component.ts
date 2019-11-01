import { Component, OnInit, Input } from '@angular/core';
import { IClearedStudents } from '../../cleared.component';

@Component({
  selector: 'app-clearedchip',
  templateUrl: './clearedchip.component.html',
  styleUrls: ['./clearedchip.component.css']
})
export class ClearedchipComponent implements OnInit {

  @Input() student: IClearedStudents = null;

  constructor() { }

  ngOnInit() {
  }

}
