import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TitleService } from '../../services/title.service';
import { Router } from '@angular/router';

export interface IStudent {
  fullname: string;
  mat_no: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() student: IStudent;
  @Output() deleteStudent = new EventEmitter<string>();

  constructor(private title: TitleService,
              private router: Router) { }

  ngOnInit() {
    this.title.changeTitle('List of students');
  }

  route(): void {
    const clone = this.student.mat_no.replace('/', '_');
    const r = '/admin/student/record/' + clone;
    this.router.navigateByUrl(r);
  }

  delete(mat_no) {
    this.deleteStudent.emit(mat_no);
  }

}
