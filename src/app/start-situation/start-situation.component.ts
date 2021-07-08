import { Component, OnInit } from '@angular/core';
import {MatChipInputEvent} from "@angular/material/chips";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";

@Component({
  selector: 'app-start-situation',
  templateUrl: './start-situation.component.html',
  styleUrls: ['./start-situation.component.scss']
})
export class StartSituationComponent implements OnInit {
  textbausteine: any;
  selectable: any;
  removable: any;
  TextbausteinCtrl: any;
  separatorKeysCodes: any;
  task: any;
  allComplete: any;
  toppings: any;
  toppingList: any;
  constructor() { }

  ngOnInit(): void {
  }
  remove(fruit: any) {

  }

  add($event: MatChipInputEvent) {

  }

  selected($event: MatAutocompleteSelectedEvent) {

  }
}
