import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationAdminComponent } from './information-admin.component';

describe('InformationAdminComponent', () => {
  let component: InformationAdminComponent;
  let fixture: ComponentFixture<InformationAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InformationAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
