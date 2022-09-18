import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from "@angular/flex-layout";
import { MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import { HomeComponent } from './home/home.component';
import { AddToDataBaseComponent } from './add-to-data-base/add-to-data-base.component';
import { SearchInDataBaseComponent } from './search-in-data-base/search-in-data-base.component';
import { UpdateDataComponent } from './update-data/update-data.component';
import {FormsModule} from  '@angular/forms'
import {HttpClientModule} from "@angular/common/http";
import { DeleteDataComponent } from './delete-data/delete-data.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExperimentComponent } from './experiment/experiment.component';
import { OptionsComponent } from './options/options.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AddToDataBaseComponent,
    SearchInDataBaseComponent,
    UpdateDataComponent,
    DeleteDataComponent,
    ExperimentComponent,
    OptionsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{}



