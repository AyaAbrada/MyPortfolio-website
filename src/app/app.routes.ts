import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ProjetsComponent } from './projets/projets.component';
import { ContactComponent } from './contact/contact.component';
import { ProposComponent } from './propos/propos.component';
import { CVComponent } from './cv/cv.component';

export const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'projets', component: ProjetsComponent },
  { path: 'propos', component: ProposComponent },
  { path: 'cv', component: CVComponent },
  { path: '**', component: AccueilComponent, pathMatch: 'full'},
];

