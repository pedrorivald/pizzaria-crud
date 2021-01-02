import { Component, OnInit } from '@angular/core';
import { BebidaService } from '../bebida.service';
import { Router } from '@angular/router';
import { Bebida } from '../bebida.model';

@Component({
  selector: 'app-bebida-create',
  templateUrl: './bebida-create.component.html',
  styleUrls: ['./bebida-create.component.css']
})
export class BebidaCreateComponent implements OnInit {

  bebida: Bebida = {
    name: '',
    price: null,
    volume: '',
    img: ''
  }

  constructor(private bebidaService: BebidaService,
    private router: Router) { }

  ngOnInit(): void {

  }

  createBebida(): void {
    this.bebidaService.create(this.bebida).subscribe(() => {
      this.bebidaService.showMessage('Bebida Salva!');
      this.router.navigate(['bebidas']);
    });
  }

  cancel(): void {
    this.router.navigate(['bebidas']);
  }

}
