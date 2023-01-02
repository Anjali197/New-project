import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { sample } from 'rxjs';
import { SampleTaskComponent } from './sample-task/sample-task.component';

const routes: Routes = [
  {path:'sample', component:SampleTaskComponent},
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
