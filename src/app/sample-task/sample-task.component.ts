import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiCallService } from '../api-call.service';
import { genderTest } from '../main/home/api.type';
import { SampleTaskService } from './sample-task.service';
import { MessageService } from 'primeng/api';
// type Gender = { name: string };
@Component({
  selector: 'app-sample-task',
  templateUrl: './sample-task.component.html',
  styleUrls: ['./sample-task.component.scss'],
  providers: [MessageService],
})
export class SampleTaskComponent {
  genderList!: any;
  employeeType!: any;
  designations!: any;
  departments!: any;
  managerList!: any;
  probList!: any;
  probpList!: any;
  workList!: any;
  empcodeLiist!: any;
  projectList!: any;
  buddyList!: any;
  neList!: any;
  code: any = '';


  msgs: any;
  constructor(private getApi: ApiCallService, private signInService:SampleTaskService , private messageService: MessageService,) {
    // this.gender = [{ name: 'male' }, { name: 'female' }];
  }
  ngOnInit(): void {
    this.getApi.gender().subscribe((res) => {
      console.log('res', res);
      this.genderList = res;

      // this.genderList = ['male', 'female', 'others'];
    });
    this.getApi.emplytype().subscribe((respo) => {
      console.log('type', respo);
      this.employeeType = respo;
    });
    this.getApi.designation().subscribe((resp) => {
      console.log('des', resp);
      this.designations = resp;
    });
    this.getApi.department().subscribe((respon) => {
      console.log('dep', respon);
      this.departments = respon;
    });
    this.getApi.manager().subscribe((respn) => {
      console.log('mang', respn);
      this.managerList = respn;
    });
    this.getApi.probation().subscribe((respns) => {
      console.log('prob', respns);
      this.probList = respns;
    });
    this.getApi.probPeriod().subscribe((respp) => {
      console.log('properd', respp);
      this.probpList = respp;
    });
    this.getApi.work().subscribe((ress) => {
      console.log('work', ress);
      this.workList = ress;
    });
    this.getApi.empcode().subscribe((ressp) => {
      console.log('code', ressp);
      this.empcodeLiist = ressp;
    });
    this.getApi.project().subscribe((resspp) => {
      console.log('proj', resspp);
      this.projectList = resspp;
    });

    this.getApi.buddy().subscribe((resspo) => {
      console.log('buddy', resspo);
      this.buddyList = resspo;
    });
    // this.getApi.neOrNt().subscribe((ressppo)=>{
    //   console.log('ne',ressppo);
    //   this.neList=ressppo;
    // })
  }

  signupForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    dateOfBirth: new FormControl(''),
    gender: new FormControl(''),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    joiningDate: new FormControl(''),
    employeeAddress: new FormControl(''),
    employeeType: new FormControl(''),
    designation: new FormControl(''),
    department: new FormControl(''),
    projects: new FormControl(''),
    buddy: new FormControl(''),
    manager: new FormControl(''),
    probationStatus: new FormControl(''),
    probationPeriod: new FormControl(''),
    workStatus: new FormControl(''),
    salary: new FormControl(''),
    dailyWorkHours: new FormControl(''),
    weeklyWorkHours: new FormControl(''),
    aadharNumber: new FormControl('', [
  
      Validators.minLength(13),
    ]),
    panCard: new FormControl('', [
      
      Validators.minLength(10),
    ]),
    employeeCode: new FormControl('',[Validators.required]),
  });
 
  get firstName() {
    return this.signupForm.get('firstName');
  }
  get lastName() {
    return this.signupForm.get('lastName');
  }
  get phoneNumber() {
    return this.signupForm.get('phoneNumber');
  }
  get email() {
    return this.signupForm.get('email');
  }
  get aadharNumber() {
    return this.signupForm.get('aadharNumber');
  }
  get panCard() {
    return this.signupForm.get('panCard');
  }
  onSubmit() {
    if (this.signupForm.valid) {
      this.signupForm.reset();
    }
  }
  select() {
    let code: any = this.signupForm.controls['employeeCode'];

    this.getApi.neOrNt(code.value.option).subscribe((ressppo) => {
      this.neList = ressppo.data;
      this.code = this.neList.replace(/^\D+/g, '');
    });
  }

  signUser(item: any) {
    
    if(this.signupForm.valid){

      this.signInService.signIn(item,this.neList).subscribe((response)=>{
        console.log('results', response);
        console.log('message',response.message);
        this.msgs =response.message
        console.log(this.msgs);
  
  
  
        this.messageService.add({
          
          severity: 'success',
          summary: 'Success',
          detail: this.msgs,
      }); 
        
      })
    }
    
    console.log('signupForm', item);
  }
  validateForm() {
    if (this.signupForm.invalid) {
      this.firstName?.markAsTouched();
      this.lastName?.markAsTouched();
      this.phoneNumber?.markAsTouched();
      this.email?.markAsTouched();
      this.aadharNumber?.markAsTouched();
      this.panCard?.markAsTouched();
    }
    
      
    
      
    
    
    // alert(this.message);
  }
  


  
}
