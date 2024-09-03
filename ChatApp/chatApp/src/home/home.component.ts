import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LogonService } from '../app/services/logon.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { group } from '@angular/animations';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router:Router, private localstore:LogonService){ 
  }

  admin = false;
  elementClicked:string = "";
  usergroups = [{name:"group1", owner:"super"},{name:"group2", owner:"izaiah"},{name:"group3", owner:"izaiah"}];
  newgroup = {name:"",owner:""};

  username:string = "";

  cuser={"username":"",
    "id":"",
    "birthdate":"",
    "age":0,
    "email":"",
    "password":"",
    "valid":false,
    "level":""
};
  
  ngOnInit(){
    this.usernameDisplay();
    this.adminstat();
  }

  usernameDisplay(){
    if(localStorage.getItem("cuser") == null){
      this.router.navigateByUrl("")
    }else{
      let currentuser:any = localStorage.getItem("cuser")
      currentuser = JSON.parse(currentuser)
      this.username = currentuser.username;
    }
  }

  groupselect(itemclicked:any){
    this.elementClicked =  itemclicked.target.innerHTML;
    for(let i=0; i < this.usergroups.length; i++){
      this.elementClicked = this.stringCleaner(this.elementClicked)
      if(this.elementClicked == this.usergroups[i].name){
        let groupselected:any = this.usergroups[i];
      this.localstore.saveData("group",JSON.stringify(groupselected))
      this.router.navigateByUrl("channels")}}
  }

  adminstat(){
    let user:any = localStorage.getItem("cuser")
    this.cuser = JSON.parse(user);
    if(this.cuser.level == "super" || this.cuser.level == "group"){
      this.admin = true;
    }

  }

  createGroup(){
    if(this.newgroup.name == ""){
      alert("Please enter a valid group name.")
    }else if(this.newgroup.name != ""){
      this.newgroup.owner = this.cuser.username;
      this.usergroups.push(this.newgroup);
      console.log(this.usergroups)
    }
    
    
  }

  home(){
    this.router.navigateByUrl("");
  }
  profile(){
    this.router.navigateByUrl("profile")
  }

  stringCleaner(x:any){
    let cleanString: string = x.trim().replace(/\s+/g, "");
    return cleanString;
  }



}
