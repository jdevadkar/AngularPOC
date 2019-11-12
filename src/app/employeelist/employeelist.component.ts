import { Component, OnInit } from '@angular/core';
import { Employee } from '../entity/Employee';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  _listFilterBy: string;
  allEmployees: Employee[];
  filteredList: Employee[];

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.allEmployees = this.employeeService.getAllEmployees();
    this.filteredList = this.allEmployees;
    this._listFilterBy = "";
  }

  get listFilterBy(): string {
    return this._listFilterBy;
  }

  set listFilterBy(value: string) {
    this._listFilterBy = value;
    this.filteredList = this._listFilterBy ? this.performFilter(this._listFilterBy) : this.allEmployees;
  }

  performFilter(filterBy: string): Employee[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.allEmployees.filter((employee: Employee) => employee.firstname.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
      employee.lastname.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  addEmployee() {
    this.router.navigate(["AddEmployee"]);
  }

  refreshList() {
    this.allEmployees = this.employeeService.getAllEmployees();
    this.filteredList = this.allEmployees;
  }



}
