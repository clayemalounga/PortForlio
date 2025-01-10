import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CompetencesComponent } from './competences/competences.component';
import { ProjetComponent } from './projet/projet.component';
import { ContactComponent } from './contact/contact.component';
import { TemplateNavigationComponent } from './template-navigation/template-navigation.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    CompetencesComponent,
    ProjetComponent,
    ContactComponent,
    TemplateNavigationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
