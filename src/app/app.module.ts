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
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import {TabViewModule} from 'primeng/tabview';
import { SidebarComponent } from './sample-task/sidebar/sidebar.component';
import { HeaderComponent } from './sample-task/header/header.component';
import {InputNumberModule} from 'primeng/inputnumber';
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
    TestingComponent,
    SidebarComponent,
    HeaderComponent
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
    DatePipe,
    MessagesModule,
    MessageModule, ToastModule,
    TabViewModule,InputNumberModule




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
