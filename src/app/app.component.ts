import { Component } from '@angular/core';
import { AuthorizeService } from './authorize.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'urlshortener-frontend';

  constructor(private authService: AuthorizeService) { }
}
