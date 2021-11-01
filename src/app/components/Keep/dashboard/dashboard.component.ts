import { Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  isExpandable: boolean = false;
  mobileQuery: MediaQueryList;

  constructor(media: MediaMatcher, private router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
  }

  ngOnInit(): void {
  }

  notes() {
    this.router.navigateByUrl('/dashboard/get-notes');
  };

  reminder() {
    this.router.navigateByUrl('/user');
  };

  editlabel() {
    this.router.navigateByUrl('/user');
  };

  archive() {
    this.router.navigateByUrl('/dashboard/archive');
  };

  trash() {
    this.router.navigateByUrl('/dashboard/trash');
  };

}