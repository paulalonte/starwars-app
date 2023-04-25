import { resetLoading } from './../store/character/character.actions';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private store: Store<AppState>) {
    this.store.dispatch(resetLoading());
  }
}
