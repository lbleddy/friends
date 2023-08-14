import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDetailComponent } from './users-table/user-detail/user-detail.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home',component: DashboardComponent},
  {path: 'users',component: UsersTableComponent},
  {path:'users/:id',component: UserDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
