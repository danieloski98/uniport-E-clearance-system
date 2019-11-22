import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { PaymentComponent } from './children/payment/payment.component';
import { Angular4PaystackModule } from 'angular4-paystack';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: '',
        component: CheckComponent
      },
      {
        path: 'payment',
        component: PaymentComponent
      }
    ]
  },
  {
    path: 'record',
    loadChildren: () => import('../record/record.module').then(mod => mod.RecordModule)
  }
];



@NgModule({
  declarations: [IndexComponent,
     CheckComponent, FacultyComponent, DepartmentComponent,
    BulsaryComponent, SenateComponent, NavbarComponent, PaymentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    Angular4PaystackModule.forRoot('txxxksx')
  ],
  exports: [
    RouterModule,
    NavbarComponent
  ],
  providers: [
    StateService
  ]
})
export class HomeModule { }
