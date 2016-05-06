import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'ultima-list',
  templateUrl: 'ultima-list.component.html',
  styleUrls: ['ultima-list.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class UltimaListComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
