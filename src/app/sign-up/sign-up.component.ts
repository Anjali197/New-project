import { Component } from '@angular/core';
import {FormGroup,FormControl, Validators,} from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
// phone: any;
// fname: any;
// email: any;
// paswd: any;
  constructor(private router:Router){}
 
  
  signupForm=new FormGroup({
    fname:new FormControl('',),
    phone:new FormControl('',[Validators.required, Validators.minLength(10)]),
    email:new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    password:new FormControl('',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])
    

  })
  signUser(item:any)
  {
    console.warn(this.signupForm.value)
  }
continue(){
  if(this.signupForm.valid){
    this.router.navigateByUrl('/login');
  }
}
go(){
  
    this.router.navigateByUrl('/login');
  
}
get fname() { return this.signupForm.get('fname')}
get phone() { return this.signupForm.get('phone')}
get email() { return this.signupForm.get('email')}
get password() { return this.signupForm.get('password')}

}
