import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-doctor-patient-list',
  templateUrl: './doctor-patient-list.component.html',
  styleUrls: ['./doctor-patient-list.component.css']
})
export class DoctorPatientListComponent implements OnInit {
  userList
  searchText
  SearchForm: FormGroup;
  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.getUserList().subscribe(resp =>  this.userList = resp)

  }

  search() {
    console.log(this.SearchForm.value.search)

  }

  clearForm() {
    this.SearchForm.reset()
  }
}
