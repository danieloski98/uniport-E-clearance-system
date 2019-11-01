import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../services/title.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

export interface IClearedStudents {
  fullname: string;
  matNo: string;
}

@Component({
  selector: 'app-cleared',
  templateUrl: './cleared.component.html',
  styleUrls: ['./cleared.component.css']
})
export class ClearedComponent implements OnInit {

  clearedStudent: IClearedStudents[] = [];
  nothing: boolean = null;

  constructor(private title: TitleService,
              private http: HttpClient) { }

  ngOnInit() {
    this.title.changeTitle('Cleared students');
    this.http.get<IClearedStudents[]>('http://localhost:3000/cleared')
    .subscribe(
      (data) => {
        console.log(data['data'].length);
        if (data['data'].length === 0) {
          this.nothing = true;
        } else {
          this.nothing = false;
          this.clearedStudent = data['data'];
        }
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

}
