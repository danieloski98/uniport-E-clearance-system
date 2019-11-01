import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { TitleService } from './services/title.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  // changeDetection: ChangeDetectionStrategy.Default
})
export class AdminComponent implements OnInit {

  showToolbar: boolean = null;

  constructor(private router: Router) { }

  ngOnInit() {
    const currentRoute = this.router.url;
    if (currentRoute === '/admin/auth') {
      this.showToolbar = false;
    }
    this.showToolbar = true;
  }

  navigate(route): void {
    this.router.navigate([route]);
  }

}
