import { Component, OnInit } from '@angular/core';
import { Employee } from '../entity/Employee';
import { EmployeeService } from '../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {

  employee: Employee;

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    var id = this.route.snapshot.params["id"];
    this.employee = this.employeeService.getEmployee(id);
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.employee);
    this.router.navigate(["Employees"]);

  }

  cancelEmployee() {
    this.router.navigate(["Employees"]);
  }

}
