import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../services/title.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

export interface IPaidStudents {
  fullname: string;
  matNo: string;
}

@Component({
  selector: 'app-paid',
  templateUrl: './paid.component.html',
  styleUrls: ['./paid.component.css']
})
export class PaidComponent implements OnInit {

  nothing: boolean = true;
  paidStudent: IPaidStudents[] = [];

  constructor(private title: TitleService,
    private http: HttpClient) { }

  ngOnInit() {
    this.title.changeTitle('Payment');
    this.http.get<IPaidStudents[]>('http://localhost:3000/paid')
    .subscribe(
      (data) => {
        console.log(data['data'].length);
        if (data['data'].length === 0) {
          this.nothing = true;
        } else {
          this.nothing = false;
          this.paidStudent = data['data'];
        }
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

}
