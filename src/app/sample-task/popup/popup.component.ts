import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {

  constructor(){}
  ngOnInit(): void {}

  signupForm = new FormGroup({
    clientName: new FormControl('', [Validators.required]),
    contactName: new FormControl('', [Validators.required])
    
    
  });
  get clientName() {
    return this.signupForm.get('clientName');
  }
  get contactName() {
    return this.signupForm.get('contactName');
  }
  signUser(item: any) {}

}
