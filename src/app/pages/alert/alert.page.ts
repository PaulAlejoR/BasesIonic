import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from "src/app/components/components-module";

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [IonicModule, ComponentsModule],
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
