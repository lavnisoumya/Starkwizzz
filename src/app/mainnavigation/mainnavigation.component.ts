import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainnavigation',
  templateUrl: './mainnavigation.component.html',
  styleUrls: ['./mainnavigation.component.css']
})
export class MainnavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  openNav() {
    document.getElementById("mySidenav")!.style.width = "250px";
  }
  closeNav() {
    document.getElementById("mySidenav")!.style.width = "0";
  }
}
