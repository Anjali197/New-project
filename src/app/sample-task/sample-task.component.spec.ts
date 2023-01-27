import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SampleTaskComponent } from './sample-task.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { TabPanel, TabView } from 'primeng/tabview';
import { Calendar } from 'primeng/calendar';
import { Dropdown } from 'primeng/dropdown';
import { MultiSelect } from 'primeng/multiselect';
import { Toast } from 'primeng/toast';
import { Overlay } from 'primeng/overlay';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { Tooltip } from 'primeng/tooltip';
import { ApiCallService } from '../api-call.service';
import { of } from 'rxjs';

describe('SampleTaskComponent', () => {
  let component: SampleTaskComponent;
  let fixture: ComponentFixture<SampleTaskComponent>;
  let apiCallService: ApiCallService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule,FormsModule,ReactiveFormsModule,InputTextareaModule ],
      providers: [ApiCallService,],
      declarations: [ SampleTaskComponent,SidebarComponent, HeaderComponent ,TabView ,TabPanel,
      Calendar,Dropdown,MultiSelect,Toast,Overlay,Tooltip]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    apiCallService = TestBed.get(ApiCallService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should set genderList when ngOnInit is called', () => {
  //   spyOn(apiCallService, 'gender').and.returnValue(of(['Male', 'Female']));
  //   component.ngOnInit();
  //   expect(component.genderList).toEqual(['Male', 'Female']);
  // });
  it('should return the panCard FormControl', () => {
    let panCardControl = new FormControl();
    spyOn(component.signupForm, 'get').and.returnValue(panCardControl);
    expect(component.panCard).toBe(panCardControl);
});
it('should return the aadharCard FormControl', () => {
  let aadharCardControl = new FormControl();
  spyOn(component.signupForm, 'get').and.returnValue(aadharCardControl);
  expect(component.panCard).toBe(aadharCardControl);
});

});
