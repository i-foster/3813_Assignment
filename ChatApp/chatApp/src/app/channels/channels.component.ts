import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LogonService } from '../services/logon.service';
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

 Currentgroup(){   if (localStorage.getItem("group") == null){
      this.router.navigateByUrl("home")
  }
  }
  home(){
    this.router.navigateByUrl("home");
  }
  profile(){
    this.router.navigateByUrl("profile")
  }

}
