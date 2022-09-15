import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserDataService} from "../services/user-data.service";
import * as moment from 'moment';

@Component({
  selector: 'app-search-in-data-base',
  templateUrl: './search-in-data-base.component.html',
  styleUrls: ['./search-in-data-base.component.css']
})
export class SearchInDataBaseComponent implements OnInit {

  constructor(private router:Router,private Search:UserDataService) {

  }

  ngOnInit(): void {
  }
  userData:any=[{}];

  goTOHome() {
    this.router.navigateByUrl('/home');
  }

  searchById(id:any) {
    console.log(id);
    this.Search.getDataById(id).subscribe((result)=>{
      console.log(result);
      this.userData =result;
      console.log(this.userData.dateOfBirth);
      this.userData.dateofbirth = moment(this.userData.dateofbirth).format();
    },(error)=>{
      alert(error.message+"  something went wrong");
    });
  }
}
