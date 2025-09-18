import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

interface Componente {
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [IonicModule, FormsModule, BrowserModule],
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'america-football-outline',
      name: 'Action-sheet',
      redirecTo: '/action-sheet'
    },
    {
      icon: 'logo-apple-appstore-outline',
      name: 'Alert',
      redirecTo: '/alert'
    },
  ];

  constructor() {}

  ngOnInit() {
  }

}
