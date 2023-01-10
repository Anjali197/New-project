import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
// import { HomeComponent } from '/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { TopsellingComponent } from './main/topselling/topselling.component';
import { LatestProjectComponent } from './main/latest-project/latest-project.component';
import { HomeComponent } from './main/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AutoCompleteModule}from 'primeng/autocomplete';
import { SampleTaskComponent } from './sample-task/sample-task.component';

import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';

import {InputTextareaModule} from 'primeng/inputtextarea';
import {ButtonModule} from 'primeng/button';
import {MultiSelectModule} from 'primeng/multiselect';
import { TestingComponent } from './testing/testing.component';
import {CalendarModule} from 'primeng/calendar';
import {DatePipe} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    // HomeComponent,
    MainComponent,
    TopsellingComponent,
    LatestProjectComponent,
    HomeComponent,
    SampleTaskComponent,
    TestingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AutoCompleteModule,
    DropdownModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,MultiSelectModule,
    CalendarModule,
    DatePipe




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
