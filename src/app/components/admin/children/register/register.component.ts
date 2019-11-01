import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { IStudent } from '../list/list.component';
import { MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  students: IStudent[] = [];

  constructor(private http: HttpClient,
              private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.http.get<HttpResponse<IStudent>>('http://localhost:3000/student')
    .subscribe(
      ((data) => {
        this.students = data['data'];
        console.log(data['data']);
      }),
      ((error: HttpErrorResponse) => {}),
    );
  }

  delete(event: string): void {
    const mat_noClone = event.replace('/', '_');
    this.http.delete<string>(`http://localhost:3000/student/${mat_noClone}`)
    .subscribe(
      ((data) => {
        console.log(data);
        this.snackbar.open(data['message'], 'close', {
          duration: 5000,
        })
        .afterDismissed()
        .subscribe(() => {
          window.location.reload();
        });
      }),
      ((error: HttpErrorResponse) => {
       this.snackbar.open(error['error'].message, 'close', {
         duration: 5000,
       });
      })
    );
  }

}
