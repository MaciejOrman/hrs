import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { CanLoad, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Route, Router } from '@angular/router/';

@Injectable()
export class AuthService implements CanLoad, CanActivate {

  private _isLogged = false;

  constructor(private snackBar: MatSnackBar, private router: Router) { }

  public setLogin(isLogged: boolean) {
    this._isLogged = isLogged;
  }

  public isLogged(): boolean {
    return this._isLogged;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    console.log(`canActivate: ${this._isLogged}`);

    this.showSnackBarIfNecessary();
    return this._isLogged;
  }

  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    console.log(`canLoad: ${this._isLogged}`);

    this.showSnackBarIfNecessary();
    return this._isLogged;
  }

  private showSnackBarIfNecessary() {
    if (!this._isLogged) {
        this.snackBar.open('You have to be logged in!', 'OK', {
            duration: 3000,
        });
    }
  }

}
