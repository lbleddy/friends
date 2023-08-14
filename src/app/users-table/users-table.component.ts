import { Component, OnInit } from '@angular/core';
import { ChartService } from '../chart.service';
import { User } from '../User';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {

  


  public usersArray: User[] = [];
  constructor(private chartService:ChartService,
    ){};

  ngOnInit(): void {
      this.chartService.getUsers().subscribe(res => {
        this.usersArray = res;
      })
  }}
    
   

