import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConfirmDialogModule, ConfirmationService, SharedModule, PanelModule} from 'primeng/primeng';
import { CardModule } from 'primeng/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { EmployeedetailComponent } from './employeedetail/employeedetail.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    AddemployeeComponent,
    EditemployeeComponent,
    EmployeedetailComponent,
    EmployeelistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ConfirmDialogModule,
    SharedModule,
    PanelModule,
    CardModule,
    BrowserAnimationsModule
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
