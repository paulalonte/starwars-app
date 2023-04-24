import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { selectIsFetching } from 'src/app/store/character/character.selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() headerText!: string | undefined;
  isFetching$!: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.isFetching$ = this.store.select(selectIsFetching);
  }
}
