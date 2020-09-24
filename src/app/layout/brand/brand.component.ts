import {Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'iam-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['brand.component.scss']
})
export class BrandComponent implements OnInit {
  @Input() title: string;

  isShown:boolean = false;
  constructor() { }

  ngOnInit() {
  }
}


