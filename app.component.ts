import { Component } from '@angular/core';
import { User } from './user';
import {EnrollmentService } from './enrollment.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular', 'React','Vue']
  topichasError = true;
  submitted = false;

  userModel = new User('Srinivas', 'abc@gmail.com', 1234567890, 'default', 'morning', true);

  constructor(private _enrollmentService: EnrollmentService){}

  validateTopic(value: any){
    if( value === "default"){
      this.topichasError=true;
    } else {
      this.topichasError=false;
    }
  }
  onSubmit(){
    // console.log(this.userModel)

    this.submitted=true;
    this._enrollmentService.enroll(this.userModel).subscribe(
      (      data: any) => console.log('success!', data),
      (      error: any) => console.error('error!', error)
      )
      
    
  }
}
function data(arg0: any, data: any) {
  throw new Error('Function not implemented.');
}

