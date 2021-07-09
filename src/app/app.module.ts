import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule } from './app-routing.module';
import {AppComponent } from './app.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatTabsModule} from "@angular/material/tabs";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatChipsModule} from "@angular/material/chips";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatNativeDateModule} from "@angular/material/core";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { NavbarComponent } from './navbar/navbar.component';
import { TableComponent } from './table/table.component';
import { SearchbarComponent } from './shared/searchbar/searchbar.component';
import { CreateOfferComponent } from './create-offer/create-offer.component';
import { HintsComponent } from './hints/hints.component';
import { ParticipantsComponent } from './participants/participants.component';
import { StartSituationComponent } from './start-situation/start-situation.component';
import { ProjectGoalComponent } from './project-goal/project-goal.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { ManageTextBricksComponent } from './manage-text-bricks/manage-text-bricks.component';
import { ButtonsComponent } from './buttons/buttons.component';
import {MatSortModule} from "@angular/material/sort";
import { EndTagQuestionsComponent } from './end-tag-questions/end-tag-questions.component';
import {MatStepperModule} from "@angular/material/stepper";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TableComponent,
    SearchbarComponent,
    CreateOfferComponent,
    HintsComponent,
    ParticipantsComponent,
    StartSituationComponent,
    ProjectGoalComponent,
    ConditionsComponent,
    ManageTextBricksComponent,
    ButtonsComponent,
    EndTagQuestionsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatExpansionModule,
        NoopAnimationsModule,
        MatIconModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatButtonModule,
        MatInputModule,
        MatTabsModule,
        MatPaginatorModule,
        MatTableModule,
        MatChipsModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatNativeDateModule,
        MatCheckboxModule,
        FormsModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatSortModule,
        MatStepperModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
