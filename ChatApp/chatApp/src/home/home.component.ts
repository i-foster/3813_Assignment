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
  usergroups = ["groupone", "gorup1", "group3"];


  groupselect(itemclicked:any){
    this.elementClicked =  itemclicked.target.innerHTML;
    //this.router.navigateByUrl("/channel" + this.elementClicked)
    console.log("/channel" + this.elementClicked)
  }
}
