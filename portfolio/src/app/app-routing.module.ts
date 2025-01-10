import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CompetencesComponent } from './competences/competences.component';
import { ProjetComponent } from './projet/projet.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
{
  path: "", component: AccueilComponent
},
{
  path:"competences", component: CompetencesComponent
}
,
{
  path:"projets", component:ProjetComponent
},
{
  path:"contacts", component:ContactComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
