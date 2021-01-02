
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Bebida } from "../bebida.model";
import { BebidaService } from "../bebida.service";

@Component({
  selector: 'app-bebida-update',
  templateUrl: './bebida-update.component.html',
  styleUrls: ['./bebida-update.component.css']
})
export class BebidaUpdateComponent implements OnInit {

  bebida: Bebida;

  constructor(
    private bebidaService: BebidaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.bebidaService.readById(id).subscribe((bebida) => {
      this.bebida = bebida;
    });
  }

  updateBebida(): void {
    this.bebidaService.update(this.bebida).subscribe(() => {
      this.bebidaService.showMessage("Bebida atualizada com sucesso!");
      this.router.navigate(["/bebidas"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/bebidas"]);
  }
}
