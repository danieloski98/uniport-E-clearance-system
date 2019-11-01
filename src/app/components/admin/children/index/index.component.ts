import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TitleService } from '../../services/title.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  title = 'Dashboard';
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private snackbar: MatSnackBar,
              private http: HttpClient,
              private router: Router,
              private title$: TitleService) { }

  ngOnInit() {
    this.form = this.fb.group({
      mat_no: ['', [ Validators.required, Validators.maxLength(13), Validators.minLength(13)]],
      fullname: ['', [ Validators.required, Validators.minLength(8)]],
    });
    this.title$.changeTitle('Upload new student');
  }

  submit(): void {
    if (this.form.invalid) {
      this.snackbar.open('Please fill the form correctly', 'close');
    } else {
      this.http.post('http://localhost:3000/student', this.form.value, { observe: 'body'})
      .subscribe(
        (data: HttpResponse<string>) => {
          console.log(data);
          this.snackbar.open(data['message'], 'close', {
            duration: 2000,
          });
          this.form.get('mat_no').setValue('');
          this.form.get('fullname').setValue('');
          this.form.updateValueAndValidity();
        },
        (error: HttpErrorResponse) => {
          console.log(error);
          const message = error['error']['message'];
          this.openSnackBar(message, 'close', {
            duration: 5000,
          });
        },
      );
    }
  }

  openSnackBar(message: string, action: string, options ?: MatSnackBarConfig): MatSnackBarRef<SimpleSnackBar> {
    const m = this.snackbar.open(message, action, options);
    return m;
  }

  navigate() {
    this.router.navigate(['/admin/list']);
  }

}
