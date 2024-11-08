import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationSidebarComponent } from './information-sidebar.component';

describe('InformationSidebarComponent', () => {
  let component: InformationSidebarComponent;
  let fixture: ComponentFixture<InformationSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InformationSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
