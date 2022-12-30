import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { genderTest, SearchResult } from './main/home/api.type';


@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

url ='https://ihospitality-staging.ibsplc.net/ihospitalityretail-service/api/master/airport/search';

  constructor(private http:HttpClient) { }
  getPost(){
    return this.http.get<any>('https://ihospitality-staging.ibsplc.net/ihospitalityretail-service/api/ui/widget-config/search-widget');
  }
  getPlace(data:any){
    return this.http.post<SearchResult[]>(this.url,data)
  }
  genderUrl = 'http://164.52.200.24:6204/options/get-options/Gender';
  gender(){
    return this.http.get<genderTest>(this.genderUrl)
  }
  emplotypeurl='http://164.52.200.24:6204/options/get-options/Employment Type';
  emplytype(){
    return this.http.get<any>(this.emplotypeurl)
  }
  designtnurl='http://164.52.200.24:6204/options/get-options/Designation';
  designation(){
    return this.http.get<any>(this.designtnurl)
  }

}
