import { Component } from '@angular/core';

@Component({
  selector: 'app-foter',  // Ce sélecteur doit être utilisé dans app.component.html
  templateUrl: './foter.component.html',
  styleUrls: ['./foter.component.css']
})
export class FoterComponent {
  currentYear: number = new Date().getFullYear();  // Calcul de l'année actuelle
}
