
import { Router } from '@angular/router';
import { LogonService } from '../app/services/logon.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SocketService } from "../app/services/socket.service"


@Component({
  selector: 'app-chats',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './chats.component.html',
  styleUrl: './chats.component.css'
})
export class ChatsComponent implements OnDestroy { 
  private messageSubscription: Subscription;
  chats: string[] = [];
  displayName:string ="";
  displayChannel:string = "";
  message:string = "";

  constructor (private router:Router, private localstore:LogonService, 
    private socketService: SocketService){ 
      this.messageSubscription = this.socketService
      .on('message')
      .subscribe((data) => {
        this.chats.push(data.text);
      });
    }

  ngOnInit():void {
    
    this.populateMessages()
    
    }

  stringCleaner(x:any){
    let cleanString: string = x.trim().replace(/\s+/g, "");
    return cleanString;
  }

  populateMessages(newmessage?:any){
    //function to populate previous messages in chat channel
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
    let currentGroup:any = localStorage.getItem("group");
    let currentChannel:string = this.stringCleaner(localStorage.getItem("channel"));
    currentGroup = JSON.parse(currentGroup)
    for (let i = 0; i < messages.length; i++){
      if(currentGroup.name == messages[i].group && currentChannel == messages[i].chanel){
        this.displayName = currentGroup.name + " / " + currentChannel;
        this
        if(newmessage != null ){
          messages[i].messages.push(newmessage)
      this.chats = messages[i].messages;
    }else {this.chats = messages[i].messages;}
  }} 
  }
}


//functions for message sending a new messge via sockets and unsubscribing.
  newMessage(){
      console.log(this.message)
      this.socketService.emit('message', { text: this.message });
      this.message = '';
  }
  ngOnDestroy() {
    this.messageSubscription.unsubscribe();
  }

  //function for navigating 
  home(){
    this.router.navigateByUrl("home");
  }

  profile(){
    this.router.navigateByUrl("profile")
  }
}