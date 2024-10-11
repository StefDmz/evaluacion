import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoServicePageComponent } from './no-service-page.component';

describe('NoServicePageComponent', () => {
  let component: NoServicePageComponent;
  let fixture: ComponentFixture<NoServicePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoServicePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoServicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
