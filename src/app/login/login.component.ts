import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router:Router){}
  loginForm=new FormGroup({
    email: new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
  })
  loginUser(item:any){
    console.warn(this.loginForm.value)
  }
  submit(){
    if(this.loginForm.value)
    {
      this.router.navigateByUrl('/home')
    }
  }

}
