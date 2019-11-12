import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';
import { Employee } from '../entity/Employee';
import { ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  firstname: string;
  lastname: string;
  age: number;
  designation: string;
  employee: Employee

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
  }

  saveEmployee() {
    this.employee = new Employee(this.makeRandomId(), this.firstname, this.lastname, this.age, this.designation);
    this.employeeService.addEmployee(this.employee);
    this.router.navigate(["Employees"])
  }

  cancelEmployee() {
    this.router.navigate(["Employees"]);
  }

  makeRandomId(): string {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 10; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
}
