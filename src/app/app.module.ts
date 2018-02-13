import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';

import { AppComponent } from './app.component';
import { BuildingComponent } from './building/building.component';
import { HttpClient } from 'selenium-webdriver/http';
import { DataService } from './data-service';

@NgModule({
  declarations: [
    AppComponent,
    BuildingComponent
  ],
  imports: [
    BrowserModule,
    NgSelectModule,
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [ DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
