import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { SearchComponent } from './search/search.component';
import { ViewComponent } from './view/view.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule, MatProgressSpinnerModule, MatSnackBarModule } from '@angular/material';
import { SingleRecordComponent } from './search/single-record/single-record.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: '',
        component: SearchComponent,
      },
      {
        path: ':mat_no',
        component: ViewComponent,
      }
    ]
  }
];



@NgModule({
  declarations: [IndexComponent, SearchComponent, ViewComponent, NavbarComponent, SingleRecordComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatSnackBarModule
  ],
  exports: [
    RouterModule
  ]
})
export class RecordModule { }
