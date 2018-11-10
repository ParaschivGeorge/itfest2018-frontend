import { Component, OnInit, EventEmitter, AfterViewInit } from '@angular/core';
import {MaterializeAction} from 'angular2-materialize';
declare var $:any;
/*

*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  MODEL_URL = '/assets/models'
  title = 'app';


  ngOnInit() {
  }
}
