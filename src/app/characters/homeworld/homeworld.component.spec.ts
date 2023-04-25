import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworldComponent } from './homeworld.component';
import { provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('HomeworldComponent', () => {
  let component: HomeworldComponent;
  let fixture: ComponentFixture<HomeworldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideMockStore({})],
      declarations: [HomeworldComponent],
      imports: [RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeworldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
