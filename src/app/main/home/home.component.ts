import { Component, getPlatform, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/api-call.service';
import { SearchResult, test } from './api.type';
// import{ServService}
// import { ApiCallService } from 'src/app/api-call.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  text = '';
  results: any;

  constructor(private router: Router, private getApi: ApiCallService) {}

  ngOnInit(): void {
    this.getApi.getPost().subscribe((res) => {
      // console.log(res);
      // console.log(res.propertyList);
      this.property = res.propertyList;
      // console.log(res.defaultSearchCriteria.defaultCheckOut );
      this.defaultCheckIn = res.defaultSearchCriteria.defaultCheckIn;
      this.defaultCheckOut = res.defaultSearchCriteria.defaultCheckOut;
      this.adultCount =
        res.defaultSearchCriteria.searchWidgetOriginalConfig.defaultAdultCount;
      this.childCount =
        res.defaultSearchCriteria.searchWidgetOriginalConfig.defaultChildCount;

      // console.log(" this.defaultCheckIn", this.defaultCheckIn);
    });
  }
  search(event: any) {
    console.log('event', event);

    const data = {
      searchKey: event.query,
    };
    this.getApi.getPlace(data).subscribe((respo) => {
      
      this.results = respo;

     respo.forEach((element: SearchResult) => {
        console.log(' element.airportName', element.airportName);

        this.airportName

      });
      console.log(this.airportName)

      console.log(event.data);
      console.log('--------------------');
      console.log(respo);
      console.log('--------------------');
    });
  }
  

  back() {
    this.router.navigateByUrl('/login');
  }

  property: test[] = [];

  defaultCheckIn: any;
  defaultCheckOut: any;
  adultCount: any;
  childCount: any;
  airportName!: string[];
}

// class Manu(){
//   Manu()
// }
