import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  titlePainel:string = "Um poema"
  subtitlePainel:string = `Finge que tem um texto aqui.`
  linkPainel:string = "Acessa aí!"
}
