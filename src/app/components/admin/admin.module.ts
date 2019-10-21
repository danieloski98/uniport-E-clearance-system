import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './children/auth/auth.component';
import { IndexComponent } from './children/index/index.component';
import { UploadstudentComponent } from './children/uploadstudent/uploadstudent.component';
import { GraduantsComponent } from './children/graduants/graduants.component';
import { RegisterComponent } from './children/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: IndexComponent
      },
      {
        path: 'auth',
        component: AuthComponent
      },
      {
        path: 'signup',
        component: RegisterComponent,
      }
    ],
  }
];


@NgModule({
  declarations: [
    AdminComponent,
    AuthComponent,
    IndexComponent,
    UploadstudentComponent,
    GraduantsComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminModule { }
