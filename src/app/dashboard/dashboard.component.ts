import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthorizeService } from '../authorize.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  myurl = null;
  foundurl = null;
  constructor(private auth: AuthorizeService, private router: Router) { }

  ngOnInit(): void {
  }

  getTheUrl() {

    this.auth.findshorturl(this.myurl)
    .subscribe(
      res => {
        console.log(res)
        this.foundurl = res
      },
      err => {
        if(err instanceof HttpErrorResponse) {
          if(err.status === 401) {
                this.router.navigate(['/login'])
          }
        }
      }
    )

  }

}
