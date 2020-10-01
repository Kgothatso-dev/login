import { ObserversModule } from '@angular/cdk/observers';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class BackendService {

    constructor() { }

    getConfig() {
        return environment.social;
    }
    getCartTotal() {
        let fakeresponse = "10";
        return Observable.create(
            Observer => {
                setTimeout(() => {
                    Observer.next(fakeresponse)
                }, 2000)
            }
        )

    }
    getUserStatus() {
        let fakeresponse = true;
        return Observable.create(
            Observer => {
                setTimeout(() => {
                    Observer.next(fakeresponse)
                }, 2000)
            }
        )

    }
}