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
import { ListComponent } from './children/list/list.component';
import { NavbarComponent } from './children/navbar/navbar.component';
import { ClearedComponent } from './children/cleared/cleared.component';
import { PaidComponent } from './children/paid/paid.component';
import { FormComponent } from './children/form/form.component';
import { TitleService } from './services/title.service';
import { ClearedchipComponent } from './children/cleared/child/clearedchip/clearedchip.component';
import { UploadrecordComponent } from './children/index/child/uploadrecord/uploadrecord.component';
import { RecordComponent } from './children/index/child/record/record.component';
import { RecordFormComponent } from './children/index/child/record-form/record-form.component';
import { SingleRecordComponent } from './children/index/child/single-record/single-record.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'upload',
        component: IndexComponent
      },
      {
        path: 'list',
        component: RegisterComponent,
      },
      {
        path: 'cleared',
        component: ClearedComponent,
      },
      {
        path: 'paid',
        component: PaidComponent
      },
      {
        path: 'form',
        component: FormComponent,
      },
      {
        path: 'student/record/:user',
        component: SingleRecordComponent
      },
      {
        path: 'record',
        component: RecordComponent,
      },
    ],
  },
  {
    path: 'auth',
    component: AuthComponent,
  }
];


@NgModule({
  declarations: [
    AdminComponent,
    AuthComponent,
    IndexComponent,
    UploadstudentComponent,
    GraduantsComponent,
    RegisterComponent,
    ListComponent,
    NavbarComponent,
    ClearedComponent,
    PaidComponent,
    FormComponent,
    ClearedchipComponent,
    UploadrecordComponent,
    RecordComponent,
    RecordFormComponent,
    SingleRecordComponent,
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
  ],
  providers: [
    TitleService,
  ]
})
export class AdminModule { }
