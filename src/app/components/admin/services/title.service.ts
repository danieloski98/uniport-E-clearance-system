import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  title$: BehaviorSubject<string> = new BehaviorSubject('');
  title: Observable<string>;
  constructor() {
    this.title = this.title$.asObservable();
  }

  changeTitle(title: string): void {
    this.title$.next(title);
    this.title = this.title$.asObservable();
    this.title.subscribe(
      data => {
        console.log(data);
      },
    );
  }
}
