import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule ,HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { SampleTaskComponent } from './sample-task.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { TabPanel, TabView } from 'primeng/tabview';
import { Calendar } from 'primeng/calendar';
import { Dropdown } from 'primeng/dropdown';
import { MultiSelect } from 'primeng/multiselect';
import { Toast } from 'primeng/toast';
import { Overlay } from 'primeng/overlay';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

describe('SampleTaskComponent', () => {
  let component: SampleTaskComponent;
  let fixture: ComponentFixture<SampleTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,HttpClientModule,ReactiveFormsModule,],
      declarations: [ SampleTaskComponent, SidebarComponent  ,HeaderComponent, TabView ,TabPanel,Calendar,Dropdown,MultiSelect,Toast,Overlay,]
    })
    .compileComponents();

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
});
