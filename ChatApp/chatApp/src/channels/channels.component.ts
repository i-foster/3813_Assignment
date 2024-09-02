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
  constructor(private router:Router, private localstore:LogonService){ 

  }


  ngOnInit():void {
    this.Currentgroup()}

  channels =[""];
  /*group1 = ["welcome", "introduce yourself", "current Happenings"];
  group2 = ["admin", "Complaints", "Suggestions"];
  group3 = ["Movies", "TV", "Books", "Music"];
  group4 = ["Music", "welcome"];
  groups = []
  groupNames = ["group1","group2"]*/
  

 Currentgroup(){
  type groupsModel = {
    groupName:string;
    groupChannels:string[];
  };
  
  let groups:groupsModel[] = [
    {groupName:"group1", groupChannels:["welcome", "introduce yourself", "current Happenings"]},
    {groupName:"group2", groupChannels:["admin", "Complaints", "Suggestions"]},
  ]
  
  if(localStorage.getItem("group") == null){
      this.router.navigateByUrl("home");
  }else {

    let selectedGroup:any = localStorage.getItem("group");
    let cleanString: string = selectedGroup.trim().replace(/\s+/g, "");
    selectedGroup = cleanString;    
    for (let i = 0; i < groups.length; i++){

      console.log(groups[i])
      if(selectedGroup == groups[i].groupName){
      this.channels = groups[i].groupChannels
  }}
}

  }
  channelselect(a:any){

  }
  home(){
    //this.router.navigateByUrl("home");
  }
  profile(){
    this.router.navigateByUrl("profile")
  }

}