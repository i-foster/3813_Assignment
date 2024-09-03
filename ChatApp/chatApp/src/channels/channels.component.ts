import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LogonService } from '../app/services/logon.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-channels',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './channels.component.html',
  styleUrl: './channels.component.css'
})
export class ChannelsComponent {
  constructor(private router:Router, private localstore:LogonService){ }

  delete = false;
  admin = false;
  channels =[""];  
  deleteClicked:string = "";
  currentGroupDetails = {
    name:"",
    owner:""
  }
  cuser={"username":"",
    "id":"",
    "birthdate":"",
    "age":0,
    "email":"",
    "password":"",
    "valid":false,
    "level":""
};
nChannel:string="+" 

ngOnInit():void {
  this.adminstat()
  this.Currentgroup()}

 Currentgroup(){
  type groupsModel = {
    groupName:string;
    groupChannels:string[];
  };
  
  let groups:groupsModel[] = [
    {groupName:"group1", groupChannels:["Welcome", "Introduce Yourself", "Current Happenings"]},
    {groupName:"group2", groupChannels:["Admin", "Complaints", "Suggestions"]},
    {groupName:"group3", groupChannels:["Movies", "TV", "Books", "Music"]},
    {groupName:"group4", groupChannels:["Music", "Welcome"]},
  ]
  
  if(localStorage.getItem("group") == null){
      this.router.navigateByUrl("home");
  }else {
    let selectedGroup:any = localStorage.getItem("group");
    this.currentGroupDetails = JSON.parse(selectedGroup)
    let cleanString: string = selectedGroup.trim().replace(/\s+/g, "");
    selectedGroup = cleanString;    
    for (let i = 0; i < groups.length; i++){
      if(this.currentGroupDetails.name == groups[i].groupName){
      this.channels = groups[i].groupChannels
  }}
}

  }

  adminstat(){
    let user:any = localStorage.getItem("cuser")
    this.cuser = JSON.parse(user);
    if(this.cuser.level == "super" || this.cuser.level == "group"){
      this.admin = true;
    }
  }

  elementClicked:string = "";
  channelselect(itemclicked:any){
    this.elementClicked =  itemclicked.target.innerHTML;
    this.localstore.saveData("channel",this.elementClicked)
    this.router.navigateByUrl("chats")
  }

  createChannel(){
    if(this.nChannel != "+")
    this.channels.push(this.nChannel)
  }

  home(){
    //this.router.navigateByUrl("home");
    console.log(this.admin)
  }
  
  profile(){
    this.router.navigateByUrl("profile")
  }

  EngageDelete(){
    if(this.delete == false ){
    this.delete = true;}
    else{this.delete = false}
  }

  deleteChannel(itemclicked:any){
    //this currently does not work due to the design of hard coded values will work with the implementation of MongoDB
    this.deleteClicked =  itemclicked.target.innerHTML;
    /*for(let i=0; i < this.usergroups.length; i++){
      this.deleteClicked = this.stringCleaner(this.deleteClicked)
      if(this.deleteClicked == this.usergroups[i].name){
        for(let j = 0; j <= this.usergroups.length; j++){
          if(j != i){
          this.newG.push(this.usergroups[j])
          } 
        }
      }
    }
    this.usergroups = this.newG;
    */}
}