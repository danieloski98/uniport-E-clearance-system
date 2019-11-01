import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitleService } from 'src/app/components/admin/services/title.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

export interface IRecord extends Document {
  user: string;
  level: string;
  semester: string;
  courses: ICourse[];
}

export interface ICourse {
  title: string;
  code: string;
  score: number;
  grade: string;
}

@Component({
  selector: 'app-single-record',
  templateUrl: './single-record.component.html',
  styleUrls: ['./single-record.component.css']
})
export class SingleRecordComponent implements OnInit {

  title$: string =  null;
  records: IRecord[] = [];
  constructor(private ar: ActivatedRoute,
              private title: TitleService,
              private http: HttpClient) { }

  ngOnInit() {
    this.ar.paramMap.subscribe(
      data => {
        console.log(data.get('user'));
        const rawUser = data.get('user');
        const user = data.get('user').replace('_', '/');
        this.title$ = `Record for ${user}`;
        this.title.changeTitle(this.title$);
        this.http.get<IRecord[]>(`http://localhost:3000/records/${rawUser}`)
        .subscribe(
          (record) => {
            this.records = record['data'];
            console.log(this.records);
            if (record.length < 1) {
              alert('There is no record for this student');
            }
          },
          (error: HttpErrorResponse) => {
            console.log(error);
          }
        );
      }
    );
  }

}
