import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LogonService } from '../app/services/logon.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router:Router, private localstore:LogonService){ 
  }

  elementClicked:string = "";
  usergroups = ["group1", "group2", "group3"];

  username:string = "";
  
  ngOnInit(){
    this.usernameDisplay();
  }

  usernameDisplay(){
    if(localStorage.getItem("cuser") == null){
      this.router.navigateByUrl("")
    }else{
      let currentuser:any = localStorage.getItem("cuser")
      currentuser = JSON.parse(currentuser)
      console.log(currentuser.username)
      this.username = currentuser.username;
      console.log(this.username)
    }
  }


  groupselect(itemclicked:any){
    this.elementClicked =  itemclicked.target.innerHTML;
    this.localstore.saveData("group",this.elementClicked)
    this.router.navigateByUrl("channels")
  }


  home(){
    this.router.navigateByUrl("home");
  }
  profile(){
    this.router.navigateByUrl("profile")
  }

  stringCleaner(x:any){
    let cleanString: string = x.trim().replace(/\s+/g, "");
    return cleanString;
  }


}
