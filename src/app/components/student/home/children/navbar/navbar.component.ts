import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title: string;

  constructor(private titleState: StateService) { }

  ngOnInit() {
    this.titleState.title.subscribe(
      data => this.title = data
    );
  }

}
