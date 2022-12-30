import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleTaskComponent } from './sample-task.component';

describe('SampleTaskComponent', () => {
  let component: SampleTaskComponent;
  let fixture: ComponentFixture<SampleTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
