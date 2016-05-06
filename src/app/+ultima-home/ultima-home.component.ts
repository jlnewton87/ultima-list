import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'ultima-home',
  templateUrl: 'ultima-home.component.html',
  styleUrls: ['ultima-home.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class UltimaHomeComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
