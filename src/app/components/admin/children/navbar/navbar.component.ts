import { Component, OnInit, Input } from '@angular/core';
import { TitleService } from '../../services/title.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title: string = null;

  constructor(private title$: TitleService) { }

  ngOnInit() {
    this.title$.title.subscribe(
      (t) => {
        this.title = t;
      }
    );
  }

}
