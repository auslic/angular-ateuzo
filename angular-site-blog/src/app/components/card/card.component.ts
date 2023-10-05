import { Component, Input, OnInit } from '@angular/core';
import {poemas} from '../../data/poemas'
import {contos} from '../../data/contos'
import {inacabados} from '../../data/inacabados'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log (typeof(this.cardType))
    console.log (this.pageType)
    this.selectPageType()
  }

  selectPageType(){
    switch (this.pageType) {
      case "contos":
        this.cardType = contos
        return this.cardType
        break;
      case "poemas":
        this.cardType = poemas
        return this.cardType
        break;
      case "inacabados":
        this.cardType = inacabados
        return this.cardType
        break;
      default:
        return this.cardType
        break;
    }
  }

  @Input()
  pageType:string = ""

  cardType = contos

}
