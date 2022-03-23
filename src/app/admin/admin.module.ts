import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmindashComponent } from './admindash/admindash.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';







@NgModule({
  declarations: [
    AdmindashComponent,
    AdminnavbarComponent,
    AdminheaderComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatCardModule
    
  ],
  exports:[
    AdmindashComponent,
    AdminnavbarComponent

  ]


})
export class AdminModule { }
