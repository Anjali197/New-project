import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
 HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { SampleTaskComponent } from './sample-task.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { TabPanel, TabView, TabViewModule } from 'primeng/tabview';
import { Calendar } from 'primeng/calendar';
import { Dropdown } from 'primeng/dropdown';
import { MultiSelect } from 'primeng/multiselect';
import { Toast } from 'primeng/toast';
import { Overlay } from 'primeng/overlay';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { Tooltip, TooltipModule } from 'primeng/tooltip';
import { SampleTaskService } from './sample-task.service';

describe('SampleTaskComponent', () => {
  let component: SampleTaskComponent;
  let fixture: ComponentFixture<SampleTaskComponent>;
  let SampleTaskService:SampleTaskService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientTestingModule,
        HttpClientModule,
        ReactiveFormsModule,
        InputTextareaModule,
        TabViewModule,
        TooltipModule,
        SampleTaskComponent,
      ],
      declarations: [
        SampleTaskComponent,
        SidebarComponent,
        HeaderComponent,
        TabView,
        TabPanel,
        Calendar,
        Dropdown,
        MultiSelect,
        Toast,
        Overlay,
        Tooltip,
      ],
      providers: [{
        provider: SampleTaskService 
      },]
    }).compileComponents();

    fixture = TestBed.createComponent(SampleTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a sidebar', () => {
    const sidebar = fixture.debugElement.query(By.css('app-sidebar'));
    expect(sidebar).toBeTruthy();
  });

  // it('should have a aadhar',() => {
  //   expect(component.aadharNumber()).toBe();
  // })

  // it('should be ', () => {
  //  const formData = {
  //   "aadharNumber" : 1234567891232
  //  };

  //  component.signupForm.setValue(formData);
  //  component.aadharNumber
  // })

});
