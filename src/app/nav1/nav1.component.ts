import { Component, OnInit } from '@angular/core';
import {faUserCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav1',
  templateUrl: './nav1.component.html',
  styleUrls: ['./nav1.component.css']
})
export class Nav1Component implements OnInit {

  profile=faUserCircle;

  constructor() { }

  ngOnInit(): void {
  }

}
