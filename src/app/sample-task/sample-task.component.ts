import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiCallService } from '../api-call.service';
import { genderTest } from '../main/home/api.type';
// type Gender = { name: string };
@Component({
  selector: 'app-sample-task',
  templateUrl: './sample-task.component.html',
  styleUrls: ['./sample-task.component.scss'],
})
export class SampleTaskComponent {
  genderList!: any;
  employeeType!:any;
  designations!:any;
  constructor(private getApi: ApiCallService) {
    // this.gender = [{ name: 'male' }, { name: 'female' }];
  }
  ngOnInit(): void {
    this.getApi.gender().subscribe((res) => {
      console.log('res', res);
      this.genderList=res;

      // this.genderList = ['male', 'female', 'others'];
    });
    this.getApi.emplytype().subscribe((respo)=>{
console.log('type',respo);
this.employeeType=respo;

    });
    this.getApi.designation().subscribe((resp)=>{
      console.log('des',resp);
      this.designations=resp;
    })
    
  }








  signupForm = new FormGroup({
    fname: new FormControl(''),
    lname: new FormControl(''),
    dob: new FormControl(''),
    selectedCity: new FormControl(''),
  });
  signUser(item: any) {
    console.warn(this.signupForm.value);
  }
  get fname() {
    return this.signupForm.get('fname');
  }
}
