import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './children/index/index.component';
import { CheckComponent } from './children/check/check.component';
import { FacultyComponent } from './children/faculty/faculty.component';
import { DepartmentComponent } from './children/department/department.component';
import { BulsaryComponent } from './children/bulsary/bulsary.component';
import { SenateComponent } from './children/senate/senate.component';
import { NavbarComponent } from './children/navbar/navbar.component';
import { StateService } from '../../../services/state.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: '',
        component: CheckComponent
      }
    ]
  }
];



@NgModule({
  declarations: [HomeComponent, IndexComponent,
     CheckComponent, FacultyComponent, DepartmentComponent,
    BulsaryComponent, SenateComponent, NavbarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [
    RouterModule
  ],
  providers: [
    StateService
  ]
})
export class HomeModule { }
