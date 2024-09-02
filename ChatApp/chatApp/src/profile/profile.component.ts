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

    currentUser={
      "username":"",
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
    profile(){
      this.router.navigateByUrl("profile")
    }
    createUser(){

    }
  }