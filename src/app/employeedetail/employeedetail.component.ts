import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../entity/Employee';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.css']
})
export class EmployeedetailComponent implements OnInit {

  @Input() employee: Employee;

  @Output() refreshEmployeeList: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
  }

  editEmployee() {
    this.router.navigate(["EditEmployee/" + this.employee.id]);
  }

  deleteEmployee(employeeToBeDeleted: Employee) {
    var result = confirm("Are you sure, you want to delete this employee?");
    if (result) {
      this.employeeService.deleteEmployee(this.employee.id);
      this.refreshEmployeeList.emit(true);
      this.router.navigate(["Employees"]);
    }
  }
}
