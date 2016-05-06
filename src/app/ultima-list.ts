import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Routes, ROUTER_PROVIDERS} from '@angular/router';

import {UltimaHeaderComponent} from './ultima-header/index';
import {UltimaListComponent} from './+ultima-list/index';
import {UltimaHomeComponent} from './+ultima-home/index';

@Component({
  selector: 'ultima-list-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'app/ultima-list.html',
  styleUrls: ['app/ultima-list.css'],
  directives: [ROUTER_DIRECTIVES, UltimaHeaderComponent],
  pipes: []
})
@Routes([
  {path: '/list', component: UltimaListComponent},
  {path: '/home', component: UltimaHomeComponent}
])
export class UltimaListApp {
  constructor() {

  }
}
