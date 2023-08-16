import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-add',
  template: 'Favorite Color: <input type="text" [formControl] = "favoriteColorControl">'
})
export class UserAddComponent {

favoriteColorControl = new FormControl('');

}


