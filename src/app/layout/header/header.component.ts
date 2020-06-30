import {Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'iam-header',
  templateUrl: './header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;

  isShown:boolean = false;
  constructor() { }

  ngOnInit() {
  }
}


