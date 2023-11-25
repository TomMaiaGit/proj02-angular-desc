import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioPageComponent } from './pages/usuario-page/usuario-page.component';
import { UsuarioAddPageComponent } from './pages/usuario-add-page/usuario-add-page.component';

const routes: Routes = [
  
  { path: 'cadastro/usuario', component: UsuarioAddPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
