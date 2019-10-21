import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';

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
              private simple: SimpleSnackBar) { }

  ngOnInit() {
    this.form = this.fb.group({
      mat_no: ['', [ Validators.required, Validators.max(13), Validators.min(13)]],
      fullname: ['', [ Validators.required, Validators.minLength(8)]],
    });
  }

  submit(): void {
    if (this.form.invalid) {
      alert('Please check the form an try again');
    } else {
      this.http.post('http://localhost:3000/student', this.form.value, { observe: 'body'})
      .subscribe(
        (data: HttpResponse<string>) => {
          console.log(data);
          this.snackbar.open(data['message'], 'close', {
            duration: 2000,
          });
        },
        (error: HttpErrorResponse) => {
          console.log(error);
          const message = error['error']['message'];
          this.openSnackBar(message, 'close');
        },
      );
    }
  }

  openSnackBar(message: string, action: string): MatSnackBarRef<SimpleSnackBar> {
    const m = this.snackbar.open(message, action);
    return m;
  }

}
