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
showImage():void{
  if(document.getElementById("my-img")?.style.visibility=='visible'){
  var img = document.getElementById('my-img');
  img!.style.visibility='hidden';
  document.getElementById("btn")!.innerHTML = "Show";
  }
  else{
    document.getElementById("my-img")!.style.visibility='visible'
    document.getElementById("btn")!.innerHTML = "Hide";
  }
}
}
