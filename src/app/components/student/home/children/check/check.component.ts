import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ISearchResponse, IData } from 'src/app/models/searchResponse';
import { trigger, transition, state, style, animate } from '@angular/animations';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css'],
  animations: [
    trigger('success', [
      transition('* => void', animate('1s 1s ease-in-out', style({
        opacity: 0,
      }))),
      transition('void => *', animate('1s 1s ease-in-out', style({
        opacity: 1,
      }))),
    ]),
  ],
})
export class CheckComponent implements OnInit {

  error: boolean = null;
  success: boolean = null;
  searchString: FormGroup;
  data: IData = null;
  constructor(private http: HttpClient, private fb: FormBuilder) { }

  ngOnInit() {
    this.searchString = this.fb.group({
      searchValue: ['', [
        Validators.required,
        Validators.minLength(13),
        Validators.maxLength(13),
      ]]
    });

    this.searchString.get('searchValue').valueChanges
    .subscribe(
      data => { console.log(data); }
    );
  }

  checkUser(): void {
    if (this.searchString.invalid ) {
      alert('Can\'t submit. check the field and try again ');
    } else {
      const clone = this.searchString.get('searchValue').value.replace('/', '_').toLowerCase();
      let search = clone;
      this.http.get(`http://localhost:3000/student/${search}`)
    .subscribe(
      (data: ISearchResponse) => {
        this.success = true;
        this.error = false;
        console.log(data.data);
        // this.searchString.get('searchValue').patchValue('');
        // this.searchString.updateValueAndValidity();
        this.data = data.data[0];
      },
      (error) => {
        this.error = true;
        this.success = false;
      },
    );
    }

  }

}
