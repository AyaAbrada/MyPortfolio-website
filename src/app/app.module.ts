import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Import de ReactiveFormsModule
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component'; // Ton composant Contact

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent, // Déclaration du composant Contact
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, // Assure-toi que ReactiveFormsModule est importé
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
