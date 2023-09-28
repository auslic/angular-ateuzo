import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  logo:string = "@entrenfims"

  optionsList:string[] = [
    "News",
    "Categories",
    "Book Club Picks",
    "Book Reviews",
    "Write",
    "Sign In",
    "Get Started"
  ]

  constructor() {
  }

  ngOnInit(): void {
  }
}
