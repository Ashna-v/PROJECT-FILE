import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmindashComponent } from './admindash/admindash.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { AddcakeComponent } from './addcake/addcake.component';








@NgModule({
  declarations: [
    AdmindashComponent,
    AddcakeComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatTableModule
    
  ],
  exports:[
    AdmindashComponent,
  

  ]


})
export class AdminModule { }
