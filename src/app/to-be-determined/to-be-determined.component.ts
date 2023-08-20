import { Component } from '@angular/core';

@Component({
  selector: 'app-to-be-determined',
  templateUrl: './to-be-determined.component.html',
  styleUrls: ['./to-be-determined.component.css']
})
export class ToBeDeterminedComponent {

  
  ngOnInit(){
  document.getElementById ("slideRight")!.addEventListener ("click", this.myFunction, false);
  }
  myFunction():void{
    console.log("here");
    if(document.getElementById("h31")?.className == "h3"){
    document.getElementById("h31")?.classList.remove("h3");
    document.getElementById("h31")?.classList.add("new");
  document.getElementById("slideRight")!.innerHTML = "Slide Down"}
    else{
      document.getElementById("h31")?.classList.remove("new");
      document.getElementById("h31")?.classList.add("h3");
      document.getElementById("slideRight")!.innerHTML = "Slide Right";
    
  }
}
}
