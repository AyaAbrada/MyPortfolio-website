import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';  // Importation de HeaderComponent
import { FoterComponent } from './foter/foter.component';    // Importation de FoterComponent

@Component({
  selector: 'app-root',
  standalone: true,  // Déclaration du composant comme standalone
  imports: [RouterOutlet, HeaderComponent, FoterComponent, RouterLink],  // Ajout du FoterComponent ici
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bienvenue dans mon application Angular !';
}
