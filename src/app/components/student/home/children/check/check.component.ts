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
  checking: boolean = null;
  showCheckBox: boolean = true;
  constructor(private http: HttpClient, private fb: FormBuilder) { }

  ngOnInit() {
    this.checking = false;
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
    this.checking = true;
    if (this.searchString.invalid ) {
      alert('Can\'t submit. check the field and try again ');
      this.checking = false;
    } else {
      const clone = this.searchString.get('searchValue').value.replace('/', '_').toLowerCase();
      // tslint:disable-next-line: prefer-const
      let search = clone;
      console.log(search);
      this.http.get(`http://localhost:3000/student/${search}`)
    .subscribe(
      (data: ISearchResponse) => {
        this.checking = false;
        this.success = true;
        this.error = false;
        this.showCheckBox = false;
        console.log(data.data);
        this.searchString.get('searchValue').patchValue('');
        this.searchString.updateValueAndValidity();
        this.data = data.data[0];
      },
      (error) => {
        this.checking = false;
        this.error = true;
        this.success = false;
        this.showCheckBox = false;
      },
    );
    }

  }

  checkAgain(): void {
    this.showCheckBox = true;
    this.error = false;
    this.success = false;
  }

}
