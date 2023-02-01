import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  constructor(private httpClient: HttpClient) {}
  url = 'http://localhost:9093/client/create';

  signIn(data: any, code: string) {
    let formatedData = {
      clientName: data.clientName,
      contactPerson: data.contactName,
      onBoardingDate: this.getFormatedDate(data.date),
      email: data.email,

      // designation:data.designation,
      // country:data.country.name,
      contactNumber: data.number,
      // address:data.address
    };
    return this.httpClient.post<any>(this.url, formatedData);
  }
  getFormatedDate(date: Date) {
    if (date) {

      
      const newDate = new Date(date)
    
    let  month = '' + (newDate.getMonth() + 1);
    let  day = '' + newDate.getDate();
     let year = newDate.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year, month, day].join('-');
}
    return;
  }
}
