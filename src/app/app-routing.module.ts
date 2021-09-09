import { OsViewComponent } from './views/components/os/os-view/os-view.component';
import { OsUpdateComponent } from './views/components/os/os-update/os-update.component';
import { OsCreateComponent } from './views/components/os/os-create/os-create.component';
import { OsReadComponent } from './views/components/os/os-read/os-read.component';
import { ClienteDeleteComponent } from './views/components/cliente/cliente-delete/cliente-delete.component';
import { ClienteUpdateComponent } from './views/components/cliente/cliente-update/cliente-update.component';
import { ClienteCreateComponent } from './views/components/cliente/cliente-create/cliente-create.component';
import { TecnicoDeleteComponent } from './views/components/tecnico/tecnico-delete/tecnico-delete.component';

import { TecnicoReadComponent } from './views/components/tecnico/tecnico-read/tecnico-read.component';
import { HomeComponent } from './views/components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TecnicoCreateComponent } from './views/components/tecnico/tecnico-create/tecnico-create.component';
import { TecnicoUpdateComponent } from './views/components/tecnico/tecnico-update/tecnico-update.component';
import { ClienteReadComponent } from './views/components/cliente/cliente-read/cliente-read.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path: 'tecnico',
    component: TecnicoReadComponent
  },
  {
    path: 'tecnico/create',
    component: TecnicoCreateComponent
  },
  {
    path: 'tecnico/update/:id',
    component: TecnicoUpdateComponent
  },
  {
    path: 'tecnico/delete/:id',
    component: TecnicoDeleteComponent
  },
  {
    path:'clientes',
    component: ClienteReadComponent
  },
  {
    path: 'cliente/create',
    component: ClienteCreateComponent
  },
  {
    path: 'clientes/update/:id',
    component: ClienteUpdateComponent
  },
  {
    path: 'clientes/delete/:id',
    component: ClienteDeleteComponent
  },
  {
    path: 'os',
    component: OsReadComponent
  },
  {
    path: 'os/create',
    component: OsCreateComponent
  },
  {
    path: 'os/update/:id',
    component: OsUpdateComponent
  },
  {
    path: 'os/view/:id',
    component: OsViewComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
