import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Routes} from '@angular/router';

import {UltimaHeaderComponent} from './ultima-header/index';
import {UltimaListComponent} from './+ultima-list/index';
import {UltimaHomeComponent} from './+ultima-home/index';

@Component({
  selector: 'ultima-list-app',
  providers: [],
  templateUrl: 'ultima-list.html',
  styleUrls: ['ultima-list.css'],
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
