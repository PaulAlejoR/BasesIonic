import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from "src/app/components/components-module";

@Component({
  selector: 'app-action-sheet',
  standalone: true,
  imports: [IonicModule, ComponentsModule],
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
