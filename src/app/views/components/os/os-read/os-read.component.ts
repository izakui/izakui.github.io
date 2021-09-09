import { ClienteService } from 'src/app/services/cliente.service';
import { TecnicoService } from './../../../../services/tecnico.service';
import { Router } from '@angular/router';
import { OsService } from './../../../../services/os.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { OS } from './../../../../models/os';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-os-read',
  templateUrl: './os-read.component.html',
  styleUrls: ['./os-read.component.css']
})
export class OsReadComponent implements AfterViewInit {

  lista: OS[] = [];

  displayedColumns: string[] = [ 'tecnico', 'cliente','abertura', 'fechamento', 'prioridade', 'status', 'action'];
  dataSource = new MatTableDataSource<OS>(this.lista);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service : OsService,
    private router: Router,
    private tecnicoService: TecnicoService,
    private clienteService: ClienteService){}

  ngAfterViewInit() {
     this.findAll();
  }

  findAll():void{
    this.service.findAll().subscribe((resposta) =>{
      this.lista = resposta;
      this.listarTecnico();
      this.listarCliente();
      this.dataSource = new MatTableDataSource<OS>(this.lista);
      this.dataSource.paginator = this.paginator;
    })
  }

  navigateToCreate():void {
    this.router.navigate(['os/create'])
  }
  //funçoes de buscas de nomes na lista de ordem serviço
  listarTecnico():void{
    this.lista.forEach(x => {
      this.tecnicoService.findById(x.tecnico).subscribe(resposta =>{
        x.tecnico = resposta.nome
      })
    })
  }

  listarCliente():void{
    this.lista.forEach(x => {
      this.clienteService.findById(x.cliente).subscribe(resposta =>{
        x.cliente = resposta.nome
      })
    })
  }

  prioridade(x : any){
    if(x == 'BAIXA'){
      return 'baixa'
    } else if(x == 'MEDIA'){
      return 'media'
    }else{
      return 'alta'
    }
  }

}
