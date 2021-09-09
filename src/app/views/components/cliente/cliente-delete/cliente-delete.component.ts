import { ClienteService } from 'src/app/services/cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.css']
})
export class ClienteDeleteComponent implements OnInit {

  id_tec = ''

  cliente: Cliente = {
    id: '',
    nome: '',
    cpf: '',
    telefone: ''
  }



  constructor(private router: Router,
    private service: ClienteService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id_tec = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }



  findById(): void {
    this.service.findById(this.id_tec).subscribe(resposta => {
      this.cliente = resposta;
    })
  }

  delete(): void {
    this.service.delete(this.id_tec).subscribe(resposta => {
      this.router.navigate(['clientes'])
      this.service.message('Técnico deletado com sucesso!')
    }, err => {
      if (err.error.error.match('Cliente pertece a ordem de serviço')) {
        this.service.message(err.error.error);
      }
    })
  }

  cancel(): void {
    this.router.navigate(['clientes'])
  }



}