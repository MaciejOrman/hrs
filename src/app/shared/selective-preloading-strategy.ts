import { Route } from '@angular/router/';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Injectable } from '@angular/core';
import { PreloadingStrategy } from '@angular/router';

@Injectable()
export class SelectivePreloadingStrategy implements PreloadingStrategy {

  constructor() { }

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data && route.data['preload']) {
      console.log('Preloaded: ' + route.path);
      return load();
    } else {
      return Observable.of(null);
    }
  }

}
