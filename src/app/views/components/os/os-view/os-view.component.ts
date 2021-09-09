import { OsService } from './../../../../services/os.service';
import { OS } from './../../../../models/os';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-os-view',
  templateUrl: './os-view.component.html',
  styleUrls: ['./os-view.component.css']
})
export class OsViewComponent implements OnInit {

  os: OS ={
    tecnico: '',
    cliente: '',
    observacoes: '',
    prioridade: '',
    status: ''
  }
  constructor(
    private route: ActivatedRoute,
    private service: OsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.os.id = this.route.snapshot.paramMap.get("id");
    this.findById();
  }

  findById():void{
    this.service.findById(this.os.id).subscribe(resposta => {
      this.os = resposta;
      this.findById();
    })

  }

  voltar(): void{
    this.router.navigate(['os'])
  }

}
