import { Component, OnInit } from '@angular/core';
import { GetReservationsService } from '../services/get-reservations.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Reservation } from '../objects/reservation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donor-reservation-form',
  templateUrl: './donor-reservation-form.component.html',
  styleUrls: ['./donor-reservation-form.component.css']
})
export class DonorReservationFormComponent implements OnInit {

  constructor(private _getReservationsService: GetReservationsService, private _router: Router) { }

  hours = [{id: 1, hour: '9:00'}, {id: 2, hour: '9:30'}, {id: 3, hour: '10:00'}, {id: 4, hour: '10:30'},
   {id: 5, hour: '11:00'}, {id: 6, hour: '11:30'}, {id: 7, hour: '12:00'}, {id: 8, hour: '12:30'},
   {id: 9, hour: '13:00'}, {id: 10, hour: '13:30'}, {id: 11, hour: '14:00'}, {id: 12, hour: '14:30'},
   {id: 13, hour: '15:00'}, {id: 14, hour: '15:30'}, {id: 15, hour: '16:00'}, {id: 16, hour: '16:30'} ];
  date = '2018-11-10';
  params = [{ format: 'yyyy-mm-dd'}];

  calendarForm: FormGroup;
  timeForm: FormGroup;
  reservations: Reservation[];
  

  ngOnInit() {
    this.calendarForm = new FormGroup({
      'calendar': new FormControl(null, this.dateValidator.bind(this))
    });
    this.timeForm = new FormGroup({
      'hour': new FormControl(null, Validators.required)
    });
  }

  dateChanged() {
    console.log(this.date);
    if (this.date) {
      this.getReservations();
    }
  }

  dateValidator(control: FormControl): {[s: string]: boolean} {
    if (!this.date) {
      return {'dateNotValid': true};
    }
    return null;
  }

  getReservations() {
    this._getReservationsService.getReservations(this.date).subscribe(reservations => {
      console.log(reservations._embedded.reservation);
      this.reservations = reservations._embedded.reservation;
    });
  }

  isReserved(i: number) {
    if (!this.reservations) {
      return false;
    }
    return this.reservations.filter(reservation => reservation.time === i).length > 0;
  }

  getAvailableReservations(): any[] {
    const avReservations = [];
    if (!this.reservations) {
      return this.hours;
    }
    this.hours.forEach(hour => {
      let add = true;
      this.reservations.forEach(reservation => {
        if (reservation.time === hour.id) {
          add = false;
        }
      });
      if (add) {
        avReservations.push(hour);
      }
    });
    return avReservations;
  }

  saveReservation() {
    console.log(this.timeForm.value);
    if (this.timeForm.valid) {
      this._getReservationsService.saveReservation(this.date, localStorage.getItem('email'), this.timeForm.value.hour).subscribe(data => {
        console.log(data);
        this._router.navigate(['donor-data']);
      });
    }
  }
}
