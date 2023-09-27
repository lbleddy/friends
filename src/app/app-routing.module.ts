import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDetailComponent } from './users-table/user-detail/user-detail.component';
import { UserAddComponent } from './user-add/user-add.component';
import { ToBeDeterminedComponent } from './to-be-determined/to-be-determined.component';
import { SpaceInvadersComponent } from './space-invaders/space-invaders.component';
import { UserDeleteComponent } from './users-table/user-delete/user-delete.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home',component: DashboardComponent},
  {path: 'users',component: UsersTableComponent},
  {path:'users/detail/:id',component: UserDetailComponent},
  {path:'users/add',component: UserAddComponent},
  {path:'other',component:ToBeDeterminedComponent},
  {path:'other2',component:SpaceInvadersComponent},
  {path:'users/delete/:id',component: UserDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
