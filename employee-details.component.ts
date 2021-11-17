import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../employee';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employee-details',
  template: `
  <h2>Employee Full Details</h2>
  <div *ngFor="let employee of employees">
  <li>{{employee.id}} {{employee.name}} {{employee.age}}</li>
  </div>
  `,
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  public employees:any = [];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {

    // this.employees = this._employeeService.getEmployees();
    this._employeeService.getEmployees().subscribe(data =>this.employees=data);
    
  }

}
