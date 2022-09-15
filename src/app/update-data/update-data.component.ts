import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserDataService} from "../services/user-data.service";
import {FormGroup,FormControl} from "@angular/forms";
import * as moment from 'moment';

@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrls: ['./update-data.component.css']
})
export class UpdateDataComponent implements OnInit {
  userData:any ={};
  updateForm= new FormGroup({
    name: new FormControl(),
    gender:new FormControl(),
    address: new FormControl(),
    dateOfBirth:new FormControl(),
    id:new  FormControl()
  })

  constructor(private router:Router,private update:UserDataService) { }

  ngOnInit(): void {
  }

  updated() {

    alert("Data Update");


  }
  goBack(){

    this.router.navigateByUrl('/home');
  }


  onSubmit(result1:any) {
    console.warn(result1);
    let da= result1.dateOfBirth;
    result1.dateOfBirth=moment(da).format();
    console.log(moment(da).format());



    this.update.updateData(result1).subscribe((resu)=>{
      console.log(resu);
    });

  }
  getData(id:any) {
    this.update.getDataById(id).subscribe((result:any)=>{
      console.log(result);
      this.userData=result;
      this.updatForm();
    })

  }
  updatForm(){
    this.updateForm.patchValue({
      name: this.userData.name,
      gender: this.userData.gender,
      address: this.userData.address,
      dateOfBirth: this.userData.dateOfBirth,
      id:this.userData.id
    })
  }

}
