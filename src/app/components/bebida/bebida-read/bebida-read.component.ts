import { Component, OnInit } from '@angular/core';
import { Bebida } from '../bebida.model';
import { BebidaService } from '../bebida.service';

@Component({
  selector: 'app-bebida-read',
  templateUrl: './bebida-read.component.html',
  styleUrls: ['./bebida-read.component.css']
})
export class BebidaReadComponent implements OnInit {

  bebidas: Bebida[];
  displayedColumns = ['id', 'name', 'volume', 'img', 'price', 'action'];

  constructor(private bebidaService: BebidaService) { }

  ngOnInit(): void {
    this.bebidaService.read().subscribe(bebidas => {
      this.bebidas = bebidas;
      console.log(bebidas);
    })
  }

}
