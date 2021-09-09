
import { Tecnico } from './../../../../models/tecnico';
import { AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TecnicoService } from 'src/app/services/tecnico.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tecnico-read',
  templateUrl: './tecnico-read.component.html',
  styleUrls: ['./tecnico-read.component.css']
})
export class TecnicoReadComponent implements AfterViewInit {

  tecnico: Tecnico[] = [];

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'Telefone', 'action'];
  dataSource = new MatTableDataSource<Tecnico>(this.tecnico);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service : TecnicoService,
    private router: Router){}

  ngAfterViewInit() {
     this.findAll();
  }

  findAll():void{
    this.service.findAll().subscribe((resposta) =>{
      this.tecnico = resposta;
      this.dataSource = new MatTableDataSource<Tecnico>(this.tecnico);
      this.dataSource.paginator = this.paginator;
    })
  }

  navigateToCreate():void {
    this.router.navigate(['tecnico/create'])
  }

}


