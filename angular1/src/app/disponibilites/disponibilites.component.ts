import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importer CommonModule

@Component({
  selector: 'app-disponibilites',
  templateUrl: './disponibilites.component.html',
  imports: [CommonModule], 
  styleUrls: ['./disponibilites.component.css']
})
export class DisponibilitesComponent {
  // Tableau simulant les disponibilités des jours
  availableDays = [
    { date: 'Lundi 10 Jan', available: true },
    { date: 'Mardi 11 Jan', available: false },
    { date: 'Mercredi 12 Jan', available: true },
    { date: 'Jeudi 13 Jan', available: true },
    { date: 'Vendredi 14 Jan', available: false }
  ];

  // Méthode pour basculer la disponibilité d'un jour
  toggleAvailability(day: any) {
    day.available = !day.available;  // Bascule entre disponible et indisponible
  }
}
