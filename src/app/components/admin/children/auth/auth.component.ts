import { Component, OnInit } from '@angular/core';
// import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  // snackbarConfig: MatSnackBarConfig = null;
  loginForm: FormGroup = null;

  constructor(private http: HttpClient,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [ Validators.email, Validators.required ]],
      password: ['', [ Validators.required, Validators.min(8)]],
    });
  }

  login(): void {
    if(this.loginForm.invalid) {
      alert('Please fill in the form correctly');
    } else {
      this.http.post('http://localhost:3000/courseadviser/login', this.loginForm.value, {observe: 'body'})
      .subscribe(
        (data) => {
          console.log(data);
          alert(data['message']);
          this.router.navigate(['/admin/dashboard']);
        },
        (error: HttpErrorResponse) => {
          console.log(error);
          alert(error['error'].message);
        },
      );
    }
  }

}
