import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  titleObservable: BehaviorSubject<string> = new BehaviorSubject('List of Graduating students');
  title: Observable<string>;
  constructor() {
    this.title = this.titleObservable.asObservable();
   }

   changeTitle(title): void {
     this.titleObservable.next(title);
   }
}
