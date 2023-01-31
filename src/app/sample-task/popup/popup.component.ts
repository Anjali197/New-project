import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ApiCallService } from 'src/app/api-call.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  providers: [MessageService],
})
export class PopupComponent {
countries: any;
  neList: any;
  code: any;
  previousMonth = new Date();
  nextMonth = new Date();
  // newName: any;
  // names: string[] = [];

  constructor(private getApi: ApiCallService,){
    this.previousMonth.setMonth(this.previousMonth.getMonth() - 2);
    this.nextMonth.setMonth(this.nextMonth.getMonth() +1 );
  
    
  }
  ngOnInit(): void {
    
    
    // this.getApi.getCountry().subscribe((response) => {
    //   console.log('res', response[0].name);

    //   this.countries = response;
    //   console.log(this.countries);
    //   response.forEach(element => {
    //     console.log(

    //       element.name
    //     );
        
    //   });
      
    // });


  }
  

  signupForm = new FormGroup({
    clientName: new FormControl('', [Validators.required]),
    contactName: new FormControl('', [Validators.required]),
    designation: new FormControl('',[Validators.required] ),
    email: new FormControl('', [Validators.required,Validators.email]),
    country:new FormControl('' ),
    number:new FormControl('', [Validators.required, Validators.minLength(10)]),
    date:new FormControl('' ),
    address:new FormControl('' ),

    
  });
  get clientName() {
    return this.signupForm.get('clientName');
  }
  get contactName() {
    return this.signupForm.get('contactName');
  }
  get email() {
    return this.signupForm.get('email');
  }
  get number() {
    return this.signupForm.get('number');
  }
  signUser(item: any) {}
  onSubmit() {
    if (this.signupForm.dirty || this.signupForm.invalid) {
      this.signupForm.reset();
    }
  }

  validateForm() {
    if (this.signupForm.invalid) {
      this.clientName?.markAsTouched();
      this.contactName?.markAsTouched();
      this.number?.markAsTouched();
      this.email?.markAsTouched();
      
    }
    // if (this.names.indexOf(this.newName) === -1) {
    //   this.names.push(this.newName);
    // } else {
    //   alert("Name already exists");
    // }
  }

  select() {
    let code: any = this.signupForm.controls['country'];

    this.getApi.getCountry(code.value.name).subscribe((ressppo) => {
      this.neList = ressppo.countryCode;
      this.code = this.neList;
      console.log(ressppo);
      
  })

  

}
}
