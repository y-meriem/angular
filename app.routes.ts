import { Routes } from '@angular/router';
import { DisponibilitesComponent } from './disponibilites/disponibilites.component';  // Assurez-vous d'importer votre composant
import { RendezvousComponent } from './rendezvous/rendezvous.component';
import { AddRendezvousComponent } from './add-rendezvous/add-rendezvous.component';
export const routes: Routes = [
  { path: '', redirectTo: '/disponibilites', pathMatch: 'full' },  // Redirige vers la page des disponibilités par défaut
  { path: 'disponibilites', component: DisponibilitesComponent }, // Route pour le composant de gestion des disponibilités
  { path: '', redirectTo: '/rendezvous', pathMatch: 'full' },  // Redirection vers les rendez-vous
  { path: 'rendezvous', component: RendezvousComponent },  // Route pour gérer les rendez-vous
  { path: '', redirectTo: '/add-rendezvous', pathMatch: 'full' },  // Redirection vers les rendez-vous
  { path: 'add-rendezvous', component: AddRendezvousComponent },  // Route pour gérer les rendez-vous
];
