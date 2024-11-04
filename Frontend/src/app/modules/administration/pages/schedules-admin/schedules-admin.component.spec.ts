import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulesAdminComponent } from './schedules-admin.component';

describe('SchedulesAdminComponent', () => {
  let component: SchedulesAdminComponent;
  let fixture: ComponentFixture<SchedulesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SchedulesAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchedulesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
