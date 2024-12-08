import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-rendezvous',
  templateUrl: './add-rendezvous.component.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['./add-rendezvous.component.css']
})
export class AddRendezvousComponent {
  // Tableau des rendez-vous ajoutés
  rendezvousList: any[] = [];

  // Nouvelle entrée pour chaque rendez-vous
  newRendezvous = {
    date: '',
    heure: '',
    type: '',
    nom: '',
    prenom: '',
    genre: 'masculin',
    age: null
  };

  // Nombre maximum de rendez-vous
  maxRendezvous = 3;

  // Compteur pour le nombre de clics sur "Ajouter"
  addClickCount = 0;

  // Fonction pour ajouter un rendez-vous
  onAddRendezvous() {
    if (this.addClickCount < this.maxRendezvous) {
      this.addClickCount++;
      this.rendezvousList.push({ ...this.newRendezvous });
      this.resetForm();
    } else {
      alert('Vous avez atteint la limite de 3 rendez-vous.');
    }
  }

  // Fonction pour soumettre tous les rendez-vous
  onSubmit() {
    if (this.rendezvousList.length > 0) {
      console.log('Tous les rendez-vous:', this.rendezvousList);
      alert('Tous les rendez-vous ont été envoyés avec succès.');
      // Vous pouvez effectuer des actions supplémentaires ici, comme envoyer les données à un serveur
    } else {
      alert('Aucun rendez-vous à envoyer.');
    }
  }

  // Réinitialiser le formulaire de saisie
  resetForm() {
    this.newRendezvous = {
      date: '',
      heure: '',
      type: '',
      nom: '',
      prenom: '',
      genre: 'masculin',
      age: null
    };
  }
}
