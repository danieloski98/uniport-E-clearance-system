import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {

  Toolbar: BehaviorSubject<boolean> = new BehaviorSubject(false);
  ToolbarState = this.Toolbar.asObservable();

  constructor() { }

  updateToolbar(state) {
    this.Toolbar.next(state);
  }
}
