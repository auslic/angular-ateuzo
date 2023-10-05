import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log (this.poemaSelected)
  }

  poemas = [
    {
      id: 1,
      titulo: "traz",
      texto: `quero ter a sensação do seu beijo$
      sentir e comprovar o meu desejo$
      afinal de contas se os dois rimam$
      é porque deve ser bom mesmo$
      $
      me embaraçar na sua companhia$
      relaxar em sua voz, calmaria$
      tal como a maré, a brisa e o final do dia...$
      `,
      textoArrayPoema(){
        let subtitlePainelArray:string[] = this.texto.split("$")
        return subtitlePainelArray
      },
      link: `https://www.instagram.com/entrenfims/`
    },
    {
      id: 2,
      titulo: "cartas",
      texto: `te escrevi muitas letras$
      te dediquei várias rimas$
      te disse algumas palavras$
      te pedi sinceras desculpas$
      $
      me pedi muita calma$
      me entreguei de corpo e alma$
      me dediquei como quem ama$
      me escrevi esse poema...$
      `,
      textoArrayPoema(){
        let subtitlePainelArray:string[] = this.texto.split("$")
        return subtitlePainelArray
      },
      link: `https://www.instagram.com/entrenfims/`
    },
    {
      id: 3,
      titulo: "(d)exista",
      texto: `eu pensei que te vi$
      em todo canto, pelo Benfica$
      é, a mentira é grande, vil$
      não sei me virar, fica$
      $
      não adianta$
      tentei lembrar e só vi manchas$
      borrando seu rosto, ânsia$
      por imaginar um passado$
      sem constância$
      sem consistência$
      sem existência...$
      `,
      textoArrayPoema(){
        let subtitlePainelArray:string[] = this.texto.split("$")
        return subtitlePainelArray
      },
      link: `https://www.instagram.com/entrenfims/`
    }
  ]

  poemaSelected:number = 0

  previousPoema() {
    if (this.poemaSelected == 0){

    } else {
      this.poemaSelected--
    }
  }

  nextPoema() {
    if (this.poemaSelected == (this.poemas.length) - 1){

    } else {
      this.poemaSelected++
    }
  }

  classPoemaLeft(){
    if (this.poemaSelected == 0){
      return "active"
    }

    return
  }

  classPoemaRight(){
    if (this.poemaSelected == (this.poemas.length) - 1){
      return "active"
    }

    return
  }

  linkPainel:string = "continue lendo."
}
