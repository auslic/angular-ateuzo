import { Component, OnInit } from '@angular/core';
// import {poemas} from '../../data/poemas'
import {contos} from '../../data/contos'
// import {inacabados} from '../../data/inacabados'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.selectCardType)
    console.log (this.cardType)
  }

  selectCardType(){
    if (this.cardType == "contos"){
      return true;
    }

    return false;
  }

  cardType:string = ""

  contos = contos

}
