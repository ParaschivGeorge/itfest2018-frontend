import { MaterializeModule } from 'angular2-materialize';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Angular2FontawesomeModule } from  'angular2-fontawesome/angular2-fontawesome';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GetBgService } from './services/get-bg.service';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { FeedComponent } from './feed/feed.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { ReactiveFormsModule, FormControl, NgModel, FormsModule } from '@angular/forms';
import { ManageReservationsComponent } from './manage-reservations/manage-reservations.component';
import { UserReservationsComponent } from './user-reservations/user-reservations.component';
import { BrowseRoomsComponent } from './browse-rooms/browse-rooms.component';
import { RoomsLayoutComponent } from './rooms-layout/rooms-layout.component';
import { MakeReservationsComponent } from './make-reservations/make-reservations.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SpreadsheetComponent } from './spreadsheet/spreadsheet.component';
import { GetReservationsService } from './services/get-reservations.service';
import { AuthInterceptor } from './interceptor';
import { GetRoomsService } from './services/get-rooms.service';
import { DoctorPatientListComponent } from './doctor-patient-list/doctor-patient-list.component';
import { DonorFormComponent } from './donor-form/donor-form.component';


const appRoutes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: AuthPageComponent },
  { path: 'doctor-patient-list', canActivate: [AuthGuardService], component: DoctorPatientListComponent },
  { path: 'donor-form', canActivate: [AuthGuardService], component: DonorFormComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HomePageComponent,
    FeedComponent,
    AuthPageComponent,
    ManageReservationsComponent,
    UserReservationsComponent,
    BrowseRoomsComponent,
    RoomsLayoutComponent,
    MakeReservationsComponent,
    NavBarComponent,
    UserReservationsComponent,
    SpreadsheetComponent,
    DoctorPatientListComponent,
    DonorFormComponent
  ],
  imports: [
    MaterializeModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    Angular2FontawesomeModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],

  providers: [GetBgService, AuthGuardService, AuthService, NgModel, GetReservationsService, GetRoomsService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
