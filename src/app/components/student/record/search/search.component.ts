import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

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
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searching: boolean = null;
  records: IRecord[] = [];
  view: string = 'search';

  search: FormGroup = null;
  constructor(private http: HttpClient,
              private fb: FormBuilder,
              private snackb: MatSnackBar) { }

  ngOnInit() {
    this.searching = false;
    this.search = this.fb.group({
      searchstr: ['', [ Validators.required, Validators.maxLength(13)]],
    });
  }

  toggleView(view: string): void {
    this.view = view;
  }

  searchUser(): void {
    this.searching = true;
    setTimeout(() => {
      const user: string = this.search.get('searchstr').value as string;
      const userClone = user.replace('/', '_');
      this.http.get<IRecord[]>(`http://localhost:3000/records/${userClone}`, {observe: 'body', headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })})
      .subscribe(
        (data) => {
          this.searching = false;
          console.log(data);
          const incomingData = data["data"] as Array<IRecord>;
          if (incomingData.length <= 0) {
            this.snackb.open(`No record found for ${this.search.get('searchstr').value}`, 'close');
          } else {
            this.records = incomingData;
            this.view = 'success';
          }
        },
        (error: HttpErrorResponse) => {
          this.searching = false;
          console.log(error);
          this.snackb.open('No record found', 'close');
        },
      );
    }, 4000);
  }


}
