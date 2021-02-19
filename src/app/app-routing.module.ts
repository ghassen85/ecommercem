import { ConnexionComponent } from './connexion/connexion.component';
import { ContactComponent } from './contact/contact.component';
import { AproposComponent } from './apropos/apropos.component';
import { BodyComponent } from './acceuil/body/body.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'',component:AcceuilComponent,children:[
{path:'',component:BodyComponent},

  ]},
  {path:'apropos',component:AproposComponent},
  {path:'contact',component:ContactComponent},
  {path:'connexion',component:ConnexionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
