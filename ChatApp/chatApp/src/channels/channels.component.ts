import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LogonService } from '../app/services/logon.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-channels',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './channels.component.html',
  styleUrl: './channels.component.css'
})
export class ChannelsComponent {
  constructor(private router:Router, private localstore:LogonService){ }

  ngOnInit():void {
    this.Currentgroup()}

  channels =[""];  

 Currentgroup(){
  type groupsModel = {
    groupName:string;
    groupChannels:string[];
  };
  
  let groups:groupsModel[] = [
    {groupName:"group1", groupChannels:["welcome", "introduce yourself", "current Happenings"]},
    {groupName:"group2", groupChannels:["admin", "Complaints", "Suggestions"]},
    {groupName:"group3", groupChannels:["Movies", "TV", "Books", "Music"]},
    {groupName:"group4", groupChannels:["Music", "welcome"]},
  ]
  
  if(localStorage.getItem("group") == null){
      this.router.navigateByUrl("home");
  }else {

    let selectedGroup:any = localStorage.getItem("group");
    let cleanString: string = selectedGroup.trim().replace(/\s+/g, "");
    selectedGroup = cleanString;    
    for (let i = 0; i < groups.length; i++){
      if(selectedGroup == groups[i].groupName){
      this.channels = groups[i].groupChannels
  }}
}

  }
  elementClicked:string = "";
  channelselect(itemclicked:any){
    this.elementClicked =  itemclicked.target.innerHTML;
    this.localstore.saveData("channel",this.elementClicked)
    this.router.navigateByUrl("chats")


  }
  home(){
    //this.router.navigateByUrl("home");
  }
  profile(){
    this.router.navigateByUrl("profile")
  }

}