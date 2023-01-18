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
      dailyWorkHours: this.validateField(data.dailyWorkHours),
      weeklyWorkHours: this.validateField(data.weeklyWorkHours),
      employeeAddress: this.getFormatedDate(data.employeeAddress),
      aadhaarNumber: data.aadhaarNumber,
      panNumber: data.panNumber,

      buddy: this.getBuddy(data.buddy),
      options: this.getFormatedOptions(data),

      projects: this.validateField(data.projects),
    };
    return this.httpClient.post<any>(this.url, formatedData);
  }

  getFormatedOptions(data: any) {
    let options = [];
    if (data.department) {
      options.push(data.department);
    }
    if (data.designation) {
      options.push(data.designation);
    }
    if (data.gender) {
      options.push(data.gender);
    }
    if (data.probationStatus) {
      options.push(data.probationStatus);
    }
    if (data.probationPeriod) {
      options.push(data.probationPeriod);
    }
    if (data.manager) {
      options.push(data.manager);
    }
    if (data.workStatus) {
      options.push(data.workStatus);
    }
    if (data.employeeType) {
      options.push(data.employeeType);
    }
    return options;
  }

  getFormatedDate(date: string) {
    if (date) {
      const newDate = new Date(date)
        .toLocaleDateString()
        .split('/')
        .reverse()
        .join('/');

      return newDate;
    }
    return;
  }
  validateField(data: string | {}) {
    if (data) {
      return data;
    }
    return;
  }

  getBuddy(buddy: any) {
    if (buddy) {
      return { id: buddy.id };
    }
    return;
  }
}
