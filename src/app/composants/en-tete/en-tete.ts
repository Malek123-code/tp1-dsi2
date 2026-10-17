import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  imports: [FormsModule, UpperCasePipe],
  selector: 'app-en-tete',
  styleUrl: './en-tete.css',
  templateUrl: './en-tete.html',
})
export class EnTete {
  urlImage1 = 'https://upload.wikimedia.org/wikipedia/commons/6/67/Angular_gradient_logo.png';
  urlImage2 = 'https://img.icons8.com/color/1200/angularjs.jpg';
  urlImage = this.urlImage1; // image affichée au départ
  titre = "Application de gestion du catalogue de cours";

  changerTitre() {
    this.urlImage = this.urlImage === this.urlImage1 ? this.urlImage2 : this.urlImage1;
  }
}