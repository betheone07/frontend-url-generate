import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizeService } from '../authorize.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData = {
    email: null,
    password: null
  }
  constructor(private auth: AuthorizeService, private router: Router) { }

  ngOnInit(): void {
  }

  registerUser() {
    this.auth.registerUser(this.registerUserData)
    .subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token',res.token)
        this.router.navigate(['/dashboard'])
      },
      err => console.log(err)
    )
  }

}
