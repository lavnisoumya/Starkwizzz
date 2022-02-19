import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactformdesgin',
  templateUrl: './contactformdesgin.component.html',
  styleUrls: ['./contactformdesgin.component.css']
})
export class ContactformdesginComponent implements OnInit {
 formchecked = false ;
  constructor() { }

  ngOnInit(): void {
  }
   check(){
     var x  = document.getElementById("terms")!;
     
   }
}
