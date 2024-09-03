import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LogonService } from '../app/services/logon.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router:Router, private localstore:LogonService){ 
  }

  cuser = {
    name:'',
    pword:''
  }

  details = [
    {"username":"izaiah",
    "id":2,
    "birthdate":"1/01/2000",
    "age":27,
    "email":"i@com",
    "password":"i",
    "valid":false,
    "level":"super"
},
{"username":"kaile",
    "id":3,
    "birthdate":"1/01/2000",
    "age":28,
    "email":"z@com",
    "password":"k",
    "valid":false,
    "level":"group"
},
{"username":"super",
  "id":1,
  "birthdate":"1/01/2000",
  "age":28,
  "email":"z@com",
  "password":"k",
  "valid":false,
  "level":"super"
},
{"username":"newuser",
  "id":4,
  "birthdate":"1/01/2000",
  "age":24,
  "email":"a@com",
  "password":"n",
  "valid":false,
  "level":"user"
}];


  formsubmit(){

    //sample user data for a1 a2 will implement checks agaainst database 
    type user = {
      username:string;
      password:string;
    };

    let users:user[] = [
      {username:"izaiah",password:"i"},
      {username:"kaile",password:"k"},
      {username:"super",password:"123"},
      {username:"newuser",password:"n"} 
    ];

    let checker:number = 1;
    if (this.cuser.name !="" && this.cuser.pword !=""){
      for(let i=0; i < users.length; i++){
        if (this.cuser.name == users[i].username && this.cuser.pword == users[i].password){
          checker = checker - 1;
          this.details[i].valid = true;
          this.localstore.saveData("cuser",JSON.stringify(this.details[i]))
          this.router.navigateByUrl("/home")
        }
        }
        checker +=1;    
      }
      if (checker > users.length){
        alert("Username or Password does not match.")  
}}}
