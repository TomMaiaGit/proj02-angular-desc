import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario-add-page',
  templateUrl: './usuario-add-page.component.html',
  styleUrls: ['./usuario-add-page.component.css']
})
export class UsuarioAddPageComponent {
//Um ojeto que inicia vazio
  usr: any = {}


//Array de itens para exibir no select
    gen = [
        'Masculino',
        'Feminino',
        'Não informar'
    ]
//Função que será executada para envio dos dados do fomrulario
  salvar(){

    if ( this.usr.nome == "" || this.usr.nome == null){
      console.log('Preencha o nome do usuario corretamente.')
      alert("Preencha o nome do usuario corretamente.")
    } else if (this.usr.idade == "" || this.usr.idade== null) {
      console.log('Preencha a idade do usuario corretamente.')
      alert("Preencha a idade do usuario corretamente.")
    } else {
      console.log('salvando usuario')
      console.log(this.usr)
    }
   
    

  }
}
