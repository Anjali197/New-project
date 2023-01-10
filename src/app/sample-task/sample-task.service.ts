import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SampleTaskService {
  constructor(private httpClient: HttpClient) {}
  url = 'http://164.52.200.24:6204/users/create';

  signIn(data: any, code: string) {
    let formatedData = {
      firstName: data.firstName,
      lastName: data.lastName,
      employeeCode: code,
      email: data.email,
      phoneNumber: data.phoneNumber,
      joiningDate: this.getFormatedDate(data.joiningDate),
      dateOfBirth: this.getFormatedDate(data.dateOfBirth),
      dailyWorkHours: data.dailyWorkHours,
      weeklyWorkHours: data.weeklyWorkHours,
      employeeAddress: data.employeeAddress,
      aadhaarNumber: data.aadhaarNumber,
      panNumber: data.panNumber,

      buddy: {
        id: data.buddy.id,
      },
      options: this.getFormatedOptions(data),

      projects: data.projects,
    };
    return this.httpClient.post<any>(this.url, formatedData);
  }

  getFormatedOptions(data: any) {
    let options = [];
    options.push(data.department);
    options.push(data.designation);
    options.push(data.gender);
    options.push(data.probationStatus);
    options.push(data.probationPeriod);
    options.push(data.manager);
    options.push(data.workStatus);
    options.push(data.employeeType);
    return options;
  }

  getFormatedDate(date: string) {
    const newDate = new Date(date)
      .toLocaleDateString()
      .split('/')
      .reverse()
      .join('/');

    return newDate;
  }
}
