import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-bebida-crud',
  templateUrl: './bebida-crud.component.html',
  styleUrls: ['./bebida-crud.component.css']
})
export class BebidaCrudComponent implements OnInit {

  constructor(private router: Router, headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Cadastro de Bebidas',
      icon: 'local_bar',
      routeUrl: '/bebidas'
    }
  }

  ngOnInit(): void {
  }

  navigateToBebidaCreate(): void {
    this.router.navigate(['/bebidas/create']);
  }

}

