import { Observable } from 'rxjs/Observable';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'app/shared/auth.service';
import { MatCheckboxChange } from '@angular/material/material';

@Component({
  selector: 'hrs-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private authService: AuthService) { }

  handleChange(change: MatCheckboxChange) {
    this.authService.setLogin(change.checked);
  }

  isLogged(): boolean {
    return this.authService.isLogged();
  }

}
