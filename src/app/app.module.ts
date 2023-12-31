import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDetailComponent } from './users-table/user-detail/user-detail.component';
import { UserAddComponent } from './user-add/user-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToBeDeterminedComponent } from './to-be-determined/to-be-determined.component';
import { SpaceInvadersComponent } from './space-invaders/space-invaders.component';
import { UserDeleteComponent } from './users-table/user-delete/user-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersTableComponent,
    DashboardComponent,
    UserDetailComponent,
    UserAddComponent,
    ToBeDeterminedComponent,
    SpaceInvadersComponent,
    UserDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
