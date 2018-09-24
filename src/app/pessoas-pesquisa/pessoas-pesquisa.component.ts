import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent  {
  pessoas = [
    { nome: 'Tiago Vale', cidade: 'Fortaleza', estado: 'CE', ativo: true  },
    { nome: 'Manoel Pinheiro', cidade: 'Uberlândia', estado: 'MG', ativo: false  },
    { nome: 'Sebastião da Silva', cidade: 'São Paulo', estado: 'SP', ativo: false  },
    { nome: 'Carla Souza', cidade: 'Florianópolis', estado: 'SC', ativo: true  },
    { nome: 'Vilmar Andrade', cidade: 'Curitiba', estado: 'PR', ativo: true  },

  ];


}
