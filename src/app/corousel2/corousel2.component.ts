import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-corousel2',
  templateUrl: './corousel2.component.html',
  styleUrls: ['./corousel2.component.css']
})
export class Corousel2Component implements OnInit {

  @Input() lectures;
  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
