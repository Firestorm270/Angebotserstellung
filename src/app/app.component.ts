import { Component } from '@angular/core';
import {MatChipInputEvent} from "@angular/material/chips";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngebotsSeiten';
  panelOpenState: boolean | undefined;
  dataSource: any;
  displayedColumns: any;
  availableColors: any;
  textbausteine: any;
  selectable: any;
  removable: any;
  TextbausteinCtrl: any;
  separatorKeysCodes: any;
  task: any;
  allComplete: any;
  toppings: any;
  toppingList: any;

  applyFilter($event: KeyboardEvent) {

  }

  remove(fruit: any) {

  }

  add($event: MatChipInputEvent) {

  }

  selected($event: MatAutocompleteSelectedEvent) {

  }




}
