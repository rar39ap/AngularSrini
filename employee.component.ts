import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../employee';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employee',
  template: `
  <h2>Employee List</h2>
  <div *ngFor="let employee of employees">
  <p>{{employee.name}}</p>
  </div>
  
  `,
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  public employees:any = [];

  constructor(private _employeeServeice: EmployeeService) { }

  ngOnInit(): void {

    // this.employees = this._employeeService.getEmployees();
    this._employeeServeice.getEmployees().subscribe(data =>this.employees=data);
    
  }

}
