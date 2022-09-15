import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserDataService} from "../services/user-data.service";
import * as moment from 'moment';
@Component({
  selector: 'app-add-to-data-base',
  templateUrl: './add-to-data-base.component.html',
  styleUrls: ['./add-to-data-base.component.css']
})
export class AddToDataBaseComponent implements OnInit {

  constructor(private router:Router,private DataToBeAdded:UserDataService) { }

  ngOnInit(): void {

  }

  goToHome() {
    alert("Data Added");


  }
  goBack(){
    this.router.navigateByUrl('/home');
  }
   ID:any ;


  addData(dat:any) {
    let da= dat.dateOfBirth;
    dat.dateOfBirth=moment(da).format();
    console.log(moment(da).format());


    this.DataToBeAdded.addData(dat).subscribe((res:any)=>{
      console.warn(res);
      this.ID= res.id;

    })

  }
}
