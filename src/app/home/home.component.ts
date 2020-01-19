import { Component, OnInit } from '@angular/core';
import { AppRoutes } from '../global';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  appRoutes = AppRoutes;

  constructor() { }

  ngOnInit() {
  }

}
