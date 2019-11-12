import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: "Employees", component:},
  { path: "AddEmployee", component:},
  { path: "EditEmployee", component:},
  { path: "**", redirectTo: 'Employees' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
