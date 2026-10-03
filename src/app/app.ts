import { Component, signal } from '@angular/core';
import { PiedPage } from './composants/pied-page/pied-page';
import { ListeCoursComponent } from './composants/liste-cours/liste-cours';
import { EnTete } from './composants/en-tete/en-tete';
import { Cours } from './composants/liste-cours/liste-cours';
@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('catalogue-cours');
  coursSelectionne: Cours | null = null;

  onSelectionCours(c: Cours) {
this.coursSelectionne = c;
}
}
