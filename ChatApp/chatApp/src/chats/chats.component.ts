import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LogonService } from '../app/services/logon.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-chats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chats.component.html',
  styleUrl: './chats.component.css'
})
export class ChatsComponent {

  constructor (private router:Router, private localstore:LogonService){}

  chats=[""];
  displayName:string ="";
  displayChannel:string = "";

  ngOnInit():void {
    this.populateMessages()
    
    }

  stringCleaner(x:any){
    let cleanString: string = x.trim().replace(/\s+/g, "");
    return cleanString;
  }

  populateMessages(newmessage?:any){
    type chatmessages = {
      group:string;
      chanel:string;
      messages:string[];
    }

    let messages:chatmessages[] = [
      {group:"group1", chanel:"Welcome", messages:["hello","goodbye"]},
      {group:"group1", chanel:"IntroduceYourself", messages:["Izaiah","Kaile"]},
      {group:"group1", chanel:"CurrentHappenings", messages:["Updates planned:","great"]},

      {group:"group2", chanel:"admin", messages:["",""]},
      {group:"group2", chanel:"Complaints", messages:["hello","goodbye"]},
      {group:"group2", chanel:"Suggestions", messages:["Would like to see a more proffessional product for this"]},

      {group:"group3", chanel:"Movies", messages:["shawshank redemption","clear and present danger"]},
      {group:"group3", chanel:"TV", messages:["",""]},
      {group:"group3", chanel:"Books", messages:["charles dickens","Sir Terry Pratchett"]},
      {group:"group3", chanel:"Music", messages:["ac/dc","metallica","rolling stones"]}
    ]

    if(localStorage.getItem("group") == null || localStorage.getItem("channel") == null ){
      this.router.navigateByUrl("home");
  }else {
    let currentGroup:string = this.stringCleaner(localStorage.getItem("group"));
    let currentChannel:string = this.stringCleaner(localStorage.getItem("channel"));
    for (let i = 0; i < messages.length; i++){
      if(currentGroup == messages[i].group && currentChannel == messages[i].chanel){
        this.displayName = currentGroup + "/" + currentChannel;
        this
        if(newmessage != null ){
          messages[i].messages.push(newmessage)
      this.chats = messages[i].messages;
    }else {this.chats = messages[i].messages;}
  }} 
  }
}

  newMessage(){
    //test function to generate a new message to be displayed 
    //Removal in a2 when socket.io is added and message function fully implemeneted 
    this.populateMessages("New message")
  }

  home(){
    this.router.navigateByUrl("home");
  }

  profile(){
    this.router.navigateByUrl("profile")
  }
}