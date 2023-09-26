import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ChartService } from '../chart.service';
import { User } from '../User';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {
  constructor(private chartService:ChartService,
    ){};
  submitUser(){
    this.chartService.addUser(new User(
      Number.parseInt(this.applyForm.value.id!) ?? '',
      this.applyForm.value.name ?? '',
      Number.parseInt(this.applyForm.value.age!)?? '',
      this.applyForm.value.hobbies!.split(',') ?? ''
    )).subscribe((response:any)=>console.log(response));
  }

favoriteColorControl = new FormControl('');
applyForm = new FormGroup({
  id: new FormControl(''),
  name: new FormControl(''),
  age: new FormControl(''),
  hobbies: new FormControl('')
  
});
}


