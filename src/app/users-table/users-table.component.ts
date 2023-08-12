import { Component } from '@angular/core';
import { ChartService } from '../chart.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent {

  constructor(private chartService:ChartService){};

  users:any = this.chartService.getUsers().subscribe(data =>
    {this.users = data});
}
