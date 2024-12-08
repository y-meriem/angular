import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rendezvous',
  templateUrl: './rendezvous.component.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['./rendezvous.component.css']
})
export class RendezvousComponent {
  availableAppointments = [
    { date: 'Lundi 10 Jan', time: '10:00', professional: 'Dr. Smith', status: 'en attente' },
    { date: 'Lundi 10 Jan', time: '14:00', professional: 'Dr. Smith', status: 'en attente' },
    { date: 'Mardi 11 Jan', time: '09:00', professional: 'Dr. Brown', status: 'en attente' },
    { date: 'Mardi 11 Jan', time: '15:00', professional: 'Dr. Brown', status: 'en attente' },
    { date: 'Mercredi 12 Jan', time: '11:00', professional: 'Dr. Smith', status: 'en attente' }
  ];

  professionals = ['Dr. Smith', 'Dr. Brown'];

  selectedDate: string = '';
  selectedProfessional: string = '';

  bookAppointment(appointment: any) {
    if (appointment.status === 'en attente') {
      appointment.status = 'réservé';
      alert(`Rendez-vous avec ${appointment.professional} à ${appointment.time} réservé !`);
    } else {
      alert('Ce créneau est déjà réservé.');
    }
  }

  cancelAppointment(appointment: any, userType: string) {
    if (userType === 'client') {
      if (appointment.status === 'réservé') {
        appointment.status = 'en attente'; 
        alert(`Rendez-vous avec ${appointment.professional} à ${appointment.time} annulé par le client.`);
      } else {
        alert('Ce créneau n\'est pas réservé.');
      }
    } else if (userType === 'professional') {
      if (appointment.status === 'réservé') {
        appointment.status = 'en attente'; 
        alert(`Rendez-vous avec ${appointment.professional} à ${appointment.time} annulé par le professionnel.`);
      } else {
        alert('Ce créneau n\'est pas réservé.');
      }
    }
  }

  confirmAppointment(appointment: any) {
    if (appointment.status === 'réservé') {
      appointment.status = 'confirmé';
      alert(`Rendez-vous avec ${appointment.professional} à ${appointment.time} confirmé.`);
    } else {
      alert('Ce créneau n\'est pas réservé.');
    }
  }

  get filteredAppointments() {
    return this.availableAppointments.filter((appointment) => {
      const matchesDate = this.selectedDate ? appointment.date === this.selectedDate : true;
      const matchesProfessional = this.selectedProfessional ? appointment.professional === this.selectedProfessional : true;
      return matchesDate && matchesProfessional;
    });
  }
}
