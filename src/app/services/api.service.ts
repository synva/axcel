import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {
  }

  get (api, params = {}) {
    const apiObservable = new Observable((observer) => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
        params: params
      };
      this.http.get(environment.API_URL + api, httpOptions).subscribe((response: any) => {
        if (response.error) {
          console.log('error:', JSON.stringify(response.error));
          observer.complete();
        } else {
          observer.next(response.data);
          observer.complete();
        }
      }, (error: any) => {
        console.log('catch error:', JSON.stringify(error));
        observer.complete();
      });
    });
    return apiObservable;
  }

  post (api, params = {}) {
    const apiObservable = new Observable((observer) => {
      this.http.post(environment.API_URL + api, params).subscribe((response: any) => {
        if (response.error) {
          console.log('error:', JSON.stringify(response.error));
          observer.complete();
        } else {
          observer.next(response.data);
          observer.complete();
        }
      }, (error: any) => {
        console.log('catch error:', JSON.stringify(error));
        observer.complete();
      });
    });
    return apiObservable;
  }

}
