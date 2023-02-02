import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ApiCallService } from 'src/app/api-call.service';
import { PopupService } from './popup.service';
import { country } from './country.type';
 import {countries} from './countries.type'
 interface countriesWithCode{
  "code":string,
  "name":string
 }
interface countriesCode {
  name: string,
  dial_code: string,
  code: string
}
@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  providers: [MessageService],
})
export class PopupComponent {
  countries: countriesCode[] = country;
  neList: any;
  code: any;
  previousMonth = new Date();
  nextMonth = new Date();
  mobileCode: any;
  selectedCountry: any;
  countryCode: any;
  msgs: any;
  phoneCode:any="+98";
  value= ""
  // countries: any[];
  // newName: any;
  // names: string[] = [];

  constructor(
    private getApi: ApiCallService,
    private signInService: PopupService,
    private messageService: MessageService
  ) {
    this.previousMonth.setMonth(this.previousMonth.getMonth() - 2);
    this.nextMonth.setMonth(this.nextMonth.getMonth() + 1);
  }
  ngOnInit(): void {
   
    // this.getCountry();
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
    // for (let i = 0; i < country.length; i++) {
    //   console.log(country[i]);
    //   this.countries = country[i];
    // }
  }

  signupForm = new FormGroup({
    clientName: new FormControl('', [Validators.required]),
    contactName: new FormControl('', [Validators.required]),
    designation: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    country: new FormControl(''),
    number: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    date: new FormControl(''),
    address: new FormControl(''),
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

  onSubmit() {
    if (this.signupForm.dirty || this.signupForm.invalid) {
      this.signupForm.reset();
    }
  }

  // validateForm() {
  //   // if (this.signupForm.invalid) {
  //   //   this.clientName?.markAsTouched();
  //   //   this.contactName?.markAsTouched();
  //   //   this.number?.markAsTouched();
  //   //   this.email?.markAsTouched();

  //   // }
  //   // if (this.names.indexOf(this.newName) === -1) {
  //   //   this.names.push(this.newName);
  //   // } else {
  //   //   alert("Name already exists");
  //   // }
  // }
  signUser(item: any) {
    if (this.signupForm.valid) {
      console.log('condition success');

      this.signInService.signIn(item, this.neList).subscribe((response) => {
        console.log('results', response);
        console.log('message', response.message);
        this.msgs = response.message;
        console.log(this.msgs);

        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: this.msgs,
        });
      });
    }

    console.log('signupForm', item);

    if (this.signupForm.invalid) {
      this.clientName?.markAsTouched();
      this.contactName?.markAsTouched();
      this.number?.markAsTouched();
      this.email?.markAsTouched();
    }
  }
  changeCode(e:any){
    
    console.log('phonecode', e.value.dial_code); 

  this.phoneCode=e.value.dial_code
 
  
  

   }
  //   select() {
  //     let code: any = this.signupForm.controls['country'];

  //     this.getApi.getCountry(code.value.name).subscribe((ressppo) => {

  //       this.neList = ressppo.countryCode;
  //       this.code = this.neList;
  //       console.log(ressppo);

  //   })

  // }
  // getCountry() {
  //   // make API call to get the list of countries
  //   this.getApi.getCountry().subscribe(data => {
  //     this.countries = data;
  //   });
  // }

  // getCountryCode(event:any) {
  //   // make API call to get the mobile code for the selected country
  //   const countryCode = event.value.mobileCode;
  //   console.log('Selected country code: ', countryCode);
  // }
  // }
}
