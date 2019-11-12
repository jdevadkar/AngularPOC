import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';


const routes: Routes = [
  { path: "Employees", component: EmployeelistComponent },
  { path: "AddEmployee", component: AddemployeeComponent },
  { path: "EditEmployee", component: EditemployeeComponent },
  { path: "**", redirectTo: 'Employees' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
