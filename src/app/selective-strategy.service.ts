import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SelectiveService implements PreloadingStrategy {
    constructor() { }
    preload(route: Route, fn: () => Observable<any>): Observable<any> {
        if (route.data && route.data['preload']) {
            return fn();// the load function
        }
        return of(null);
    }

}

function load(): Observable<any> {
    throw new Error('Function not implemented.');
}
