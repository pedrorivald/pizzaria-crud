import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Bebida } from "../bebida.model";
import { BebidaService } from "../bebida.service";

@Component({
  selector: 'app-bebida-delete',
  templateUrl: './bebida-delete.component.html',
  styleUrls: ['./bebida-delete.component.css']
})
export class BebidaDeleteComponent implements OnInit {

  bebida: Bebida;

  constructor(
    private bebidaService: BebidaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.bebidaService.readById(id).subscribe(bebida => {
      this.bebida = bebida;
    });
  }

  deleteBebida(): void {
    this.bebidaService.delete(this.bebida.id).subscribe(() => {
      this.bebidaService.showMessage('Bebida excluida com sucesso!');
      this.router.navigate(["/bebidas"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/bebidas"]);
  }
}
