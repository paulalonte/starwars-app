import { Component } from '@angular/core';
import { ROUTE_CONFIG } from './navigation';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  routeConfig = ROUTE_CONFIG;
}
