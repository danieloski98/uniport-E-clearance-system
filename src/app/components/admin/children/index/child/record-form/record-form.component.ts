import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-record-form',
  templateUrl: './record-form.component.html',
  styleUrls: ['./record-form.component.css']
})
export class RecordFormComponent implements OnInit {

  record: FormGroup;
  hideBtn: boolean = false;
  formInvalid: boolean = true;

  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private snack: MatSnackBar,
              private router: Router) { }

  ngOnInit() {
    this.record = this.fb.group({
      user: ['', [Validators.required, Validators.maxLength(13), Validators.minLength(13)]],
      level: ['', [ Validators.required, Validators.maxLength(3), Validators.minLength(3)]],
      semester: ['', [ Validators.required, Validators.maxLength(1), Validators.minLength(1)]],
      courses: this.fb.array([]),
    });

    this.addCourse();

    if (this.courses.length >= 9) {
      this.hideBtn = true;
      alert('can\'t go further');
    }

    if (this.record.valid) {
      this.formInvalid = false;
    }
  }

  get courses(): FormArray {
    return this.record.get('courses') as FormArray;
  }

  addCourse(): void {
    const course: FormGroup = this.fb.group({
      title: ['', [Validators.required]],
      code: ['', [ Validators.required]],
      score: ['', [ Validators.required]],
      grade: ['', [ Validators.required]],
    });

    if (this.courses.length >= 9) {
      alert('cannot add more courses');
    } else {
      this.courses.push(course);
    }
  }

  deleteCourse(index: number): void {
    this.courses.removeAt(index);
  }

  submit(): void {
    if (this.record.invalid) {
      alert('Please in all the fields correctly');
    } else {
      this.http.post('http://localhost:3000/records', this.record.value)
    .subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/admin/listh']);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
        this.snack.open(error.error['message'], 'close');
      }
    );
    }
  }

}
