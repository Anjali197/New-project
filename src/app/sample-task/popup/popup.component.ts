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

  constructor(private getApi: ApiCallService,){}
  ngOnInit(): void {
    this.getApi.getCountry().subscribe((response) => {
      console.log('res', response[0].name);

      this.countries = response;
      console.log(this.countries);
      response.forEach(element => {
        console.log(

          element.name
        );
        
      });
      
    });


  }

  signupForm = new FormGroup({
    clientName: new FormControl('', [Validators.required]),
    contactName: new FormControl('', [Validators.required]),
    designation: new FormControl('' ),
    email: new FormControl('', [Validators.required]),
    country:new FormControl('' ),
    number:new FormControl('', [Validators.required]),
    date:new FormControl('' ),
    address:new FormControl('' ),

    
  });
  get clientName() {
    return this.signupForm.get('clientName');
  }
  get contactName() {
    return this.signupForm.get('contactName');
  }
  signUser(item: any) {}
  

}
