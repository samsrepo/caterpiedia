import { Component } from '@angular/core';
import { AppRoutes } from './global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appRoutes = AppRoutes;
}
