import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworldComponent } from './homeworld.component';

describe('HomeworldComponent', () => {
  let component: HomeworldComponent;
  let fixture: ComponentFixture<HomeworldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeworldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeworldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
