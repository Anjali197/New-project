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
    firstName: new FormControl('', [Validators.required]),
    
    
  });
  get firstName() {
    return this.signupForm.get('firstName');
  }
  signUser(item: any) {}

}
