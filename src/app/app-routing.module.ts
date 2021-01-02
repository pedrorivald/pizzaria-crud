import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';

import { BebidaCreateComponent } from './components/bebida/bebida-create/bebida-create.component';
import { BebidaDeleteComponent } from './components/bebida/bebida-delete/bebida-delete.component';
import { BebidaUpdateComponent } from './components/bebida/bebida-update/bebida-update.component';

import { HomeComponent } from "./views/home/home.component";
import { ProductCrudComponent } from "./views/product-crud/product-crud.component";
import { BebidaCrudComponent } from "./views/bebida-crud/bebida-crud.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "pizzas",
    component: ProductCrudComponent
  },
  {
    path: "pizzas/create",
    component: ProductCreateComponent
  },
  {
    path: "pizzas/update/:id",
    component: ProductUpdateComponent
  },
  {
    path: "pizzas/delete/:id",
    component: ProductDeleteComponent
  },
  {
    path: "bebidas",
    component: BebidaCrudComponent
  },
  {
    path: "bebidas/create",
    component: BebidaCreateComponent
  },
  {
    path: "bebidas/update/:id",
    component: BebidaUpdateComponent
  },
  {
    path: "bebidas/delete/:id",
    component: BebidaDeleteComponent
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
