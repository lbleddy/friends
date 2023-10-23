import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ChartService } from '../chart.service';
import { User } from '../User';
import { count } from 'rxjs';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {
  constructor(private chartService:ChartService,
    ){};
  submitUser(){
   
    var inputValue = (<HTMLInputElement>document.getElementById('id')).value;
    var inputValue2 = (<HTMLInputElement>document.getElementById('name')).value;
    var inputValue3 = (<HTMLInputElement>document.getElementById('age')).value;
    var inputValue4 = (<HTMLInputElement>document.getElementById('hobbies')).value;
    console.log(inputValue)
    var user:User = new User(
     
    )
    user.id = Number.parseInt(inputValue)
    user.name = inputValue2
    user.age = inputValue3
    user.hobbies = inputValue4
    console.log(user)
    this.chartService.addUser(user).subscribe()

    document.getElementById('add')!.style.visibility = 'visible';
    
  }


applyForm = new FormGroup({
  id: new FormControl(''),
  name: new FormControl(''),
  age: new FormControl(''),
  hobbies: new FormControl('')
  
});
}


