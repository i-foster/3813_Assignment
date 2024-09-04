import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LogonService } from '../app/services/logon.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

    constructor(private router:Router, private storage:LogonService){}

    ngOnInit(){
      this.userDetails();
    }

    userStat = false;
    makingUser = false;
    
    newuser = {
    "username":"",
    "password":"",
    "id":0,
    "Level":""
    }

    currentUser={
      "username":"",
      "id":0,
      "birthdate":"",
      "age":0,
      "email":"",
      "password":"",
      "valid":false,
      "level":""
    };

    userDetails(){
      if(localStorage.getItem("cuser")==null){
        this.router.navigateByUrl("")
      }else{
       let cUser:any = localStorage.getItem("cuser")
        this.currentUser = JSON.parse(cUser)
      }
      if(this.currentUser.level == "super"){
        this.userStat = true;
        console.log("true")
      }
    }

    saveData(){
      this.storage.saveData("cuser",JSON.stringify(this.currentUser))
      console.log(this.currentUser)
    }
    home(){
      this.router.navigateByUrl("home");
    }

    createUser(){
      if(this.makingUser == false){
      this.makingUser = true;
      this.counterCheck();
      } else if(this.makingUser == true){
        this.makingUser = false
      }
    }

    counterCheck(){
      if(localStorage.getItem("usercounter") != null)
        {
          let currentcounter:any = localStorage.getItem("usercounter");
          currentcounter = JSON.parse(currentcounter)
          currentcounter += 1;
          this.storage.saveData("usercounter",currentcounter);
          let returnValue:number = currentcounter
          return (returnValue);}
          else(localStorage.getItem("usercounter")==null)
          {
            this.storage.saveData("usercounter","5");
            let returnValue = 5
            return (returnValue);
          }
    }
    generateUser(){
      if(this.newuser.username != null && this.newuser.password != null && this.newuser.Level != null){
        this.userStat = true;
        this.newuser.id = this.counterCheck();
        localStorage.setItem("newuser" + this.newuser.id,JSON.stringify(this.newuser))
      }
    }
    logOut(){
      localStorage.clear();
    }
  }