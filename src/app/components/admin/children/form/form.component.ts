import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../services/title.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

export interface IFormStudents {
  fullname: string;
  matNo: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  nothing: boolean = true;
  formStudent: IFormStudents[] = [];

  constructor(private title: TitleService,
              private http: HttpClient) { }

  ngOnInit() {
    this.title.changeTitle('form');
    this.http.get<IFormStudents[]>('http://localhost:3000/form')
    .subscribe(
      (data) => {
        console.log(data['data'].length);
        if (data['data'].length === 0) {
          this.nothing = true;
        } else {
          this.nothing = false;
          this.formStudent = data['data'];
        }
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

}
