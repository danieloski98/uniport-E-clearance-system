import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './children/auth/auth.component';
import { IndexComponent } from './children/index/index.component';
import { UploadstudentComponent } from './children/uploadstudent/uploadstudent.component';
import { GraduantsComponent } from './children/graduants/graduants.component';

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
    GraduantsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminModule { }
