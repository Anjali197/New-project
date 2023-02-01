import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { sample } from 'rxjs';
import { SampleTaskComponent } from './sample-task/sample-task.component';
import { TestingComponent } from './testing/testing.component';
import { PopupComponent } from './sample-task/popup/popup.component';
import { PopupButtonComponent } from './sample-task/popup/popup-button/popup-button.component';
const routes: Routes = [
  {path:'sample', component:SampleTaskComponent},
  {path:'popup', component:PopupComponent},
  {path:'popupbtn', component:PopupButtonComponent},
  {path:'testing',component:TestingComponent},
  {path:'sign-up', component:SignUpComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'**',component:SignUpComponent},
  {path:'',redirectTo:'sign-up',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
