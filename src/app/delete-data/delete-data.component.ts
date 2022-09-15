import { Component, OnInit } from '@angular/core';
import {UserDataService} from "../services/user-data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-delete-data',
  templateUrl: './delete-data.component.html',
  styleUrls: ['./delete-data.component.css']
})
export class DeleteDataComponent implements OnInit {

  constructor(private Delete:UserDataService,private router:Router) { }

  ngOnInit(): void {
  }

  deleteData(id:any) {
    this.Delete.DeleteData(id).subscribe((res)=>{
      console.log("deleted Succesfully");
    })
  }

  goBack() {
    this.router.navigateByUrl('/home');
  }
}
