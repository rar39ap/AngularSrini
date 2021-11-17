import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { nameValidation } from './shared/user-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  [x: string]: any;
  get userName(){
    return this.registrationForm.get('userName');
  }
// isSubmittes:boolean=false
constructor(private fb: FormBuilder){}
registrationForm = this.fb.group({
  userName:['Srinivas', [Validators.required, Validators.minLength(3), nameValidation(/password/)]],
  password:[''],
  confirmPassword:[''],
  address: this.fb.group({
    city:[''],
    state:[''],
    postalCode:['']
  })
});

  // registrationForm = new FormGroup({
  //   username : new FormControl('Srinivas', Validators.required),
  //   password : new FormControl(''),
  //   confirmPassword : new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl('')
  //   })
  // });

  loadAPI(){
    this.registrationForm.patchValue({
      username: 'Srinivas',
      password: 'test',
      confirmPassword: 'test',
      address:{
        city:'City',
        state:'State',
        postalCode: '12345'
      }
    })
  }
  // loadAPI(){
  //   this.registrationForm.setValue({
  //     username: 'Srinivas',
  //     password: 'test',
  //     confirmPassword: 'test',
  //     address:{
  //       city:'City',
  //       state:'State',
  //       postalCode: '12345'
  //     }
  //   })
  // }
}
