import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-analyse',
  templateUrl: './user-analyse.component.html',
  styleUrls: ['./user-analyse.component.css']
})


export class UserAnalyseComponent implements OnInit {
  @Input('user') user
  fileList:FileList
  uploading = false
  constructor(private http:HttpClient) { }
  
  calendarForm: FormGroup;
  date = '2018-10-28';
  params = [{ format: 'yyyy-mm-dd'}];

  ngOnInit() {
    this.calendarForm = new FormGroup({
      'calendar': new FormControl(null)
    });
  }



  sendFile(event) {
    console.log("yes");
    
    this.fileList = event.target.files;
   
}


uploadFile() {
  this.uploading=true
  if(this.fileList.length > 0) {

    let queryParam = new HttpParams().set('donationDate', this.date);
    queryParam = queryParam.append('email', this.user.email);
    let file: File = this.fileList[0];
    let formData:FormData = new FormData();
    formData.append('analyse', file, file.name);
    let headers = new HttpHeaders();
    /** In Angular 5, including the header Content-Type can invalidate your request */
    headers.append('Content-Type', 'multipart/form-data');
   
    console.log(headers + '\n' + queryParam);
    
    console.log()
    this.http.request('post', environment.apiUrl + '/user/addAnalyse', { headers: headers, params: queryParam, body: formData}).subscribe(
            data => {
              console.log('success')
              alert('file uploded succesfully')
              this.uploading = false;
          },
            error => {console.log(error)
              this.uploading = false;
            }
        )
}
}

}
