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
        .toLocaleDateString()
        .split('/')
        .reverse()
        .join('-');

      return newDate;
    }
    return;
  }
}
