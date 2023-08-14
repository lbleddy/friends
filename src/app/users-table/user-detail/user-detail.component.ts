import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/User';
import { ChartService } from 'src/app/chart.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  public user = <any>{};
  error: any;
  constructor(
    private route:ActivatedRoute,
    private chartService:ChartService
  ){}

  ngOnInit(): void {
      this.loadUser();
      console.log(this.user);
  }

  loadUser(){
    const userId = +this.route.snapshot.paramMap.get('id')!;
    this.chartService.getUserById(userId).subscribe(
      data => this.user = data,
      error => this.error = error
    )
  }

}
