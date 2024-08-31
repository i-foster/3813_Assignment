
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink,RouterOutlet,FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  nuser = {
    name:'',
    pword:''
  }

  constructor(private router:Router,){ 
  }

  formsubmit(){}

}
