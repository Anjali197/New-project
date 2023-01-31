import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { genderTest, SearchResult } from './main/home/api.type';

@Injectable({
  providedIn: 'root',
})
export class ApiCallService {
  url =
    'https://ihospitality-staging.ibsplc.net/ihospitalityretail-service/api/master/airport/search';

  constructor(private http: HttpClient) {}
  getPost() {
    return this.http.get<any>(
      'https://ihospitality-staging.ibsplc.net/ihospitalityretail-service/api/ui/widget-config/search-widget'
    );
  }
  getPlace(data: any) {
    return this.http.post<SearchResult[]>(this.url, data);
  }
  genderUrl = 'http://164.52.200.24:6204/options/get-options/Gender';
  gender() {
    return this.http.get<any>(this.genderUrl);
  }
  emplotypeurl =
    'http://164.52.200.24:6204/options/get-options/Employment Type';
  emplytype() {
    return this.http.get<any>(this.emplotypeurl);
  }
  designtnurl = 'http://164.52.200.24:6204/options/get-options/Designation';
  designation() {
    return this.http.get<any>(this.designtnurl);
  }
  deptnurl = 'http://164.52.200.24:6204/options/get-options/Department';
  department() {
    return this.http.get<any>(this.deptnurl);
  }
  mangrurl = 'http://164.52.200.24:6204/options/get-options/Manager';
  manager() {
    return this.http.get<any>(this.mangrurl);
  }
  proburl = 'http://164.52.200.24:6204/options/get-options/Probation Status';
  probation() {
    return this.http.get<any>(this.proburl);
  }
  probpurl = 'http://164.52.200.24:6204/options/get-options/Probation Period';
  probPeriod() {
    return this.http.get<any>(this.probpurl);
  }
  workurl = 'http://164.52.200.24:6204/options/get-options/Work status';
  work() {
    return this.http.get<any>(this.workurl);
  }
  codeurl = 'http://164.52.200.24:6204/options/get-options/Employee Code';
  empcode() {
    return this.http.get<any>(this.codeurl);
  }
  projurl = 'http://164.52.200.24:6204/options/get-options/Projects';
 project() {
    return this.http.get<any>(this.projurl);
  }

  buddyurl = 'http://164.52.200.24:6204/options/get-options/buddy ';
  buddy() {
    return this.http.get<any>(this.buddyurl);
  }
  

  neornturl = 'http://164.52.200.24:6204/users/emp-code/NE ';
  neOrNt(code: any) {
    return this.http.get<any>(
      'http://164.52.200.24:6204/users/emp-code/' + code
    );
  }
  // getCountry() {
  //   return this.http.get<[any]>(
  //     'https://restcountries.com/v2/all' 
  //   );
  // }
  // getCountryCode() {
  //   return this.http.get<[any]>(
  //     'https://restcountries.eu/rest/v2/all'
  //   );
  // }
  getCountry(code: any) {
    return this.http.get<any>(
      'https://restcountries.com/v2/all' + code
    );
  }
  
}
