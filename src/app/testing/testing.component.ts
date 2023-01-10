import { Component } from '@angular/core';
import { Validators,FormBuilder } from '@angular/forms';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent {
 
    genderList!: any;
    employeeType!: any;
    designations!: any;
    departments!: any;
    managerList!: any;
    probList!: any;
    probpList!: any;
    workList!: any;
    empcodeLiist!: any;
    projectList!:any;
    buddyList!: any;
    neList!: any;
    code: any = '';
  
    constructor(private getApi: ApiCallService, private fb:FormBuilder) {
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
    submit=false;
    regForm=this.fb.group({
      fname:['',Validators.required]

    })
    get f(){
      return this.regForm.controls;
    }
    onsubmit(){
      this.submit=true;
    }
  
    // signupForm = new FormGroup({
    //   fname: new FormControl('',[Validators.required]),
    //   lname: new FormControl(''),
    //   phone:new FormControl('',[Validators.required, Validators.minLength(10)]),
    //   dob: new FormControl(''),
    //   selectedCity: new FormControl(''),
    //   employeeCode: new FormControl(''),
    // });
    // signUser(item: any) {
    //   console.warn(this.signupForm.value);
    // }
    // get fname() {
    //   return this.signupForm.get('fname');
    // }
  
    // select() {
    //   let code: any = this.signupForm.controls['employeeCode'];
    //   console.log('code', code.value.option);
    //   console.log('code', this.signupForm);
  
    //   this.getApi.neOrNt(code.value.option).subscribe((ressppo) => {
    //     console.log('ne', ressppo);
    //     this.neList = ressppo.data;
    //     this.code = this.neList.replace(/^\D+/g, '');
    //   });
      
    // }
  }
  

