import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDetailComponent } from './character-detail.component';
import { provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CharacterDetailComponent', () => {
  let component: CharacterDetailComponent;
  let fixture: ComponentFixture<CharacterDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideMockStore({})],
      declarations: [CharacterDetailComponent],
      imports: [RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
