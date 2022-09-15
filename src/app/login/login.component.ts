import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }




  goTOHome(user:string,password:string) {
    if(user === "relatient.com" && password === "123"){
      this.router.navigateByUrl('/home');
    }
    else{
      alert("INVALID ID PASSWORD");
    }

  }
}
