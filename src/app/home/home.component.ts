import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  gotToADD() {
    this.router.navigateByUrl('/add');

  }

  gotToSearch() {
    this.router.navigateByUrl('/search');
  }

  goToUpdate() {
    this.router.navigateByUrl('/update');
  }

  goToDeleteData() {
    this.router.navigateByUrl('delete');
  }
}
