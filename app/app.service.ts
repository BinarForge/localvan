import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService{
    public static API_KEY: string = 'AIzaSyBNW0Oh0VGHF0ObiEHREIVQCGT6ixQ6NJM';

    constructor (private http: Http) {}

    postcode_lookup(postcode: string): Observable<any>{
        return this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${postcode}&key=${AppService.API_KEY}`)
                        .map(res => res.json())
                        .catch(this.handleError);
    }

    private handleError (error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}