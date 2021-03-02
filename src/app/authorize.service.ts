import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {

  private registerUrl = "https://beurlshortener.herokuapp.com/api/register";
  private loginurl = "https://beurlshortener.herokuapp.com/api/login";
  private shortenurl = "https://beurlshortener.herokuapp.com/url/shorten"

  constructor(private http: HttpClient, private router: Router) { }


  registerUser(user) {
    return this.http.post<any>(this.registerUrl, user)
  }

  loginUser(user) {
    return this.http.post<any>(this.loginurl,user)
  }

  findshorturl(url) {
    return this.http.post<any>(this.shortenurl, {url:url})
  }

  //whether token found in localstorage or not-boolean val
  loggedIn() {
    return !!localStorage.getItem('token')
  }

  getToken() {
    return localStorage.getItem('token')
  }

  logoutUser() {
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }
}
