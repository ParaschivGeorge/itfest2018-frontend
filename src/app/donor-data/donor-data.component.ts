import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Reservation } from '../objects/reservation';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthGuardService } from '../services/auth-guard.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-donor-data',
  templateUrl: './donor-data.component.html',
  styleUrls: ['./donor-data.component.css']
})
export class DonorDataComponent implements OnInit {

  username: string;
  lastLogindate: string;
  analyse: File;
  lastDonationDate: string;
  nextDonationDate: string;
  reservation: Reservation;
  dataLocalUrl: any;

  constructor(private _http: HttpClient, private domSanitizer: DomSanitizer, private auth:AuthService) { }

  hours = [{id: 1, hour: '9:00'}, {id: 2, hour: '9:30'}, {id: 3, hour: '10:00'}, {id: 4, hour: '10:30'},
  {id: 5, hour: '11:00'}, {id: 6, hour: '11:30'}, {id: 7, hour: '12:00'}, {id: 8, hour: '12:30'},
  {id: 9, hour: '13:00'}, {id: 10, hour: '13:30'}, {id: 11, hour: '14:00'}, {id: 12, hour: '14:30'},
  {id: 13, hour: '15:00'}, {id: 14, hour: '15:30'}, {id: 15, hour: '16:00'}, {id: 16, hour: '16:30'} ];

  ngOnInit() {
    const queryParam = new HttpParams().set('email', localStorage.getItem('email'));

    this._http.get<any>(environment.apiUrl + '/user/search/findByEmail', {params : queryParam}).subscribe(resp => {
      console.log(resp);
      this.username = resp.username;
      this.lastLogindate = resp.lastLogindate;
      this.lastDonationDate = resp.lastDonationDate;
      this.nextDonationDate = resp.nextDonationDate;
    });
    this._http.get<any>(environment.apiUrl + '/reservation/search/findByUserEmail', {params : queryParam}).subscribe(resp => {
      console.log(resp);
      this.reservation = resp._embedded.reservation.length > 0 ? resp._embedded.reservation[0] : null;
    });

    this._http.get(environment.apiUrl + '/user/analyse',
     {params: queryParam, observe: 'response', responseType: 'blob'}).subscribe(resp => {
      console.log(resp);
      if (resp) {
        const file3 = new Blob([resp.body], {type: 'application/pdf'});
        this.dataLocalUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(file3));
      }
    });
  }

  getReservationTime(i: number) {
    return this.hours.filter(hour => hour.id === i)[0].hour;
  }

  logout() {
    this.auth.logout()
  }

}
