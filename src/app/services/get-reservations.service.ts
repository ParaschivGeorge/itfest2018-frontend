import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GetReservationsService  {

  constructor(private _http: HttpClient) { }

  getReservations (date: string): Observable<any> {
    const queryParam = new HttpParams().set('date', date);

    return this._http.get<any>(environment.apiUrl + '/reservation/search/findAllByDate', {params : queryParam});
  }

  saveReservation(date: string, email: string, time: number) {
    let queryParam = new HttpParams().set('email', email);
    queryParam = queryParam.append('date', date);
    queryParam = queryParam.append('time', time.toString());
    return this._http.request<any>('post', environment.apiUrl + '/reservation/add', {params : queryParam});
  }

  deleteReservation(email: string) {
    const queryParam = new HttpParams().set('email', email);
    return this._http.request<any>('delete', environment.apiUrl + '/reservation/delete', {params : queryParam});
  }

}
