import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  logo:string = "@entrenfims"

  optionsId = [
    {
      name: "poemas",
      id: "/poemas"
    },
    {
      name: "contos",
      id: "/contos"
    },
    {
      name: "inacabados",
      id: "/inacabados"
    },
    {
      name: "fale comigo",
      id: "/fale_comigo"
    }
  ]
}
