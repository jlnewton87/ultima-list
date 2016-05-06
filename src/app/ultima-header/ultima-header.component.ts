import {Component, OnInit, Inject} from '@angular/core';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from '@angular/router';
import {HeaderLink} from '../model/index';

@Component({
  moduleId: module.id,
  selector: 'ultima-header',
  templateUrl: 'ultima-header.component.html',
  styleUrls: ['ultima-header.component.css'],
  directives: [ROUTER_DIRECTIVES],
  inputs: ['currentLink']
})
export class UltimaHeaderComponent {
  constructor() {

  }
  links: HeaderLink[] = [
    new HeaderLink("Home", "/home"),
    new HeaderLink("Lists", "/list")
  ];
  currentLink(): string {
    return "Home";
  };
}
